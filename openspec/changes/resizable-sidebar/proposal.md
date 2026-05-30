## Why

The sidebar is fixed at 280 px, which can feel too narrow for long change names or too wide on smaller screens. Letting users drag it to their preferred width makes the layout adapt to their workflow without requiring any settings UI.

## What Changes

- A drag handle is added between the sidebar and the main detail pane
- Dragging the handle resizes the sidebar width within enforced min/max bounds
- The chosen width persists across sessions (stored in user prefs)
- No other layout changes; the detail pane continues to fill the remaining space

## Capabilities

### New Capabilities

- `sidebar-resize`: Drag-to-resize sidebar with persisted width

### Modified Capabilities

- `change-browser`: The sidebar gains a drag handle on its right edge; width is user-controlled rather than fixed

## Impact

- `src/renderer/ChangeList.tsx` — accept a `width` prop and render the drag handle
- `src/renderer/App.tsx` — own `sidebarWidth` state, wire drag logic, persist to prefs
- `src/shared/types.ts` — add `sidebarWidth?: number` to `Prefs`
- `src/main/index.ts` — `prefs:set` already persists the full prefs object; no handler change needed
