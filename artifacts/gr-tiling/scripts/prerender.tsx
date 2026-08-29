/**
 * Build-time prerendering.
 *
 * Runs after `vite build`. Renders each known route to a static HTML
 * string via React's server renderer and writes it into dist/<route>.html
 * (a flat file, not <route>/index.html), so Cloudflare Pages serves real
 * content in the initial HTML response instead of an empty <div id="root">.
 * Cloudflare serves /about.html directly at the bare URL /about with no
 * redirect, whereas /about/index.html would 308-redirect requests for
 * /about to /about/ — a redirect hop that wouldn't match the no-trailing-slash
 * canonical URLs used in the sitemap and <link rel="canonical"> tags.
 * The client still hydrates over this markup on load (see src/main.tsx).
 *
 * Page <head> tags (title, description, canonical, OG/Twitter) and each route's
 * JSON-LD schema are written straight into the static file here, so crawlers
 * that don't execute JS see the correct metadata on the first response.
 *
 * Both come from the page module itself — the same PAGE_TITLE/PAGE_DESCRIPTION/
 * PAGE_PATH constants and schema object the page applies client-side via
 * applyPageSeo()/applyJsonLd() in src/lib/seo.ts. That single source is
 * deliberate. These tags used to be injected at the edge by a separate route
 * table in functions/_middleware.js, which silently drifted out of sync: by the
 * time it was removed, 11 of 14 routes were serving crawlers the pre-rewrite
 * titles while logged-in users saw the current ones. Anything that needs a
 * per-route <head> value belongs in the page module, never in a second table.
 */

import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import App from "../src/App";
import { SITE_URL } from "../src/lib/seo";
import * as HomePage from "../src/pages/HomePage";
import * as BathroomRenovationsPage from "../src/pages/BathroomRenovationsPage";
import * as TilingServicesPage from "../src/pages/TilingServicesPage";
import * as CostGuidePage from "../src/pages/CostGuidePage";
import * as WetRoomPage from "../src/pages/WetRoomPage";
import * as AccessibleBathroomPage from "../src/pages/AccessibleBathroomPage";
import * as FloorWallTilingPage from "../src/pages/FloorWallTilingPage";
import * as BathroomTilingPage from "../src/pages/BathroomTilingPage";
import * as KitchenTilingPage from "../src/pages/KitchenTilingPage";
import * as TileRepairsPage from "../src/pages/TileRepairsPage";
import * as AboutPage from "../src/pages/AboutPage";
import * as ContactPage from "../src/pages/ContactPage";
import * as PrivacyPolicyPage from "../src/pages/PrivacyPolicyPage";
import * as TermsPage from "../src/pages/TermsPage";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");

type Route = {
  path: string;
  title: string;
  description: string;
  schemaId?: string;
  schema?: object;
  /** Emits <meta name="robots" content="noindex"> and no canonical. */
  noindex?: boolean;
};

/**
 * One entry per route. Title, description and path all come from the page
 * module, so there is no second copy to keep in sync; the literal path passed
 * to seo() is only asserted against the page's own PAGE_PATH, which catches an
 * entry wired to the wrong page's constants.
 */
const ROUTES: Route[] = [
  { ...seo(HomePage, "/"), schemaId: "home", schema: HomePage.homeSchema },
  { ...seo(BathroomRenovationsPage, "/services/bathroom-renovations"), schemaId: "bathroom-renovations", schema: BathroomRenovationsPage.bathroomSchema },
  { ...seo(TilingServicesPage, "/services/tiling-services"), schemaId: "tiling-services", schema: TilingServicesPage.tilingSchema },
  { ...seo(CostGuidePage, "/cost-guide"), schemaId: "cost-guide", schema: CostGuidePage.schema },
  { ...seo(WetRoomPage, "/services/wet-room-installation-dublin"), schemaId: "wet-room", schema: WetRoomPage.schema },
  { ...seo(AccessibleBathroomPage, "/services/accessible-bathroom-dublin"), schemaId: "accessible-bathroom", schema: AccessibleBathroomPage.schema },
  { ...seo(FloorWallTilingPage, "/services/floor-wall-tiling-dublin"), schemaId: "floor-wall-tiling", schema: FloorWallTilingPage.schema },
  { ...seo(BathroomTilingPage, "/services/bathroom-tiling-dublin"), schemaId: "bathroom-tiling", schema: BathroomTilingPage.schema },
  { ...seo(KitchenTilingPage, "/services/kitchen-tiling-dublin"), schemaId: "kitchen-tiling", schema: KitchenTilingPage.schema },
  { ...seo(TileRepairsPage, "/services/tile-repairs-dublin"), schemaId: "tile-repairs", schema: TileRepairsPage.schema },
  { ...seo(AboutPage, "/about"), schemaId: "about", schema: AboutPage.aboutSchema },
  { ...seo(ContactPage, "/contact"), schemaId: "contact", schema: ContactPage.contactSchema },
  {
    // Disallowed in robots.txt; it has no page-level SEO constants of its own,
    // so give it a title here rather than letting it inherit the homepage's.
    path: "/thank-you",
    title: "Thank You | GR Tiling & Bathroom Renovations",
    description: "Thanks for getting in touch — we'll be back to you shortly with your free quote.",
    noindex: true,
  },
  { ...seo(PrivacyPolicyPage, "/privacy-policy"), schemaId: "privacy-policy", schema: PrivacyPolicyPage.schema },
  { ...seo(TermsPage, "/terms"), schemaId: "terms", schema: TermsPage.schema },
];

