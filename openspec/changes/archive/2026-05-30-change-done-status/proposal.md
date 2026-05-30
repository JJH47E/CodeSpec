## Why

When all tasks in a change are checked off the change still shows as `active` — indistinguishable from a change that hasn't been touched at all. Adding a `done` status makes completion visible at a glance and unlocks sensible archive behaviour: a completed change should be archivable without friction, whereas the current guard (requiring at least one checkbox) was designed to prevent archiving half-finished work.

## What Changes

- A new `done` status is derived when a `tasks.md` exists, has at least one checkbox, and every checkbox is checked (`- [x]`)
- `done` changes appear in the Active group in the sidebar (they haven't been archived yet) with a distinct visual treatment (e.g., a check icon and a success/positive badge tone)
- The archive action is permitted for `done` changes without requiring confirmation (no incomplete tasks to warn about)
- The archive action is also permitted for `active` changes that have no tasks at all — these changes were previously blocked from archiving; now only `in-progress` changes (some tasks done, some not) keep the warning, and unstarted `active` changes can be archived (previously they could only be deleted)
- The `Change` type gains a `'done'` value in its status union
- All status-conditional rendering in `ChangeDetail` and `ChangeList` is updated to handle `done`

## Capabilities

### New Capabilities

- `change-done-status`: Derives and renders a `done` status for changes with all tasks checked; updates archive eligibility rules across the app

### Modified Capabilities

- `change-browser`: Sidebar and detail pane updated to display `done` status with distinct visuals and include `done` in the Active group
- `change-lifecycle-actions`: Archive is now permitted for `done` and unstarted `active` changes; the unstarted-blocks-archive guard is removed

## Impact

- `src/shared/types.ts` — add `'done'` to the `Change.status` union
- `src/main/index.ts` — update `deriveActiveStatus` to return `'done'` when all tasks are checked; update `changes:archive` guard to allow `done` and unstarted-active changes through
- `src/renderer/ChangeDetail.tsx` — add `done` to icon/badge/tone lookups; update archive button visibility; update `isStarted` guard for archive button
- `src/renderer/ChangeList.tsx` — add `done` to any status-conditional rendering
