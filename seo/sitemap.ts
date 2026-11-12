import { PAGE_META, pageUrl } from "./site";

export function buildSitemapXml(): string {
  const urls = PAGE_META.map((page) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(page.lastmod)) {
      throw new Error(`sitemap: ${page.path} has lastmod "${page.lastmod}", expected YYYY-MM-DD`);
    }
    return [
      "  <url>",
      `    <loc>${pageUrl(page.path)}</loc>`,
      `    <lastmod>${page.lastmod}</lastmod>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority}</priority>`,
      "  </url>",
    ].join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
