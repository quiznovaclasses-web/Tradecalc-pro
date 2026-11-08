TRADECALC PRO - AFFILIATE DISPLAY FIX

This update fixes the following public-site issues:
1. Trading platform offer category buttons now filter All, Crypto, Forex, Stocks, Education and Trading Tools.
2. Stocks is available in Admin Dashboard > Affiliate links > Offer label.
3. Active offers load from Supabase and show their CTA link buttons in Trading platform offers.
4. Calculator offers show under the matching Crypto, Forex or Stock calculator.
5. If country lookup fails, offers with no country allow/block restrictions can still display. Offers with country restrictions remain hidden until the visitor country can be verified.
6. Country lookup has a fallback provider if the primary lookup is unavailable.

Deploy all files from this ZIP, replacing the previous site files. Keep your existing supabase-config.js values unchanged.

In Admin Dashboard, when adding a stock offer:
- Offer label: Stocks
- Show under calculator type: Stock calculators
- Allowed countries: leave blank to allow all countries, or enter ISO codes such as IN, GB, AU.
- Ensure the offer is active and the affiliate URL begins with https://.

The affiliate/country SQL update must already have been run in Supabase. This ZIP does not change your Supabase credentials or database records.
