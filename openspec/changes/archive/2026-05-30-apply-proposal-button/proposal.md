## Why

The change detail view only supports continuing a conversation via a free-form instruction, but there's no way to invoke the CLI tool on a change to apply its proposal directly. An "Apply Proposal" button gives users a one-click way to run the implementation step without having to craft an instruction manually.

## What Changes

- Add an **Apply Proposal** button to the `ChangeDetail` header, visible alongside the existing "Continue" button for active changes.
- Clicking it opens a new `ApplyProposalSheet` modal — a sheet containing a terminal and a tool selector, with no instruction textarea (the command is derived automatically from the proposal).
- The sheet constructs the command based on the selected tool type: Claude Code receives `/opsx:apply "<changeName>"` to invoke the dedicated skill; other tools receive a natural language prompt derived from the change's openspec files.
- The CLI process is killed on every modal-dismiss path (X button, overlay click, Escape, error Close, complete Done).
- On successful completion the sheet closes and the proposal content is re-read.

## Capabilities

### New Capabilities
- `proposal-applier`: The Apply Proposal button and its sheet — opens a modal terminal session that runs the apply command for the selected change, with full process lifecycle management on close.

### Modified Capabilities
- `change-conversation-resume`: The `ChangeDetail` header gains a second action button (Apply Proposal) alongside Continue — this is a UI addition but the existing Continue requirement is unchanged in behaviour.

## Impact

- `src/renderer/ChangeDetail.tsx` — add `onApply` prop and render the Apply Proposal button.
- `src/renderer/ApplyProposalSheet.tsx` — new component, modelled on `NewProposalSheet` but without a description input; command is `/opsx:apply "<changeName>"`.
- `src/renderer/App.tsx` — wire `applyOpen` state, `handleApplySuccess`, and pass `onApply` to `ChangeDetail`.
