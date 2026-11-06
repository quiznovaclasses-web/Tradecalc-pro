// TradeCalc Pro public Supabase connection settings.
// Publishable keys are designed for browser use; protect every exposed table with RLS.
// NEVER add a Supabase secret/service_role key to this file.
window.TRADECALC_SUPABASE_CONFIG = {
  url: 'https://dogcqnrmzjtesiquksao.supabase.co',
  publishableKey: 'sb_publishable_fG_jwopWqQvYENIc-X83Yw_j4dGgkg1'
};

// Initialize the browser client when the Supabase JS CDN has loaded.
if (window.supabase && typeof window.supabase.createClient === 'function') {
  window.tradeCalcSupabase = window.supabase.createClient(
    window.TRADECALC_SUPABASE_CONFIG.url,
    window.TRADECALC_SUPABASE_CONFIG.publishableKey
  );
  console.info('TradeCalc Pro: Supabase client initialized.');
} else {
  console.warn('TradeCalc Pro: Supabase JS library did not load; database features are not available.');
}
