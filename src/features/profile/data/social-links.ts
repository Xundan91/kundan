import type { SocialLink } from "../types/social-links";

const CDN = "https://cdn.simpleicons.org";
/** Gray-50 so icon is visible in command menu in both themes. */
const FALLBACK_COLOR = "737373";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    iconName: "linkedin",
    icon: `${CDN}/linkedin/${FALLBACK_COLOR}`,
    title: "LinkedIn",
    description: "Kundan Kumar",
    href: "https://www.linkedin.com/in/kundan-kumar-4810371b1/",
  },
  {
    iconName: "github",
    icon: `${CDN}/github/${FALLBACK_COLOR}`,
    title: "GitHub",
    description: "xundan91",
    href: "https://github.com/xundan91",
  },
  {
    iconName: "x",
    icon: `${CDN}/x/${FALLBACK_COLOR}`,
    title: "X (Formerly Twitter)",
    description: "@kundan_singh91",
    href: "https://x.com/kundan_singh91",
  },
];
