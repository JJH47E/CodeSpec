## Why

Once a proposal has been created and its files reviewed, users need a way to continue the conversation with the CLI tool in context — to iterate, refine specs, or request follow-up changes without starting a brand-new proposal. Today there is no way to resume a session tied to a specific change.

## What Changes

- Add a "Continue Conversation" action to the change detail panel for active changes
- Allow the user to type a follow-up instruction and invoke the selected CLI tool in the context of that change's directory
- Store the CLI tool preference per change (defaulting to the global default), persisted in `.openspec.yaml` or prefs
- Display the same xterm.js terminal session modal reused from the proposal-creator flow
- After the session completes, refresh the change's artifacts in the detail panel

## Capabilities

### New Capabilities

- `change-conversation-resume`: Invoke a CLI tool session scoped to an existing change, sending a user-supplied follow-up instruction, and refreshing the change view on completion.

### Modified Capabilities

- `proposal-creator`: The terminal session sheet is generalised to support both initial proposal creation and follow-up conversation invocations (same modal, different command and context).

## Impact

- `ChangeDetail` component gains a conversation input area and invoke action
- `NewProposalSheet` terminal session logic is extracted or reused for the follow-up flow
- IPC `cli.invoke` is already capable; no main-process changes needed
- `.openspec.yaml` or prefs may need a per-change `lastToolId` field
- Change list refresh and artifact re-read triggered after a successful follow-up session
