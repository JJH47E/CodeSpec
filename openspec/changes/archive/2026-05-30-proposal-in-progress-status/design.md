## Context

`Change.status` is currently a two-value union (`'active' | 'archived'`) set in `readChangesDir` in the main process. Active changes are read from `openspec/changes/`, archived from `openspec/archive/`. The value flows through IPC to the renderer unchanged and is used in `ChangeList` for grouping, badge rendering, and icon selection, and in `ChangeDetail` for the header badge.

The `tasks.md` file is already written in a consistent checkbox format (`- [ ]` / `- [x]`) and is read by the main process in other contexts (the proposal-ready watcher). Parsing it for task completion is straightforward.

## Goals / Non-Goals

**Goals:**
- Derive `in-progress` from `tasks.md` at list-load time in the main process.
- Surface the status visually in both the sidebar item and the detail header badge.
- Keep `in-progress` included in the Active filter — it is not a separate group.

**Non-Goals:**
- Real-time / file-watch updates to the status (refresh is manual via the existing refresh button).
- A separate "In Progress" filter tab.
- Changing the archive logic — `in-progress` changes are still archived the same way as `active` ones.

## Decisions

**Derive status in the main process, not the renderer.**

`readChangesDir` already reads `.openspec.yaml` per change. Adding a `tasks.md` read there keeps the `Change` object as the single source of truth and avoids shipping raw file content to the renderer. The renderer stays purely presentational.

Alternative: send all task content to renderer and derive there. Rejected — unnecessary data transfer and puts file-parsing logic in the wrong layer.

**Parse `tasks.md` with simple string matching, not a markdown parser.**

The format is controlled — `- [ ]` for incomplete, `- [x]` for complete (case-insensitive x). A two-pass `includes` check is sufficient and adds no dependency.

**Status logic: `in-progress` when `complete > 0 && incomplete > 0`.**

- No `tasks.md`: status stays `active`.
- `tasks.md` exists, no checkboxes: status stays `active`.
- All tasks complete (`incomplete === 0`): status stays `active` (fully done but not yet archived is still just "active").
- Some complete, some incomplete: `in-progress`.

**`in-progress` is grouped with Active in the sidebar.**

It is an active change; separating it into its own group would fragment a typically short list. The distinct badge and icon colour provide enough differentiation within the Active group.

## Risks / Trade-offs

- [Stale status] Status is computed at list-load time; external edits to `tasks.md` between refreshes won't be reflected until the user hits Refresh. → Acceptable; consistent with how the rest of the app works.
- [Performance] Reading an extra file per active change on every list load. → Active change counts are expected to be small (< 20); negligible impact.
