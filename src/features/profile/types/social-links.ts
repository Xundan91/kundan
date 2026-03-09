export type SocialLink = {
  /** Icon name for inline SVG (linkedin | github | x) — used for theme-visible logos. */
  iconName?: "linkedin" | "github" | "x";
  /** Fallback icon image URL when iconName is not set. */
  icon: string;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};
