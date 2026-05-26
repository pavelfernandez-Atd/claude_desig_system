# Main Nav

Collapsible vertical sidebar navigation with grouped links, icons, and active state highlighting. JS handles expand/collapse and active link tracking.

## Quick Start

```html
<link rel="stylesheet" href="main-nav.css">
```

See `demo.html` for a fully working example.

## CSS Classes

| Class | Purpose |
|---|---|
| `.main-nav` | Sidebar nav container |
| `.main-nav__list` | Unstyled list |
| `.main-nav__item` | List item |
| `.main-nav__item--active` | Active/selected item |
| `.main-nav__link` | Nav link row |
| `.main-nav__icon` | 16×16 icon |


## JavaScript API

Link `main-nav.js` after `main-nav.css`. The script auto-initialises on `DOMContentLoaded`.

```html
<link rel="stylesheet" href="main-nav.css">
<script src="main-nav.js"></script>
```

## Design Tokens

All colours and sizing use Adthena Design System CSS custom properties defined in `:root`.

---

*Adthena Design System — auto-generated component package*
