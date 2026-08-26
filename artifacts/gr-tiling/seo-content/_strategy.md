# GR Tiling & Bathroom Renovations — SEO Differentiation & Internal-Linking Architecture

Goal: fix the indexation problem (only ~4 of ~15 pages indexed) by giving every one of the 10 core pages a **single, distinct reason to rank** and a clean **hub-and-spoke** link graph. No two pages compete for the same primary term, no page renders the same review/boilerplate block as its siblings.

The two root causes we are removing:
1. **Keyword cannibalisation** — sibling tiling pages all chased "tiling Dublin" and repeated the same wet-area/prep copy. Fix: one keyword owner per topic, everything else defers with a link.
2. **Duplicate boilerplate** — the same 3-review block and identical trust paragraphs on every page made pages look thin/near-duplicate to Google. Fix: one *different* featured review per page + page-specific trust framing (see Review Strategy).

---

## Architecture at a glance

```
                        /cost-guide  (informational PILLAR — price anchor for the whole site)
                              ▲  ▲  ▲
      ┌───────────────────────┘  │  └────────────────────────┐
/services/bathroom-renovations   │            /services/tiling-services  (TILING HUB)
   (turnkey / project mgmt)       │                 broad overview, links OUT
      │        │        │         │            ┌──────┬──────┬──────┬──────┐
      ▼        ▼        ▼         │            ▼      ▼      ▼      ▼      │
  wet-room  accessible  tiling ───┘      bathroom  kitchen  floor-&  tile-  │
                          hub             -tiling  -tiling   wall    repairs │
                                             │        │      tiling    │     │
                                             └────────┴──── all link back ───┘
   /about  (E-E-A-T) supports every page; linked from cost-guide + footer
```

Three "authority" destinations everything points up to:
- **/cost-guide** — the price pillar. Every service page carries only a *short* price block and links here for the full breakdown. This prevents one duplicated cost table sitewide.
- **/services/tiling-services** — the tiling hub. Owns the generic "tiler Dublin" term, stays broad, and funnels detail to the four tiling children.
- **/services/bathroom-renovations** — the turnkey hub for whole-project buyers, feeding wet-room and accessible.

---

## Overlap resolution (the three risk zones)

**Zone A — "bathroom tiling" straddles renovations vs tiling vs wet-room.**
- `bathroom-renovations` = **turnkey** (one contractor, full project, sequencing). Mentions tiling only as one stage; links to the tiling hub.
- `bathroom-tiling-dublin` = **the tiling craft inside a bathroom** (shower walls/floors, ensuites, niches, tanking *within a shower enclosure/over a tray* before tiling). Fit-focused.
- `wet-room-installation-dublin` = **trayless, whole-room** build (full-room tanking, former, drainage falls, level-access).
- Rule: enclosure/standard-shower waterproofing lives on **bathroom-tiling**; whole-room tanking + former + falls lives on **wet-room**. Each links to the other for the boundary case.

**Zone B — floor-wall vs bathroom vs kitchen tiling.**
- `floor-wall-tiling-dublin` **owns the generic technique**: subfloor & wall prep, self-levelling, backer boards, large-format, adhesive selection (S1/S2), priming, movement/expansion joints, UFH-with-tile, and non-wet-area rooms (hallways, living areas). It is the "how tile is done right" page.
- `bathroom-tiling-dublin` takes all **wet-area** application; `kitchen-tiling-dublin` takes all **splashback / around-units** application. Both *defer* generic prep back to floor-wall instead of re-explaining it.
- Rule: prep/technique explained **once** on floor-wall; the room pages say "on the correct substrate (see floor & wall tiling)" and get on with room-specific detail.

