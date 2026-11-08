TRADECALC PRO - UPDATE NOTES

What changed (only requested calculator/share-link scope):
1. Added an individual share-link feature to every calculator. Select a calculator and press "Copy share link". The copied URL contains ?tool=TOOL_KEY. Opening it loads the full homepage with that calculator preselected; it does not create a separate page.
2. Added 10 stock/investment calculators:
   - Stock Profit & Loss
   - Stock Average Price
   - Dividend Income & Yield
   - Stock SIP
   - Stock CAGR
   - Stock Brokerage & Charges
   - P/E Ratio
   - Earnings Per Share (EPS)
   - Return on Equity (ROE)
   - Portfolio Allocation
3. Existing DCA, Break-even and Trading Fee calculators are available/enabled too.
4. Admin Dashboard > Calculator tools & visibility now includes all 19 tools.
5. Updated calculator-tools.sql to allow and seed all 19 tool keys.

SUPABASE:
Run calculator-tools.sql in Supabase SQL Editor. It updates the calculator_tools key constraint, policies, and seed rows. The script expects the existing public.is_tradecalc_admin() function used by the original project to exist.

No visual theme/layout redesign or unrelated feature changes were made. Calculators are estimates for education; SIP/CAGR returns are assumptions, not guarantees. Brokerage/tax calculator uses a user-entered combined rate and is not a statutory tax engine.
