## Context

Electron apps launched from the macOS Dock or Finder do not inherit the user's login-shell `PATH`. Tools installed via Homebrew, NVM, pyenv, etc. are therefore invisible to `pty.spawn`. The current `cli:invoke` handler passes `process.env` directly to node-pty, which means Claude Code or any other tool not on the system-default `PATH` silently fails to spawn.

Separately, first-run configuration requires the user to type a CLI tool's name, command, and args from memory — friction that we can largely eliminate by probing for known tools.

## Goals / Non-Goals

**Goals:**
- Resolve the full login-shell `PATH` and use it for all PTY spawns
- Detect which known AI CLI tools are installed and surface them as quick-add options in Settings
- Replace the blank "Add Tool" form with a "Detected tools" dropdown that pre-fills the form on selection
- Keep manual entry available as a fallback for unlisted or custom tools

**Non-Goals:**
- Detecting tools installed in non-standard ways that can't be found via `PATH` lookup
- Auto-adding tools to prefs without user action (user must still confirm)
- Supporting Windows shell resolution (macOS/Linux only for now)

## Decisions

### 1. Shell PATH resolution via login-shell invocation

**Decision:** On app startup, spawn `$SHELL -lc 'printf "%s" "$PATH"'` with a timeout, capture stdout, and store it as `resolvedPath`. Use this value as the `PATH` entry in the `env` object passed to every `pty.spawn` call.

**Why:** This is the idiomatic approach for Electron apps on macOS. A login shell (`-l`) sources `.zprofile`, `.bash_profile`, etc., which is where Homebrew and NVM register themselves. `printf` is used instead of `echo` to avoid a trailing newline edge case.

**Alternative considered:** The `fix-path` npm package does the same thing but adds an external dependency for ~10 lines of logic. Inlining is preferable.

**Fallback:** If the shell probe fails (timeout, non-zero exit, no output), fall back to `process.env.PATH` so the app stays functional.

### 2. Lazy detection with session cache

**Decision:** Detection runs the first time the Settings sheet opens (on `cli:detectTools` IPC call), not on app startup. Results are cached in a module-level variable for the process lifetime.

**Why:** Detection involves probing multiple executables (`which claude`, `which aider`, etc.) which is fast but not free. Startup is not the right place for this — the user may never open Settings. Caching avoids re-probing on every settings open.

### 3. Detection via `which` subprocess

**Decision:** For each known tool entry, run `which <command>` with the resolved `PATH` injected into the environment. If `which` exits 0, the tool is available.

**Why:** `which` is POSIX-standard and works correctly with a custom `PATH`. The alternative of iterating `PATH` segments with `existsSync` is equivalent but longer.

### 4. Known-tool registry as a static array in main process

**Decision:** Maintain a hardcoded `KNOWN_TOOLS` array in `main/index.ts`:
```
{ id, label, command, args, docsUrl? }
```
Each entry is the fully-configured default for that tool (label, command, args template with `{command}`).

**Why:** A static registry is simple, diffable, and easy to extend. It doesn't need to be user-configurable — the user can still edit the populated form before saving.

Initial registry: `claude` (Claude Code), `aider`, `gh` (GitHub Copilot CLI extension).

### 5. SettingsSheet UI: dropdown replaces primary "Add Tool" path

**Decision:** When Settings opens, trigger detection. While detecting, show a small loading state. Once resolved, show a "Quick add" select (using the existing `Select` component) listing detected tools with a placeholder "Detected tools…". Selecting one populates the add-form fields and opens the form inline. Manual entry is still reachable via "Enter manually" option at the bottom of the select, or if the dropdown has no detected tools.

**Why:** Surfacing detected tools upfront removes the need to know the correct command/args. Users who already have tools configured skip this entirely (dropdown only appears in the "add new tool" context).

## Risks / Trade-offs

- **Shell probe latency** → Runs async before the window shows (or in parallel); 200–500 ms worst case. Mitigation: fire-and-forget at `app.whenReady()` so it's usually done before the user opens Settings.
- **Non-standard shell configs** → Users with unusual setups (fish shell, custom `PATH` mutations in `.zshrc` rather than `.zprofile`) may still have PATH issues. Mitigation: document fallback to manual entry; this is a known Electron limitation.
- **`which` not available** → Extremely rare on macOS/Linux. Mitigation: catch `ENOENT`, treat as "not found".
- **Static registry becomes stale** → New tools won't be detected until the registry is updated. Mitigation: this is acceptable MVP behaviour; the manual-entry fallback always works.
