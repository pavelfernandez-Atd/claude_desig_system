# Table Chart Template

A ranked table combining a multi-segment stacked bar (position mix) with a proportional context bar (impression volume).

## Features
- Sortable column headers (↕/↓/↑) — click to sort asc/desc by any column
- Stacked position mix bar (Above/Inside/Below) with hover tooltip
- Proportional impression volume bar with formatted value (M/K)
- Favicon-based competitor identity via Google S2 API
- Active sort column: icon at full opacity, values bolded in rows

## Structure
```html
<div class="tct">
  <!-- Header -->
  <div class="tct__header" style="grid-template-columns:200px 1fr 180px;">
    <span class="tct__col-label">Competitor</span>
    <div class="tct__mix" style="grid-template-columns:1fr 68px 68px 68px;">
      <span class="tct__col-label">Position mix</span>
      <span class="tct__col-label tct__col-label--above tct__col-label--sortable" data-sort="above">Above</span>
      <span class="tct__col-label tct__col-label--inside tct__col-label--sortable" data-sort="inside">Inside</span>
      <span class="tct__col-label tct__col-label--below tct__col-label--sortable" data-sort="below">Below</span>
    </div>
    <div class="tct__impr" style="grid-template-columns:1fr 44px;padding-left:20px;">
      <span class="tct__col-label tct__col-label--sortable" data-sort="impr">Est. AIO Impressions</span>
    </div>
  </div>
  <!-- Rows (JS-rendered) -->
  <div id="tct-rows"></div>
  <!-- Tooltip -->
  <div id="tct-tip" style="display:none;position:fixed;..."></div>
</div>
```

## Data format
```js
const ROWS = [
  { domain: 'amazon.com', above: 31, inside: 22, below: 18, impr: 2840000 },
  // …
];
```

## Grid layout
- Root: `grid-template-columns: 200px 1fr 180px`
- Mix sub-grid: `grid-template-columns: 1fr 68px 68px 68px; gap: 16px`
- Impressions sub-grid: `grid-template-columns: 1fr 44px; padding-left: 20px`

## Colours
- Above segment: `#8ac8b1`  Inside: `#b3a2e7`  Below: `#e86492`
- Impression bar: `#64abfb`
- Column label colours: Above `#4a9e87` · Inside `#7b65c9` · Below `#c73d6e`
