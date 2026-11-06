TRADECALC PRO — PHASE 1 FRONTEND PACKAGE + SUPABASE CLIENT CONFIG

FILES
- index.html: public Crypto & Forex calculator website
- admin.html: separate Admin Dashboard
- supabase-config.js: supplied Supabase project URL + publishable key; initializes browser client
- sitemap.xml: public homepage sitemap template
- robots.txt: allows public pages and excludes admin dashboard from crawling

DEPLOY
1. Extract this ZIP. Keep all five files together in the website root folder.
2. Upload all files to the ROOT of the same GitHub repository.
3. GitHub Pages: Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Cloudflare Pages: Connect the repository; Framework preset None; leave Build command blank; set output directory to /.
5. Website: https://YOUR-DOMAIN.com/ ; Admin: https://YOUR-DOMAIN.com/admin.html

IMPORTANT: SITEMAP DOMAIN
Before submitting sitemap to Google Search Console, replace YOUR-DOMAIN.com in sitemap.xml and robots.txt with the actual domain on which the site is live. The admin page is intentionally not included in the sitemap.

SUPABASE STATUS
The supplied project URL and publishable key are added in supabase-config.js. Both HTML pages load Supabase JS v2 and initialize window.tradeCalcSupabase. This confirms client setup only; it does NOT yet save settings, affiliate offers, logo, or CEO profile to database. Existing settings/auth remain browser-local until database schema, Row Level Security (RLS) policies, and Supabase Auth integration are implemented in Phase 2.

SECURITY
The sb_publishable key is intended for public browser use. It is not an admin password and does not grant safe unrestricted database access by itself. Enable RLS on every exposed table and use restrictive policies. NEVER put sb_secret_ or service_role keys in HTML, JS, GitHub, or this ZIP.

ADMIN FIRST LOGIN
Open /admin.html. Create a username and password (minimum 10 characters), then sign in. This current static preview uses browser-local authentication and is NOT production-secure.

CURRENT LIMITATIONS
- Website settings, logo, CEO profile/ID and affiliate offers remain in localStorage (same browser/domain only).
- Supabase client is initialized but database synchronization is not yet implemented.
- Monetag code is stored as configuration text only; real script injection and ad limits need backend integration.
- CEO ID is a self-generated company profile card, not a government-issued identity document.
