import { getSitemapData } from "./_shared/sitemap-data.js";
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export async function onRequest() {
  const { entries, diagnostics } = await getSitemapData();
  const body = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    [...entries.entries()].map(([loc, lastmod]) =>
      '<url><loc>' + esc(loc) + '</loc>' +
      (lastmod ? '<lastmod>' + esc(new Date(lastmod).toISOString().slice(0, 10)) + '</lastmod>' : '') +
      '</url>'
    ).join("") + '</urlset>';

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
      "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
      "x-sitemap-source": diagnostics.source,
      "x-sitemap-article-count": String(diagnostics.articleCount),
      "x-sitemap-api-status": diagnostics.apiStatus,
      "x-sitemap-error": diagnostics.error
    }
  });
}
