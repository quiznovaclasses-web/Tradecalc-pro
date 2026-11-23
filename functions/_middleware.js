// TradeCalc Pro canonical-host redirect for Cloudflare Pages.
// Ensure the www hostname has a proxied DNS record pointing to this Pages project.

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname.toLowerCase() === "www.quiznovaclasses.online") {
    const target = new URL(
      url.pathname + url.search,
      "https://quiznovaclasses.online"
    );

    return Response.redirect(target.toString(), 301);
  }

  return context.next();
}
