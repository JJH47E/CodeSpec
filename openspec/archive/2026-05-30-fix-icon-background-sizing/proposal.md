## Why

The `.row-ic` icon container in the sidebar list is 30×30 px but the icon inside is rendered at `size={17}`. Phosphor icons at `duotone` weight have optical weight that makes their glyphs visually appear to overflow the coloured background square, breaking the intended contained look.

## What Changes

- Reduce the icon size inside `.row-ic` from 17 px to 14 px so the glyph sits clearly within the 30×30 background

## Capabilities

### New Capabilities

_(none — this is a pure visual bug fix)_

### Modified Capabilities

_(none — spec-level behaviour is unchanged)_

## Impact

- `src/renderer/ChangeList.tsx` — change `size={17}` to `size={14}` on the `<Icon>` inside `ChangeListItem`
