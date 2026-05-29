## Why

Configuring a CLI tool today requires manually typing a command name, args, and label — friction that prevents first-time users from getting started quickly. Because Electron doesn't inherit the shell's full `PATH` (NVM, Homebrew, etc.), even users who type the right command may find it doesn't resolve at runtime.

## What Changes

- **Shell PATH loading** — the Electron main process spawns a login shell at startup to capture the user's full `PATH`, ensuring tools installed via NVM, Homebrew, pyenv, or similar are resolvable.
- **Known-tool detection** — at startup, the app checks which known AI CLI tools (`claude`, `aider`, `gh` with Copilot extension, etc.) are present on the resolved `PATH`.
- **Detection-first config screen** — the Settings sheet replaces the blank "Add Tool" form with a dropdown of detected tools. Selecting one auto-populates label, command, and args. Manual entry remains available for unlisted tools.
- **Persisted detection results** — detected tools are stored in app state so the dropdown is populated immediately on re-open without re-scanning.

## Capabilities

### New Capabilities
- `shell-path-detection`: Load the user's full login-shell `PATH` in the Electron main process and expose it to the renderer via IPC.
- `ai-cli-tool-detection`: Given the resolved `PATH`, probe for a known set of AI CLI tools and return which ones are available with their pre-configured label/command/args defaults.

### Modified Capabilities
- `cli-tool-manager`: Config screen gains a "Detected tools" dropdown as the primary add path; selecting a tool pre-fills the form. Manual entry remains for custom tools.

## Impact

- `src/main/index.ts` — shell PATH resolution and tool detection logic, new IPC handlers
- `src/preload/index.ts` — expose `detectCliTools` IPC bridge
- `src/renderer/renderer.d.ts` — type the new preload API
- `src/renderer/SettingsSheet.tsx` — replace blank add-form with detected-tools dropdown
- `src/shared/types.ts` — add `DetectedTool` type
