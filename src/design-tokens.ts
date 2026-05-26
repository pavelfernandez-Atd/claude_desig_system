// Adthena Design System — extracted from Figma (Claude DS)
// Source: figma.com/design/ugMYx2Jf3KY7uZmha2U0WP

export const colors = {
  // PRIMARY — variable collection
  primary: {
    main: "#0c8dea",
    medium: "#3079bd",
    bright: "#5bb3f9",
    pageBg: "#e5eef5",
  },

  // PRIMARY FILL STYLES — component-level
  fill: {
    main: "#1565c0",
    dark: "#063059",
    light: "#5e92f3",
    contrast: "#ffffff",
  },

  // STATES
  states: {
    selectedSoft: "#eaf4ff",
    containedHover: "#0f4786",
    outlinedHoverBg: "#f7f9fc",
    restingBorder: "rgba(21, 101, 192, 0.5)",
  },

  // TEXT
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
    // variable-bound solid equivalents
    primaryVar: "#181818",
    secondaryVar: "#858585",
    disabledVar: "#d3d3d3",
  },

  // ALERTS — SEMANTIC
  warning: {
    main: "#ef6c00",
    bg: "#fdf0e5",
  },
  error: {
    main: "#c62828",
    bg: "#f9e9e9",
  },

  // BACKGROUNDS & SURFACES
  bg: {
    page: "#e5eef5",
    paper: "#ffffff",
    default: "#fafafa",
  },

  // ACTION STATES
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBg: "rgba(0, 0, 0, 0.12)",
  },

  // CHART SERIES — polychromatic index order
  chart: [
    "#b3a2e7", // 01 purple
    "#64abfb", // 02 blue
    "#d47dd4", // 03 magenta
    "#e86492", // 04 crimson
    "#8ac8b1", // 05 green
    "#53bdc5", // 06 teal
    "#ff7a1a", // 07 orange
    "#de5a5a", // 08 red
    "#435a97", // 09 navy
    "#814e2c", // 10 brown
    "#c8d09c", // 11 olive
    "#d3dbe6", // neutral
  ],

  // MONOCHROMATIC PALETTES — 12 families × 10 steps (900 darkest → 50 lightest)
  // Source: ATHENA_DS / Monochromatic palettes (node 31591:17205)
  // Each 500 value aligns with the chart series base colour.
  palette: {
    purple: {
      900: "#191033", 800: "#35226d", 700: "#462d90", 600: "#5b3aba",
      500: "#6f50c8", 400: "#856bd1", 300: "#9b84e1", 200: "#b3a2e7",
      100: "#ccc1ec",  50: "#dfd8f3",
    },
    blue: {
      900: "#082445", 800: "#0c3769", 700: "#0f498a", 600: "#1565c0",
      500: "#1977e3", 400: "#3589e9", 300: "#559cec", 200: "#8cbcf2",
      100: "#b1d1f6",  50: "#d1e4fa",
    },
    magenta: {
      900: "#311131", 800: "#5b1f5b", 700: "#762876", 600: "#a036a0",
      500: "#bf40bf", 400: "#c95ec9", 300: "#d47dd4", 200: "#db94db",
      100: "#e5b2e5",  50: "#f3d8f3",
    },
    crimson: {
      900: "#3a091a", 800: "#610f2b", 700: "#8e153f", 600: "#c11d56",
      500: "#de2666", 400: "#e3457c", 300: "#e86492", 200: "#ee90b1",
      100: "#f3afc7",  50: "#f8d3e0",
    },
    lime: {
      900: "#232716", 800: "#3d471f", 700: "#4e5f1b", 600: "#687f24",
      500: "#7c9a23", 400: "#95b536", 300: "#a7c748", 200: "#c4df72",
      100: "#d8eaa3",  50: "#f1f9d7",
    },
    teal: {
      900: "#003438", 800: "#004b52", 700: "#00626b", 600: "#00838f",
      500: "#1299a5", 400: "#36aeba", 300: "#53bdc5", 200: "#79cbd2",
      100: "#abdee3",  50: "#d9f0f2",
    },
    orange: {
      900: "#4d2300", 800: "#8a3e00", 700: "#bd5500", 600: "#e06500",
      500: "#ff7e14", 400: "#ff9238", 300: "#ffa65c", 200: "#ffbc85",
      100: "#ffd5b2",  50: "#ffe8d6",
    },
    red: {
      900: "#330a0a", 800: "#6a1515", 700: "#941e1e", 600: "#c62828",
      500: "#d83c3c", 400: "#de5a5a", 300: "#e37777", 200: "#e99595",
      100: "#f0b3b3",  50: "#f7d4d4",
    },
    navy: {
      900: "#0f192e", 800: "#182749", 700: "#203360", 600: "#2b4582",
      500: "#3556a1", 400: "#3f66c0", 300: "#5f7ec9", 200: "#859dd6",
      100: "#aebfe4",  50: "#d9e0f2",
    },
    brown: {
      900: "#26170d", 800: "#4c2e1a", 700: "#673e23", 600: "#814e2c",
      500: "#985c34", 400: "#ab683b", 300: "#c17848", 200: "#cd926a",
      100: "#dcb398",  50: "#f2e3d9",
    },
    green: {
      900: "#102d12", 800: "#1a471c", 700: "#246127", 600: "#2e7d32",
      500: "#37953c", 400: "#40af46", 300: "#5fc464", 200: "#8bd48f",
      100: "#b8e5ba",  50: "#daf1db",
    },
    neutral: {
      900: "#081f42", 800: "#27365b", 700: "#38476a", 600: "#485982",
      500: "#576993", 400: "#6477a2", 300: "#7387a9", 200: "#8191aa",
      100: "#93a1b6",  50: "#c0cde0",
    },
  },

  // GREY SCALE — extended with custom half-steps
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    350: "#cfcfcf",
    400: "#bdbdbd",
    450: "#aeaeae",
    500: "#9e9e9e",
    550: "#8a8a8a",
    600: "#757575",
    650: "#6b6b6b",
    700: "#616161",
    750: "#515151",
    800: "#424242",
    850: "#313131",
    900: "#212121",
    950: "#1d1d1d",
  },
} as const;

