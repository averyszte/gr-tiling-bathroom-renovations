/**
 * Takes the whole site offline with HTTP 503, reversibly.
 *
 * Every request — pages, assets, robots.txt, sitemap.xml — gets a 503 and a
 * short holding page. Nothing calls context.next(), so the prerendered files in
 * dist/ are never served while this is deployed. They are untouched on disk and
 * come straight back when this file is removed.
 *
 * Why 503 and not 404/410/noindex: 503 means "temporarily unavailable". Google
 * holds the existing index entries and retries rather than dropping the pages,
 * which is what makes this reversible without re-earning the indexing. A 404 or
 * 410 would deindex, and an X-Robots-Tag: noindex would deindex faster still —
 * so deliberately none of those are set here.
 *
 * TO BRING THE SITE BACK: delete this file (and the now-empty functions/
 * directory) and push. With no functions/ directory Cloudflare Pages serves
 * dist/ as pure static again, exactly as before. Takes about 45s to deploy.
 * Then request a recrawl in Search Console so the 503s are reassessed promptly.
 */

const RETRY_AFTER_SECONDS = 60 * 60 * 24; // Ask crawlers back in a day.

const HOLDING_PAGE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Temporarily Unavailable | GR Tiling &amp; Bathroom Renovations</title>
    <style>
      :root { color-scheme: light dark; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-content: center;
        padding: 24px;
        font: 16px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif;
        text-align: center;
        color: #1a1a1a;
        background: #faf9f7;
      }
      @media (prefers-color-scheme: dark) {
        body { color: #ededed; background: #121212; }
      }
      h1 { margin: 0 0 12px; font-size: 1.5rem; font-weight: 600; }
      p { margin: 0; opacity: 0.75; max-width: 34ch; }
    </style>
  </head>
  <body>
    <main>
      <h1>GR Tiling &amp; Bathroom Renovations</h1>
      <p>Our website is temporarily unavailable. Please check back soon.</p>
    </main>
  </body>
</html>
`;

export async function onRequest() {
  return new Response(HOLDING_PAGE, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": String(RETRY_AFTER_SECONDS),
      // Keeps the 503 out of every cache between here and the visitor, so
      // removing this file takes effect immediately instead of waiting for a
      // cached error to expire. This is what keeps the takedown reversible.
      "Cache-Control": "no-store, must-revalidate",
    },
  });
}
