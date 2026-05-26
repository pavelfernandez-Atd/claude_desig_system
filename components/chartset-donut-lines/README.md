# ChartSet Donut + Lines

Composite layout combining a donut chart with a side-by-side JS-rendered line timeline. The timeline SVG fills its container and is redrawn on resize via ResizeObserver.

## Quick Start

```html
<link rel="stylesheet" href="chartset-donut-lines.css">
```

See `demo.html` for a fully working example.

## CSS Classes

| Class | Purpose |
|---|---|
| `.chartset-donut-lines` | Flex row: donut + timeline |
| `.chartset-timeline` | Timeline panel (fafafa bg, rounded) |
| `.chartset-timeline__svg` | Full-size SVG — JS renders geometry |


## JavaScript API

Link `chartset-donut-lines.js` after `chartset-donut-lines.css`. The script auto-initialises on `DOMContentLoaded`.

```html
<link rel="stylesheet" href="chartset-donut-lines.css">
<script src="chartset-donut-lines.js"></script>
```

## Design Tokens

All colours and sizing use Adthena Design System CSS custom properties defined in `:root`.

---

*Adthena Design System — auto-generated component package*
