## 1. IPC Layer

- [x] 1.1 Add `changes:delete(changePath)` IPC handler to `src/main/index.ts` that removes the change directory with `fs.rmSync(changePath, { recursive: true })` and returns `{ ok: true }` or `{ error: string }`
- [x] 1.2 Add `changes:archive(changePath)` IPC handler to `src/main/index.ts` that: checks the change has tasks (tasks.md with checkbox lines), checks the date-prefixed target does not already exist in `openspec/archive/`, then moves the directory with `fs.renameSync`; returns `{ ok: true }` or `{ error: string }`
- [x] 1.3 Expose `delete` and `archive` under `window.api.changes` in `src/preload/index.ts`
- [x] 1.4 Add type signatures for `delete` and `archive` to `src/renderer/renderer.d.ts`

## 2. App State & Callbacks

- [x] 2.1 Add `handleDelete` callback to `App.tsx` that calls `window.api.changes.delete`, then clears `selectedChange` and refreshes the change list
- [x] 2.2 Add `handleArchive` callback to `App.tsx` that calls `window.api.changes.archive`, then clears `selectedChange` and refreshes the change list; surfaces any returned error to the UI
- [x] 2.3 Pass `onDelete` and `onArchive` props to `ChangeDetail`

## 3. Confirmation Dialog Component

- [x] 3.1 Create `src/renderer/components/ConfirmDialog.tsx` — an inline overlay that accepts `title`, `message`, `confirmLabel`, `onConfirm`, and `onCancel` props and renders a centered card over the content area
- [x] 3.2 Export `ConfirmDialog` from `src/renderer/components/index.ts`

## 4. ChangeDetail UI

- [x] 4.1 Add `onDelete?: () => void` and `onArchive?: () => void` to the `Props` interface in `ChangeDetail.tsx`
- [x] 4.2 Add local `confirmAction` state (`'delete' | 'archive' | null`) to track which action is pending confirmation
- [x] 4.3 Add a helper `isStarted(tasksText)` that returns `true` when `tasksText` contains at least one checkbox line (`- [ ]` or `- [x]`)
- [x] 4.4 Render a Delete button in the detail header for non-archived changes; clicking sets `confirmAction` to `'delete'`
- [x] 4.5 Render an Archive button in the detail header only when the change is non-archived AND `isStarted(tasksText)` is true; clicking sets `confirmAction` to `'archive'`
- [x] 4.6 Count incomplete tasks from `tasksText` (`- [ ]` lines) for use in the warning message
- [x] 4.7 When `confirmAction` is set, render `ConfirmDialog` over the content area with appropriate title, message (including incomplete task count for `in-progress` changes), and confirm/cancel handlers
- [x] 4.8 On confirm: call `onDelete` or `onArchive` then clear `confirmAction`; on cancel: clear `confirmAction`
