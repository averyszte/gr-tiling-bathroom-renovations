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
 * by functions/_middleware.js at the edge — this script only fills in <body>.
 */

import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import App from "../src/App";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");

const ROUTES = [
  "/",
  "/services/bathroom-renovations",
  "/services/tiling-services",
  "/cost-guide",
  "/services/wet-room-installation-dublin",
  "/services/accessible-bathroom-dublin",
  "/services/floor-wall-tiling-dublin",
  "/services/bathroom-tiling-dublin",
  "/services/kitchen-tiling-dublin",
  "/services/tile-repairs-dublin",
  "/about",
  "/contact",
  "/thank-you",
  "/privacy-policy",
  "/terms",
];

const template = readFileSync(join(DIST_DIR, "index.html"), "utf-8");

for (const route of ROUTES) {
  const appHtml = renderToString(<App ssrPath={route} />);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  const outPath =
    route === "/"
      ? join(DIST_DIR, "index.html")
      : join(DIST_DIR, `${route.slice(1)}.html`);

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`Prerendered ${route} -> ${outPath.replace(DIST_DIR, "dist")}`);
}
