# Inline Bars Chart

Stacked proportional bar rows used to compare category distributions across two entities. Each row shows a label, a pill-capped bar strip with coloured segments and inline percentages, and a shared legend. Hover reveals a breakdown tooltip.

## Quick Start

```html
<link rel="stylesheet" href="inline-bars-chart.css">
```

See `demo.html` for a fully working example.

## CSS Classes

| Class | Purpose |
|---|---|
| `.ibc` | Root chart container |
| `.ibc__rows` | Column of bar rows |
| `.ibc__row` | Single row (label + bars) |
| `.ibc__label` | Row label area |
| `.ibc__label-icon` | 14×14 favicon/icon |
| `.ibc__label-text` | Row label text |
| `.ibc__bars-wrap` | Tooltip anchor |
| `.ibc__bars` | Flex bar strip container |
| `.ibc__bar` | Individual colour segment |
| `.ibc__legend` | Legend row below bars |
| `.ibc__legend-item` | Single legend entry |
| `.ibc__legend-dot` | Colour dot |
| `.ibc__legend-label` | Legend text |
| `.ibc__tooltip` | Hover breakdown tooltip |
| `.ibc__tooltip-title` | Tooltip category name |
| `.ibc__tooltip-row` | Tooltip stat row |
| `.ibc__tooltip-dot` | Sentiment colour dot |
| `.ibc__tooltip-val` | Value text |
| `.ibc__tooltip-divider` | Horizontal rule |
| `.ibc__tooltip-btn` | View Samples button |


## JavaScript API

Link `inline-bars-chart.js` after `inline-bars-chart.css`. The script auto-initialises on `DOMContentLoaded`.

```html
<link rel="stylesheet" href="inline-bars-chart.css">
<script src="inline-bars-chart.js"></script>
```

## Design Tokens

All colours and sizing use Adthena Design System CSS custom properties defined in `:root`.

---

*Adthena Design System — auto-generated component package*
