## 1. Dependencies & Build Setup

- [x] 1.1 Install `node-pty` as a main-process dependency and `@xterm/xterm`, `@xterm/addon-fit` as renderer dependencies
- [x] 1.2 Add `@electron/rebuild` as a devDependency and a `postinstall` script that runs `electron-rebuild`
- [x] 1.3 Configure the packager (electron-builder) to unpack `node-pty`'s `.node` binary from the asar archive so it loads at runtime
- [x] 1.4 Verify `npm install` completes and the native addon loads by running `npx electron-rebuild`

## 2. Main Process — PTY Backend

- [x] 2.1 Import `node-pty` in `src/main/index.ts` and replace the `ChildProcess` type / `activeProcess` variable with the `IPty` type from node-pty
- [x] 2.2 Rewrite the `cli:invoke` IPC handler to use `pty.spawn()` with the resolved command, args, cwd, cols/rows from the call options, and `env: process.env`
- [x] 2.3 Forward PTY output by replacing the `proc.stdout.on('data')` / `proc.stderr.on('data')` forwarding loop with `pty.onData(data => event.sender.send('cli:data', data))`
- [x] 2.4 Handle process exit via `pty.onExit(({ exitCode }) => resolve({ exitCode }))` and clear `activeProcess`
- [x] 2.5 Update the `cli:cancel` handler to call `activeProcess.kill()` on the `IPty` instance
- [x] 2.6 Update the `cli:write` handler to call `activeProcess.write(text)` (was `stdin.write`)
- [x] 2.7 Add a `cli:resize` IPC handler that calls `activeProcess.resize(cols, rows)` when the terminal widget reports a size change

## 3. Preload — IPC Bridge

- [x] 3.1 In `src/preload/index.ts`, replace `cli.onOutput(cb)` with `cli.onData(cb)` that listens on the `cli:data` IPC channel
- [x] 3.2 Expose `cli.resize({ cols, rows })` that invokes `cli:resize` on the main process
- [x] 3.3 Update the TypeScript type declaration in `src/renderer/renderer.d.ts` to reflect `onData`, `resize`, and remove `onOutput`

## 4. TerminalPane Component

- [x] 4.1 Create `src/renderer/TerminalPane.tsx` that instantiates an xterm.js `Terminal` with a dark theme matching the app's `--bg-inset` / `--fg-muted` CSS variables
- [x] 4.2 Mount the terminal into a `useRef<HTMLDivElement>` container via `terminal.open(ref.current)` in a `useEffect`
- [x] 4.3 Load and activate `FitAddon`; call `fitAddon.fit()` on mount to initialise cols/rows from the container size
- [x] 4.4 Attach a `ResizeObserver` to the container div; on resize, call `fitAddon.fit()` then `window.api.cli.resize({ cols, rows })` with the terminal's updated dimensions
- [x] 4.5 Wire `terminal.onData(data => window.api.cli.write(data))` to forward keystrokes to the PTY
- [x] 4.6 Expose a `write(data: string)` imperative ref handle (via `useImperativeHandle`) so the parent can pipe incoming `cli:data` chunks into the terminal
- [x] 4.7 Dispose the terminal and disconnect the ResizeObserver in the `useEffect` cleanup

## 5. NewProposalSheet Integration

- [x] 5.1 Remove the `outputLines` state, `logRef`, and the `cli.onOutput` effect from `NewProposalSheet.tsx`
- [x] 5.2 Add a `terminalRef` pointing to the `TerminalPane` imperative handle
- [x] 5.3 In the `cli.onData` effect, call `terminalRef.current?.write(data)` to pipe chunks into the terminal
- [x] 5.4 Replace the output log `<div>` with `<TerminalPane ref={terminalRef} />` in the JSX, giving it the same height/min-height constraints as the old log div
- [x] 5.5 Pass initial `cols` and `rows` (or derive them lazily on first resize) when calling `cli:invoke` so the PTY starts with the correct dimensions
- [x] 5.6 Remove the `running` spinner (xterm.js cursor blink is sufficient visual feedback) or keep it only for the pre-mount flash before the terminal renders

## 6. Verification

- [x] 6.1 Register Claude Code (or another ANSI-outputting CLI) in Settings and trigger a proposal — confirm colours and formatting render correctly in the terminal widget
- [ ] 6.2 Confirm that typing in the terminal while a run is active sends input to the process (test with a simple interactive CLI if needed)
- [ ] 6.3 Confirm Cancel terminates the PTY process and no further output appears
- [ ] 6.4 Resize the sheet and confirm the terminal reflows without garbled lines
- [x] 6.5 Run TypeScript type-check (`npm run typecheck` or equivalent) with no new errors
