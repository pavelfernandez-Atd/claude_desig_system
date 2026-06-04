# Timeline Chart

A multi-series line chart for comparing absolute values across competitors or categories over time.

## Features
- Smooth cubic-bezier lines, JS-rendered
- Hover indicator + sorted tooltip showing all series values for a date
- Legend using `chart-legend-item` — click to toggle series visibility (`csd-series--off`)
- Axis labels dynamically scaled to render at 13px regardless of SVG viewport

## Structure
```html
<div class="timeline-chart">
  <div style="position:relative;">
    <svg class="timeline-chart__svg" viewBox="0 0 740 230">
      <!-- grid lines: x1="36" x2="728", y positions for 0/25/50/75/100% of YMAX -->
      <!-- axis labels: class="tc-axis-label" -->
      <g id="tc-lines"><!-- JS renders one path per visible series --></g>
      <line id="tc-indicator" ... style="display:none"/>
      <rect id="tc-hit" x="36" y="18" width="692" height="182" fill="transparent" style="cursor:crosshair"/>
    </svg>
    <div class="timeline-chart__tooltip"></div>
  </div>
  <div class="timeline-chart__legend"><!-- chart-legend-item per series --></div>
</div>
```

## Data format
```js
const SERIES = [
  { label: 'amazon.com', color: '#b3a2e7', favicon: 'https://...', values: [28, 26, 31, ...] },
  // one entry per series
];
const DATES = ['27 Apr, 2026', '28 Apr, 2026', ...]; // same length as values
```

## Chart coordinates
- viewBox: `0 0 740 230`
- Plot x: `36 → 728` (width 692)
- Plot y: `18 → 200` (height 182)
- YMAX: configure to match data range (e.g. 40 for 0–40%)

## Colour palette
Use the DS chart palette in index order: `#b3a2e7` `#64abfb` `#d47dd4` `#e86492` `#8ac8b1` `#53bdc5` `#ff7a1a` `#de5a5a` `#435a97` `#814e2c`

## When to use
Use when comparing absolute values across multiple series (competitors, products, categories) over time. For proportional share data that sums to 100%, use **Stacked Timeline** instead.
