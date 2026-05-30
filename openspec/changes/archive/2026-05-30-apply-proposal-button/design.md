## Context

The app currently has two modal sheets driven by CLI sessions: `NewProposalSheet` (no instruction input, command is derived from a description) and `ConversationSheet` (instruction textarea, command is the user's text). Both follow the same pattern: phase state machine (`input` | `running` | `complete` | `error`), a `TerminalPane` always mounted, and a `killAndClose` helper (added in the previous change) that kills the PTY on every dismiss path.

The Apply Proposal button needs a third sheet that is closer to `NewProposalSheet`: no free-form instruction, command is fixed to `/opsx:apply "<changeName>"`, and success triggers a proposal re-read. The `ChangeDetail` header currently shows one action button (Continue); it will gain a second (Apply Proposal) for active changes.

## Goals / Non-Goals

**Goals:**
- New `ApplyProposalSheet` component with terminal, tool selector, and full `killAndClose` lifecycle.
- Apply Proposal button in `ChangeDetail` header for active changes.
- App wiring: `applyOpen` state, `handleApplySuccess`, `onApply` prop.
- Process is killed on every dismiss path (consistent with `kill-cli-on-modal-close`).

**Non-Goals:**
- Adding a free-form instruction — the command is always `/opsx:apply "<changeName>"`.
- Changing the Continue or New Proposal flows.
- Any IPC changes; `cli.invoke` and `cli.cancel` are sufficient.

## Decisions

**Copy `NewProposalSheet` structure, not `ConversationSheet`.**

`NewProposalSheet` already has the right shape: no instruction textarea, command derived automatically, `proposalReady` banner pattern. The only differences are the command string, the icon/title, and the success callback. Modelling on it keeps the implementation minimal and familiar.

Alternative: build a single generic `CliSheet` component and parameterise everything. Rejected — three slightly different sheets don't justify the abstraction yet; three concrete components are easier to read and change independently.

**Command is tool-aware.**

When the selected tool's `id` is `claude-code`, the command is `/opsx:apply "<changeName>"` — invoking the dedicated OpenSpec apply skill. For all other tools (`aider`, `gh-copilot`, manually-added tools), the command is a natural language prompt:

> Read `openspec/changes/<changeName>/proposal.md`, `design.md`, `specs/`, and `tasks.md`, then implement all incomplete tasks marked `- [ ]`, updating each to `- [x]` as you go.

This approach keeps Claude Code's structured skill invocation while making the feature useful for any configured tool without requiring a slash-command convention.

Alternative considered: always use natural language. Rejected — the user explicitly wants `/opsx:apply` invoked for Claude Code so the dedicated skill controls the implementation flow.

**`onApply` prop on `ChangeDetail`, not a separate mechanism.**

`ChangeDetail` already accepts `onContinue` for the Continue button. Adding `onApply` follows the same pattern and keeps the detail pane stateless.

**`proposalVersion` bump on apply success.**

`handleApplySuccess` in `App.tsx` closes the sheet and bumps `proposalVersion`, triggering the existing `useEffect` to re-read `proposal.md`. No new IPC call needed.

## Risks / Trade-offs

- [UI crowding] Two action buttons in the `ChangeDetail` header may feel cramped on narrow windows. → Both are `size="sm"` and the header already flexes; acceptable for now.
- [Command coupling] The command string `/opsx:apply` is hard-coded in the sheet. If the apply command changes, it must be updated here. → Acceptable; this is a thin UI concern and easy to find.
