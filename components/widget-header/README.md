# Widget Header

The top section of every content card in the Adthena Design System. Combines a coloured roundel icon, title, and optional subtitle on the left with icon-only action buttons on the right.

## Features

- Coloured roundel icon (32×32px, `#93a1b6` background) with any inline SVG icon
- Title (16px, semibold, `rgba(0,0,0,0.87)`) + optional subtitle (13px, `#6b6b6b`)
- Right-side action buttons — settings, info, download (30×30px, hover state)
- Title truncates with ellipsis on overflow
- Four documented variants: Default / Title-only+Info / Download+Info / No Actions

## Figma

Node `169:2345` · File `ugMYx2Jf3KY7uZmha2U0WP`

## Usage

```html
<link rel="stylesheet" href="widget-header.css">
```

### Default (Title + Subtitle + Settings + Info)

```html
<div class="wh">
  <div class="wh__thumb">
    <svg><use href="#icon-pin"/></svg>
  </div>
  <div class="wh__body">
    <span class="wh__title">Competitive Share</span>
    <span class="wh__subtitle">Brand visibility across all monitored categories</span>
  </div>
  <div class="wh__actions">
    <button class="wh__btn" title="Settings"><!-- settings icon --></button>
    <button class="wh__btn" title="Info"><!-- info icon --></button>
  </div>
</div>
```

### Title Only + Info

```html
<div class="wh">
  <div class="wh__thumb">
    <svg><use href="#icon-chart"/></svg>
  </div>
  <div class="wh__body">
    <span class="wh__title">Growing Fastest</span>
  </div>
  <div class="wh__actions">
    <button class="wh__btn" title="Info"><!-- info icon --></button>
  </div>
</div>
```

### No Actions

```html
<div class="wh">
  <div class="wh__thumb">
    <svg><use href="#icon-chart"/></svg>
  </div>
  <div class="wh__body">
    <span class="wh__title">Intent Topics</span>
    <span class="wh__subtitle">Query intent breakdown by category</span>
  </div>
</div>
```

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `bg.paper` | `#ffffff` | Container background |
| Card radius | `12px` | Container corner radius |
| Container padding | `24px` | `.wh` padding |
| Roundel size | `32 × 32px` | `.wh__thumb` |
| Roundel bg | `#93a1b6` | `.wh__thumb` background |
| Icon size | `20 × 20px` | Inside roundel |
| Icon colour | `#ffffff` | Inside roundel |
| Gap (icon → body) | `8px` | `.wh` gap |
| Title size | `16px` | `.wh__title` |
| Title weight | `600` | `.wh__title` |
| Title colour | `rgba(0,0,0,0.87)` | `.wh__title` |
| Title line-height | `17px` | `.wh__title` |
| Subtitle size | `13px` | `.wh__subtitle` |
| Subtitle colour | `#6b6b6b` | `.wh__subtitle` |
| Subtitle line-height | `14px` | `.wh__subtitle` |
| Actions gap | `8px` | `.wh__actions` gap |
| Actions left padding | `12px` | `.wh__actions` padding-left |
| Button size | `30 × 30px` | `.wh__btn` |
| Button radius | `6px` | `.wh__btn` |
| Button icon colour | `#6b6b6b` | `.wh__btn` default |
| Button hover bg | `rgba(0,0,0,0.06)` | `.wh__btn:hover` |
| Button hover colour | `#27365b` | `.wh__btn:hover` |

## Demo

Open `demo.html` in a browser or via [htmlpreview.github.io](https://htmlpreview.github.io/?https://github.com/pavelfernandez-Atd/claude_desig_system/blob/main/components/widget-header/demo.html).
