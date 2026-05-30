## Why

There is currently no way to remove a change from the list once it is created — users who created a change by mistake, or who want to clean up completed work, have no path to do so from within the app. Adding delete and archive actions gives users control over the lifecycle of their changes, with guardrails that match the change's current state.

## What Changes

- A delete action is available on any change; permanently removes the change directory from `openspec/changes/`
- An archive action is available only on changes that have been started (`in-progress` or `active` with tasks); moves the change directory to `openspec/archive/` with a date prefix
- Changes that have not been started (`active` with no tasks) cannot be archived — only deleted; the UI makes this clear
- When the user tries to delete or archive an `in-progress` change, a warning dialog is shown listing the incomplete tasks and asking for confirmation before proceeding
- After a delete or archive, the sidebar refreshes and the detail pane reverts to the empty state

## Capabilities

### New Capabilities

- `change-lifecycle-actions`: Delete and archive actions on changes, with per-status guardrails and confirmation dialogs

### Modified Capabilities

- `change-browser`: The sidebar and/or detail header gains delete/archive action controls; the change list refreshes after an action completes

## Impact

- `src/renderer/ChangeDetail.tsx` — add Delete and Archive buttons to the detail header, conditionally shown by status
- `src/renderer/App.tsx` — handle delete/archive callbacks, refresh change list, clear selected change on success
- `src/main/index.ts` — new IPC handlers: `changes:delete` (rm -rf change dir) and `changes:archive` (mkdir + mv with date prefix)
- `src/preload/index.ts` / `src/renderer/renderer.d.ts` — expose new handlers
- A confirmation dialog component (inline or shared) to show warnings and incomplete task counts
