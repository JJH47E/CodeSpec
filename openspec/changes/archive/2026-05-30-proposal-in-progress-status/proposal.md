## Why

Active changes all look the same in the sidebar regardless of whether work has started. Adding an "In Progress" status lets users immediately see which changes have been partially implemented, making it easier to track work across multiple changes.

## What Changes

- Add `'in-progress'` as a third value to the `status` field on the `Change` type.
- At change-list load time, the main process reads each active change's `tasks.md` (if it exists) and sets status to `'in-progress'` when at least one task is `- [x]` but at least one is still `- [ ]`.
- The sidebar list item renders a distinct icon, badge, and icon-background colour for `in-progress` changes.
- The `ChangeDetail` header badge also reflects `in-progress` with an appropriate tone.
- The "Active" filter continues to include `in-progress` changes (they are still active, just partially done).

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `change-browser`: The sidebar list item and detail badge must handle the new `in-progress` status value — distinct visual treatment, included in the Active filter.

## Impact

- `src/shared/types.ts` — extend `Change.status` union to `'active' | 'in-progress' | 'archived'`.
- `src/main/index.ts` — `readChangesDir` reads `tasks.md` to derive `in-progress` for active changes.
- `src/renderer/ChangeList.tsx` — `ChangeListItem` handles the new status (icon, badge tone, icon background).
- `src/renderer/ChangeDetail.tsx` — header badge handles the new status.
