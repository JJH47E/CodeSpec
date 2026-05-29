## 1. Shell PATH Resolution

- [x] 1.1 Add `resolveShellPath()` async function in `src/main/index.ts` that spawns `$SHELL -lc 'printf "%s" "$PATH"'` with a 3s timeout and returns the PATH string (or falls back to `process.env.PATH`)
- [x] 1.2 Call `resolveShellPath()` at `app.whenReady()` and store the result in a module-level `resolvedPath` variable
- [x] 1.3 Update the `cli:invoke` handler to pass `{ ...process.env, PATH: resolvedPath }` as the `env` to `pty.spawn`

## 2. Known-Tool Registry & Detection IPC

- [x] 2.1 Add `KNOWN_TOOLS` static array in `src/main/index.ts` with entries for Claude Code (`claude`, `-p {command}`), Aider (`aider`, `--message {command}`), and GitHub Copilot CLI (`gh`, `copilot suggest -s {command}`)
- [x] 2.2 Add `detectTools()` function that runs `which <command>` (with `PATH: resolvedPath`) for each entry in `KNOWN_TOOLS` and returns matched entries as `DetectedTool[]`
- [x] 2.3 Add module-level `detectionCache: DetectedTool[] | null = null` and wrap `detectTools()` so it returns the cache on subsequent calls
- [x] 2.4 Register `ipcMain.handle('cli:detectTools', ...)` that calls `detectTools()` and returns the result

## 3. Types & Preload Bridge

- [x] 3.1 Add `DetectedTool` interface to `src/shared/types.ts` with fields: `id`, `label`, `command`, `args: string[]`
- [x] 3.2 Expose `cli.detectTools: () => Promise<DetectedTool[]>` in `src/preload/index.ts` via `ipcRenderer.invoke('cli:detectTools')`
- [x] 3.3 Update `src/renderer/renderer.d.ts` to add `detectTools` to the `cli` type block

## 4. Settings Sheet UI

- [x] 4.1 Add a `useEffect` in `SettingsSheet` that calls `window.api.cli.detectTools()` on mount and stores results in `detectedTools` state (with `detecting: boolean` for loading state)
- [x] 4.2 Replace the bare "Add Tool" button with a "Quick add" `Select` dropdown that lists detected tools by label plus an "Enter manually" option; only show the dropdown when `!adding && editingId === null`
- [x] 4.3 When a detected tool is selected from the dropdown, open the add form pre-filled with that tool's label, command, and `args.join(' ')`
- [x] 4.4 When "Enter manually" is selected, open the add form empty (existing behavior)
- [x] 4.5 Show a spinner/loading label in the dropdown while `detecting === true`
- [x] 4.6 Fall back to showing the plain "Add Tool" button (no dropdown) when detection is complete and `detectedTools` is empty
