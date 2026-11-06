TRADECALC PRO — SUPABASE ADMIN LOGIN UPDATE

FILES
- index.html: public calculator website
- admin.html: dashboard with Supabase email/password authentication
- supabase-config.js: public Supabase project URL and publishable key
- sitemap.xml: search engine sitemap (update placeholder domain if still present)
- robots.txt: crawler rules

DEPLOY
1. Upload/replace ALL files in the repository root.
2. Keep all files in the same root folder. Do not rename supabase-config.js.
3. Redeploy Cloudflare Pages.
4. Public site: https://YOUR-DOMAIN/
5. Admin: https://YOUR-DOMAIN/admin.html

ADMIN LOGIN
- Use the email/password account created in Supabase Authentication > Users.
- The user must also have a matching row in public.admin_users with user_id equal to auth.users.id and is_active = true.
- Dashboard calls public.is_tradecalc_admin() before showing the admin panel.
- There is no public signup form.

IMPORTANT
- Supabase URL and sb_publishable key are intended for browser use. Never expose a secret/service_role key.
- Ensure Row Level Security is enabled on every table and only grant the minimum required permissions.
- This update secures dashboard entry using Supabase Auth. Existing website settings (logo, affiliate offers, CEO profile, SEO and tool toggles) still use browser localStorage for now; the next database step will migrate those settings to Supabase tables.
- This is not yet cross-device settings sync.
