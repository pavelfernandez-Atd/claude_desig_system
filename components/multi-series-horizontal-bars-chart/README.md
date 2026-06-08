# Multi-Series Horizontal Bars Chart

A grouped horizontal bar chart for comparing multiple series across categories. Extends the single-series `.hbar` pattern with group highlighting, grouped tooltips, and a series legend.

## Features
- 8px bars with 4px inner gap between series in a group
- 8px gap between groups
- Group highlight rect fades in on hover
- Invisible hit rect triggers group tooltip
- Series legend (colour swatch + name)

## Structure
```html
<div class="hbar">
  <svg class="hbar__svg" viewBox="0 0 640 232">
    <!-- Group highlight rects -->
    <rect class="hbar__group-hl" data-group="0" x="62" y="8" width="558" height="36" .../>
    <!-- Gridlines -->
    <!-- X-axis labels -->
    <!-- Category labels (text-anchor=end) -->
    <!-- Bars per group/series -->
    <path class="hbar__bar hbar__bar--grouped" fill="#b3a2e7" d="..." data-group="0" data-series="Your Brand" data-value="35%"/>
    <!-- Hit rects (one per group) -->
    <rect class="hbar__group-hit" data-group="0" x="62" y="8" width="558" height="36" .../>
  </svg>
  <!-- Legend -->
  <div class="hbar__tooltip" id="tip"></div>
</div>
```

## Coordinates (default)
- viewBox: `0 0 640 H`
- Plot x: `68 → 620` (552px, max 40%)
- Gridlines: 0%=68, 10%=206, 20%=344, 30%=482, 40%=620
- Bar height: 8px · Inner gap: 4px · Group gap: 8px
- Group height: 32px (3×8 + 2×4) · Group pitch: 40px (32+8)
- Category labels: `text-anchor=end` at x=64

## Colours
Series palette: `#b3a2e7` `#64abfb` `#d47dd4` `#e86492` `#8ac8b1` …

## When to use
Use when you need to compare 2–4 series across a set of categories simultaneously. The groups make per-category comparison easy while the length difference between series remains clear across groups.
