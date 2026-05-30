## 1. IPC Layer

- [x] 1.1 Add `changes:readArtifact(changePath, filename)` handler to `src/main/index.ts` that reads the named file from `changePath` and returns its text or `null`
- [x] 1.2 Expose `readArtifact` via `src/preload/index.ts` under `window.api.changes`
- [x] 1.3 Add `readArtifact` type signature to `src/renderer/renderer.d.ts`

## 2. App State

- [x] 2.1 Add `designText` and `tasksText` state variables (`string | null`) to `App.tsx`
- [x] 2.2 Update the `useEffect` that loads proposal text to also load `design.md` and `tasks.md` in parallel via `Promise.all`, then set all three state values
- [x] 2.3 Pass `designText` and `tasksText` as props to `ChangeDetail` in both render locations

## 3. ChangeDetail Component

- [x] 3.1 Add `designText: string | null` and `tasksText: string | null` to the `Props` interface in `ChangeDetail.tsx`
- [x] 3.2 Add local `activeTab` state (`'proposal' | 'design' | 'tasks'`) defaulting to `'proposal'`
- [x] 3.3 Reset `activeTab` to `'proposal'` when the `change` prop changes (use a `useEffect` keyed on `change?.path`)
- [x] 3.4 Render a tab bar below the detail header with three tabs: Proposal, Design, Tasks
- [x] 3.5 Style the active tab with a bottom border accent and active foreground color; inactive tabs use muted foreground
- [x] 3.6 Wire tab click handlers to update `activeTab`
- [x] 3.7 Render the content area based on `activeTab`: show the appropriate `*Text` value or the matching empty state if `null`
- [x] 3.8 Update the empty state messages: "No design document yet." for Design tab, "No tasks written yet." for Tasks tab
