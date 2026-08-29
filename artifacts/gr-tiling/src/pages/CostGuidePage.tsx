import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Info, CheckCircle2, XCircle, LayoutGrid, Layers, Home, Droplets, ClipboardList, Grid3x3 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { TrustStrip } from "@/components/TrustStrip";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

export const PAGE_TITLE = "Bathroom Renovation Cost Dublin | What Affects It";
export const PAGE_DESCRIPTION = "What affects the cost of a bathroom renovation or tiling job in Dublin? An honest look at the factors that shape your quote — plus a free written quote from Gerry.";
export const PAGE_PATH = "/cost-guide";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a bathroom renovation cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don't publish a figure, and we'd be suspicious of anyone who does without seeing your room. The cost is shaped by the state of your subfloor and walls, whether the layout stays put, the condition hidden behind the old tiles, and the finishes you choose. Rather than a phone guess we'd only have to revise, Gerry surveys the actual bathroom and gives you an itemised written quote you can rely on. This page explains every factor that moves the number."
          }
        },
        {
          "@type": "Question",
          "name": "What does it cost to tile a bathroom in Ireland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on real, measurable things: the area being tiled, whether it's a straightforward straight lay or an intricate pattern like herringbone, the tile format (large-format and natural stone take more skill and time), and how much preparation the surface needs first. Because those vary job to job, we give a written quote after seeing the space rather than a fixed online rate. Preparation is always part of it and never the corner to cut."
          }
        },
        {
          "@type": "Question",
          "name": "Why won't you give me a fixed price over the phone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because no honest tradesman can quote your bathroom without seeing it. The biggest cost drivers are hidden — the state of the subfloor, damp behind the tiles, whether the walls are true — and none of that shows in a phone call. A cheap phone figure only gets protected later with change orders. Instead, Gerry surveys the actual room and gives you an itemised written quote you can trust, so the agreed price is the price you pay."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the cheapest quote often a false economy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cheapest quote is usually cheapest because it has quietly removed the invisible work — tanking in wet zones, priming absorbent surfaces, backer boards, movement joints, and timber pattressing behind grab rails. None of that shows on day one, but skipping it is exactly why a bathroom cracks, leaks or goes mouldy within a couple of years. A slightly higher quote that includes proper prep and waterproofing is genuinely the cheaper bathroom over its life."
          }
        },
        {
          "@type": "Question",
          "name": "Why does a wet room cost more than a standard shower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because it's a more involved build. A wet room needs a drain, a graded screed or former so the floor falls correctly, and full-room tanking rather than a simple tray. How much more it comes to depends heavily on your floor — especially over suspended timber in older Dublin homes — which is why it can only be quoted after a survey. The waterproofing is the one line you must never cut, since a failed tank can cause damage many times its cost."
          }
        },
        {
          "@type": "Question",
          "name": "Is regrouting cheaper than retiling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, considerably — when your tiles are sound and well-bonded and only the grout and silicone have failed, regrouting restores the surface for a fraction of the disruption of a retile. Retiling is only necessary when tiles are drummy, lifting or cracked, or when the waterproofing behind them has failed. We give you the honest verdict on which your bathroom actually needs, and quote it in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Should I budget a contingency, and how much?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — a sensible contingency is wise on almost any Dublin bathroom, and more so in older housing stock. Victorian and Edwardian terraces and mid-century semis regularly hide surprises on strip-out: rotten timber under a leaking tray, bridged damp, or a subfloor that needs stiffening. A contingency means an honest surprise doesn't derail your project. We show you any genuine issue and price it openly before doing the work — it's never a blank cheque."
          }
        },
        {
          "@type": "Question",
          "name": "Does moving the bath or toilet add much to the cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It does — relocating fixtures means new first-fix plumbing, possibly moving the soil stack, and chasing walls and floors that then need making good. Keeping your existing layout is the single biggest saving available on any refit. If your current arrangement works, we'll usually advise keeping it and spending the budget on finishes and proper prep instead."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Pricing Guide", "item": `${SITE_URL}/cost-guide` }
      ]
    }
  ]
};

