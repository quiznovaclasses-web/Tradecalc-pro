TRADECALC PRO - SUPABASE CONNECTED BUILD
========================================

Files
-----
index.html                 Public website and calculator interface
admin.html                 Supabase-authenticated admin dashboard
supabase-config.js         Supabase project URL + publishable key
calculator-tools.sql       NEW: calculator visibility database setup
seo-settings.sql           SEO settings database setup
affiliate-offers.sql       Affiliate offers database setup
monetag-ads-settings.sql   Monetag controls database setup
ceo-profile-id.sql         CEO profile and private photo storage setup
sitemap.xml                Search engine sitemap (confirm your live domain)
robots.txt                 Crawler rules

STEP 6 - CALCULATOR VISIBILITY
------------------------------
1. Supabase Dashboard -> SQL Editor -> New Query.
2. Run calculator-tools.sql.
3. Confirm the result lists nine tools. The six existing tools are enabled;
   DCA Average Entry, Break-even Price and Trading Fee Calculator are disabled.
4. Deploy index.html and admin.html from this ZIP to the same Cloudflare Pages
   project/root as supabase-config.js.
5. Open /admin.html, sign in as an approved admin, then open Calculator tools.
6. Tick one or more new tools and press "Save visibility to Supabase".
7. Refresh the public website. Enabled tools appear in the Trading Calculators
   menu; disabled tools are hidden. Changes are shared across devices.

IMPORTANT
---------
- Do not remove supabase-config.js. Keep it in the same folder as both HTML files.
- The SQL uses public.is_tradecalc_admin(), created during the Admin Login step.
- Public visitors can read only enabled tool rows. Only approved admins can
  read disabled rows or change visibility.
- New tools are educational estimates, not trading or investment advice.
- DCA Average Entry handles two purchase lots per calculation.
- Break-even estimate includes the entered buy/sell percentage fees but does
  not model spread, slippage, funding, tax or exchange-specific rules.
- Trading Fee Calculator uses the fee rate and trade-side count entered by user.
- Keep your Supabase service-role/secret key out of HTML and JavaScript.
- The publishable key is intended for browser use; database safety depends on RLS.

DEPLOYMENT
----------
Replace index.html and admin.html in the GitHub repository with these versions.
Keep supabase-config.js and all SQL/reference files in the repository root.
Deploy/redeploy the Cloudflare Pages project. Both pages must share the same
origin so /admin.html and index.html can use the same Supabase configuration.


INDIVIDUAL SEO CALCULATOR PAGES
-------------------------------
This build keeps the existing homepage and all calculator/admin/Supabase integrations.
It also adds nine static, crawlable calculator landing pages:
- /crypto-profit-calculator/
- /forex-pip-calculator/
- /position-size-calculator/
- /leverage-margin-calculator/
- /risk-reward-calculator/
- /compound-growth-calculator/
- /dca-average-entry-calculator/
- /crypto-break-even-calculator/
- /trading-fee-calculator/
Each page has its own title, description, keywords, canonical URL, explanatory content, FAQs,
and loads the same Supabase-backed affiliate offers and Monetag settings as the homepage.
The homepage continues to show the full calculator menu. Calculator visibility remains
controlled by the existing calculator_tools table. If an individual tool is disabled in
Supabase, its SEO page displays an unavailable notice rather than silently showing a
different calculator. Enable the tool in Admin -> Calculator tools to activate it.
The sitemap now lists the homepage and all nine calculator landing pages.

DEPLOYMENT NOTE
---------------
Upload the full ZIP contents to the root of the same Cloudflare Pages project. Keep each
calculator folder and its index.html path intact. After deployment, test each page URL,
then submit https://tradecalc-pro.pages.dev/sitemap.xml in Google Search Console.
Search indexing and ranking are determined by Google and are not guaranteed.
