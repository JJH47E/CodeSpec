## Why

The CodeSpec app currently has a scaffold but no working screens. Users need a GUI that surfaces OpenSpec changes for a chosen repository and acts as a front-end for their AI coding CLI (Claude Code, Copilot CLI, etc.) — giving the AI-driven spec workflow a visual home without requiring terminal access.

## What Changes

- Add a repository-selection screen that prompts the user to open a local git directory on first launch (or when no repo is loaded)
- Parse the `openspec/changes/` directory of the selected repo and present active and archived changes
- Add a CLI-tool configuration panel where the user registers their AI CLI tools (command, name, invocation template)
- Add a "New Proposal" flow that sends a natural-language description to the configured AI CLI tool (e.g. `claude -p "/opsx:propose \"...\""`) rather than calling OpenSpec directly
- Replace the placeholder App shell with a real three-panel layout: sidebar (change list), main pane (change detail), header (repo selector + actions)
- Applying / implementing proposals is **out of scope** for this change

## Capabilities

### New Capabilities

- `repository-selector`: Open a local directory via OS file-picker, validate that it contains an `openspec/` folder, persist the last-opened path, and surface a "no repo loaded" empty state
- `change-browser`: Read `openspec/changes/<name>/.openspec.yaml` + `proposal.md` from disk, classify changes as active or archived, and render them in a filterable sidebar list with a detail pane
- `cli-tool-manager`: Let the user register one or more AI CLI tools (name, executable command, OpenSpec invocation template). Persist configuration globally. Surface a picker when multiple tools are configured and allow a default to be set.
- `proposal-creator`: Launch a "New Proposal" flow that captures a natural-language description, dispatches it to the active AI CLI tool via the tool's configured invocation template, streams the output in a progress panel, and refreshes the change list on completion

### Modified Capabilities

_(none — no existing specs)_

## Impact

- **Electron main process**: IPC handlers for `dialog:openDirectory`, `fs:readChangeList`, `cli:invoke` (spawns the configured CLI tool), `prefs:get/set` (persisted config)
- **Renderer**: new screens/views consuming the above IPC channels; a streaming output panel for CLI output
- **Design system**: uses existing tokens and component library — no new tokens needed
- **Dependencies**: `node-pty` required for streaming CLI output with proper TTY emulation; no renderer-side terminal emulator needed for this initial change (output rendered as plain streamed text)
