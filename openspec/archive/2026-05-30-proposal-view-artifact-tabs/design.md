## Context

`ChangeDetail.tsx` currently accepts a single `proposalText: string | null` prop and renders it via a local `renderMarkdown` function. All artifact loading is done in `App.tsx` via `window.api.changes.readProposal(changePath)`. The IPC layer has one handler (`changes:readProposal`) that reads `proposal.md`. There is no generic artifact reader exposed to the renderer.

## Goals / Non-Goals

**Goals:**
- Add Proposal / Design / Tasks tabs to `ChangeDetail`
- Tabs for missing artifact files render in a disabled/empty state (matching the existing "No proposal written yet" pattern)
- Tab switching is instant (content already loaded); no per-click async delay

**Non-Goals:**
- Supporting arbitrary or schema-defined artifact lists dynamically (hard-coded three tabs is sufficient)
- Persisting the selected tab across change selections
- Rendering artifacts other than the three named above

## Decisions

**1. Add a generic `readArtifact` IPC handler rather than duplicating `readProposal`**

The cleanest path is a single `changes:readArtifact(changePath, filename)` handler that reads any named file from the change directory and returns its text or `null`. This avoids adding `readDesign` and `readTasks` as separate handlers and lets the pattern scale if more artifact tabs are needed later.

Alternative considered: read all three files in `readProposal` and return an object. Rejected because it changes the existing API shape and forces loading all artifacts on every change selection even when unused.

**2. Load all three artifacts eagerly in `App.tsx` when a change is selected**

When `selectedChange` changes, load proposal, design, and tasks in parallel (`Promise.all`). This avoids a visible loading flash when the user switches tabs after selecting a change.

Alternative considered: lazy-load on tab click. Rejected because the files are small markdown documents and parallel loading is negligible; lazy loading adds complexity (per-tab loading state) for no real benefit.

**3. Tab state resets to "proposal" on change selection**

When the user selects a different change the active tab resets to the first tab. This is the least surprising behaviour — the Proposal tab is the primary view for a change.

**4. Tab bar lives inside `ChangeDetail`, not `App`**

Tab state is local UI state. Lifting it to `App` would add unnecessary prop drilling and couple the shell to a view-specific concern.

**5. Props: extend `ChangeDetail` with `designText` and `tasksText`**

Keep the existing `proposalText` prop and add `designText: string | null` and `tasksText: string | null`. This is the minimal change to the component interface.

## Risks / Trade-offs

- **Three hard-coded tabs** → Any new artifact type (e.g., `specs/`) requires another prop and another tab. Acceptable given the current schema only defines three relevant prose artifacts.
- **Eager loading** → Three `readFileSync`-backed IPC calls on every change selection. Files are typically <10 KB each; no performance concern in practice.

## Migration Plan

1. Add `changes:readArtifact` IPC handler to `src/main/index.ts`
2. Expose it via `src/preload/index.ts` and update `src/renderer/renderer.d.ts`
3. Update `App.tsx` to load all three artifacts in parallel and pass `designText`/`tasksText` to `ChangeDetail`
4. Update `ChangeDetail.tsx`: add tab bar + tab switching logic, render content by active tab
