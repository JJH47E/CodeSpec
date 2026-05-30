## Context

The app currently validates that a selected directory contains an `openspec/` folder on open (main process `repo:openDirectory` returns `{ error: 'not-openspec-repo' }`) and renders a static error string in `RepoSelectorScreen`. There is no path for the user to initialize OpenSpec from within the app.

The onboarding flow must guide users through: understanding OpenSpec → installing the npm package → running `openspec init` → registering a CLI tool → running `openspec baseline` via that tool. All terminal steps use the existing PTY infrastructure.

## Goals / Non-Goals

**Goals:**
- Replace the dead-end error with a guided multi-step wizard for uninitialized projects
- Reuse existing PTY-backed terminal, CLI tool detection, and tool-registration infrastructure
- On abandonment, cleanly deselect the project and return to the repo-selector empty state
- Keep onboarding entirely in-process (no new IPC channels required)

**Non-Goals:**
- Auto-installing npm or Node.js (user is expected to have them)
- Managing npm versions or resolving conflicts
- Onboarding for projects that are already initialized
- Syncing onboarding state across machines or persisting partial progress

## Decisions

### 1. Where does onboarding state live?

**Decision:** `App.tsx` holds a `pendingOnboardingPath: string | null` state alongside `repoPath`. When a non-initialized directory is selected, `pendingOnboardingPath` is set (not `repoPath`) and `<OnboardingWizard>` is rendered instead of the shell or `RepoSelectorScreen`.

**Alternative considered:** A modal sheet layered on top of `RepoSelectorScreen`. Rejected because the wizard needs full-viewport focus and must prevent the user from interacting with the underlying empty state mid-flow.

**Alternative considered:** Routing (react-router). Rejected as overkill for three top-level screens.

### 2. How does `handleOpenRepo` signal an uninitialized directory?

**Decision:** The main process `repo:openDirectory` IPC handler already returns `{ error: 'not-openspec-repo' }` for uninitialized dirs. `App.tsx`'s `handleOpenRepo` checks for this specific error code, captures the selected path from the result, and calls a new `handleBeginOnboarding(path)` instead of displaying the error string.

This avoids modifying the IPC contract. The preload bridge already exposes the raw result — `App.tsx` just consumes it differently.

**Note:** The main process must also return the selected `path` alongside the `error` field so `App.tsx` knows which directory to onboard. Currently it returns only `{ error: 'not-openspec-repo' }` — this needs to change to `{ error: 'not-openspec-repo', path: string }`.

### 3. Terminal steps — inline PTY vs. system terminal

**Decision:** Terminal steps (npm install, openspec init, baseline generation) use the existing xterm.js + PTY infrastructure already in place for CLI invocations. Each terminal step inside the wizard is a self-contained `<TerminalPane>`-style component that shows command output and resolves when the process exits with code 0 (success) or non-zero (failure with retry prompt).

**Alternative considered:** Showing a code block with a copyable command for the user to run manually in their own terminal. Rejected because it breaks the guided flow and removes the ability to detect success/failure.

### 4. CLI tool registration inside onboarding

**Decision:** The onboarding wizard does NOT embed the full `SettingsSheet` for tool registration. Instead, the "Install CLI tool" step runs auto-detection via `cli:detectTools` and presents a simplified inline picker. If a tool is detected, the user confirms and it is saved to prefs. If none are detected, the user manually enters a command. After the onboarding completes, the tool appears in Settings as normal.

**Rationale:** Embedding a full sheet inside a wizard creates confusing navigation. The simplified inline form satisfies the onboarding use case (register one default tool) without duplicating all settings UI.

### 5. Monorepo support in the init step

**Decision:** The init step asks the user to choose "Single app" or "Monorepo" before running. For monorepos, the wizard scans the selected root for sub-directories containing `package.json` files and presents them as a checklist. `openspec init` is then run sequentially per selected package. The main process can use `fs.readdirSync` for discovery — no new IPC channel needed since the wizard invokes init via PTY (one PTY session per package).

**Alternative considered:** Always running `openspec init --monorepo` with a flag. Rejected because the openspec CLI may not support that flag and the explicit package selection gives users clear control.

### 6. Proposal how-to step

**Decision:** After baseline generation, the wizard shows a static how-to step that explains the create-proposal → apply-proposal workflow using annotated screenshots or illustrated steps (static content, no interactivity). It acts as the final "congratulations" screen before finishing. This avoids the complexity of an interactive tutorial while still orienting new users to the core workflow.

### 7. Step sequencing and abandonment

The wizard progresses linearly through six steps: Welcome → Install npm package → Initialize project (single or monorepo) → Set up CLI tool → Generate baseline → Proposal how-to. Each step has a "Back" / "Cancel" affordance. Clicking cancel at any step triggers an `onAbandon` callback in `App.tsx` that clears `pendingOnboardingPath` and renders `RepoSelectorScreen` — identical to first-launch state.

## Risks / Trade-offs

- **PTY process failure mid-step** → The wizard shows step-level error state with a "Retry" button; the process is re-spawned on retry. The user can also abandon and start over.
- **npm not available on PATH** → The npm install step will fail in the terminal. The wizard detects a non-zero exit and shows an error with a "Retry" button. The user must resolve npm availability themselves; we do not attempt to install it.
- **`openspec init` modifying unexpected files** → This is an `openspec` CLI concern, not ours. We surface the terminal output so the user can see what changed.
- **Partial completion (app crash mid-wizard)** → Because `pendingOnboardingPath` is in-memory only, a restart loses progress and shows the repo-selector empty state. This is acceptable for v1; the user reopens the now-partially-initialized directory and the wizard resumes from whatever state openspec init left the filesystem in.
