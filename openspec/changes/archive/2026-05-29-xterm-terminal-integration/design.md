## Context

The app currently spawns CLI processes with `child_process.spawn` using plain stdio pipes. stdin is immediately closed (no interactivity), and stdout/stderr are split on newlines and forwarded as individual string events over IPC. The renderer accumulates these lines in a styled `<div>`. This works for simple one-shot tools but fails for AI CLIs like Claude Code because:

1. Many CLIs detect whether stdout is a TTY and disable ANSI formatting when it isn't — output looks like stripped plain text
2. Interactive prompts ("Are you sure? y/n", "Clarify your intent:") are never presented to the user
3. Control sequences that move the cursor or clear lines produce garbled output if they even arrive

The fix is a two-layer change: swap `child_process.spawn` for `node-pty` in the main process, and swap the text-log div for an `xterm.js` terminal widget in the renderer.

## Goals / Non-Goals

**Goals:**
- Full PTY execution so CLI tools see a real terminal and emit ANSI-formatted output
- ANSI rendering via xterm.js (colours, bold, cursor movement, clearing)
- Bidirectional: user keystrokes in the xterm widget are forwarded to the PTY stdin
- Terminal column/row resize kept in sync with the widget's DOM dimensions
- Existing CLI tool config (registration, editing, default selection) is untouched

**Non-Goals:**
- Multiple concurrent terminal sessions / tabs
- Persistent scrollback history across app restarts
- Custom shell profiles or login environments
- Windows support in this iteration (node-pty Windows build is a separate effort)

## Decisions

### D1 — node-pty for PTY allocation
`child_process.spawn` cannot allocate a pseudo-terminal; `node-pty` is the standard Electron/Node solution and is already used in projects like VS Code's integrated terminal. Alternatives: `node-pty-prebuilt-multiarch` (identical API, different binary distribution) — keep as a fallback if native rebuild proves difficult.

### D2 — Raw binary data stream over IPC (`cli:data`) instead of line-based events (`cli:output`)
xterm.js `terminal.write()` expects raw VT bytes including multi-byte control sequences. Splitting on `\n` corrupts sequences that span a newline boundary, and drops sequences that have no newline. The IPC event now carries the raw chunk string as emitted by `node-pty`'s `onData` callback.

### D3 — `TerminalPane` component wraps all xterm.js concerns
A single `TerminalPane` component owns the xterm `Terminal` instance, mounts it into a `useRef` div, attaches the `FitAddon`, and observes container resize via `ResizeObserver`. This keeps `NewProposalSheet` free of xterm lifecycle details.

### D4 — IPC surface changes minimally
- `cli:invoke` — same call signature, now PTY-backed; returns `{ exitCode }` as before
- `cli:cancel` — unchanged
- `cli:write` — unchanged name, now forwards raw PTY bytes (was forwarding text to a closed stdin)
- `cli:resize` — new handler; accepts `{ cols, rows }` and calls `ptyProcess.resize()`
- `cli:output` event → `cli:data` event (raw string chunks, not line-split strings)

### D5 — electron-rebuild in the dev/build pipeline
`node-pty` is a native addon; it must be compiled against the exact Electron version in use. `@electron/rebuild` is added as a `devDependency` and run as a `postinstall` script. The packager config (`electron-builder.yml` or equivalent) must include `node-pty` in the `extraResources` or `asar.unpack` list so the `.node` binary is accessible at runtime.

## Risks / Trade-offs

- **Native module rebuild complexity** → Mitigation: `postinstall` hook + CI step; document the one-time `npx electron-rebuild` step in the README
- **PTY on macOS Sequoia / SIP** → No known issues; node-pty has been shipping on macOS for years. Monitor for Gatekeeper quarantine on first run in a packaged app.
- **IPC throughput for verbose output** → Raw PTY data is sent as-is per chunk; for extremely chatty tools this is many small IPC messages. If perf becomes an issue, batch chunks with a short debounce (≤ 16 ms). Not needed upfront.
- **xterm.js bundle size** → `@xterm/xterm` adds ~150 KB gzipped to the renderer bundle. Acceptable for an Electron app.

## Migration Plan

1. Install `node-pty` (main) and `@xterm/xterm`, `@xterm/addon-fit` (renderer); add `@electron/rebuild` as devDep
2. Add `postinstall` script; rebuild native modules
3. Update `src/main/index.ts`: replace `spawn`-based handlers with node-pty equivalents
4. Update `src/preload/index.ts`: replace `cli.onOutput` with `cli.onData`; expose `cli.resize`
5. Update `src/renderer/renderer.d.ts`: update type declarations
6. Create `src/renderer/TerminalPane.tsx`
7. Update `src/renderer/NewProposalSheet.tsx`: swap the log `<div>` for `<TerminalPane>`
8. Smoke-test with a registered Claude Code invocation end-to-end
