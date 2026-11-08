TRADECALC PRO - COUNTRY-AWARE AFFILIATE OFFERS + 4 MONETAG PLACEMENTS

IMPORTANT DEPLOY ORDER
1. In Supabase SQL Editor, run affiliate-monetag-country-ads-update.sql.
2. Upload/replace the updated index.html and admin.html (keep supabase-config.js unchanged).
3. Redeploy the website and refresh the admin dashboard.

DASHBOARD CHANGES
- Affiliate links: choose Crypto, Forex or Stocks placement scope.
- Allowed countries: comma-separated ISO 3166-1 alpha-2 codes (example: IN, GB, AU).
  Leave blank to allow all countries, except those in the blocked list.
- Blocked countries: these countries are always excluded for that offer.
- Country lookup failure: affiliate offers are hidden for safety.
- Offer priority: lower numbers are shown first.
- Monetag ads: up to four unique placement scripts can be enabled/disabled independently.

COMPLIANCE NOTE
Country blocking is controlled by the administrator using partner terms and current local-law information. This implementation does not independently certify whether a platform is legal in a country. Keep allow/block lists updated for each affiliate program. IP-based country lookup is approximate and can be affected by VPNs, proxies, or lookup-service outages. A user must still check provider eligibility and terms.

MONETAG NOTE
Use four distinct zone tags created in your Monetag publisher dashboard. Four page placements are available near the calculator; actual ad fill and rendering depend on the ad format, Monetag campaign availability, and applicable consent requirements. Enabling a slot does not guarantee an ad impression.
