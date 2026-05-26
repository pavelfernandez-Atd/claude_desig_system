# Multi-Chart Lines — `mclc`

Stacked metric rows, each with a KPI highlight tile on the left and a smooth
sparkline area chart on the right. Used to show multiple related time-series
metrics at a glance (e.g. Mentions, Citations, Links).

---

## Files

| File | Purpose |
|---|---|
| `multi-chart-lines.css` | All `.mclc` styles — drop into your stylesheet |
| `multi-chart-lines.js` | Draws curves + wires hover interaction |
| `demo.html` | Self-contained working example |

---

## Quick start

```html
<!-- 1. Load Open Sans (or serve it locally) -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wdth,wght@75,300;75,400;75,600;100,300;100,400;100,600&display=swap" rel="stylesheet">

<!-- 2. Styles -->
<link rel="stylesheet" href="multi-chart-lines.css">

<!-- 3. Markup (see demo.html for full structure) -->
<div class="mclc">
  <div class="mclc__body">
    <div class="mclc__row">
      <div class="mclc__kpi" style="color:#6848c6">
        <div class="mclc__kpi-inner">
          <span class="mclc__kpi-label">Mentions</span>
          <span class="mclc__kpi-value">744</span>
          <span class="mclc__kpi-delta mclc__kpi-delta--up">+22%</span>
        </div>
      </div>
      <div class="mclc__chart">
        <div class="mclc__y-labels"><span>800</span><span>0</span></div>
        <div class="mclc__canvas-wrap">
          <div class="mclc__bands">
            <div class="mclc__band"></div>
            <div class="mclc__band"></div>
            <div class="mclc__band"></div>
            <div class="mclc__band"></div>
          </div>
          <svg class="mclc__svg"
               viewBox="0 0 100 100"
               preserveAspectRatio="none"
               data-color="#6848c6"
               data-ymin="0"
               data-ymax="800"
               data-start="2026-04-21"
               data-vals="0.76,0.77,...,0.93">
          </svg>
        </div>
      </div>
    </div>
    <!-- repeat .mclc__divider + .mclc__row for each additional metric -->
  </div>
</div>

<!-- 4. Script (auto-inits on DOMContentLoaded) -->
<script src="multi-chart-lines.js"></script>
```

---

## SVG data attributes

| Attribute | Required | Description |
|---|---|---|
| `data-color` | ✓ | Hex colour for the stroke and gradient fill |
| `data-ymin` | | Minimum Y value (default: `0`) |
| `data-ymax` | ✓ | Maximum Y value — should match the top y-axis label |
| `data-vals` | ✓ | Comma-separated normalised values **0–1**, one per data point |
| `data-start` | | ISO date of the first point (`"2026-04-21"`). Each subsequent point is +1 day. When set, the hover tooltip shows the date above the value. |

### Generating `data-vals`

Normalise your raw values to the 0–1 range before rendering:

```js
const raw = [612, 688, 720, 744];
const ymax = 800;
const vals = raw.map(v => (v / ymax).toFixed(2)).join(',');
// → "0.77,0.86,0.90,0.93"
```

---

## X-axis date labels

The x-axis row uses invisible spacers to align dates with the chart canvas:

```html
<div class="mclc__x-axis">
  <div class="mclc__x-kpi-spacer"></div>   <!-- mirrors 148px KPI tile -->
  <div class="mclc__x-chart">
    <!-- Set text to the widest y-axis value in your dataset -->
    <span class="mclc__x-y-spacer">800</span>
    <div class="mclc__x-labels">
      <span class="mclc__x-label">21 Apr, 2026</span>
      <span class="mclc__x-label">19 May, 2026</span>
      <!-- add more labels as needed -->
    </div>
  </div>
</div>
```

---

## JavaScript API

```js
// Auto-runs on DOMContentLoaded with the draw-on animation — no call needed in most cases.

// To re-draw after dynamic content insertion (e.g. tab switch), with animation:
mclcInit(true);

// To re-draw silently without animation:
mclcInit();
```

---

## Colour themes

Set `color` on `.mclc__kpi` — the label, value, and delta all inherit it:

| Series | Hex |
|---|---|
| Mentions / AI topics | `#6848c6` (purple) |
| Citations / links | `#3785dd` (blue) |
| Links / teal signal | `#36AEBA` (teal) |
| Any DS accent colour | cascades automatically |

Delta colours are fixed:
- Up   `#40af46` — add class `mclc__kpi-delta--up`
- Down `#de5a5a` — add class `mclc__kpi-delta--down`

---

## Design tokens

| Token | Value | Used for |
|---|---|---|
| Border radius | `12px` | Card + KPI tile |
| Row height | `93px` | Each metric row |
| KPI tile | `148 × 68px` | Left tile |
| Body padding | `16px 24px 0` | Inner content |
| Card padding-bottom | `24px` | Bottom of card |
| Row gap | `10px` | KPI ↔ chart |
| Chart gap | `8px` | Y-labels ↔ canvas |
| Ghost band | `32px wide · #d9d9d9 · 10% opacity` | Background bars |
| Ghost band padding | `0 40px` | Canvas horizontal inset |
| SVG top offset | `20px` | Clears y-axis max label |
| Y-axis label colour | `#858585` | Axis text |
| Divider colour | `#C0CDE0` | Between rows |
