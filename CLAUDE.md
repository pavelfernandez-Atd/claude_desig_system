# Adthena Design System

Apply these rules for **any UI design, prototyping, mockup, component decision, layout spec, or HTML/React code generation** touching Adthena's product. When in doubt, use this file.

---

## Step 1 — Discover components (always do this first)

Before building any UI, fetch the live component registry from GitHub:

```
https://api.github.com/repos/pavelfernandez-Atd/claude_desig_system/contents/components
```

Parse the `name` field from each item in the response — these are the available components. The list updates automatically as new components are added to the repo; never rely on a remembered list.

For any component you intend to use, fetch its spec before writing code:

```
https://raw.githubusercontent.com/pavelfernandez-Atd/claude_desig_system/main/components/[component-name]/README.md
```

For the full design token source of truth:

```
https://raw.githubusercontent.com/pavelfernandez-Atd/claude_desig_system/main/src/design-tokens.ts
```

For the visual style guide (full component documentation with examples):

```
https://raw.githubusercontent.com/pavelfernandez-Atd/claude_desig_system/main/styleguide/index.html
```

---

## Design Tokens

### Colours

| Token | Hex | Usage |
|---|---|---|
| Page BG | `#e5eef5` | `<body>` / root background |
| Card BG | `#ffffff` | All cards, panels, sidebars |
| Card Light | `#fafafa` | Default/inner surface |
| Card Tinted | `#f7faff` | Insight/callout boxes inside cards |
| Navy | `#063059` | App bar, sidebar header |
| Fill Main | `#1565c0` | CTA buttons, primary actions |
| Fill Dark | `#063059` | Deep navy, headings on dark |
| Primary Main | `#0c8dea` | Links, active elements |
| Primary Medium | `#3079bd` | Secondary buttons |
| Primary Bright | `#5bb3f9` | KPI accents |
| Selected Soft | `#eaf4ff` | Active nav highlight bg |
| Text Primary | `rgba(0,0,0,0.87)` | Headings, body on white |
| Text Secondary | `rgba(0,0,0,0.6)` | Subtitles, muted |
| Text Disabled | `rgba(0,0,0,0.38)` | Disabled states |
| Text Body | `#27365b` | Body copy inside cards |
| Text Label | `#485982` | KPI labels, overlines |
| Text Sub | `#6477a2` | Badge/meta text |
| Grey Dark | `#2b2b2b` | Nav item labels |
| Border | `rgba(0,0,0,0.12)` | Card / input borders |
| Green Positive | `#40af46` | Positive change / growth |
| Red Negative | `#de5a5a` | Negative change / decline |
| Warning | `#ef6c00` | Warning states |
| Error | `#c62828` | Error states |

### Chart colour palette (polychromatic series)

Assign in index order. Never skip or reorder unless a series has a fixed semantic colour.

| Index | Hex | Name |
|---|---|---|
| 01 | `#b3a2e7` | Purple |
| 02 | `#64abfb` | Blue |
| 03 | `#d47dd4` | Magenta |
| 04 | `#e86492` | Crimson |
| 05 | `#8ac8b1` | Green |
| 06 | `#53bdc5` | Teal |
| 07 | `#ff7a1a` | Orange |
| 08 | `#de5a5a` | Red |
| 09 | `#435a97` | Navy |
| 10 | `#814e2c` | Brown |
| 11 | `#c8d09c` | Olive |
| — | `#d3dbe6` | Neutral (inactive / "other" segments) |
| — | `#e8eaf5` | Null (no-data / empty states) |

**Rules:**
- Single-series: use `#b3a2e7` (Purple 01)
- Two-series: Purple 01 + Blue 02
- Semantic overrides take priority: `#40af46` green / `#de5a5a` red for UI feedback (not series colours)

### Typography

| Role | Size | Weight | Colour |
|---|---|---|---|
| Font family | `'Open Sans', Helvetica, sans-serif` | — | — |
| KPI value | `44px` | 300 | `#27365b` |
| Section heading | `16px` | 600 | `rgba(0,0,0,0.87)` |
| Body | `14px` | 400 | `rgba(0,0,0,0.87)` |
| KPI label | `12px` | 600 | `#485982` |
| Caption / meta | `12px` | 400 | `rgba(0,0,0,0.6)` |
| Button (md) | `14px` | 600 | — |
| Chart legend | `13px` | 300 | `#38476a` · `'Open Sans Condensed'` |

