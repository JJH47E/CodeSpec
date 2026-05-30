## Context

Changes sit in `openspec/changes/<name>/` as plain directories. The main process reads them at load time and derives their status from `tasks.md` (active → in-progress when some tasks are done, some remain). There is currently no way to remove or archive a change from inside the app. The `openspec/archive/` directory already exists and is read by the change list sidebar — the `/opsx:archive` skill moves changes there with a `YYYY-MM-DD-` prefix from the CLI, but no in-app equivalent exists.

## Goals / Non-Goals

**Goals:**
- Delete any change (permanently removes `openspec/changes/<name>/`)
- Archive `active` and `in-progress` changes (moves to `openspec/archive/YYYY-MM-DD-<name>/`)
- Block archive on unstarted changes (`active` with no tasks), offer delete instead
- Show a confirmation dialog for `in-progress` deletes/archives that lists incomplete task count
- Refresh the change list and clear the detail pane after any successful action

**Non-Goals:**
- Undo / restore after delete (destructive is intentional)
- Bulk actions on multiple changes
- Archiving already-archived changes (they are read-only in the sidebar)

## Decisions

**1. Delete and Archive as IPC handlers in main process**

File system operations (rm -rf, mkdir + rename) belong in the main process. Two new handlers: `changes:delete(changePath)` and `changes:archive(changePath)` that perform the operation and return `{ ok: true }` or `{ error: string }`. The renderer calls these via `window.api.changes`.

Alternative considered: shell out to `openspec archive` CLI. Rejected — introduces a CLI dependency for a simple file move, and the CLI uses a different archive path (`openspec/changes/archive/`) vs the existing pattern (`openspec/archive/`). Keeping it in the main process is more reliable.

**2. Confirmation dialog as inline component in `ChangeDetail`**

Rather than a separate modal/sheet, a confirmation overlay renders inside the detail pane over the existing content. It shows the action name, a warning message, the incomplete task count (for in-progress changes), and Confirm / Cancel buttons.

Alternative considered: a standalone `ConfirmSheet` modal. Rejected — the existing sheet pattern (`NewProposalSheet`, `ConversationSheet`) involves a PTY/form and is heavyweight for a simple yes/no prompt. An inline overlay is lighter and keeps the confirmation contextually tied to the change.

**3. Action buttons in the detail header, conditioned on status**

- **Delete** button: visible for all active/in-progress changes (not archived — archived changes are immutable in-app)
- **Archive** button: visible only for `active` (with tasks started) and `in-progress` changes; hidden for unstarted `active` changes (no tasks file or no checkboxes) and archived changes
- Unstarted `active` changes show only the Delete button, with a tooltip/note: "Archive not available — no tasks started."

This avoids a separate action menu and keeps the affordances discoverable.

**4. "Unstarted" detection: no tasks file or no checkbox lines**

A change is considered unstarted when its `tasks.md` either does not exist or contains no checkbox lines (`- [ ]` or `- [x]`). This matches the existing in-progress detection logic in the main process. The IPC `changes:archive` handler enforces this server-side and returns an error if called on an unstarted change, so the UI check is a convenience gate, not the only guard.

**5. Incomplete task count read at confirmation time**

When the user initiates delete or archive on an `in-progress` change, the renderer uses the already-loaded `tasksText` prop to count `- [ ]` lines client-side. No extra IPC call needed — the text is already in state.

## Risks / Trade-offs

- **Destructive delete with no undo** → Mitigation: confirmation dialog is required; button is labeled "Delete" (not ambiguous icon-only)
- **Archive path divergence from CLI** → The CLI (`/opsx:archive` skill) uses `openspec/archive/`, which matches what the sidebar already reads. In-app archive will use the same path, so archives created in-app will appear in the sidebar immediately after refresh.
- **Race: directory already exists at archive target** → `changes:archive` checks for target existence before moving and returns an error with a message; the UI surfaces this as a toast or inline error.
