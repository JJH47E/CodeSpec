# CodeSpec — Core components UI kit

Cosmetic React recreations of the CodeSpec component set, for prototyping screens fast.
These are **not** production components — they cut functional corners — but they are
pixel-accurate to the design system.

## Files
- `index.html` — interactive demo. Open it: toggle light/dark, pick a model, select changes,
  flip toggles. This is the canonical reference for how the pieces look together.
- `Icon.jsx` — `<Icon name size />`, an inline duotone SVG set (~19 icons, no network).
- `components.jsx` — `Button, Field, Input, SearchInput, Select, Card, RowItem, Menu, Badge, Tag, Count, Toggle, Segmented, Checkbox`.
- `components.css` — class-based styles, all driven by `colors_and_type.css` tokens.

## Load order
```html
<link rel="stylesheet" href="../../colors_and_type.css">
<link rel="stylesheet" href="components.css">
<!-- React 18 + Babel (pinned) -->
<script type="text/babel" src="Icon.jsx"></script>
<script type="text/babel" src="components.jsx"></script>
```
Each component is exported to `window`, so later `text/babel` scripts can use them directly.

## Notes
- **Theme:** set `document.documentElement.setAttribute('data-theme', 'dark' | 'light')`.
- **Icons in production:** swap `Icon.jsx` for `@phosphor-icons/react` (duotone weight) — the
  inline set mirrors its look but avoids a network/font dependency in these previews.
- **Select** takes grouped options: `groups={[{ label, options: [{ value, label, icon }] }]}`.
- **Badge** renders OpenSpec states directly: `<Badge state="proposed" />`
  (`draft` · `proposed` · `applied` · `archived`), or a tone: `<Badge tone="warning" icon="warning">…</Badge>`.

## Not included (out of scope for this pass)
Full product screens (dashboard, spec editor, chat session). Those are the natural next step
once foundations + components are signed off.
