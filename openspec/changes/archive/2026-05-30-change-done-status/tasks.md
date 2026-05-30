## 1. Shared Types & Status Derivation

- [x] 1.1 Add `'done'` to the `status` union in `src/shared/types.ts`: `'active' | 'in-progress' | 'done' | 'archived'`
- [x] 1.2 Update `deriveActiveStatus` in `src/main/index.ts` to return `'done'` when `tasks.md` has at least one checkbox and zero `- [ ]` lines; update the return type to include `'done'`
- [x] 1.3 Remove the "must have tasks" guard from the `changes:archive` IPC handler so all non-archived changes can be archived

## 2. ChangeList Sidebar

- [x] 2.1 Add `'done'` to the `visible` filter in `ChangeList.tsx` so done changes appear under the Active filter
- [x] 2.2 Add `'done'` to the `active` group filter so done changes appear in the Active sidebar group
- [x] 2.3 Add `done` case to `ChangeListItem` icon lookup: use `'check-circle'` icon
- [x] 2.4 Add `done` case to `ChangeListItem` icon style: use `--success-muted` background and `--success-fg` colour
- [x] 2.5 Add `done` case to `ChangeListItem` badge tone: `'success'`
- [x] 2.6 Add `done` case to `ChangeListItem` badge label: `'Done'`

## 3. ChangeDetail Header

- [x] 3.1 Add `done` case to the `icon` lookup in `ChangeDetail.tsx`: use `'check-circle'`
- [x] 3.2 Add `done` case to the `badgeTone` lookup: `'success'`
- [x] 3.3 Add `done` case to the `badgeLabel` lookup: `'Done'`
- [x] 3.4 Remove the `isStarted` gate from the Archive button visibility so it shows for all non-archived changes
- [x] 3.5 Update the `confirmMessage` branch so the in-progress warning only fires for `in-progress` status (done and active get the neutral message — this is already the case; verify no change needed)
