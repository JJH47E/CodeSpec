# CodeSpec — Design System

A design system for **CodeSpec**, a desktop GUI (Electron + React) that sits on top of
[OpenSpec](https://github.com/Fission-AI/OpenSpec) and a locally installed AI coding CLI
(Claude Code, GitHub Copilot CLI, Gemini CLI, Codex, etc.).

> **Note:** This system was built from scratch with no prior brand or codebase — the
> visual direction is derived from the brief (clean modern IDE, calm/neutral/precise,
> GitHub-Desktop-like) rather than an existing product. Treat everything here as a
> proposed v1 to react to and refine.

---

## What the product does

CodeSpec gives a spec-driven AI workflow a calm, trackable GUI:

- **Invoke OpenSpec skills** — `explore`, `propose`, `apply` — without living in the terminal.
- **Track changes** — a dashboard of **open** and **archived** changes, each moving through
  states: `draft → proposed → partial → applied → archived`. (**Partial** = an apply run
  where some tasks landed and others didn't — surfaced in amber.)
- **Talk to the AI** — a chat surface with a **model/tool picker** (dropdown) to choose
  which CLI + model is driving the session.
- **No built-in diff (MVP)** — diffing is intentionally delegated to the user's git client.

The product personality: a quiet, precise instrument. It should feel like a well-made
developer tool — trustworthy, legible, never loud. Color is used sparingly and with
intent (status, selection, the single blue accent); structure and typography carry the
design, not decoration.

---

## Sources

- **Brand/codebase:** none provided — built from scratch per a design questionnaire.
- **Stated inspiration:** GitHub Desktop (clean, neutral, calm).
- **Underlying tool:** OpenSpec (spec-driven development CLI).
- **Fonts:** Geist + Geist Mono (Google Fonts). See *Visual Foundations → Type*.
- **Icons:** Phosphor Icons, **duotone** weight, via CDN. See *Iconography*.

---

## Content fundamentals

How CodeSpec writes copy:

- **Voice:** plain, direct, technical-but-human. Like a thoughtful senior engineer — never
  cute, never marketing-y. No exclamation points in product UI.
- **Person:** address the user as **you**; the app refers to itself by feature, not "I"
  (e.g. "CodeSpec couldn't reach the CLI", not "I couldn't…"). The AI chat surface is the
  one place a first-person assistant voice is acceptable, and that text comes from the model.
- **Casing:** **Sentence case** everywhere — buttons, menus, headings, labels.
  ("New change", not "New Change".) Reserve ALL-CAPS only for tiny overline labels with
  letter-spacing.
- **Verbs:** lead actions with verbs that mirror OpenSpec — *Explore*, *Propose*, *Apply*,
  *Archive*. Keep button labels to 1–2 words.
- **Terminology (be consistent):** *change* (a unit of work), *spec*, *proposal*,
  *session* (an AI conversation), *skill* (an OpenSpec command), *model* (the LLM),
  *tool/CLI* (the agent harness). A change is "open" or "archived".
- **Numbers & status:** state is shown as a small badge with sentence-case text
  (`Proposed`, `Applied`). Empty states get one short helpful sentence + one action.
- **Emoji:** none in product UI. (Status is communicated by badge color + duotone icon.)
- **Microcopy examples:**
  - Empty dashboard: "No open changes. Propose one to get started." → `[Propose a change]`
  - Destructive confirm: "Archive this change? It moves to the archive and stops syncing."
  - Error: "Couldn't reach Claude Code. Check the CLI is installed and on your PATH."

---

## Visual foundations

### Color
- **Light is the default; dark is fully supported** via `:root[data-theme="dark"]`.
- A **cool neutral gray ramp** carries 90% of every screen. Whites are very subtly cool,
  never pure `#fff` for the app shell (`--bg-app` is `#f6f8fa`); surfaces sit *above* the
  shell in plain white.
- **One accent: blue** (`--accent-emphasis` `#2a6fdb`). Used for primary actions, links,
  selection, and focus. Resist adding second accents.
- **Semantic colors** (green/amber/red) appear only for success/warning/danger and for the
  five **change states** (`draft` · `proposed` · `partial` · `applied` · `archived`; `partial`
  borrows the amber/warning hue). Each has an `-fg`, `-emphasis`, `-muted` (badge bg), and
  `-subtle` (wash) tier so contrast stays correct in both themes.
- All tokens are **semantic-first** (`--bg-surface`, `--fg-muted`). Raw ramps
  (`--gray-500`) exist only to compose new semantic tokens.

### Type
- **UI:** Geist — a clean geometric sans. Weights used: 400 / 450 / 500 / 600. Headings are
  600 with slight negative tracking; body is 400.
- **Code / specs / paths / terminal:** Geist Mono.
- **Base UI size is 14px** (comfortable density). Scale: 12 · 13 · 14 · 15 · 16 · 18 · 20 ·
  24 · 30 · 36. Line-height 1.55 for body, 1.25 for headings.
- ALL-CAPS only for `--cs-overline` micro-labels (12px, 600, +0.06em tracking).

### Spacing & layout
- **4px base grid.** Spacing tokens `--space-1..13`. Comfortable density: list rows ~36–40px
  tall, 12–16px gutters, 16–24px panel padding.
- Layout is **panelled** like an IDE: a left sidebar (changes/nav), a main content column,
  and contextual right panels. Panels are divided by 1px borders, not heavy shadows.
- Always lay out groups with flex/grid + `gap` (never margin-chains).

### Radius & edges
- **Subtly rounded.** `--radius-md` (4px) is the workhorse for buttons, inputs, rows.
  Cards/popovers use 6px, modals 10px. Nothing is sharp-cornered; nothing is pill-soft
  except true pills (badges/avatars).

### Elevation & borders
- **Borders do the structural work**; shadows are quiet. Cards = 1px border + `--shadow-xs`.
  Popovers/menus = `--shadow-popover`. In dark mode shadows nearly vanish — borders carry it.
- Inputs and code blocks are **inset** (`--bg-inset`) with a 1px border, no shadow.

### Motion
- Fast and unfussy. `--duration-fast` (110ms) for hovers, `--duration-base` (160ms) for
  popovers/menus, `--ease-standard`. No bounces, no large slides. Things fade + travel a
  few px. Respect `prefers-reduced-motion`.

### States
- **Hover:** background shifts to `--bg-hover` (a step up the gray ramp); accent buttons
  darken one step. No scale change.
- **Press/active:** one further step darker; no shrink (keeps it feeling solid/precise).
- **Focus:** always a visible `--ring` (3px blue, 35% alpha) — keyboard users are a
  first-class audience in a dev tool.
- **Selected:** `--bg-selected` wash + a 2px accent left-bar on list rows.
- **Disabled:** 45% opacity, no pointer events.

---

## Iconography

- **Set:** [Phosphor Icons](https://phosphoricons.com/), **duotone** weight — matches the
  "filled / duotone" request. Phosphor's duotone gives a soft filled secondary layer + a
  solid primary, which reads as calm and modern at 16–20px.
- **Delivery:** loaded from CDN in previews:
  `<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>` then
  `<i class="ph-duotone ph-git-pull-request"></i>`. For the Electron app, install
  `@phosphor-icons/react` and use `<Icon weight="duotone" />`.
- **Sizing:** 16px inline / in buttons, 20px in nav, 24px in empty states. Icon color
  follows text color (`currentColor`); the duotone secondary layer is auto-tinted.
- **Usage:** icons support labels, they rarely replace them. Nav items and actions pair an
  icon + a word. Status uses a duotone icon + colored badge.
- **No emoji. No hand-drawn SVG.** If an exact glyph is missing, pick the nearest Phosphor
  duotone rather than inventing one.
- **Suggested mappings:** explore → `ph-compass`, propose → `ph-git-pull-request`,
  apply → `ph-check-circle`, archive → `ph-archive`, spec → `ph-file-text`,
  session/chat → `ph-chats-circle`, model → `ph-cpu`, settings → `ph-gear-six`,
  repo → `ph-git-branch`, run → `ph-play`.

---

## Index — what's in this system

| File | What it is |
|------|------------|
| `colors_and_type.css` | **The tokens.** Color (light+dark), type, spacing, radius, shadow, motion. Import once at app root. |
| `README.md` | This file — context, content + visual foundations, iconography. |
| `SKILL.md` | Agent-Skill manifest so this system can be used inside Claude Code. |
| `preview/*.html` | Small spec cards rendered in the Design System tab (color, type, spacing, components). |
| `ui_kits/codespec/` | Core component UI kit: buttons, inputs, cards, menus (React/JSX) + an interactive `index.html` demo. |

### Quick start
```html
<link rel="stylesheet" href="colors_and_type.css">
<!-- toggle dark: document.documentElement.setAttribute('data-theme','dark') -->
<button style="
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 500;
  color: var(--fg-on-accent); background: var(--accent-emphasis);
  border: none; border-radius: var(--radius-md); padding: var(--space-3) var(--space-6);">
  Propose a change
</button>
```

---

## Caveats
- **Fonts use the Google Fonts CDN.** For an offline Electron build you'll want to vendor
  Geist + Geist Mono into `/fonts` and swap the `@import` for `@font-face`. Flagged so you
  can decide on licensing/bundling.
- Built **without a real codebase or screens** — the component look is a proposal. The
  next pass would be interactive UI-kit *screens* (dashboard, spec editor, chat session)
  once you confirm the foundations.
