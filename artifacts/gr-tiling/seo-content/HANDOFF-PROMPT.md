# Handoff prompt — paste into a fresh Claude Code session opened in the GR Tiling project

Open a session at:
`C:\Users\Avery\Downloads\_Easywebs\_Repos\GR Tiling and Bathroom Renovations Project\gr-tiling-bathroom-renovations`

Then paste everything below the line.

---

You're working in the GR Tiling & Bathroom Renovations site (React + Vite + wouter,
build-time prerendering via `scripts/prerender.tsx`, which also writes every
page's <head> tags, deployed on Cloudflare Pages). The site at
grtilingandbathrooms.ie has a serious indexing problem: only ~4 of ~15 pages are
indexed after two months. The cause is NOT the framework — it's near-duplicate
sibling pages, thin unique copy, an identical review block on every page, and FAQ
answers that never reach the prerendered HTML.

New page content has already been researched and written. It lives in
`artifacts/gr-tiling/seo-content/` — read `README.md` and `_strategy.md` there
first, then each per-page `.md` file. Your job is to implement it without
redesigning anything.

## Hard constraints

- **Do not redesign.** Reuse the existing components, sections, Tailwind classes and
  section rhythm. You are swapping and extending copy only. Each `.md` maps to the
  existing slots: META, HERO, area cards, inline prose sections, PROCESS, FAQ, CTA.
  Where a file has an "OPTIONAL DEEP SECTION", add it as a new section using the same
  design language already used on that page (e.g. `container mx-auto px-4`,
  `font-serif` headings, `CheckCircle2` bullet lists) — no new design patterns.
- **No emojis anywhere.** Use `lucide-react` icons, consistent with the rest of the site.
- **No prices anywhere — client instruction.** Gerry does not want figures shown on
  the site. Do NOT add euro amounts, per-m² rates, cost percentages, or VAT figures to
  any page, **including `/cost-guide`** — that page is deliberately written as a
  factors-only "what shapes your quote" guide. Every enquiry drives to a free written
  quote. If you see a price in any `.md`, it is a mistake — strip it.
- Irish/British English spelling.

## Tasks

1. **Drop content into each page component** (`src/pages/*.tsx`):
   `BathroomRenovationsPage`, `TilingServicesPage`, `BathroomTilingPage`,
   `KitchenTilingPage`, `FloorWallTilingPage`, `TileRepairsPage`, `WetRoomPage`,
   `AccessibleBathroomPage`, `CostGuidePage`, `AboutPage`. For each:
   - Update `PAGE_TITLE` / `PAGE_DESCRIPTION` (the META block) and hero copy.
   - Replace the area-card labels/descriptions, inline prose, and the 4 PROCESS steps.
   - Replace the `faqs` array with the new Q&A.
   - Add the optional deep section where the `.md` includes one.
   - Update the CTA copy.

2. **Make FAQ answers crawlable (critical).** The Radix `<Accordion>` does not mount
   closed content, so answers are absent from the prerendered HTML — the richest
   unique copy on each page is invisible to Google. Fix it so **every FAQ answer text
   appears in the built `dist/*.html`**. Preferred: pass `forceMount` to
   `AccordionContent` and hide the closed state with CSS instead of unmounting; or
   render the answers as always-present text. **Verify** by running the build and
   grepping an answer string in the generated `dist/services/tile-repairs-dublin.html`
   — if it's not there, it's not fixed.

3. **Update the FAQ schema to match.** Each page's `schema` export has an
   `@type: "FAQPage"` with `mainEntity`. Update it so the questions/answers match the
   new `faqs` array exactly. Note: Google retired FAQ rich results in May 2026, so
   don't expect SERP rich snippets — keep `FAQPage` anyway for AI/LLM citation value,
   but the real win here is the answers being in the crawlable HTML (task 2).

4. **De-duplicate reviews.** The shared `ReviewsSection` component currently renders
   the same three testimonials on every page. Change it to feature the single
   topically-matched review assigned per page (see the "Featured review" line in each
   `.md` and the review strategy in `_strategy.md`), rather than the identical block.
   Give it a prop for which review to show. Do **not** invent any reviews — only the
   three real ones exist. Also vary the "15 years / insured / free quote" trust line
   per page so it isn't byte-identical everywhere.

5. **Verify the differentiation held.** After edits, the floor-wall / bathroom /
   kitchen tiling pages must not overlap — each owns its lane per `_strategy.md`, and
   `tiling-services` is the hub that links out to the children. Confirm the internal
   links from each `.md` are present.

6. **Run the checks:** typecheck, lint, and `pnpm build` + the prerender step. Confirm
   no page component blew past any file-size limits, and spot-check two built HTML
   files for (a) the unique body copy and (b) the FAQ answers.

## After deploy (tell the user to do these — you can't)

- Cost-guide shows no prices by Gerry's instruction — confirm he is happy with the
  factors-only framing before publishing.
- In Google Search Console: resubmit the sitemap and use "Request indexing" on the
  updated URLs. Watch the Coverage report move pages from "Crawled — currently not
  indexed" to "Indexed" over the following weeks.
- Start collecting job-specific Google reviews (wet room, splashback, regrout,
  accessible) so reviews eventually map 1:1 onto pages — see `_strategy.md`.
