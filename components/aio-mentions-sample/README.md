# AIO Mentions Sample

Scrollable table of AI Overview mention rows. Each row shows brand name, search term, date, a quote with the brand highlighted, and sentiment/position chips. Includes filter dropdown and tab switcher.

## Quick Start

```html
<link rel="stylesheet" href="aio-mentions-sample.css">
```

See `demo.html` for a fully working example.

## CSS Classes

| Class | Purpose |
|---|---|
| `.mentions-sample` | Card root container |
| `.mentions-sample__toolbar` | Toolbar row |
| `.mentions-sample__body` | Main content area |
| `.mentions-sample__table-header` | Column header bar |
| `.mentions-sample__th` | Header cell |
| `.mentions-sample__rows` | Scrollable rows container |
| `.mentions-sample__row` | Single mention row |
| `.mentions-sample__content` | Row content flex row |
| `.mentions-sample__label` | Brand + query text column |
| `.mentions-sample__brand-name` | Brand name |
| `.mentions-sample__search-term` | Query text |
| `.mentions-sample__quote` | LLM quote text |
| `.mentions-sample__quote-brand` | Bold brand in quote |
| `.mentions-sample__cell` | Data cell |
| `.mentions-sample__tabs-container` | Tab strip wrapper |
| `.mentions-sample__tab` | Individual tab |
| `.mentions-sample__tab--active` | Active tab |
| `.mentions-sample__tab-badge` | Count badge |


## JavaScript API

Link `aio-mentions-sample.js` after `aio-mentions-sample.css`. The script auto-initialises on `DOMContentLoaded`.

```html
<link rel="stylesheet" href="aio-mentions-sample.css">
<script src="aio-mentions-sample.js"></script>
```

## Design Tokens

All colours and sizing use Adthena Design System CSS custom properties defined in `:root`.

---

*Adthena Design System — auto-generated component package*