KPI number specifics: `letter-spacing: -3px`, `line-height: 44px`

### Spacing & radii

| Measurement | Value |
|---|---|
| Page outer padding | `24px` |
| Card gap | `16px` (`gap-4`) |
| Card corner radius | `12px` (`rounded-xl`) — universal, no exceptions |
| Card inner padding | `24px` (`p-6`) standard · `16px` (`p-4`) KPI cards |
| Callout box radius | `12px` |
| Filter pill / chip radius | `200px` |
| App bar height | `50px` |
| Sidebar container width | `254px` |
| Nav card side margin | `16px` each side |
| Nav card top margin | `24px` |
| Content left offset | `278px` (254px sidebar + 24px gap) |
| Content top offset | `74px` (50px app bar + 24px gap) |
| Content max-width | `1200px` |

### Shadows

| Role | Value |
|---|---|
| Card | `0 0 16px rgba(23,42,68,0.2)` |
| Modal | `0 0 16px rgba(26,32,54,0.2)` |
| Hero card | `0 4px 14px rgba(9,58,107,0.2)` |
| Tooltip | `filter: drop-shadow(…)` via CSS |

---

## Page Layout — Canonical Structure

```
┌──────────────────────────────────────────────────────────────────────┐
│  App Bar  h-[50px]  bg-[#063059]  fixed  top-0  left-0  right-0  z-50│
└──────────────────────────────────────────────────────────────────────┘
  24px gap (mt-6)
┌────────────────────┐       ┌───────────────────────────────────────┐
│  bg-[#e5eef5]      │ 24px  │  bg-[#e5eef5]  (page background)      │
│  ┌──────────────┐  │──────▶│  pt-[74px]  pl-[278px]  pr-6  pb-10   │
│  │  Nav Card    │  │       │  ┌───────────────────────────────────┐ │
│  │  bg-white    │  │       │  │  Service Bar  bg-white  rounded-xl│ │
│  │  rounded-xl  │  │       │  └───────────────────────────────────┘ │
│  │  mx-4 mt-6   │  │       │  16px gap                              │
│  └──────────────┘  │       │  ┌───────────────────────────────────┐ │
│  fixed left-0      │       │  │  Card  bg-white  rounded-xl       │ │
│  w-[254px]         │       │  └───────────────────────────────────┘ │
└────────────────────┘       └───────────────────────────────────────┘
```

### Page shell (TSX)

```tsx
export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#e5eef5] w-full min-h-screen">

    {/* 1. App Bar — fixed top */}
    <div className="fixed top-0 left-0 right-0 z-50">
      <AppBar />
    </div>

    {/* 2. Navigation Sidebar — fixed left */}
    <div className="fixed top-[50px] left-0 bottom-0 z-40 w-[254px]
                    overflow-y-auto bg-[#e5eef5]">
      <div className="mx-4 mt-6">
        <NavigationSidebar />  {/* renders bg-white rounded-xl internally */}
      </div>
    </div>

    {/* 3. Scrollable content area */}
    <div className="pt-[74px] pl-[278px] pr-6 pb-10 bg-[#e5eef5] min-h-screen">
      <div className="flex flex-col gap-4 max-w-[1200px] mx-auto">
        <ServiceBar />
        {children}
      </div>
    </div>

  </div>
);
```

### Card shell

```tsx
<div className="bg-white rounded-xl p-6">
  {/* Card header: roundel + title + subtitle + actions */}
  <div className="flex items-center gap-2 mb-4">
    <div className="w-8 h-8 bg-[#93a1b6] rounded-full flex items-center justify-center shrink-0">
      <img className="w-5 h-5" src={iconSrc} alt="" />
    </div>
    <div className="flex flex-col gap-0.5 flex-1">
      <span className="font-semibold text-[rgba(0,0,0,0.87)] text-base leading-[17px]">Title</span>
      <span className="text-[rgba(0,0,0,0.6)] text-[13px] leading-[14px]">Subtitle</span>
    </div>
    <img src="icon-download-outline.svg" className="w-5 h-5" alt="Download" />
    <img src="icon-info-outline.svg" className="w-5 h-5 text-[#3079bd]" alt="Info" />
  </div>
  {/* card body */}
</div>
```

---