const quoteFactors = [
  {
    title: "Tile size and format",
    desc: "Larger tiles take more skill and time to lay correctly. They require more precision to keep level and aligned, but the result is fewer grout lines and a more modern, premium finish.",
  },
  {
    title: "Pattern complexity",
    desc: "Herringbone, chevron, and diagonal patterns require significantly more cuts and time than a straight lay, so it is worth factoring the layout into your plans early.",
  },
  {
    title: "Plumbing changes",
    desc: "Moving the position of a toilet, shower, or bath requires new pipework and adds to the project scope. A like-for-like replacement is far more straightforward. Underfloor heating can also be added under floor tiles while tiling is already underway.",
  },
  {
    title: "Surface preparation",
    desc: "Old tiles need to be removed and walls may need re-boarding before new tiling can begin. The condition of the existing substrate directly affects how much preparation is needed.",
  },
  {
    title: "Bathroom size",
    desc: "More square metres means more tiling, more materials, and more hours on site. An ensuite is usually a smaller scope than a large family bathroom.",
  },
  {
    title: "Sanitary ware",
    desc: "The sanitary ware you choose has a major impact on the final scope. Simple, mid-range, and premium options are all available, and we can advise on what works for your space.",
  },
  {
    title: "Location",
    desc: "We cover all of Dublin and surrounding counties, including further afield where the job warrants it. Jobs requiring significant travel may carry a supplement and we will always confirm this upfront.",
  },
];

const costFactors = [
  { icon: <LayoutGrid className="w-6 h-6" />, label: "Your Existing Layout", desc: "Keep it, save the most" },
  { icon: <Layers className="w-6 h-6" />, label: "Substrate Condition", desc: "Sound base or repairs first" },
  { icon: <Home className="w-6 h-6" />, label: "Older Dublin Homes", desc: "Hidden surprises on strip-out" },
  { icon: <Grid3x3 className="w-6 h-6" />, label: "Tile Choice", desc: "Standard vs large-format, stone" },
  { icon: <Droplets className="w-6 h-6" />, label: "Waterproofing", desc: "Non-negotiable in wet zones" },
  { icon: <ClipboardList className="w-6 h-6" />, label: "Scope Of Work", desc: "Refresh or full refit" },
];

type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "How much does a bathroom renovation cost in Dublin?", a: "We don't publish a figure, and we'd be suspicious of anyone who does without seeing your room. The cost is shaped by the state of your subfloor and walls, whether the layout stays put, the condition hidden behind the old tiles, and the finishes you choose. Rather than a phone guess we'd only have to revise, Gerry surveys the actual bathroom and gives you an itemised written quote you can rely on. This page explains every factor that moves the number." },
  { q: "What does it cost to tile a bathroom in Ireland?", a: "It depends on real, measurable things: the area being tiled, whether it's a straightforward straight lay or an intricate pattern like herringbone, the tile format (large-format and natural stone take more skill and time), and how much preparation the surface needs first. Because those vary job to job, we give a written quote after seeing the space rather than a fixed online rate. Preparation is always part of it and never the corner to cut." },
  { q: "Why won't you give me a fixed price over the phone?", a: "Because no honest tradesman can quote your bathroom without seeing it. The biggest cost drivers are hidden — the state of the subfloor, damp behind the tiles, whether the walls are true — and none of that shows in a phone call. A cheap phone figure only gets protected later with change orders. Instead, Gerry surveys the actual room and gives you an itemised written quote you can trust, so the agreed price is the price you pay." },
  { q: "Why is the cheapest quote often a false economy?", a: "The cheapest quote is usually cheapest because it has quietly removed the invisible work — tanking in wet zones, priming absorbent surfaces, backer boards, movement joints, and timber pattressing behind grab rails. None of that shows on day one, but skipping it is exactly why a bathroom cracks, leaks or goes mouldy within a couple of years. A slightly higher quote that includes proper prep and waterproofing is genuinely the cheaper bathroom over its life." },
  {
    q: "Why does a wet room cost more than a standard shower?",
    a: (
      <>
        Because it's a more involved build. A wet room needs a drain, a graded screed or former so the floor falls correctly, and full-room tanking rather than a simple tray. How much more it comes to depends heavily on your floor — especially over suspended timber in older Dublin homes — which is why it can only be quoted after a survey. See our{" "}
        <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room installation</Link>{" "}page for how that build is done properly.
      </>
    ),
  },
  {
    q: "Is regrouting cheaper than retiling?",
    a: (
      <>
        Yes, considerably — when your tiles are sound and well-bonded and only the grout and silicone have failed, regrouting restores the surface for a fraction of the disruption of a retile. Retiling is only necessary when tiles are drummy, lifting or cracked, or when the waterproofing behind them has failed. Our{" "}
        <Link href="/services/tile-repairs-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tile &amp; grout repairs</Link>{" "}page explains the difference.
      </>
    ),
  },
  { q: "Should I budget a contingency, and how much?", a: "Yes — a sensible contingency is wise on almost any Dublin bathroom, and more so in older housing stock. Victorian and Edwardian terraces and mid-century semis regularly hide surprises on strip-out: rotten timber under a leaking tray, bridged damp, or a subfloor that needs stiffening. A contingency means an honest surprise doesn't derail your project. We show you any genuine issue and price it openly before doing the work — it's never a blank cheque." },
  { q: "Does moving the bath or toilet add much to the cost?", a: "It does — relocating fixtures means new first-fix plumbing, possibly moving the soil stack, and chasing walls and floors that then need making good. Keeping your existing layout is the single biggest saving available on any refit. If your current arrangement works, we'll usually advise keeping it and spending the budget on finishes and proper prep instead." },
];

