/**
 * Centralised SEO configuration for LOPO CONSTRUCTION LIMITED.
 * Domain: https://www.lopoconstruction.co.uk
 *
 * All canonical URLs, og:url, og:image and structured-data URLs
 * are derived from the SITE_URL constant below.
 */

import heroImg from "@/assets/hero-extension.jpg";

// ─── Site ────────────────────────────────────────────────────────────────────
export const SITE_URL = "https://www.lopoconstruction.co.uk";

// ─── Default social-share image (1200×630 minimum recommended) ───────────────
export const DEFAULT_OG_IMAGE = heroImg;

// ─── Helper: build an absolute URL from a relative path ──────────────────────
export function absoluteUrl(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalised}`;
}

// ─── Helper: build a full set of Open-Graph + Twitter meta tags ──────────────
export type SeoMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildSeoMeta({ title, description, path, ogImage }: SeoMeta) {
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const url = absoluteUrl(path);

  return [
    { title },
    { name: "description", content: description },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

// ─── Helper: build canonical link ────────────────────────────────────────────
export function buildCanonical(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) }];
}