**Zone C — wet-room vs accessible bathroom (shared walk-in / level-access vocabulary).**
- `wet-room-installation-dublin` = **design + waterproofing craft** (why it won't leak, tanking, falls, tile spec).
- `accessible-bathroom-dublin` = **mobility, safety & grants** (Housing Adaptation Grant, grab-rail pattressing, non-slip R11, seating, Part M, council paperwork).
- Rule: the word "level-access" appears on both, but wet-room owns the *build*, accessible owns the *grant + safety* reason to buy. They cross-link once each.

---

## Per-page specification

### 1. /services/bathroom-renovations
- **Focus keyword:** bathroom renovations Dublin
- **Secondary:** bathroom fitters Dublin, bathroom refurbishment Dublin, full bathroom remodel Dublin, ensuite renovation Dublin
- **Intent:** Commercial-investigational — homeowner scoping a full refit and comparing fitters, one contractor start to finish.
- **Owns:** turnkey project management (one contractor, no juggling trades); what's included (strip-out + disposal, plumbing/electrics coordination, plastering/floor prep, tiling, sanitaryware, fit-out); end-to-end sequencing; realistic timeline (7–10 days std, 10–14 complex); planning = exempted development; "on time, on budget" promise.
- **Defers:** all euro detail → /cost-guide; tiling craft/patterns → /services/tiling-services; wet-room build → /services/wet-room-installation-dublin; mobility/grant work → /services/accessible-bathroom-dublin.
- **Internal links:** "what a bathroom renovation costs in Dublin" → /cost-guide · "all our tiling services" → /services/tiling-services · "wet room installations" → /services/wet-room-installation-dublin · "accessible & mobility bathrooms" → /services/accessible-bathroom-dublin
- **Featured review:** Jessicaelizabeth Mooney ("Had my bathroom done and I am absolutely delighted…") — direct full-bathroom outcome.

### 2. /services/tiling-services  (PILLAR / HUB)
- **Focus keyword:** tiling services Dublin
- **Secondary:** tiler Dublin, tiling contractors Dublin, tiler near me, supply and fit tiling Dublin
- **Intent:** Transactional "hire a tiler" — broad entry point that routes to the right sub-service.
- **Owns:** the generic "tiler Dublin" positioning; supply-and-fit vs fit-only; residential vs commercial; how to choose a tiler (insured, 15 yrs, references); areas served; a *high-level* menu of tile work that links out. Deliberately broad — no deep technique or per-room detail here.
- **Defers:** bathroom/wet-area tiling → /services/bathroom-tiling-dublin; kitchen/splashbacks → /services/kitchen-tiling-dublin; prep/technique/large-format → /services/floor-wall-tiling-dublin; regrout/repairs → /services/tile-repairs-dublin; per-m² pricing → /cost-guide.
- **Internal links (spokes):** "bathroom tiling" → /services/bathroom-tiling-dublin · "kitchen tiling & splashbacks" → /services/kitchen-tiling-dublin · "floor & wall tiling" → /services/floor-wall-tiling-dublin · "tile & grout repairs" → /services/tile-repairs-dublin
- **Featured review:** Alan L ("Bathroom done in 3 days. Also did flooring in hallway and kitchen…") — showcases breadth of tiling work, fits the hub.

### 3. /services/bathroom-tiling-dublin
- **Focus keyword:** bathroom tiling Dublin
- **Secondary:** shower tiling Dublin, ensuite tiling, bathroom wall and floor tiling, tiling a shower Dublin
- **Intent:** Transactional — homeowner wants a tiler for a bathroom/shower specifically.
- **Owns:** shower walls & floors, wet zones, ensuites, tile niches/recesses, waterproofing *before tiling a standard bathroom / shower enclosure over a tray*, small-format & mosaic on shower floors for grip/falls, layout & setting-out at eye level.
- **Defers:** generic substrate prep & adhesive theory → /services/floor-wall-tiling-dublin; trayless whole-room tanking, former & falls → /services/wet-room-installation-dublin; regrout/silicone repair → /services/tile-repairs-dublin; cost → /cost-guide.
- **Internal links:** "how we prep floors & walls" → /services/floor-wall-tiling-dublin · "full wet room installation" → /services/wet-room-installation-dublin · "tile & grout repairs" → /services/tile-repairs-dublin · "bathroom tiling costs" → /cost-guide
- **Featured review:** Jessicaelizabeth Mooney (bathroom result) — matches bathroom tiling outcome.

### 4. /services/kitchen-tiling-dublin
- **Focus keyword:** kitchen tiling Dublin
- **Secondary:** kitchen splashback Dublin, metro splashback, herringbone splashback, tiling around kitchen units
- **Intent:** Transactional — splashback or kitchen floor/wall tiling.
- **Owns:** splashbacks (metro, herringbone, pattern), tiling around cabinets/worktops/appliances/sockets, kitchen wall + floor tiling, utility rooms, heat/grease-tolerant finishes and cleanable grout for kitchens.
- **Defers:** generic floor prep/large-format/levelling → /services/floor-wall-tiling-dublin; repairs → /services/tile-repairs-dublin; per-splashback pricing → /cost-guide.
- **Internal links:** "our full tiling services" → /services/tiling-services · "floor & wall prep & large-format" → /services/floor-wall-tiling-dublin · "what a splashback costs" → /cost-guide
- **Featured review:** Alan L (did flooring in hallway and kitchen) — directly names kitchen work.

### 5. /services/floor-wall-tiling-dublin
- **Focus keyword:** floor and wall tiling Dublin
- **Secondary:** large-format tiling Dublin, tile floor preparation, self-levelling floor Dublin, hallway floor tiling
- **Intent:** Transactional/technical — general floor & wall tiling across the home, "done properly."
- **Owns (the generic craft, explained once for the whole site):** subfloor & wall preparation, deflection/stiffening timber floors, self-levelling compound, tile backer boards, priming, adhesive selection (EN 12004 S1/S2 for timber), large-format & back-buttering, movement/expansion joints (BS 5385), porcelain vs ceramic vs stone choice, underfloor heating with tile, hallways/living rooms.
- **Defers:** wet-area application & waterproofing → /services/bathroom-tiling-dublin; splashbacks & kitchens → /services/kitchen-tiling-dublin; wet-room tanking → /services/wet-room-installation-dublin; repairs → /services/tile-repairs-dublin; cost → /cost-guide.
- **Internal links:** "our full tiling services" → /services/tiling-services · "bathroom & shower tiling" → /services/bathroom-tiling-dublin · "kitchen tiling & splashbacks" → /services/kitchen-tiling-dublin · "tiling cost factors" → /cost-guide
- **Featured review:** Alan L (flooring in hallway and kitchen) — general floor tiling proof.

### 6. /services/tile-repairs-dublin
- **Focus keyword:** tile repairs Dublin
- **Secondary:** regrouting Dublin, grout repair Dublin, silicone replacement Dublin, cracked tile repair, mouldy grout removal
- **Intent:** Problem-aware, often urgent, low-ticket / fast-converting — a specific failure (mouldy grout, leaking silicone, cracked/drummy tile).
- **Owns (deep grout-repair content lives here):** regrout vs retile decision, raking out & replacing grout without removing tiles, resealing porous grout/stone, silicone renewal with sanitary anti-mould grade, mould removal, cracked/loose/drummy (tap-test) tile replacement, tile & grout cleaning, "refresh without renovating" positioning, when to regrout (~8–10 yrs).
- **Defers:** full retile of a failed bed → /services/bathroom-tiling-dublin or /services/floor-wall-tiling-dublin; failed waterproofing needing a rebuild → /services/wet-room-installation-dublin; cost → /cost-guide.
- **Internal links:** "our full tiling services" → /services/tiling-services · "full bathroom re-tiling" → /services/bathroom-tiling-dublin · "wet room re-waterproofing" → /services/wet-room-installation-dublin · "regrout & repair costs" → /cost-guide
- **Featured review:** Raimonda Brooks ("got stuck into work straight away and had it done in no time… left the place as clean as he found it. Super honest about pricing") — fast, tidy, honest = the repair buyer's worry.

### 7. /services/wet-room-installation-dublin
- **Focus keyword:** wet room installation Dublin
- **Secondary:** wet room conversion Dublin, tanking and waterproofing Dublin, level-access shower Dublin, wet room vs walk-in shower
- **Intent:** Commercial-investigational, higher-spec, design/waterproofing-anxiety led — "will it leak?"
- **Owns:** full-room tanking systems (liquid & sheet membranes, banding junctions), decoupling over suspended timber, the former & drainage, gradient/falls to a linear/point drain, R11 slip-resistant tile spec for wet floors, wet room vs walk-in shower comparison, upstairs-waterproofing risk in Dublin stock, tanking-failure consequences (the expertise hook).
- **Defers:** mobility features & grants → /services/accessible-bathroom-dublin; standard bathroom/enclosure tiling → /services/bathroom-tiling-dublin; whole-project management → /services/bathroom-renovations; cost → /cost-guide.
- **Internal links:** "bathroom & shower tiling" → /services/bathroom-tiling-dublin · "accessible & mobility bathrooms" → /services/accessible-bathroom-dublin · "full bathroom renovations" → /services/bathroom-renovations · "wet room costs" → /cost-guide
- **Featured review:** Jessicaelizabeth Mooney (delighted bathroom result) — reassures the leak-anxious buyer of a finished, happy outcome.

### 8. /services/accessible-bathroom-dublin
- **Focus keyword:** accessible bathrooms Dublin
- **Secondary:** mobility bathroom Dublin, walk-in shower for elderly, disabled wet room grant Ireland, level-access shower room Dublin
- **Intent:** Needs-driven, often researched by carers/adult children or for ageing in place — grants define the category.
- **Owns:** Housing Adaptation Grant for People with a Disability, Mobility Aids Grant, Housing Aid for Older Persons; help with Dublin council/HSE paperwork & grant-compliant design; grab rails + timber pattressing behind board; non-slip R11 floors; wall-mounted sinks, seats, half-height doors; level entry; ~3–5 day timeline; Part M / Universal Design; approved-contractor reassurance.
- **Defers:** the tanking/falls build craft → /services/wet-room-installation-dublin; whole-project renovation → /services/bathroom-renovations; cost → /cost-guide.
- **Internal links:** "how we build a level-access wet room" → /services/wet-room-installation-dublin · "full bathroom renovations" → /services/bathroom-renovations · "accessible bathroom costs & grants" → /cost-guide
- **Featured review:** Raimonda Brooks ("a true legend, super nice guy… super honest about pricing… left the place as clean as he found it") — trust, care and tidiness matter most to carers/older clients.

### 9. /cost-guide  (INFORMATIONAL PILLAR)
- **Focus keyword:** bathroom renovation cost Dublin
- **Secondary:** how much does a bathroom cost Ireland, cost to tile a bathroom Ireland, tiler cost per m² Ireland, wet room cost Dublin
- **Intent:** Highest-volume informational-commercial — "what drives the price," soft CTA to a free quote.
- **CLIENT CONSTRAINT — NO PRICES SHOWN.** By Gerry's instruction, this page shows **no euro figures, no per-m² rates, no cost percentages, no VAT amounts.** It answers cost-intent searches with the *factors* that shape a quote and drives every enquiry to a free written quote. The delivered `cost-guide.md` has already been rewritten to this constraint — do not re-add figures.
- **Owns:** the up/down factor list (older stock, timber floors, damp, large-format/stone, UFH, moving fixtures, wet-room build-up); what a quote covers; "cheapest quote skips tanking/priming/pattressing" honesty; why we quote in writing after a survey.
- **Defers:** the actual service delivery detail back to each service page.
- **Internal links:** "full bathroom renovations" → /services/bathroom-renovations · "our tiling services" → /services/tiling-services · "wet room installation" → /services/wet-room-installation-dublin · "meet Gerry / get a free quote" → /about
- **Featured review:** Raimonda Brooks ("Super honest about pricing… I actually ended up paying less than expected") — the perfect proof point for a cost page.

### 10. /about  (E-E-A-T)
- **Focus keyword:** GR Tiling and Bathroom Renovations Dublin
- **Secondary:** Gerry tiler Dublin, insured tiler Dublin, Irish owned bathroom renovations, trusted Dublin bathroom fitter
- **Intent:** Trust/brand — verify who does the work before requesting a quote.
- **Owns (evidenced facts ONLY):** 15 years in the trade; owner Gerry; based in and serving Dublin; fully insured; Irish owned; 5.0 Google rating; how we work / promise to the customer. Do NOT invent certifications, a founding year, team size, or project counts.
- **Defers:** every service → its page; pricing → /cost-guide.
- **Internal links:** "our bathroom renovations" → /services/bathroom-renovations · "our tiling services" → /services/tiling-services · "renovation & tiling cost guide" → /cost-guide
- **Featured review:** Raimonda Brooks ("Gerry is a true legend…") — names the owner, ideal E-E-A-T social proof.

---

## Review strategy (only 3 real reviews across 10 pages)

We have exactly **three** genuine Google reviews. **Never invent reviews** and never render the same 3-review block on every page — that repeated block is part of why sibling pages read as near-duplicates and stay unindexed.

Rules:
1. **One featured review per page**, chosen for topical fit (assignments above). Show it as a single quote with the reviewer's real name, not the whole set.
2. **De-duplicate by rotation and framing.** A review will inevitably repeat across pages (3 into 10), so vary *which* one is primary and vary the surrounding sentence so the block isn't byte-identical. E.g. on the cost page introduce Raimonda's quote with "honest pricing is the whole point of this guide"; on the accessible page introduce the *same* quote with "the reassurance carers tell us matters most."
3. **Do not stack all three on every page.** If a page needs more than one, pull the second from a live Google reviews embed/widget (dynamic, not hard-coded duplicate HTML), or omit.
4. **Distribution used:** Mooney → renovations, bathroom-tiling, wet-room (3). Brooks → tile-repairs, accessible, cost-guide, about (4). Alan L → tiling-hub, kitchen-tiling, floor-wall (3).
5. **Collect more real reviews — the real fix.** Three reviews cannot uniquely evidence ten pages, and the local pack rewards review volume/recency. Action: after every job ask for a Google review that *names the specific work* (e.g. "kitchen splashback," "wet room," "regrout") so future reviews map cleanly onto individual pages and reduce forced repetition. Prioritise reviews mentioning: wet room, accessible/grant work, kitchen splashback, and grout repair — the four pages currently leaning on borrowed quotes.

## Boilerplate de-duplication (beyond reviews)

- **Price:** only /cost-guide holds the full tables. Service pages carry a 2–3 line price *range* specific to that service, then link up. No shared cost table sitewide.
- **Trust line:** vary the "15 years / fully insured / free quote" sentence per page rather than pasting one identical block — e.g. lead accessible with "approved, insured contractor for grant-funded work," lead repairs with "insured, tidy, in-and-out fast."
- **FAQ:** each page gets its **own** FAQ (schema-eligible) answering that page's distinct questions from the SERP brief — no shared FAQ set.
- **Areas-served / NAP:** keep NAP consistent, but this is footer/schema, not body copy to repeat as text on every page.
