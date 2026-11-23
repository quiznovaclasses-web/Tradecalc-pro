const SUPABASE_URL = "https://dogcqnrmzjtesiquksao.supabase.co";
const SUPABASE_KEY = "sb_publishable_fG_jwopWqQvYENIc-X83Yw_j4dGgkg1";

export async function onRequest() {
  let diagnostics = {
    source: "static-fallback",
    articleCount: 0,
    apiStatus: "not-requested",
    error: "none",
    matchedPositionArticle: false
  };

  try {
    const endpoint =
      SUPABASE_URL +
      "/rest/v1/articles?select=slug,published_at" +
      "&status=eq.published" +
      "&published_at=not.is.null" +
      "&published_at=lte." +
      encodeURIComponent(new Date().toISOString()) +
      "&order=published_at.desc&limit=50000";

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        apikey: SUPABASE_KEY,
        Accept: "application/json"
      }
    });

    diagnostics.apiStatus = String(response.status);

    if (!response.ok) {
      diagnostics.error = (await response.text())
        .slice(0, 1000);
    } else {
      const rows = await response.json();

      if (Array.isArray(rows)) {
        diagnostics.source = "supabase";
        diagnostics.articleCount = rows.length;

        diagnostics.matchedPositionArticle = rows.some(
          row =>
            row.slug ===
            "position-size-calculator-trading-risk-management"
        );
      } else {
        diagnostics.error =
          "Supabase response was not a JSON array";
      }
    }
  } catch (error) {
    diagnostics.error = String(
      error.message || error
    ).slice(0, 1000);
  }

  const success =
    diagnostics.source === "supabase" &&
    diagnostics.apiStatus === "200" &&
    diagnostics.matchedPositionArticle;

  const escapeHTML = value =>
    String(value ?? "").replace(/[&<>"]/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    })[char]);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TradeCalc Pro Sitemap Diagnostic</title>

<style>
body {
  font-family: Arial, sans-serif;
  background: #f3f6fb;
  color: #142033;
  padding: 20px;
}
main {
  max-width: 680px;
  margin: 20px auto;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 5px 25px #0001;
}
h1 {
  font-size: 23px;
}
.badge {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 9px;
  background: ${success ? "#dcfce7" : "#fef3c7"};
  color: ${success ? "#166534" : "#92400e"};
  font-weight: bold;
}
.row {
  padding: 14px 0;
  border-bottom: 1px solid #e5e7eb;
  overflow-wrap: anywhere;
}
.label {
  color: #667085;
  font-size: 13px;
}
.value {
  font-weight: bold;
  margin-top: 5px;
}
button {
  background: #155eef;
  color: white;
  border: 0;
  padding: 12px 18px;
  border-radius: 9px;
  font-weight: bold;
  margin-top: 18px;
}
</style>
</head>

<body>
<main>

<h1>TradeCalc Pro – Sitemap Test</h1>

<div class="badge">
${success ? "SUCCESS" : "CHECK REQUIRED"}
</div>

<div class="row">
<div class="label">Supabase Connection</div>
<div class="value">${escapeHTML(diagnostics.source)}</div>
</div>

<div class="row">
<div class="label">Published Articles Found</div>
<div class="value">${diagnostics.articleCount}</div>
</div>

<div class="row">
<div class="label">Supabase API Status</div>
<div class="value">${escapeHTML(diagnostics.apiStatus)}</div>
</div>

<div class="row">
<div class="label">Position Size Article Found</div>
<div class="value">
${diagnostics.matchedPositionArticle ? "YES" : "NO"}
</div>
</div>

<div class="row">
<div class="label">API Error</div>
<div class="value">${escapeHTML(diagnostics.error)}</div>
</div>

<p>
Take a screenshot of this page and send it to ChatGPT.
</p>

<button onclick="location.reload()">Refresh Test</button>

</main>
</body>
</html>
`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "no-store"
    }
  });
    }
