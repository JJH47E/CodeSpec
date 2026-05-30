## Context

`deriveActiveStatus` in `src/main/index.ts` currently returns `'active' | 'in-progress'`. It reads `tasks.md` and returns `in-progress` when some tasks are complete and some remain; otherwise `active`. The `Change.status` union in `src/shared/types.ts` is `'active' | 'in-progress' | 'archived'`. Status-conditional rendering is duplicated in three places: `ChangeList.tsx` (list item icon/badge), `ChangeDetail.tsx` (header badge + button guards), and `src/main/index.ts` (archive guard).

The `changes:archive` IPC handler currently rejects changes that have no tasks or no checkbox lines. This was intended to prevent archiving unstarted changes, but it also incorrectly blocks `done` changes from being archived via the app (since the CLI skill archives separately). The new rules should be:

- `done` → archivable, no warning
- `active` (with or without tasks) → archivable, no warning  
- `in-progress` → archivable with warning (incomplete tasks)

## Goals / Non-Goals

**Goals:**
- Add `'done'` to the `Change.status` union and derive it in the main process
- Render `done` changes with a distinct checkmark icon and success-toned badge in both sidebar and detail header
- `done` changes appear in the Active sidebar group (they are not yet archived)
- Archive is permitted for `done` and `active` changes without a warning dialog; warning only for `in-progress`
- Archive button is visible for all non-archived changes (done, active, in-progress); the previous "must be started" gate is removed

**Non-Goals:**
- A separate "Done" filter tab in the sidebar (done stays in the Active group)
- Any persistence of the done state beyond what's already in tasks.md

## Decisions

**1. `deriveActiveStatus` becomes `deriveActiveStatus(): 'active' | 'in-progress' | 'done'`**

Add a third branch: if `tasks.md` exists, has at least one checkbox, and `incomplete === 0` (no `- [ ]` lines), return `'done'`. The existing `active` branch covers both "no tasks file" and "all tasks complete with no incomplete" — the `done` check must come before the existing return to intercept the all-complete case.

**2. `changes:archive` guard simplified**

Remove the "must have tasks" guard entirely. The only remaining guard is the target-already-exists check. This allows archiving active (unstarted), active (all done), and done changes without error. In-progress changes can still be archived — the warning lives in the UI, not the IPC handler. This separation of concerns is cleaner: the handler does the file operation, the UI handles UX guardrails.

**3. Archive button shown for all non-archived changes**

Remove the `isStarted` check from the Archive button visibility condition in `ChangeDetail`. The button was hidden for unstarted active changes to steer users toward Delete. With `done` status now surfaced, all non-archived changes are reasonable archive candidates. The UX cost of a hidden button outweighs the benefit.

**4. Confirmation dialog for in-progress only**

`confirmMessage` in `ChangeDetail` already branches on `change.status === 'in-progress'`. No change needed there — done and active changes get the neutral confirmation message, in-progress gets the task-count warning.

**5. Design token for done state**

Use `'success'` badge tone (if available in the Badge component) or fall back to `'accent'` with a `check-circle` icon. Check existing `BadgeTone` values before deciding. Similarly for the sidebar icon background: use `--success-muted` / `--success-fg` if available, else a green-adjacent token.

## Risks / Trade-offs

- **`done` in the Active group may be confusing** — users might expect Done to be a separate group. Keeping it in Active avoids adding a third sidebar section and keeps the UI simple. The distinct badge makes done changes easy to spot.
- **Removing the archive guard from IPC** — the IPC handler no longer enforces "started before archive". The UI still shows appropriate messaging. If the app is extended later, the guard can be re-added where needed.
