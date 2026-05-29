## Why

The current CLI invocation uses plain `child_process.spawn` with stdin immediately closed, forwarding stdout/stderr as stripped text lines — so ANSI formatting is lost, interactive prompts are ignored, and users have no way to respond when the AI tool asks a follow-up question mid-run. xterm.js + node-pty gives a real pseudo-terminal, preserving rich output and enabling bidirectional interaction.

## What Changes

- Replace `child_process.spawn` with `node-pty` in the main process so the CLI tool runs in a real PTY
- Replace the plain-text log `<div>` in `NewProposalSheet` with an `xterm.js` terminal widget that renders ANSI colour and cursor movement
- Wire keyboard input from the xterm widget through to the running PTY process so the user can respond to prompts or correct mistakes mid-session
- **BREAKING**: The `cli:output` IPC event (line-by-line strings) is replaced by a binary `cli:data` channel carrying raw PTY bytes; `cli:write` now forwards raw keystrokes to the PTY

## Capabilities

### New Capabilities
- `cli-terminal-session`: Full-featured in-app terminal session — xterm.js renderer in the renderer process, node-pty backend in the main process, bidirectional data stream over IPC, resize support

### Modified Capabilities
- `cli-tool-manager`: Invocation now requires the user be able to send follow-up input during a running session, and the terminal is resizable; tool config and registration requirements are otherwise unchanged

## Impact

- `src/main/index.ts`: `cli:invoke`, `cli:cancel`, and `cli:write` handlers rewritten around `node-pty`; new `cli:resize` handler added
- `src/preload/index.ts`: IPC bindings updated to expose `cli.write`, `cli.resize`, `cli.onData` (replaces `cli.onOutput`)
- `src/shared/types.ts`: IPC payload types updated
- `src/renderer/NewProposalSheet.tsx`: output log div replaced with xterm.js `<Terminal>` component
- New renderer-side component: `TerminalPane` wrapping xterm.js with fit addon and resize observer
- New dependencies: `node-pty` (native — requires Electron rebuild), `@xterm/xterm`, `@xterm/addon-fit`
