# Donut Chart

SVG donut chart with a centred value label and subtitle. JS draws the SVG segments on init.

## Quick Start

```html
<link rel="stylesheet" href="donut-chart.css">
```

See `demo.html` for a fully working example.

## CSS Classes

| Class | Purpose |
|---|---|
| `.donut-chart` | Relative container (248×248px) |
| `.donut-chart__svg` | SVG element — JS draws segments |
| `.donut-chart__label` | Absolutely centred label overlay |
| `.donut-chart__value-row` | Value + unit row |
| `.donut-chart__value` | Large numeric value |
| `.donut-chart__unit` | Smaller unit suffix |
| `.donut-chart__subtitle` | Descriptive subtitle |


## JavaScript API

Link `donut-chart.js` after `donut-chart.css`. The script auto-initialises on `DOMContentLoaded`.

```html
<link rel="stylesheet" href="donut-chart.css">
<script src="donut-chart.js"></script>
```

## Design Tokens

All colours and sizing use Adthena Design System CSS custom properties defined in `:root`.

---

*Adthena Design System — auto-generated component package*
