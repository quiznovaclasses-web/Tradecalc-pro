TRADECALC PRO - STOCK OFFER LABEL FIX
====================================

FIX INCLUDED
- Added “Stocks” to Admin Dashboard > Affiliate links > Offer label dropdown.
- Kept the separate “Show under calculator type: Stock calculators” selection.
- Updated the affiliate category SQL constraint so Supabase accepts category = Stocks.
- Updated sitemap.xml and robots.txt templates.

DEPLOY
1. Run affiliate-stock-label-fix.sql in Supabase SQL Editor.
2. Replace the website files with the contents of this ZIP and redeploy.
3. Open /admin.html > Affiliate links. “Stocks” is now available in Offer label.
4. For a stock offer, select Offer label = Stocks AND Show under calculator type = Stock calculators.

SITEMAP IMPORTANT
The TradeCalc Pro production domain has not been provided in this project. Before submitting, replace YOUR-TRADECALC-DOMAIN in sitemap.xml and robots.txt with the exact live domain. The sitemap includes the public homepage only: calculator share links are query-string states of this same page, and /admin.html is private/noindex so it is intentionally excluded.

No redesign or calculator formula changes are included.
