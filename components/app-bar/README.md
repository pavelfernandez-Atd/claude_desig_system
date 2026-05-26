# App Bar

The global navigation bar rendered at the top of every Adthena page. Contains the hamburger, Adthena logo, domain/location selector, Ask Arlo section, and right-side icon buttons (notifications, settings, data, profile).

## Quick Start

```html
<link rel="stylesheet" href="app-bar.css">
```

See `demo.html` for a fully working example.

## CSS Classes

| Class | Purpose |
|---|---|
| `.app-bar` | Root nav bar — dark blue background, 50px height |
| `.app-bar__content` | Inner flex row, full width |
| `.app-bar__left` | Left cluster (hamburger, logo) |
| `.app-bar__center` | Flex-grow spacer |
| `.app-bar__right` | Right cluster (domain, icons) |
| `.app-bar__hamburger` | Hamburger button |
| `.app-bar__vdivider` | Vertical separator line |
| `.app-bar__domain-btn` | Domain / location selector button |
| `.app-bar__domain-text` | Domain label text |
| `.app-bar__arlo-section` | Ask Arlo group |
| `.app-bar__icons` | Icon button cluster |
| `.app-bar__icon-btn` | Single icon button |
| `.app-bar__icon-btn--pill` | Pill-radius variant (profile) |
| `.app-bar__badge` | Red notification badge |


## JavaScript API

Link `app-bar.js` after `app-bar.css`. The script auto-initialises on `DOMContentLoaded`.

```html
<link rel="stylesheet" href="app-bar.css">
<script src="app-bar.js"></script>
```

## Design Tokens

All colours and sizing use Adthena Design System CSS custom properties defined in `:root`.

---

*Adthena Design System — auto-generated component package*
