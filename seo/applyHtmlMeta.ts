import {
  INDEX_ROBOTS,
  NOINDEX_ROBOTS,
  NOT_FOUND_DESCRIPTION,
  NOT_FOUND_TITLE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
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
  includeJsonLd: boolean;
};

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function metaPattern(attribute: "name" | "property", key: string): RegExp {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`<meta ${attribute}="${escaped}" content="[^"]*"\\s*/?>`);
}

function upsertMeta(html: string, attribute: "name" | "property", key: string, content: string): string {
  const tag = `<meta ${attribute}="${key}" content="${escapeAttr(content)}" />`;
  const pattern = metaPattern(attribute, key);
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n</head>`);
}

function removeMeta(html: string, attribute: "name" | "property", key: string): string {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(`[ \\t]*<meta ${attribute}="${escaped}" content="[^"]*"\\s*/?>\\n?`), "");
}

function setCanonical(html: string, href: string | null): string {
  const pattern = /[ \t]*<link rel="canonical" href="[^"]*"\s*\/?>\n?/;
  if (!href) return html.replace(pattern, "");
  const tag = `<link rel="canonical" href="${escapeAttr(href)}" />`;
  if (pattern.test(html)) return html.replace(pattern, `    ${tag}\n`);
  return html.replace("</head>", `    ${tag}\n</head>`);
}

function setJsonLd(html: string, include: boolean): string {
  const pattern = /[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/;
  const without = html.replace(pattern, "");
  if (!include) return without;
  const json = JSON.stringify(clinicJsonLd).replace(/</g, "\\u003c");
  const tag = `<script type="application/ld+json">${json}</script>`;
  return without.replace("</head>", `    ${tag}\n</head>`);
}

export function metaForPage(page: PageMeta): HtmlMeta {
  const url = pageUrl(page.path);
  return {
    title: page.title,
    description: page.description,
    canonical: url,
    robots: INDEX_ROBOTS,
    url,
    includeJsonLd: page.path === "/",
  };
}

export function metaForNotFound(): HtmlMeta {
  return {
    title: NOT_FOUND_TITLE,
    description: NOT_FOUND_DESCRIPTION,
    canonical: null,
    robots: NOINDEX_ROBOTS,
    url: null,
    includeJsonLd: false,
  };
}

export function applyHtmlMeta(html: string, meta: HtmlMeta): string {
  let out = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  out = upsertMeta(out, "name", "description", meta.description);
  out = upsertMeta(out, "name", "robots", meta.robots);
  out = setCanonical(out, meta.canonical);
  out = upsertMeta(out, "property", "og:title", meta.title);
  out = upsertMeta(out, "property", "og:description", meta.description);
  out = upsertMeta(out, "property", "og:image", OG_IMAGE_URL);
  out = upsertMeta(out, "property", "og:image:width", OG_IMAGE_WIDTH);
  out = upsertMeta(out, "property", "og:image:height", OG_IMAGE_HEIGHT);
  out = upsertMeta(out, "property", "og:image:alt", OG_IMAGE_ALT);
  out = upsertMeta(out, "name", "twitter:card", "summary_large_image");
  out = upsertMeta(out, "name", "twitter:title", meta.title);
  out = upsertMeta(out, "name", "twitter:description", meta.description);
  out = upsertMeta(out, "name", "twitter:image", OG_IMAGE_URL);
  out = meta.url
    ? upsertMeta(out, "property", "og:url", meta.url)
    : removeMeta(out, "property", "og:url");
  out = setJsonLd(out, meta.includeJsonLd);
  return out;
}
