// Dynamic XML sitemap for TradeCalc Pro. Cloudflare Pages Function.
// Includes the static public URLs plus every currently published article in Supabase.
const BASE = "https://quiznovaclasses.online";
const SUPABASE_URL = "https://dogcqnrmzjtesiquksao.supabase.co";
const SUPABASE_KEY = "sb_publishable_fG_jwopWqQvYENIc-X83Yw_j4dGgkg1";
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("\'", "&apos;");
export async function onRequest() {
  const urls = new Set([
    BASE + "/",
    BASE + "/?article=crypto-profit-loss-calculator-guide"
  ]);
  try {
    const endpoint = SUPABASE_URL + "/rest/v1/articles?select=slug,published_at&status=eq.published&published_at=lte." + encodeURIComponent(new Date().toISOString()) + "&order=published_at.desc&limit=5000";
    const response = await fetch(endpoint, { headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY } });
    if (response.ok) {
      const rows = await response.json();
      for (const row of rows) if (row.slug) {
        const u = new URL(BASE + "/"); u.searchParams.set("article", row.slug); urls.add(u.toString());
      }
    }
  } catch (_) { /* keep static URLs available if Supabase is temporarily unavailable */ }
  const body = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    [...urls].map(loc => '<url><loc>' + esc(loc) + '</loc></url>').join("") + '</urlset>';
  return new Response(body, { headers: { "content-type": "application/xml; charset=UTF-8", "cache-control": "public, max-age=300" } });
}
