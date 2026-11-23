import { getSitemapData } from "./_shared/sitemap-data.js";

const esc = (value) => String(value ?? "").replace(/[&<>"]/g, ch =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

export async function onRequest() {
  const { diagnostics } = await getSitemapData();
  const ok = diagnostics.source === "supabase" &&
    diagnostics.apiStatus === "200" && diagnostics.matchedPositionArticle;
  const badge = ok ? "SUCCESS" : "CHECK REQUIRED";
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>TradeCalc Pro Sitemap Status</title>
    <style>
      body{font:16px system-ui,sans-serif;background:#f3f6fb;color:#142033;margin:0;padding:22px}
      main{max-width:680px;margin:25px auto;background:white;border-radius:18px;padding:24px;box-shadow:0 8px 30px #14203318}
      h1{font-size:24px;margin-top:0}.badge{display:inline-block;padding:8px 12px;border-radius:9px;background:${ok ? "#dcfce7" : "#fef3c7"};color:${ok ? "#166534" : "#92400e"};font-weight:700}
      .row{padding:13px 0;border-bottom:1px solid #e8edf4;overflow-wrap:anywhere}
      .label{color:#667085;font-size:13px}.value{font-weight:650;margin-top:4px}
      .hint{background:#eef5ff;border-radius:12px;padding:14px;margin-top:18px;line-height:1.5}
      button{background:#155eef;color:white;border:0;padding:12px 16px;border-radius:10px;font-weight:700;margin-top:16px}
    </style></head><body><main><h1>TradeCalc Pro – Sitemap Test</h1>
    <div class="badge">${badge}</div>
    <div class="row"><div class="label">Supabase connection</div><div class="value">${esc(diagnostics.source)}</div></div>
    <div class="row"><div class="label">Published articles returned by API</div><div class="value">${esc(diagnostics.articleCount)}</div></div>
    <div class="row"><div class="label">Supabase API HTTP status</div><div class="value">${esc(diagnostics.apiStatus)}</div></div>
    <div class="row"><div class="label">Position Size article found</div><div class="value">${diagnostics.matchedPositionArticle ? "YES" : "NO"}</div></div>
    <div class="row"><div class="label">API error</div><div class="value">${esc(diagnostics.error)}</div></div>
    <div class="hint">Bhai, is page ka screenshot lekar ChatGPT mein bhej do. Isse bina kisi extra app ya settings ke pata chalega ki Supabase se articles aa rahe hain ya nahi.</div>
    <button onclick="location.reload()">Refresh test</button>
    </main></body></html>`;
  return new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "no-store, no-cache, must-revalidate, max-age=0" }
  });
}
