## 1. Types & Prefs

- [x] 1.1 Add `sidebarWidth?: number` to the `Prefs` interface in `src/shared/types.ts`

## 2. App State & Drag Logic

- [x] 2.1 Add `sidebarWidth` state to `App.tsx`, initialised from `prefs.sidebarWidth ?? 280` once prefs load
- [x] 2.2 Update the prefs load `useEffect` to set `sidebarWidth` from the loaded prefs value (falling back to 280)
- [x] 2.3 Add a `handleSidebarDrag` callback in `App.tsx` that receives `startX` and attaches `pointermove` / `pointerup` listeners to `document`; on move, clamps `clientX - containerLeft` between 180 and 480 and calls `setSidebarWidth`; on up, persists with `window.api.prefs.set({ sidebarWidth })` and removes listeners
- [x] 2.4 Pass `width={sidebarWidth}` and `onDragStart={handleSidebarDrag}` props to `ChangeList`

## 3. ChangeList Drag Handle

- [x] 3.1 Add `width: number` and `onDragStart: (startX: number) => void` to `ChangeList` props
- [x] 3.2 Replace the hard-coded `width: 280` on the `<aside>` with the `width` prop
- [x] 3.3 Add a drag handle `<div>` as the last child of `<aside>`: 6 px wide, `position: absolute`, `right: -3px`, `top: 0`, `bottom: 0`, `cursor: col-resize`, `zIndex: 10`; `onPointerDown` calls `onDragStart(e.clientX)`
- [x] 3.4 Add `position: 'relative'` to the `<aside>` style so the absolutely-positioned handle is contained within it
- [x] 3.5 Add a hover highlight to the drag handle (e.g., `background: var(--accent-default)` at low opacity on `:hover`) using a CSS class or inline `onMouseEnter`/`onMouseLeave` state
