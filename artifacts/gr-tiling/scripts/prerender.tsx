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
 * Page <head> tags (title, description, canonical, OG) are handled separately
 * by functions/_middleware.js at the edge. This script fills in <body>, and
 * also injects each route's JSON-LD schema directly into <head> so crawlers
 * that don't execute JS still see structured data on the first response —
 * the same schema object each page applies client-side via applyJsonLd()
 * in src/lib/seo.ts (kept in sync because both read the same exported const).
 */

import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import App from "../src/App";
import { homeSchema } from "../src/pages/HomePage";
import { bathroomSchema } from "../src/pages/BathroomRenovationsPage";
import { tilingSchema } from "../src/pages/TilingServicesPage";
import { schema as costGuideSchema } from "../src/pages/CostGuidePage";
import { schema as wetRoomSchema } from "../src/pages/WetRoomPage";
import { schema as accessibleBathroomSchema } from "../src/pages/AccessibleBathroomPage";
import { schema as floorWallTilingSchema } from "../src/pages/FloorWallTilingPage";
import { schema as bathroomTilingSchema } from "../src/pages/BathroomTilingPage";
import { schema as kitchenTilingSchema } from "../src/pages/KitchenTilingPage";
import { schema as tileRepairsSchema } from "../src/pages/TileRepairsPage";
import { aboutSchema } from "../src/pages/AboutPage";
import { contactSchema } from "../src/pages/ContactPage";
import { schema as privacyPolicySchema } from "../src/pages/PrivacyPolicyPage";
import { schema as termsSchema } from "../src/pages/TermsPage";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");

const ROUTES: { path: string; schemaId?: string; schema?: object }[] = [
  { path: "/", schemaId: "home", schema: homeSchema },
  { path: "/services/bathroom-renovations", schemaId: "bathroom-renovations", schema: bathroomSchema },
  { path: "/services/tiling-services", schemaId: "tiling-services", schema: tilingSchema },
  { path: "/cost-guide", schemaId: "cost-guide", schema: costGuideSchema },
  { path: "/services/wet-room-installation-dublin", schemaId: "wet-room", schema: wetRoomSchema },
  { path: "/services/accessible-bathroom-dublin", schemaId: "accessible-bathroom", schema: accessibleBathroomSchema },
  { path: "/services/floor-wall-tiling-dublin", schemaId: "floor-wall-tiling", schema: floorWallTilingSchema },
  { path: "/services/bathroom-tiling-dublin", schemaId: "bathroom-tiling", schema: bathroomTilingSchema },
  { path: "/services/kitchen-tiling-dublin", schemaId: "kitchen-tiling", schema: kitchenTilingSchema },
  { path: "/services/tile-repairs-dublin", schemaId: "tile-repairs", schema: tileRepairsSchema },
  { path: "/about", schemaId: "about", schema: aboutSchema },
  { path: "/contact", schemaId: "contact", schema: contactSchema },
  { path: "/thank-you" },
  { path: "/privacy-policy", schemaId: "privacy-policy", schema: privacyPolicySchema },
  { path: "/terms", schemaId: "terms", schema: termsSchema },
];

const template = readFileSync(join(DIST_DIR, "index.html"), "utf-8");

for (const { path: route, schemaId, schema } of ROUTES) {
  const appHtml = renderToString(<App ssrPath={route} />);
  let html = template.replace(
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
let notFoundHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${notFoundAppHtml}</div>`,
);
notFoundHtml = notFoundHtml
  .replace(/<title>.*?<\/title>/s, "<title>Page Not Found | GR Tiling & Bathroom Renovations</title>")
  .replace(
    /<meta name="description" content=".*?" \/>/,
    '<meta name="description" content="The page you are looking for could not be found." />',
  )
  .replace("</head>", '  <meta name="robots" content="noindex">\n  </head>');
writeFileSync(join(DIST_DIR, "404.html"), notFoundHtml);
console.log("Prerendered 404 -> dist/404.html");
