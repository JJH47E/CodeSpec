## Context

CodeSpec is an Electron + Vite + React + TypeScript app with a working scaffold (main process, preload `contextBridge`, renderer with Tailwind v4 design system). There are no real screens yet — just a placeholder App shell. The app's role is to be a GUI front-end over AI CLI tools (Claude Code, Copilot CLI, etc.) that have OpenSpec configured. The app does NOT call OpenSpec directly for mutations — it delegates to whatever CLI tool the user has set up.

## Goals / Non-Goals

**Goals:**
- Render a repository-selector screen when no repo is open
- Read and display OpenSpec changes from disk (read-only file access — no OpenSpec CLI needed for this)
- Let the user configure AI CLI tools and invoke them to create new proposals
- Stream CLI output to the renderer in real time
- Store CLI tool config and repo path in app-level persistent storage

**Non-Goals:**
- Applying / implementing proposals (future change)
- Detecting or installing OpenSpec or AI CLI tools — assume they are present
- Multi-repo tabs or workspaces
- Real-time file watching (manual refresh acceptable)
- A full embedded terminal emulator (streaming plain-text output is sufficient for this change)

## Decisions

### 1 — IPC layer: contextBridge typed API

All renderer → main communication goes through `contextBridge` in `preload/index.ts`. We expose a typed `window.api` with four channel groups:
- `repo.*` — open directory dialog, get/set persisted repo path
- `changes.*` — read change list, read a single change's files
- `cli.*` — invoke a configured tool, receive streamed output events
- `prefs.*` — get/set persistent app preferences (CLI tool config, default tool)

**Why not nodeIntegration?** Security boundary; renderer is untrusted DOM.

**Alternative considered:** Local HTTP server in main. Rejected — IPC is lower overhead and the standard Electron idiom.

### 2 — CLI tool configuration schema

CLI tools are stored in `{userData}/prefs.json` as an array of tool records:

```json
{
  "cliTools": [
    {
      "id": "claude-code",
      "label": "Claude Code",
      "command": "claude",
      "args": ["-p", "{command}"]
    }
  ],
  "defaultTool": "claude-code"
}
```

`{command}` is a template placeholder the main process substitutes with the OpenSpec slash command at invocation time (e.g. `/opsx:propose "description"`). This schema is intentionally simple — new placeholders (like `{repoPath}`) can be added later without breaking existing entries.

**Why per-machine, not per-repo?** CLI tools are installed on the machine, not checked into the repo. Keeping config in `userData` avoids polluting the project directory.

### 3 — CLI invocation: child_process.spawn with streamed output

The main process invokes the CLI tool using `child_process.spawn(command, resolvedArgs, { cwd: repoPath, env: { ...process.env } })`. stdout and stderr lines are forwarded to the renderer via `webContents.send('cli:output', line)` as they arrive. The renderer appends each line to a scrollable output panel.

**Why not node-pty?** Many AI CLI tools (including Claude Code invoked with `-p`) run fine without a TTY for this use case. `child_process.spawn` avoids a native module rebuild step. If interactive TTY is needed in a future change (e.g. an embedded terminal), `node-pty` can be introduced then.

**Why not execFile?** `spawn` gives us streaming output. `execFile` buffers until exit — poor UX for commands that take 30+ seconds.

**PATH resolution:** The main process inherits `process.env` but on macOS `.app` bundles the `$PATH` is reduced. We pass `{ env: { ...process.env } }` explicitly. If the tool is still not found, the renderer shows a "command not found" banner with instructions to launch the app from a terminal.

### 4 — Persisting config and last-opened repo

Single file at `{userData}/prefs.json`. Read synchronously at startup (small file). Written with `fs.writeFileSync` after any mutation. No `electron-store` dependency.

**Why not localStorage in renderer?** Renderer cannot read/write arbitrary paths; config lives on the main side of the bridge.

### 5 — New-proposal flow

1. User clicks "New Proposal" — a modal sheet opens
2. User types a plain-language description (no change name — the CLI tool derives it)
3. User selects which CLI tool to use (defaults to `prefs.defaultTool`)
4. On submit, renderer calls `window.api.cli.invoke({ toolId, command: '/opsx:propose "{description}"', repoPath })`
5. Main process spawns the tool, streams output back via `cli:output` events
6. Sheet transitions to a read-only "In progress" view showing the live output log
7. On process exit: if exit code 0, close sheet, refresh change list, select the newest change; if non-zero, show error state with full output

**Why description not change name?** The AI CLI tool (e.g. `/opsx:propose`) accepts a natural-language description and derives the name itself. Forcing a kebab-case name upfront removes the AI benefit and duplicates OpenSpec's own logic.

### 6 — Change classification: active vs. archived

An OpenSpec change is **archived** when its directory is inside `openspec/archive/` rather than `openspec/changes/`. The main process scans both and attaches `{ status: 'active' | 'archived' }` to each returned change object.

### 7 — Rendering proposal.md without new dependencies

The detail pane reads raw `proposal.md` text. A small in-renderer helper converts `## Heading`, `**bold**`, and `- bullet` into styled elements using design-system token classes. Full Markdown fidelity is a follow-on concern.

## Risks / Trade-offs

**[PATH on macOS .app bundles]** → CLI tools may not be found. Mitigation: pass `process.env` explicitly; surface a clear error with terminal-launch instructions.

**[Long-running CLI invocations]** → Proposals can take 30–90s. Mitigation: show live streaming output so the user knows progress is happening; no timeout imposed.

**[No TTY for CLI tool]** → Some CLI tools behave differently without a TTY (e.g., disable color, alter output format). Mitigation: acceptable for this change; add `node-pty` if interactive TTY is required later.

**[YAML parsing without a library]** → `.openspec.yaml` is simple `key: value`. A regex parser handles the current schema. Risk: breaks on multi-line values. Mitigation: swap for `js-yaml` if schema grows.

**[No file-watching]** → External CLI runs update the disk but not the UI until refresh. Mitigation: refresh button in header; auto-refresh after CLI invocations the app itself triggers.

## Open Questions

- Should the detail pane show all artifacts in tabs (proposal / design / tasks), or just proposal.md for this change? (Recommend: proposal.md only — keeps scope tight)
- What is the exact `openspec archive` directory path? Confirm before implementing the archived-changes reader.
- Should CLI tool config be accessible from the main header or a separate settings screen? (Recommend: a settings icon in the header for this change)
