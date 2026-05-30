## Context

The header refresh button currently uses the `play` icon with no label, making it visually indistinguishable from a "run" action. The icon set uses `@phosphor-icons/react`; `ArrowsClockwise` is the standard Phosphor refresh icon and is available in the same package already installed.

## Goals / Non-Goals

**Goals:**
- Correct icon (`ArrowsClockwise`) on the refresh button
- Text label "Refresh" so the button is never ambiguous

**Non-Goals:**
- Changing the button variant, size, or position
- Any other header changes
