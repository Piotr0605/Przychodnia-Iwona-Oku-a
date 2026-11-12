import {
  INDEX_ROBOTS,
  NOINDEX_ROBOTS,
  NOT_FOUND_DESCRIPTION,
  NOT_FOUND_TITLE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  clinicJsonLd,
  pageUrl,
  type PageMeta,
} from "./site";

export type HtmlMeta = {
  title: string;
  description: string;
  canonical: string | null;
  robots: string;
  url: string | null;
  /** Body of the JSON-LD script, or null for a page that carries none. */
  jsonLd: string | null;
};

type MetaAttribute = "name" | "property";

/** Every meta tag this module writes. applyHtmlMeta clears them all before writing. */
const MANAGED_META: Array<[MetaAttribute, string]> = [
  ["name", "description"],
  ["name", "robots"],
  ["property", "og:site_name"],
  ["property", "og:title"],
  ["property", "og:description"],
  ["property", "og:url"],
  ["property", "og:image"],
  ["property", "og:image:width"],
  ["property", "og:image:height"],
  ["property", "og:image:alt"],
  ["name", "twitter:card"],
  ["name", "twitter:title"],
  ["name", "twitter:description"],
  ["name", "twitter:image"],
];

const TITLE_PATTERN = /[ \t]*<title>[\s\S]*?<\/title>/;
const CANONICAL_PATTERN = /[ \t]*<link rel="canonical" href="[^"]*"\s*\/?>\n?/g;
const JSON_LD_PATTERN = /[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g;
const HEAD_END_PATTERN = /[ \t]*<\/head>/;

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function metaTag(attribute: MetaAttribute, key: string, content: string): string {
  return `<meta ${attribute}="${key}" content="${escapeAttr(content)}" />`;
}

function metaPattern(attribute: MetaAttribute, key: string): RegExp {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`[ \\t]*<meta ${attribute}="${escaped}" content="[^"]*"\\s*/?>\\n?`, "g");
}

function stripManagedTags(html: string): string {
  let out = html.replace(CANONICAL_PATTERN, "").replace(JSON_LD_PATTERN, "");
  for (const [attribute, key] of MANAGED_META) {
    out = out.replace(metaPattern(attribute, key), "");
  }
  return out;
}

export function metaForPage(page: PageMeta): HtmlMeta {
  const url = pageUrl(page.path);
  return {
    title: page.title,
    description: page.description,
    canonical: url,
    robots: INDEX_ROBOTS,
    url,
    jsonLd: page.path === "/" ? JSON.stringify(clinicJsonLd).replace(/</g, "\\u003c") : null,
  };
}

export function metaForNotFound(): HtmlMeta {
  return {
    title: NOT_FOUND_TITLE,
    description: NOT_FOUND_DESCRIPTION,
    canonical: null,
    robots: NOINDEX_ROBOTS,
    url: null,
    jsonLd: null,
  };
}

/**
 * Writes one page's metadata into the document head. The tags replace the
 * <title> in place and any earlier copy is removed first, so applying this to
 * an already processed document never leaves two of the same tag.
 */
export function applyHtmlMeta(html: string, meta: HtmlMeta): string {
  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    metaTag("name", "description", meta.description),
    metaTag("name", "robots", meta.robots),
    meta.canonical ? `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />` : null,
    metaTag("property", "og:site_name", SITE_NAME),
    metaTag("property", "og:title", meta.title),
    metaTag("property", "og:description", meta.description),
    meta.url ? metaTag("property", "og:url", meta.url) : null,
    metaTag("property", "og:image", OG_IMAGE_URL),
    metaTag("property", "og:image:width", OG_IMAGE_WIDTH),
    metaTag("property", "og:image:height", OG_IMAGE_HEIGHT),
    metaTag("property", "og:image:alt", OG_IMAGE_ALT),
    metaTag("name", "twitter:card", "summary_large_image"),
    metaTag("name", "twitter:title", meta.title),
    metaTag("name", "twitter:description", meta.description),
    metaTag("name", "twitter:image", OG_IMAGE_URL),
  ].filter((tag): tag is string => tag !== null);

  const stripped = stripManagedTags(html);
  if (!TITLE_PATTERN.test(stripped)) {
    throw new Error("seo: the HTML template has no <title> to anchor the page metadata");
  }
  const withMeta = stripped.replace(TITLE_PATTERN, () => tags.map((tag) => `    ${tag}`).join("\n"));

  if (!meta.jsonLd) return withMeta;
  if (!HEAD_END_PATTERN.test(withMeta)) {
    throw new Error("seo: the HTML template has no </head> to hold the structured data");
  }
  const jsonLdTag = `<script type="application/ld+json">${meta.jsonLd}</script>`;
  return withMeta.replace(HEAD_END_PATTERN, () => `    ${jsonLdTag}\n  </head>`);
}
