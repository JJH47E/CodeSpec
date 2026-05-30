## 1. Types

- [x] 1.1 Extend `Change.status` in `src/shared/types.ts` to `'active' | 'in-progress' | 'archived'`

## 2. Main process — status derivation

- [x] 2.1 In `readChangesDir`, after building each active `Change`, check if `tasks.md` exists in the change directory
- [x] 2.2 If it exists, read it and count lines matching `- [x]` (complete) and `- [ ]` (incomplete), case-insensitive
- [x] 2.3 Set status to `'in-progress'` when `complete > 0 && incomplete > 0`

## 3. ChangeList — sidebar item

- [x] 3.1 In `ChangeListItem`, add icon, icon-background colour, and badge tone for `in-progress` status (e.g. `git-branch` icon, warning/progress colour tokens)
- [x] 3.2 Update the `active` filter check in `ChangeList` to include `in-progress` changes in the Active group (`c.status === 'active' || c.status === 'in-progress'`)
- [x] 3.3 Update the `archived` filter check to exclude `in-progress` changes

## 4. ChangeDetail — header badge

- [x] 4.1 In `ChangeDetail`, handle `in-progress` status for the header icon and badge tone/label
- [x] 4.2 Ensure the Apply and Continue buttons still render for `in-progress` changes (condition is not `archived`)

## 5. Verification

- [ ] 5.1 Smoke-test: mark one task complete in a change's `tasks.md`, refresh — badge shows "In Progress"
- [ ] 5.2 Smoke-test: Active filter includes in-progress changes; Archived filter excludes them
- [ ] 5.3 Smoke-test: mark all tasks complete — status reverts to Active on refresh

