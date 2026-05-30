## Why

The refresh button in the header uses a `play` icon (▶), which looks identical to a "run" or "start" action and gives no indication that it refreshes the change list. Adding the correct icon and a text label removes the ambiguity entirely.

## What Changes

- Import `ArrowsClockwise` from `@phosphor-icons/react` and register it as `'arrows-clockwise'` in the icon map
- Replace the `play` icon on the refresh button with `arrows-clockwise`
- Add the label "Refresh" to the button so it is text-labelled, not icon-only

## Capabilities

### New Capabilities

_(none — this is a pure UI clarity fix)_

### Modified Capabilities

- `change-browser`: The refresh control is now unambiguously identifiable by both icon and label

## Impact

- `src/renderer/components/Icon.tsx` — add `ArrowsClockwise` import and map entry
- `src/renderer/Header.tsx` — swap icon, add label text
