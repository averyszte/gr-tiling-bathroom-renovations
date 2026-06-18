/**
 * Cloudflare Pages middleware — injects page-specific meta tags at the edge.
 *
 * Every URL on this React SPA serves the same index.html shell, which means
 * Google sees the home-page title/description on every route before JavaScript
 * runs. This middleware intercepts the HTML response and rewrites <title>,
 * <meta description>, <link canonical>, and Open Graph tags for each known
 * route, so Googlebot gets unique, correct metadata on first fetch.
 *
 * It calls context.next() first, so all existing Cloudflare Pages behaviour
 * (_redirects, _headers, static assets) continues to work exactly as before.
 * Only the <head> of HTML responses is modified.
 */

const SITE = "https://grtilingandbathrooms.ie";

const ROUTES = {
  "/": {
    title: "Bathroom Renovations & Tiling Services Dublin | GR Tiling",
    description:
      "Transform your bathroom with Dublin's trusted renovation and tiling specialists. Clean work, honest pricing, and a 5-star reputation. Get a free quote today.",
  },
  "/services/bathroom-renovations": {
    title: "Bathroom Renovations Dublin | GR Tiling & Bathroom Renovations",
    description:
      "Bathroom renovations in Dublin done on time and on budget by a trusted local specialist. Clean work, clear pricing, and reliable results. Get a free quote.",
  },
  "/services/tiling-services": {
    title: "Tiling Services Dublin | GR Tiling & Bathroom Renovations",
    description:
      "Clean, reliable tiling services in Dublin for bathrooms, walls, floors, and repairs. Precise finishes, honest pricing, and tidy work. Get a free quote.",
  },
  "/cost-guide": {
    title: "Bathroom Renovation & Tiling Guide Dublin | GR Tiling",
    description:
      "An honest guide to bathroom renovations and tiling in Dublin. Understand what's involved, what affects your quote, and what to expect before work begins.",
  },
  "/services/wet-room-installation-dublin": {
    title: "Wet Room Installation Dublin | GR Tiling",
    description:
      "Professional wet room installation in Dublin with full waterproofing, drainage, tiling, and finishing from GR Tiling & Bathroom Renovations.",
  },
  "/services/accessible-bathroom-dublin": {
    title: "Accessible Bathroom Renovations Dublin | GR Tiling",
    description:
      "Accessible bathroom renovations in Dublin. Walk-in showers, wet rooms, grab rails, and non-slip tiles. Safe, practical work from GR Tiling.",
  },
  "/services/floor-wall-tiling-dublin": {
    title: "Floor & Wall Tiling Dublin | Expert Tilers | GR Tiling",
    description:
      "Professional floor and wall tiling in Dublin for bathrooms, kitchens, hallways and splashbacks. Clean lines, durable results, tidy work.",
  },
  "/services/bathroom-tiling-dublin": {
    title: "Bathroom Tiling Dublin | Professional Tilers | GR Tiling",
    description:
      "Professional bathroom tiling in Dublin. Floors, walls, showers, ensuites and wet rooms with proper prep, clean grout lines, and tidy finishes.",
  },
  "/services/kitchen-tiling-dublin": {
    title: "Kitchen Tiling Dublin | Splashbacks & Floors | GR Tiling",
    description:
      "Kitchen tiling in Dublin. Splashbacks, wall tiles, floor tiles, and utility rooms. Clean, practical finishes. Free quotes from GR Tiling.",
  },
  "/services/tile-repairs-dublin": {
    title: "Tile Repairs Dublin | Cracked Tiles Fixed | GR Tiling",
    description:
      "Tile repairs across Dublin. Cracked tiles, loose tiles, broken grout, failed silicone. Honest advice on repair vs retile. Free quotes from GR Tiling.",
  },
  "/about": {
    title: "About GR Tiling & Bathroom Renovations | Dublin",
    description:
      "Learn more about GR Tiling & Bathroom Renovations, a trusted local provider of bathroom renovations and tiling services in Dublin.",
  },
  "/contact": {
    title: "Contact GR Tiling & Bathroom Renovations | Free Quote Dublin",
    description:
      "Contact GR Tiling & Bathroom Renovations for bathroom renovation and tiling quotes in Dublin. Call today or request a free quote online.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | GR Tiling & Bathroom Renovations",
    description:
      "Privacy policy for GR Tiling & Bathroom Renovations. How we collect, use, and protect your personal information.",
  },
  "/terms": {
    title: "Terms & Conditions | GR Tiling & Bathroom Renovations",
    description:
      "Terms and conditions for GR Tiling & Bathroom Renovations services in Dublin, Ireland.",
  },
};

export async function onRequest(context) {
  // Let Cloudflare Pages handle the request normally first.
  // This preserves _redirects (SPA fallback), _headers (image preloads),
  // and static asset serving — nothing changes for CSS, JS, fonts, images.
  const response = await context.next();

  // Only rewrite HTML responses — pass everything else straight through.
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Normalise path: strip trailing slash except on root.
  const url = new URL(context.request.url);
  let path = url.pathname;
  if (path !== "/" && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  const meta = ROUTES[path];

  // Unknown route (e.g. /thank-you) — return the default response untouched.
  if (!meta) {
    return response;
  }

  const canonical = `${SITE}${path}`;

  // Rewrite the <head> tags in place.
  // <title>        — replaced with the correct page title
  // canonical      — injected after <title> (absent from static HTML)
  // og:url         — injected after <title> (absent from static HTML)
  // meta tags      — description, og:title, og:description, twitter equivalents
  return new HTMLRewriter()
    .on("title", {
      element(el) {
        el.setInnerContent(meta.title);
        el.after(
          `<link rel="canonical" href="${canonical}">` +
            `<meta property="og:url" content="${canonical}">`,
          { html: true },
        );
      },
    })
    .on('meta[name="description"]', {
      element(el) {
        el.setAttribute("content", meta.description);
      },
    })
    .on('meta[property="og:title"]', {
      element(el) {
        el.setAttribute("content", meta.title);
      },
    })
    .on('meta[property="og:description"]', {
      element(el) {
        el.setAttribute("content", meta.description);
      },
    })
    .on('meta[name="twitter:title"]', {
      element(el) {
        el.setAttribute("content", meta.title);
      },
    })
    .on('meta[name="twitter:description"]', {
      element(el) {
        el.setAttribute("content", meta.description);
      },
    })
    .transform(response);
}
