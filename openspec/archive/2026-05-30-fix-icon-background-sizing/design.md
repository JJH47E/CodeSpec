## Context

Phosphor icons at `duotone` weight render with heavier strokes than outline icons, making them optically larger at the same numeric size. The 30×30 px `.row-ic` container with a 17 px icon leaves only 6.5 px of padding on each side, which is insufficient for the duotone weight at that size.

## Goals / Non-Goals

**Goals:**
- Icon glyph visually contained within the coloured background on all status variants

**Non-Goals:**
- Changing the container size, border-radius, or any other aspect of `.row-ic`
- Changing icon sizes anywhere else in the app