## Layout Rules (authoritative — always follow)

| Rule | Value |
|---|---|
| App Bar | `fixed top-0 left-0 right-0 z-50 h-[50px] bg-[#063059]` |
| Page background | `bg-[#e5eef5]` — full `<body>` or root div |
| Sidebar container | `fixed top-[50px] left-0 bottom-0 z-40 w-[254px] bg-[#e5eef5]` |
| Nav card | `mx-4 mt-6 bg-white rounded-xl` inside sidebar container |
| Content area | `pt-[74px] pl-[278px] pr-6 pb-10` |
| Content column | `flex flex-col gap-4 max-w-[1200px] mx-auto` |
| Service Bar | Always first element inside content column |
| Cards | `bg-white rounded-xl` — no border, no shadow — universally |
| Card padding | `p-6` standard · `p-4` KPI cards |
| Card gap | `gap-4` (16px) between all cards |

---

## Callout / Insight Box

Used at the bottom of chart cards for AI-generated observations.

```tsx
<div className="bg-[#f7faff] rounded-xl p-3 flex items-start gap-2 mt-4">
  <div className="w-7 h-7 bg-[#b0d1f6] rounded-full flex items-center justify-center shrink-0">
    <img src="icon-alert-outline.svg" className="w-4 h-4" alt="" />
  </div>
  <p className="text-[13px] text-[rgba(0,0,0,0.6)] leading-[1.5]">
    Insight copy here. <span className="font-semibold">Coming soon.</span>
  </p>
</div>
```

---

## Output Defaults

| Request type | Format |
|---|---|
| Prototype / exploration | Single-file HTML — vanilla JS, inline CSS, no build step |
| Production component | React + TypeScript + Tailwind (matches existing codebase) |
| Design spec | Markdown — component names, token values, states |
| Figma annotation | Bullet list: variants, hover/active states, edge cases, responsive |

**HTML prototypes:** No external JS unless charting (CDN chart lib is fine). Google Fonts via `@import`. Fully self-contained single file.

**React:** Tailwind utility classes. File structure: `sections/` per screen, shared atoms in `components/ui/`.

---

## Interaction & Motion

- Bar/sparkline animations: trigger on `IntersectionObserver` enter, not on mount
- Duration `1000ms`, easing `ease-out`
- Chart entry: animate from 0 width/height (not fade)
- Tooltips: `rgba(0,0,0,0.8)` bg, white text, `border-radius: 6px`, `padding: 5px 10px`
- Active nav states: `bg-[#eaf4ff]` + bold text — never underlines
- Drill-downs: inline expansion (accordion), never modal overlays

---

## Asset Base URL

```
https://c.animaapp.com/mnf1temheWr30Q/img/
```

Key icons: `chatgpt-logo-1.svg` · `frame-126.svg` (Adthena wordmark) · `navicon-ai-search.svg` · `icon-info-outline.svg` · `icon-download-outline.svg` · `icon-alert-outline.svg` · `worldlow-1.svg` · `fabs.svg` · `fabs-1.svg`

---

## Dummy Data Conventions

- **Domains:** booking.com, bt.com, admiral.com, comparethemarket.com, autotrader.co.uk
- **Industries (14):** Automotive, Broadband, Car Insurance, Cosmetics, Electronics, Fashion, Home Insurance, Luxury Goods, Personal Banking, Pharma, Travel, Telecom, Energy, Financial Services
- **Countries:** USA, UK, Germany, France, Australia
- **Change badges:** `+n` green `#40af46` / `-n` red `#de5a5a`
- **Dates:** `28 Feb, 2026` or `14 Nov, 2025`
- **Pending features:** end callout copy with `<span class="font-semibold">Coming soon.</span>`

---

## Vocabulary

| Term | Meaning |
|---|---|
| AIO | AI Overview — Google's AI-generated search summaries |
| ChatGPT Ads | Ads appearing inside ChatGPT responses |
| Arlo | Adthena's AI assistant |
| Industry Landscape | Market-level ChatGPT ads view |
| Account Report | Per-account ChatGPT ads performance |
| Ad Frequency | % share of observed ad placements |
| Intent type | Query intent category: Recommend, Compare, Plan… |
| Signal chip | Labelled badge for an insight category (e.g. "AIO Efficiency Risk") |
| Priority pill | High / Medium / Strong tier indicator |
