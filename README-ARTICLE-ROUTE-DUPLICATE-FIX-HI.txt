TRADECALC PRO – ARTICLE DETAIL + DUPLICATE TICKER FIX

Changes in this update:
1. Article detail rendering is isolated from ad/affiliate card rendering errors. A Monetag or affiliate-country data issue can no longer leave the article page blank.
2. Article links continue to use the ?article=slug URL and the detail page now shows a clear 'Article not found' message if the requested slug is not available.
3. Country allow/block arrays are validated before filtering partner offers.
4. The latest-articles ticker no longer duplicates a short list (under 5 articles) or shows a large empty scrolling box. It becomes compact and static until enough articles exist for a smooth ticker.
5. Existing article publishing, SEO, article-only ads/affiliate offers, calculator tools and site settings are retained.

INSTALL:
- Extract this ZIP.
- Replace the existing index.html in the same GitHub repository with this index.html.
- Do not replace supabase-config.js or run SQL for this code-only fix.
- Commit/push and wait for Cloudflare Pages deployment.
- Open the article link again. If the old page remains cached, open it in a private tab or clear browser cache.

If an article still says not found, verify that its database row has status='published', published_at is not in the future, and the URL slug exactly matches the row's slug.