export default function CostGuidePage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("cost-guide", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Dublin Bathroom &amp; Tiling Cost Guide
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              What Shapes Your Bathroom Quote
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We don't post prices online, because no two Dublin bathrooms are the same. What we can do is show you honestly what drives a quote up or down — so you know exactly what you're paying for when Gerry surveys your room and puts it in writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
            <div className="flex justify-center">
              <HeroReviewBadge />
            </div>
          </div>
        </div>
      </section>

      <BelowFold>
      <TrustStrip />

      {/* Why no price */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Why we don't publish a price
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Ring around for a bathroom renovation cost and you'll hear wildly different answers. The honest reason: no tradesman can price your bathroom unseen — it's driven more by what strip-out reveals than the suite you pick. So Gerry surveys the room and gives you an itemised written quote you can hold us to. See our{" "}
            <Link href="/services/bathroom-renovations" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">full bathroom renovations</Link>{" "}page for the detail.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {costFactors.map((factor, i) => (
              <div key={i} className="bg-card rounded-2xl border shadow-sm p-6 flex flex-col gap-3">
                <div className="text-primary">{factor.icon}</div>
                <div>
                  <p className="font-semibold text-foreground">{factor.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bathroom renovation quote factors */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              What Shapes a Bathroom Renovation Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The scope of the job is the biggest factor. Here is what different types of bathroom projects typically involve.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl border mb-6 bg-background">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold">Type of Job</th>
                    <th className="text-right px-5 py-4 font-semibold">What to Know</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Full bathroom renovation", "Complete strip out and refit with plumbing, tiling, sanitary ware, and finishing"],
                    ["Ensuite renovation", "Smaller scale with less tiling area, compact sanitary ware, and simpler plumbing"],
                    ["Wet room conversion", "Full waterproofing, drainage planning, and precision tiling, usually more involved than a standard refit"],
                    ["Like-for-like refit", "Replacing existing fittings in the same positions, usually the most straightforward option"],
                    ["Layout change", "Moving toilets, showers, or baths involves new pipework and adds to the project scope"],
                    ["Tiling and finishing only", "If plumbing is already done, we can handle tiling and finishing as a standalone job"],
                  ].map(([type, note], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-secondary/20" : ""}>
                      <td className="px-5 py-4">{type}</td>
                      <td className="px-5 py-4 text-right text-muted-foreground">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <Info size={18} className="flex-shrink-0 mt-0.5 text-primary" />
              <p>
                <strong className="text-foreground">Every bathroom is different.</strong> The best way to get an accurate picture of what your job involves is to get in touch. We will visit the site, talk through your plans, and give you a clear written quote.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tiling quote factors */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              What Shapes a Tiling Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tiling is not one-size-fits-all. The type of tile, the pattern, and the job size all affect the time and skill involved.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl border mb-6 bg-background">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold">Tile Type / Job</th>
                    <th className="text-right px-5 py-4 font-semibold">What to Know</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Standard tiles (60x60cm)", "Straightforward to lay with a clean and efficient process"],
                    ["Mid-size tiles (60x120cm)", "More precision required to keep flat and aligned"],
                    ["Large format tiles (80x80cm+)", "More time-intensive, with fewer grout lines and a premium result"],
                    ["Complex patterns (herringbone, chevron)", "More cuts and time than a straight lay"],
                    ["Compact jobs", "Scope confirmed after a short discussion and site details"],
                    ["Kitchen splashback", "Layout, tile format, sockets, edges, and wall preparation all considered"],
                  ].map(([type, note], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-secondary/20" : ""}>
                      <td className="px-5 py-4">{type}</td>
                      <td className="px-5 py-4 text-right text-muted-foreground">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <Info size={18} className="flex-shrink-0 mt-0.5 text-primary" />
              <p>
                <strong className="text-foreground">Labour only:</strong> We can quote for installation when you have already chosen your tiles. We are happy to advise on tile formats that work best for your space.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote factors */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              What Affects Your Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No two jobs are the same. These are the main factors we look at before writing a renovation or tiling quote.
            </p>
          </div>
          <QuoteFactorTabs />
        </div>
      </section>

      {/* Up / down drivers */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">What Moves the Number</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No figures — those are yours to receive in writing — but a clear sense of which way each factor pushes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-2xl border shadow-sm p-8">
              <h3 className="font-semibold text-lg text-foreground mb-5">What pushes a quote up</h3>
              <ul className="grid gap-3">
                {[
                  "A full strip-out and skip disposal over a partial refresh",
                  "Suspended timber floors that must be stiffened and decoupled",
                  "Walls noticeably out of plumb, or hidden damp and rot on strip-out",
                  "A wet-room build-up with full-room tanking, a former and falls",
                  "Large-format or natural stone, underfloor heating, moving the soil stack",
                  "Period houses with narrow stairs and no parking",
                ].map((point, i) => (
                  <li key={i} className="grid grid-cols-[20px_1fr] gap-3 items-start">
                    <XCircle className="w-5 h-5 text-rose-400/80 mt-0.5" />
                    <span className="text-foreground/80 leading-[1.5]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-2xl border shadow-sm p-8">
              <h3 className="font-semibold text-lg text-foreground mb-5">What keeps a quote down</h3>
              <ul className="grid gap-3">
                {[
                  "A sound existing substrate that needs no structural work",
                  "Keeping the layout so no plumbing moves and no walls get chased",
                  "Standard-format porcelain in a simple straight lay",
                  "A like-for-like refit rather than a reconfiguration",
                  "Choosing where to spend the finish budget yourself",
                  "A refresh or regrout where the tiles are still sound",
                ].map((point, i) => (
                  <li key={i} className="grid grid-cols-[20px_1fr] gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-foreground leading-[1.5]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mt-8 max-w-3xl mx-auto text-center">
            Skill and correct materials cost a little more upfront and far less over the life of the bathroom. The cheapest quote is usually cheapest because it has quietly skipped tanking, priming or movement joints — the invisible work explained across{" "}
            <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">our tiling services</Link>. That's why we quote in writing after seeing the room.
          </p>
        </div>
      </section>

      <ReviewsSection
        featured="brooks"
        trustLine="Honest pricing is the whole point of this guide — rated 5.0 on Google"
      />

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">Honest answers to the questions Dublin homeowners ask most.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card px-6 rounded-xl border shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Get an honest written quote for your bathroom</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            No fixed guesswork, no pressure — Gerry surveys your actual room and gives you a clear, itemised price you can trust. Fully insured, 15 years in the trade, Dublin based.{" "}
            <Link href="/about" className="underline underline-offset-4 hover:opacity-80">Meet Gerry</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base h-14 px-8" onClick={openQuote}>
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent" asChild>
              <a href="tel:+353877209850">Call Now: +353 87 720 9850</a>
            </Button>
          </div>
        </div>
      </section>

      </BelowFold>
    </main>
  );
}

function QuoteFactorTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-1">
        {quoteFactors.map((factor, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              active === i
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            {factor.title}
          </button>
        ))}
      </div>
      <div className="lg:col-span-2 bg-secondary/30 rounded-2xl p-8 flex flex-col justify-center min-h-[200px]">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{quoteFactors[active].title}</h3>
        <p className="text-muted-foreground leading-relaxed">{quoteFactors[active].desc}</p>
      </div>
    </div>
  );
}
