import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = SITE_INFO.url;
  return {
    short_name: "Portfolio",
    name: "Portfolio",
    description: SITE_INFO.description,
    icons: [
      {
        src: `${baseUrl}/favicon.svg`,
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [],
  };
}
