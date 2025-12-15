/**
 * Theme Constants
 * Centralized configuration values for the RZ Development theme
 */

/* ========================================
   Pagination Constants
   ======================================== */

export const PAGINATION = {
  DEFAULT_ITEMS_PER_PAGE: 25,
  ITEMS_PER_PAGE_OPTIONS: [25, 50, 100, 200],
  MAX_VISIBLE_PAGES: 7,
} as const;

/* ========================================
   Grid Layout Constants
   ======================================== */

export const GRID_LAYOUT = {
  DEFAULT_COLUMNS_PER_ROW: 4,
  COLUMNS_OPTIONS: [2, 3, 4, 5],
} as const;

/* ========================================
   Image Loading Constants
   ======================================== */

export const IMAGE_LOADING = {
  LAZY_LOAD_ROOT_MARGIN: '50px',
  ZOOM_INIT_DELAY: 500,
  ZOOM_INIT_DELAY_MOUNT: 1000,
  ZOOM_BACKGROUND: 'rgba(0, 0, 0, 0.8)',
  ZOOM_MARGIN: 24,
  ZOOM_SCROLL_OFFSET: 0,
} as const;

/* ========================================
   Clipboard Constants
   ======================================== */

export const CLIPBOARD = {
  COPIED_FEEDBACK_DURATION: 2000, // 2 seconds
} as const;

/* ========================================
   Layout Constants
   ======================================== */

export const LAYOUT = {
  SIDEBAR_WIDTH: 280,
  SIDEBAR_STICKY_TOP_OFFSET: 80,
  SIDEBAR_MAX_HEIGHT_OFFSET: 100,
} as const;

/* ========================================
   Animation Constants
   ======================================== */

export const ANIMATION = {
  DEFAULT_TRANSITION_DURATION: 200, // ms
  SMOOTH_SCROLL_BEHAVIOR: 'smooth',
} as const;

/* ========================================
   Breakpoints Constants
   ======================================== */

/**
 * Responsive breakpoints for media queries
 * 
 * Usage in CSS: Add a comment referencing the constant
 * Example: @media (min-width: 768px) { ... } // BREAKPOINTS.TABLET_MIN
 * 
 * Note: CSS cannot directly import TS constants, so we document
 * the relationship with comments in media queries.
 */
export const BREAKPOINTS = {
  MOBILE_MAX: 767,         // max-width for mobile (@media max-width: 767px)
  SMALL_DEVICES_MIN: 640,  // min-width for small devices (@media min-width: 640px)
  TABLET_MIN: 768,         // min-width for tablet (@media min-width: 768px)
  TABLET_MAX: 1023,        // max-width for tablet (@media max-width: 1023px)
  DESKTOP_MIN: 1024,       // min-width for desktop (@media min-width: 1024px)
  LARGE_DESKTOP_MIN: 1200, // min-width for large desktop (@media min-width: 1200px)
} as const;

