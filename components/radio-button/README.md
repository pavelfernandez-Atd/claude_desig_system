# Radio Button — `radio`

Single-choice selection control. Users pick one option from a set — selecting a new option automatically deselects the previous one. Five visual states: Default, Hovered, Set, Disabled, and Disabled Set.

Built from Figma node **88:1250** via the Figma MCP workflow.

---

## Files

| File | Purpose |
|---|---|
| `radio-button.css` | All `.radio` styles — drop into your stylesheet |
| `radio-button.js` | `radioSelect()` — manages group selection state |
| `demo.html` | Self-contained working example |

---

## Quick start

```html
<!-- 1. Load Open Sans (or serve it locally) -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wdth,wght@75,300;75,400;75,600;100,300;100,400;100,600&display=swap" rel="stylesheet">

<!-- 2. Styles -->
<link rel="stylesheet" href="radio-button.css">

<!-- 3. Markup — a selectable group -->
<div class="radio-group" id="radio-demo-plan">
  <label class="radio-row" onclick="radioSelect('plan', 0)">
    <div class="radio">
      <div class="radio__outer radio__outer--set">
        <div class="radio__inner"></div>
      </div>
    </div>
    <span class="radio-label">Option A</span>
  </label>
  <label class="radio-row" onclick="radioSelect('plan', 1)">
    <div class="radio">
      <div class="radio__outer radio__outer--default"></div>
    </div>
    <span class="radio-label">Option B</span>
  </label>
</div>

<!-- 4. Script -->
<script src="radio-button.js"></script>
```

The container `id` must follow the pattern `radio-demo-<groupName>`, and the `onclick` calls must pass the same `groupName` string with a zero-based index.

---

## States

| Class | Description |
|---|---|
| `.radio__outer--default` | Unselected, interactive |
| `.radio__outer--hovered` | Cursor hover — blue border, pointer cursor |
| `.radio__outer--set` | Selected — blue fill with white inner dot |
| `.radio__outer--disabled` | Not interactive, unselected |
| `.radio__outer--disabled-set` | Not interactive, locked selected |

Add `.radio__inner` inside the outer for any "set" state.

For disabled rows, add `.radio-row--disabled` to the `<label>` and `.radio-label--disabled` to the text span.

---

## JavaScript API

```js
// Select index 1 in the group with id="radio-demo-plan"
radioSelect('plan', 1);
```

The function replaces all siblings in the group with `--default` and sets the target item to `--set`, creating or removing the `.radio__inner` dot as needed.

---

## Design tokens

| Token | Value | Usage |
|---|---|---|
| `core/primary/main` | `#0c8dea` | Set fill + Hovered border |
| `neutral/600` | `#496f97` | Default border |
| `core/states/disabled` | `#bacfe2` | Disabled border + Disabled Set fill |
| `white/white` | `#ffffff` | Inner dot |
| Outer size | `16 × 16 px` | Circle dimensions |
| Inner dot | `10 × 10 px` | Selected dot |
| Border width | `1.5 px` | All border states |
| Border radius | `8 px` | Fully round |
| Row gap | `12 px` | Between rows in a group |
| Label gap | `8 px` | Between circle and text |
