/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon resolution (when iconSlug is set):
 * - Uses https://cdn.simpleicons.org/[iconSlug] (Simple Icons CDN).
 * - Themed (when `theme === true`): appends /lightColor/darkColor for fill.
 *
 * When iconSlug is not set, falls back to legacy assets.kundan.com URLs.
 */
export type TechStack = {
  /** Unique identifier used for fallback icon resolution. */
  key: string;
  /** Simple Icons slug for CDN (e.g. "typescript", "nextdotjs"). When set, icons load from cdn.simpleicons.org. */
  iconSlug?: string;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** If true, use theme-specific icon colors for dark/light mode. */
  theme?: boolean;
};