// TYPOGRAPHY
export const typography = {
  fontFamily: {
    base: "'Open Sans', Helvetica, sans-serif",
  },

  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },

  // HEADING SCALE
  heading: {
    hxxl: { fontSize: "96px", fontWeight: 600, lineHeight: "112%" },
    hxl:  { fontSize: "60px", fontWeight: 600, lineHeight: "120%" },
    hl:   { fontSize: "48px", fontWeight: 600, lineHeight: "116%" },
    hm:   { fontSize: "34px", fontWeight: 600, lineHeight: "123%" },
    hs:   { fontSize: "24px", fontWeight: 600, lineHeight: "133%" },
    hxs:  { fontSize: "20px", fontWeight: 600, lineHeight: "120%" },
  },

  // BODY & UI SCALE
  body: {
    body16:      { fontSize: "16px", fontWeight: 400, lineHeight: "150%" },
    body16Bold:  { fontSize: "16px", fontWeight: 600, lineHeight: "150%" },
    body14:      { fontSize: "14px", fontWeight: 400, lineHeight: "143%" },
    body14Bold:  { fontSize: "14px", fontWeight: 600, lineHeight: "143%" },
    subtitle16:  { fontSize: "16px", fontWeight: 400, lineHeight: "175%" },
    subtitle14:  { fontSize: "14px", fontWeight: 400, lineHeight: "157%" },
    caption:     { fontSize: "12px", fontWeight: 400, lineHeight: "13px" },
    overline:    { fontSize: "12px", fontWeight: 400, lineHeight: "266%" },
  },

  // COMPONENT STYLES
  component: {
    buttonLg:     { fontSize: "15px", fontWeight: 600, lineHeight: "26px" },
    buttonMd:     { fontSize: "14px", fontWeight: 600, lineHeight: "24px" },
    buttonSm:     { fontSize: "13px", fontWeight: 600, lineHeight: "22px" },
    inputText:    { fontSize: "14px", fontWeight: 400, lineHeight: "24px" },
    tableHeader:  { fontSize: "14px", fontWeight: 600, lineHeight: "24px" },
    chip:         { fontSize: "12px", fontWeight: 600, lineHeight: "12px" },
    badgeLabel:   { fontSize: "12px", fontWeight: 600, lineHeight: "20px" },
    tooltip:      { fontSize: "10px", fontWeight: 400, lineHeight: "14px" },
  },
} as const;

// SPACING — Tailwind-aligned (1 unit = 4px)
export const spacing = {
  0:    "0px",
  0.5:  "2px",
  1:    "4px",
  1.5:  "6px",
  2:    "8px",
  2.5:  "10px",
  3:    "12px",
  4:    "16px",
  5:    "20px",
  6:    "24px",
  7:    "28px",
  8:    "32px",
  9:    "36px",
  10:   "40px",
  12:   "48px",
  14:   "56px",
  16:   "64px",
  20:   "80px",

  // SEMANTIC ALIASES
  semantic: {
    pagePadding:        "24px",  // Page outer padding
    cardGap:            "16px",  // Gap between cards
    cardPadding:        "24px",  // Card inner padding
    cardPaddingCompact: "16px",  // KPI card padding
    appBarHeight:       "50px",  // Global app bar height
    sidebarWidth:       "254px", // Navigation sidebar width
    contentLeftOffset:  "278px", // Sidebar + 24px gap
    contentMax:         "1200px",// Content column max-width
  },
} as const;

// BORDER RADIUS
// Rule: All cards/callout/insight panels → xl. Filter pills/chips → full. Avatars/icon circles → circle.
export const borderRadius = {
  none:   "0px",
  sm:     "4px",
  md:     "6px",   // tooltip
  lg:     "8px",   // nav card
  xl:     "12px",  // ALL cards (universal)
  full:   "200px", // pills, chips
  circle: "50%",   // avatars
} as const;

// SHADOWS — elevation effect styles
// Rule: Standard cards → none. Modal overlays → modal. Hero KPI cards → none.
export const shadows = {
  none:     "none",
  outlined: "0 0 0 1px rgba(229, 232, 237, 1)",  // card borders
  card:     "0 0 16px rgba(23, 42, 68, 0.2)",     // standard card
  modal:    "0 0 16px rgba(26, 32, 54, 0.2)",     // modal overlays
  heroCard: "0 4px 14px rgba(9, 58, 107, 0.2)",   // hero KPI cards
} as const;

// BREAKPOINTS — for responsive design
export const breakpoints = {
  sm:  "640px",
  md:  "768px",
  lg:  "1024px",
  xl:  "1280px",
  "2xl": "1536px",
} as const;

// Convenience re-export of the full token set
const tokens = { colors, typography, spacing, borderRadius, shadows, breakpoints };
export default tokens;
