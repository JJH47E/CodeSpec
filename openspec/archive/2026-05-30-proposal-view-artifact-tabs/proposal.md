## Why

The change detail pane currently only shows the `proposal.md` artifact, leaving users with no way to view `design.md` or `tasks.md` without leaving the app. Adding tabs gives users a complete picture of any change without switching to a file browser.

## What Changes

- Add a tab bar to the top of the `ChangeDetail` pane with three tabs: **Proposal**, **Design**, and **Tasks**
- Tabs that have no corresponding artifact file are shown in a disabled/empty state (not hidden)
- The active tab's content is displayed in the existing markdown renderer area
- Switching tabs reads and renders the appropriate artifact file for the selected change
- The Proposal tab is selected by default when a change is selected

## Capabilities

### New Capabilities

- `change-detail-tabs`: Tab navigation within the change detail pane to switch between proposal, design, and tasks artifact views

### Modified Capabilities

- `change-browser`: The change detail view gains a tab bar; the existing proposal rendering behaviour becomes the "Proposal" tab

## Impact

- `src/renderer/ChangeDetail.tsx` — primary changes: add tab state, tab bar UI, conditional content rendering
- `src/renderer/App.tsx` — load design and tasks text alongside proposal text (or extend IPC to read any artifact by name)
- `src/main/index.ts` / `src/preload/index.ts` / `src/renderer/renderer.d.ts` — may need a generic `readArtifact` IPC handler or reuse `readProposal` pattern for design/tasks
