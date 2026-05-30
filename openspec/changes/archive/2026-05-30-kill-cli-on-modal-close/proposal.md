## Why

When a user closes either the New Proposal or Continue Conversation modal (via Cancel, the X button, or clicking outside), any CLI process that was started during that session continues running in the background, potentially making further edits to openspec files the user didn't intend.

## What Changes

- When the New Proposal modal closes (any path other than a user-initiated cancel of a running process), call `window.api.cli.cancel()` to kill the underlying PTY if one is still active.
- When the Continue Conversation modal closes (any path other than a user-initiated cancel of a running process), call `window.api.cli.cancel()` to kill the underlying PTY if one is still active.
- The `handleClose` and `onClose` paths in both sheets must ensure the process is terminated before the modal unmounts.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `cli-terminal-session`: Close behaviour of both modals must now guarantee the CLI process is killed when the modal dismisses without going through the explicit cancel-while-running path.

## Impact

- `src/renderer/NewProposalSheet.tsx` — `handleClose` and the `onClose` direct calls need to kill the process.
- `src/renderer/ConversationSheet.tsx` — `handleClose` and the `onClose` direct calls need to kill the process.
- No main-process or IPC changes required; `cli:cancel` already kills `activeProcess` safely when no process is running (it is a no-op).
