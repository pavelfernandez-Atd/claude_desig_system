# Toggle

A binary on/off control for the Adthena Design System. Gives users immediate feedback of a state change — no form submission required.

## Features

- 8 visual states: On / Off × Default / Hovered / Pressed / Disabled
- Static display classes (`.ds-toggle` + modifiers) for use in prototypes
- Interactive native checkbox variant (`.ds-toggle-input`) for real interactivity
- With-label variant (`.ds-toggle-row` + `.ds-toggle-row__label`) — 14px, neutral/700
- CSS transitions: `0.18s ease` on track colour and thumb position

## Figma

Node `167:1041` · File `ugMYx2Jf3KY7uZmha2U0WP`

## Usage

```html
<link rel="stylesheet" href="toggle.css">
```

### Static display

```html
<!-- Off -->
<div class="ds-toggle">
  <div class="ds-toggle__thumb"></div>
</div>

<!-- On -->
<div class="ds-toggle ds-toggle--on">
  <div class="ds-toggle__thumb"></div>
</div>

<!-- On + Pressed -->
<div class="ds-toggle ds-toggle--on ds-toggle--pressed">
  <div class="ds-toggle__thumb"></div>
</div>
```

### With label (right-side label variant)

```html
<div class="ds-toggle-row">
  <div class="ds-toggle ds-toggle--on"><div class="ds-toggle__thumb"></div></div>
  <span class="ds-toggle-row__label">Gap Analysis</span>
</div>
```

### Interactive (real checkbox)

```html
<label class="ds-toggle-label">
  <input type="checkbox" class="ds-toggle-input">
  Feature name
</label>

<!-- Disabled -->
<label class="ds-toggle-label ds-toggle-label--disabled">
  <input type="checkbox" class="ds-toggle-input" disabled>
  Feature name
</label>
```

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `primary.main` | `#0c8dea` | Track — On Default |
| On hover | `#007DB8` | Track — On Hovered |
| `Brand/Navy` | `#093C6B` | Track — On Pressed |
| Off default | `#7A8FAB` | Track — Off Default |
| Off hover/press | `#6B7FA0` | Track — Off Hovered & Pressed |
| Disabled off | `#C8D3E0` | Track — Off Disabled |
| Disabled on | `#70AECE` | Track — On Disabled |
| `Background/White` | `#FFFFFF` | Thumb — all states |
| `neutral/700` | `#38476a` | With-label text |
| Track size | `35 × 20px` | — |
| Thumb size | `16 × 16px` | Offset 2px from edge |

## Demo

Open `demo.html` in a browser or via [htmlpreview.github.io](https://htmlpreview.github.io/?https://github.com/pavelfernandez-Atd/claude_desig_system/blob/main/components/toggle/demo.html).
