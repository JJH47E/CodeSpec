## Context

CodeSpec currently allows creating a new proposal by invoking a CLI tool (e.g. Claude Code) via a modal sheet with an xterm.js terminal. Once the proposal files are generated and the user reviews them in `ChangeDetail`, there is no way to send a follow-up instruction to the CLI in the context of that change — the only option is to create an entirely new proposal.

The `cli.invoke` IPC already supports arbitrary commands sent to the CLI tool in a given repo directory. The `NewProposalSheet` owns the terminal session lifecycle. The goal is to reuse this infrastructure to enable per-change follow-up conversations.

## Goals / Non-Goals

**Goals:**
- Add a "Continue" action to active changes in `ChangeDetail` that opens a terminal session sheet
- Allow the user to type a follow-up instruction and send it to the configured CLI tool, scoped to the change's directory context
- Persist a per-change CLI tool preference so the same tool is pre-selected on re-open
- Refresh the change detail view (proposal re-read) after a successful session

**Non-Goals:**
- Maintaining actual conversation memory between sessions (each CLI invocation is a fresh process; the CLI tool's own context/resumption is its responsibility)
- Modifying archived changes
- Supporting multiple concurrent terminal sessions

## Decisions

### Decision: Reuse `NewProposalSheet` pattern via a new `ConversationSheet` component

The terminal session lifecycle (mount, write, resize, phase state machine, cancel) is already implemented in `NewProposalSheet`. Rather than parameterising `NewProposalSheet` to handle both flows (which would add conditional branching throughout), extract the shared terminal-session structure into a new `ConversationSheet` component with a `command` prop. `NewProposalSheet` can then delegate to it or remain as-is.

**Alternative considered:** Refactor `NewProposalSheet` into a generic `CliSessionSheet`. Rejected because it couples unrelated flows and complicates the existing working code. A new thin component is lower risk.

### Decision: Trigger UI lives in `ChangeDetail` header area, not a floating button

The "Continue Conversation" action is placed as a button in the `ChangeDetail` header bar (alongside the status badge), visible only for active changes. Clicking it opens `ConversationSheet` as a modal overlay. This keeps the main panel uncluttered and mirrors the "New Proposal" button pattern in the global header.

**Alternative considered:** An inline textarea docked at the bottom of the detail pane. Rejected because it wastes permanent vertical space and conflicts with the scrollable proposal content area.

### Decision: Per-change tool preference stored in `Prefs` as a `perChangeTool` map

`Prefs` gains a `perChangeTool: Record<string, string>` field (keyed by change name). The `ConversationSheet` reads this to pre-select the tool and writes it back on tool change. Falls back to `prefs.defaultTool` when no per-change value exists.

**Alternative considered:** Store in `.openspec.yaml` inside the change directory. Rejected because the prefs IPC is already wired for this kind of persistence and `.openspec.yaml` is a schema-managed file.

### Decision: Command format is a plain user instruction string

The command sent to the CLI is the user's raw instruction text (not wrapped in an opsx skill command). This gives maximum flexibility — the CLI tool interprets it as a plain message in the context of its working directory. The change name is not passed explicitly; the CLI tool infers context from the working directory.

**Alternative considered:** Wrap in `/opsx:continue "<instruction>"`. Deferred — the opsx skill for continuation may or may not exist on the target install. A plain instruction is universally compatible.

## Risks / Trade-offs

- **Session isolation**: Each invocation is a fresh CLI process. True conversation resumption depends on the CLI tool's own session-resumption mechanism (e.g. Claude Code's `--resume` flag). This feature only provides the UI trigger; deep resumption is out of scope.  
  → Mitigation: Document in UI copy that the session is a new invocation in the change's directory context, not a literal chat resume.

- **Concurrent invocations**: The existing `cli:invoke` IPC only supports one active session at a time. If the user opens `ConversationSheet` while a background process is somehow still running, it will collide.  
  → Mitigation: Disable the "Continue" button while any CLI session is active (reuse the same in-flight state already tracked in `App` or via a shared signal).

- **Prefs schema change**: Adding `perChangeTool` to `Prefs` requires a migration path for existing installs that don't have this field.  
  → Mitigation: Default to `{}` when the field is absent (already handled by the `??` pattern used throughout prefs reads).

## Open Questions

- Should the "Continue" action also be available during the `running` phase of `NewProposalSheet` (i.e. "send another message while running")? For now: no — one session at a time.
- Should `ConversationSheet` display the existing proposal.md as context above the terminal, or just the terminal? Leaning toward just the terminal for simplicity; the user has already read the proposal in the detail pane.
