# KPI Card

Metric summary card with label, large numeric value, delta indicator, and an inline SVG sparkline. Supports up/down/flat trend states. Tooltip shown on sparkline hover.

## Quick Start

```html
<link rel="stylesheet" href="kpi-card.css">
```

See `demo.html` for a fully working example.

## CSS Classes

| Class | Purpose |
|---|---|
| `.kpi-card` | Card container |
| `.kpi-card__header` | Header row with label and info icon |
| `.kpi-card__label` | Uppercase metric label |
| `.kpi-card__info-icon` | Circular info button |
| `.kpi-info-wrap` | Tooltip anchor wrapper |
| `.kpi-info-tooltip` | Floating tooltip (hover to show) |
| `.kpi-card__body` | Content column |
| `.kpi-card__row` | Flex row: values + sparkline |
| `.kpi-card__values` | Value + delta cluster |
| `.kpi-card__values--full` | Expands to fill remaining width |
| `.kpi-card__bar` | Thin blue vertical accent bar |
| `.kpi-card__value` | Large metric number |
| `.kpi-card__value-unit` | Smaller unit suffix |
| `.kpi-card__delta` | Change indicator |
| `.kpi-card__delta--up` | Green positive delta |
| `.kpi-card__delta--down` | Red negative delta |
| `.kpi-card__delta--flat` | Blue-grey flat delta |
| `.kpi-card__sparkline` | Sparkline container |
| `.kpi-card__subtitle` | Small subtitle below values |


## JavaScript API

Link `kpi-card.js` after `kpi-card.css`. The script auto-initialises on `DOMContentLoaded`.

```html
<link rel="stylesheet" href="kpi-card.css">
<script src="kpi-card.js"></script>
```

## Design Tokens

All colours and sizing use Adthena Design System CSS custom properties defined in `:root`.

---

*Adthena Design System — auto-generated component package*
