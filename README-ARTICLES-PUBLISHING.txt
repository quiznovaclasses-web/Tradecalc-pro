TRADECALC PRO — ARTICLE PUBLISHING SYSTEM

WHAT WAS ADDED
1. A new Articles section directly below Trading Platform Offers.
2. Latest 10 published articles scroll upward in a ticker. Hovering pauses the movement.
3. A searchable-by-browsing archive grid with a Load more button for older articles.
4. Individual shareable article URLs in this format:
   https://YOUR-DOMAIN/?article=your-article-slug
5. Article detail pages with cover image, category, author, date, formatted body, tags, share button and social metadata.
6. Admin Dashboard > Articles publishing studio.
7. Create, edit, publish, save drafts and delete articles.
8. Article SEO title, SEO description, URL slug, excerpt, category, tags and cover image URL.
9. Select existing Monetag placements 1–4 to display inside each article.
10. Select active affiliate offers to display as partner cards inside each article.
11. Public visitors can read published articles only. Drafts and management actions require approved admin access.

INSTALLATION
1. Run articles-publishing-system.sql once in Supabase SQL Editor.
2. Upload all files from this ZIP to the existing GitHub repository, replacing the matching project files.
3. Keep supabase-config.js unchanged.
4. Deploy the site and open Admin Dashboard > Articles.
5. Create an article and choose Save as draft or Publish now.

ARTICLE LINKS & SEO
The site uses query-string article links because this project is a static frontend. Each article view updates title, description, Open Graph metadata and canonical URL in the browser. Some social crawlers and search engines may not execute JavaScript; server-rendered article routes or an edge prerendering layer would be needed for guaranteed crawler-visible per-article metadata. Add the final production domain to the sitemap separately.

MONETAG / AFFILIATE
Article ad placements reuse the Monetag scripts already configured under Admin Dashboard > Monetag ads. They render only when the global placement is enabled and a script is saved. Affiliate cards reuse existing active offers. Confirm partner terms and country eligibility before publishing.

SECURITY
The article content renderer permits common formatting tags and strips script tags, event attributes and non-HTTPS links. Do not paste JavaScript or third-party scripts into article content.
