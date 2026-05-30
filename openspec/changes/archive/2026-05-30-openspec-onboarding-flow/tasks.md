## 1. App State & IPC Changes

- [x] 1.1 Update `repo:openDirectory` IPC handler in `src/main/index.ts` to return `{ error: 'not-openspec-repo', path: string }` (include the selected path alongside the error)
- [x] 1.2 Add `pendingOnboardingPath: string | null` state to `App.tsx`
- [x] 1.3 Update `handleOpenRepo` in `App.tsx` to detect the `not-openspec-repo` error, capture the returned path, and call a new `handleBeginOnboarding(path)` instead of returning an error string
- [x] 1.4 Add `handleBeginOnboarding(path)` in `App.tsx` that sets `pendingOnboardingPath` and clears `repoPath`
- [x] 1.5 Add `handleAbandonOnboarding()` in `App.tsx` that clears `pendingOnboardingPath` (returns to `RepoSelectorScreen`)
- [x] 1.6 Add `handleCompleteOnboarding(path)` in `App.tsx` that clears `pendingOnboardingPath`, sets `repoPath`, and persists to prefs
- [x] 1.7 Wire the three-way render in `App.tsx`: `loading` → null, `pendingOnboardingPath` → `<OnboardingWizard>`, no repoPath → `<RepoSelectorScreen>`, else → shell

## 2. Onboarding Wizard Shell

- [x] 2.1 Create `src/renderer/OnboardingWizard.tsx` with props: `projectPath`, `prefs`, `onPrefsChange`, `onComplete`, `onAbandon`
- [x] 2.2 Implement step state machine: `welcome | npm-install | init | cli-tool | baseline | how-to` with `currentStep` state
- [x] 2.3 Implement a step indicator component showing all six steps with current/complete/pending states
- [x] 2.4 Add a shared "Cancel" / "Back to project selector" affordance visible on all steps that calls `onAbandon`
- [x] 2.5 Style the wizard as a centred card on the app background (`var(--bg-app)`) consistent with `RepoSelectorScreen`

## 3. Welcome Step

- [x] 3.1 Implement the welcome step panel: OpenSpec description copy, summary of the six setup steps, and "Get Started" button
- [x] 3.2 Clicking "Get Started" advances to the `npm-install` step

## 4. npm Install Step

- [x] 4.1 Implement the npm-install step panel with a "Install" button that spawns `npm install -g openspec` via PTY
- [x] 4.2 Embed an xterm.js terminal widget within the step to stream PTY output (reuse `TerminalPane` or extract a shared `EmbeddedTerminal` component)
- [x] 4.3 Detect process exit code 0 → enable "Continue" button; non-zero → show error state with "Retry" button

## 5. Init Step (Single App & Monorepo)

- [x] 5.1 Implement the init step panel with a repo-type selector: "Single app" vs "Monorepo" radio/toggle
- [x] 5.2 For monorepo: scan the project root for sub-directories containing `package.json` via a new `repo:listPackages` IPC handler in `src/main/index.ts`; display results as a checklist
- [x] 5.3 For single-app: spawn `openspec init` in the project root via PTY and stream output
- [x] 5.4 For monorepo: run `openspec init` sequentially in each checked sub-package directory, streaming output per run (one PTY session per package)
- [x] 5.5 On all-success (exit 0 for all runs): enable "Continue"; on any failure: show error state with "Retry"

## 6. CLI Tool Step

- [x] 6.1 Implement the CLI tool step panel; on mount call `cli:detectTools` and show a loading state while detection runs
- [x] 6.2 If tools detected: render a simple picker (tool name + command preview) pre-selecting the first detected tool; show "Add Tool" button
- [x] 6.3 If no tools detected: render a minimal manual form with label, command, and args fields (validate {command} placeholder) and "Add Tool" button
- [x] 6.4 On "Add Tool": save the tool to `prefs.cliTools` and set it as `prefs.defaultTool` via `onPrefsChange`; advance to baseline step
- [x] 6.5 Add a "Skip for now" link that advances to baseline step without registering a tool (baseline step will be skipped)

## 7. Baseline Step

- [x] 7.1 Implement the baseline step panel; if no CLI tool was registered, show a skipped-state UI explaining how to run baseline later
- [x] 7.2 If a tool was registered: invoke it with the `openspec baseline` command via PTY in the project root and stream output in the embedded terminal
- [x] 7.3 Detect process exit 0 → enable "Continue"; non-zero → show error state with "Retry" and a "Skip" link to proceed without a baseline

## 8. Proposal How-To Step

- [x] 8.1 Implement the how-to step as a static informational panel: illustrate the create-proposal → review → apply cycle with short annotated steps
- [x] 8.2 Add a "Finish" button that calls `onComplete(projectPath)`; this triggers `handleCompleteOnboarding` in `App.tsx` which loads the project into the main shell

## 9. Tests & Cleanup

- [x] 9.1 Remove the static inline error display from `RepoSelectorScreen` (the error that previously said "Selected directory does not contain an openspec/ folder")
- [x] 9.2 Verify the full happy path end-to-end: open uninitialized dir → complete all steps → land in main shell with project loaded
- [x] 9.3 Verify abandonment at each step returns to `RepoSelectorScreen` with no repo loaded
- [x] 9.4 Verify that a previously loaded repo is NOT restored after abandonment
