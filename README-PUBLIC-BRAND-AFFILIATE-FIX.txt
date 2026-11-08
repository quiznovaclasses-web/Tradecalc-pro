TRADECALC PRO - PUBLIC AFFILIATE + LOGO FIX

What changed:
1. Fixed missing public brand functions. The public page called applyBrand(), loadPublicBrand() and loadPublicSeo() but those functions were not present, which stopped the rest of the startup script. This prevented affiliate offers and logo settings from loading.
2. Public header now reads the saved site name and logo_url from Supabase site_settings and displays the uploaded image (or HTTPS image URL).
3. Public affiliate loader reads active affiliate offers from Supabase and renders them in Trading Platform Offers and under matching crypto/forex/stock calculators.
4. Affiliate scope is normalized to lowercase before matching calculator type.
5. Improved visible error feedback if Supabase cannot return affiliate offers.

Deploy:
- Upload all files from this ZIP to the same GitHub Pages repository, replacing the existing files.
- Keep supabase-config.js unchanged.
- In Supabase SQL Editor, run public-brand-affiliate-read-fix.sql once.
- Open the public site and do a hard refresh / clear the browser cache.

Important:
- Do not delete existing Supabase rows.
- Existing active affiliate offers should remain active.
- For calculator placement, set Show under calculator type to Crypto / Forex / Stock calculators.
- Leave Allowed countries and Blocked countries blank to show an offer in all countries, subject to partner terms.
