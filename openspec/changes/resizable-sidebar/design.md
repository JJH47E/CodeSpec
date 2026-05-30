## Context

`ChangeList` renders as an `<aside>` with `width: 280` and `flexShrink: 0`. The parent flex row in `App.tsx` has `overflow: hidden` so `ChangeDetail` fills the rest. There is no existing resize infrastructure. `Prefs` is a plain object persisted via `prefs:set` IPC — adding an optional field is non-breaking.

## Goals / Non-Goals

**Goals:**
- Drag handle on the right edge of the sidebar resizes it live
- Width clamped to a sensible min (180 px) and max (480 px)
- Width persisted in `Prefs.sidebarWidth`; restored on load; defaults to 280 if absent

**Non-Goals:**
- Double-click to reset to default width
- Animated resize or snapping
- Collapsing the sidebar to zero width

## Decisions

**1. Drag logic lives in `App.tsx`, not `ChangeList`**

`App` owns layout state. `ChangeList` receives `width` as a prop and renders a passive drag-handle `<div>` at its right edge. `App` attaches `pointermove` / `pointerup` listeners to `document` during drag, computes the new width from `clientX - sidebar.left`, clamps it, and updates state. This keeps pointer capture and cleanup in one place.

Alternative considered: `useRef` + event handlers inside `ChangeList`. Rejected — requires a callback prop to lift state up anyway, and mixing layout ownership is messier.

**2. Drag handle as an absolutely-positioned strip on the aside's right edge**

A 6 px wide `<div>` positioned `right: -3px, top: 0, bottom: 0` overlaps the border and provides a larger hit target than the 1 px border alone. `cursor: col-resize` signals the affordance. `z-index: 10` ensures it sits above the detail pane's content.

**3. Persist on `pointerup`, not on every `pointermove`**

Writing to prefs on every pixel change would flood IPC. Save once when the user releases the drag. In-memory state updates live; prefs update on release.

**4. Default 280, min 180, max 480**

280 matches the current hard-coded width. 180 is wide enough to show typical change names. 480 is half a typical 960 px window — beyond that the detail pane becomes too cramped.