type PageModule = { PAGE_TITLE: string; PAGE_DESCRIPTION: string; PAGE_PATH: string };

function seo(page: PageModule, expectedPath: string) {
  if (page.PAGE_PATH !== expectedPath) {
    throw new Error(
      `Route ${expectedPath} is wired to a page whose PAGE_PATH is ${page.PAGE_PATH}.`,
    );
  }
  return {
    path: page.PAGE_PATH,
    title: page.PAGE_TITLE,
    description: page.PAGE_DESCRIPTION,
  };
}

/** Escapes a string for use inside a double-quoted HTML attribute. */
function attr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Rewrites the template's per-page <head> tags for one route. The template
 * carries the homepage's values as defaults, so every tag replaced here
 * already exists exactly once and the replacements are unconditional.
 */
function applyHead(
  html: string,
  { title, description, path, noindex }: Route,
): string {
  const url = `${SITE_URL}${path}`;
  const t = attr(title);
  const d = attr(description);

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${t}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${d}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${t}" />`,
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${d}" />`,
    )
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${t}" />`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${d}" />`,
    )
    .replace(
      /<meta property="og:image" content=".*?" \/>/,
      `<meta property="og:image" content="${SITE_URL}/opengraph.jpg" />`,
    )
    .replace(
      /<meta name="twitter:image" content=".*?" \/>/,
      `<meta name="twitter:image" content="${SITE_URL}/opengraph.jpg" />`,
    )
    .replace(
      "</head>",
      noindex
        ? `  <meta name="robots" content="noindex" />
  </head>`
        : `  <meta property="og:url" content="${url}" />
    <link rel="canonical" href="${url}" />
  </head>`,
    );
}

const template = readFileSync(join(DIST_DIR, "index.html"), "utf-8");

for (const entry of ROUTES) {
  const { path: route, schemaId, schema } = entry;
  const appHtml = renderToString(<App ssrPath={route} />);
  let html = applyHead(template, entry).replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  if (schemaId && schema) {
    // Matches the tag shape applyJsonLd() creates client-side, so hydration
    // finds and reuses this tag instead of creating a duplicate.
    const json = JSON.stringify(schema).replace(/</g, "\\u003c");
    const schemaTag = `<script type="application/ld+json" data-schema-id="${schemaId}">${json}</script>\n  </head>`;
    html = html.replace("</head>", schemaTag);
  }

  const outPath =
    route === "/"
      ? join(DIST_DIR, "index.html")
      : join(DIST_DIR, `${route.slice(1)}.html`);

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`Prerendered ${route} -> ${outPath.replace(DIST_DIR, "dist")}`);
}

// Cloudflare Pages serves dist/404.html with a real HTTP 404 status for any
// path that doesn't match a static file, once public/_redirects no longer
// force-rewrites everything to index.html. Rendering the NotFound route's
// own content here (instead of letting unmatched paths fall back to the
// now-fully-rendered homepage) avoids serving crawlers a 200 response with
// duplicate homepage content for garbage URLs.
const notFoundAppHtml = renderToString(<App ssrPath="/__not_found__" />);
const notFoundHtml = applyHead(template, {
  path: "/404",
  title: "Page Not Found | GR Tiling & Bathroom Renovations",
  description: "The page you are looking for could not be found.",
  noindex: true,
}).replace(
  '<div id="root"></div>',
  `<div id="root">${notFoundAppHtml}</div>`,
);
writeFileSync(join(DIST_DIR, "404.html"), notFoundHtml);
console.log("Prerendered 404 -> dist/404.html");
