---
name: codespec-design
description: Use this skill to generate well-branded interfaces and assets for CodeSpec, a desktop GUI (Electron + React) over OpenSpec and local AI CLIs. Contains design guidelines, color/type/spacing tokens, an inline duotone icon set, and core UI-kit components (buttons, inputs, select, cards, menus, badges) for prototyping.
user-invocable: true
---

Read `README.md` in this skill first — it holds the product context, content fundamentals,
visual foundations, and iconography rules. Then explore the other files:

- `colors_and_type.css` — all design tokens (color light+dark, type, spacing, radius, shadow,
  motion). Import once at the app root; toggle dark with `<html data-theme="dark">`.
- `ui_kits/codespec/` — core React components + `components.css` + `Icon.jsx`, and an
  interactive `index.html` reference. Copy these to prototype screens quickly.
- `preview/` — small spec cards for each token group and component.

If creating visual artifacts (mocks, throwaway prototypes, slides), copy the assets out and
build static HTML files for the user to view. If working on production Electron/React code,
read the rules here and use the tokens directly; swap the inline `Icon.jsx` for
`@phosphor-icons/react` (duotone weight), which the inline set is designed to mirror.

If invoked with no other guidance, ask the user what they want to build, ask a few focused
questions, then act as an expert designer who outputs HTML artifacts or production code as
needed — always rooted in these tokens and components.
