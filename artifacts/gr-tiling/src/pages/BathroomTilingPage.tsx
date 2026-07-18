import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, FileText, Wrench, LayoutGrid, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL, DUBLIN_AREAS } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { TrustStrip } from "@/components/TrustStrip";
import { images, gridImages } from "@/data/images";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

const PAGE_TITLE = "Bathroom Tiling Dublin | Showers & Ensuites | GR Tiling";
const PAGE_DESCRIPTION = "Expert bathroom tiling in Dublin — shower walls and floors, ensuites, niches, waterproofing before tiling. 15 years, fully insured, free written quote. Call today.";
const PAGE_PATH = "/services/bathroom-tiling-dublin";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Bathroom Tiling Dublin",
      "description": "Professional bathroom tiling in Dublin including floors, walls, shower areas, ensuites and wet rooms.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "GR Tiling & Bathroom Renovations",
        "url": SITE_URL,
        "telephone": "+353877209850"
      },
      "areaServed": DUBLIN_AREAS
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you waterproof the shower before tiling, or just tile over the walls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We always tank the wet zone before any tile goes on. Tiles and cement grout are porous, so water will get behind them — the waterproof membrane is what catches it. We band every internal corner, seal around pipes and the shower waste, and take the membrane to a sensible height. Over timber floors we use a decoupling membrane that is also waterproof. This is standard BS 5385 practice, not an extra."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to tile a bathroom or ensuite in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A straightforward shower enclosure or small ensuite is usually a few days on the tiling and waterproofing alone; a full bathroom with floor and walls runs longer, and the tanking must fully cure before grouting. Awkward access, natural stone, intricate patterns and older substrates that need levelling all add time. We give you a realistic schedule in your written quote."
          }
        },
        {
          "@type": "Question",
          "name": "Can you tile over my existing tiles or old bathroom walls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, but we never assume. We tap-test for hollow or drummy tiles and check the wall is sound, flat and dry first. Tiling over loose tiles, active damp or a moving substrate just guarantees the new work fails too. Often the honest answer in an older Dublin home is to strip back to a sound background and board it — we will tell you which applies and price it straight."
          }
        },
        {
          "@type": "Question",
          "name": "What tiles work best on a shower floor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small-format tiles or mosaics. The extra grout lines give grip underfoot when the floor is wet and let the surface fall neatly to the drain, which large tiles cannot do on a graded floor. For slip resistance we look for around R11 on a walk-in shower floor. Porcelain is our default for wet areas — dense, low water absorption and hard-wearing in the Irish climate."
          }
        },
        {
          "@type": "Question",
          "name": "My bathroom is tiny — will the tiles still look right?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small rooms are where setting-out matters most, because every wall is in view at once. We plan the layout so full tiles land where the eye falls and cuts sit in the least visible places — never a sliver at eye level. We set out from the most prominent line rather than an out-of-square wall, and agree the plan with you before fixing. Done right, careful setting-out makes a compact ensuite feel considered rather than cramped."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build a tiled niche or shelf into the shower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and it is one of the nicer details we do. A recessed niche gives you somewhere for bottles without a plastic caddy. The key is that it is tanked and tiled to drain, with sealed junctions, so water never sits behind it — a badly built niche is the first thing to leak. We set its position and height into your tile layout so the surrounding courses stay clean."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a full wet room, or will a tiled shower enclosure do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A tiled enclosure over a tray suits most Dublin bathrooms and is what we do most. A full wet room is a trayless, level-floor build with a former and graded falls — more work, more waterproofing, and a different price bracket. If that is what you are after, see our full wet room installation page. If you just want a well-tiled, properly tanked shower, an enclosure is usually the sensible choice."
          }
        },
        {
          "@type": "Question",
          "name": "What does bathroom tiling cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the room — size, tile format, how much prep and levelling the substrate needs, whether it is a simple splashback or a fully tanked shower, and pattern complexity. Large-format and natural stone are slower and more skilled; herringbone and mosaics add labour. We do not post fixed prices because every bathroom is different, but our cost guide sets out honest ranges, and we always give you a clear written quote after seeing the job."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tiling Services", "item": `${SITE_URL}/services/tiling-services` },
        { "@type": "ListItem", "position": 3, "name": "Bathroom Tiling Dublin", "item": `${SITE_URL}${PAGE_PATH}` }
      ]
    }
  ]
};

const areas = [
  { ...gridImages.bathroomFloors,  label: "Bathroom Floors", desc: "Falls to the drain, non-slip", href: null },
  { ...gridImages.bathroomWalls,   label: "Bathroom Walls",  desc: "Set out for balanced cuts",    href: null },
  { ...gridImages.showerAreas,     label: "Shower Areas",    desc: "Tanked before any tiling",     href: null },
  { ...gridImages.ensuites,        label: "Ensuites",        desc: "Tight rooms set out right",    href: null },
  { ...gridImages.wetRooms,        label: "Wet Rooms",       desc: null, href: "/services/wet-room-installation-dublin" },
  { ...gridImages.tileRepairsCard, label: "Tile Repairs",    desc: null, href: "/services/tile-repairs-dublin" },
];

const process = [
  { icon: <FileText className="w-10 h-10" />, title: "Survey & Set-Out", text: "We inspect the real substrate behind your old tiles, check falls and plumb, then plan a layout you sign off before anything is fixed." },
  { icon: <Wrench className="w-10 h-10" />, title: "Prep & Waterproof", text: "We stiffen and level the background, board over timber and stud, then tank the wet zone with banded corners and sealed penetrations." },
  { icon: <LayoutGrid className="w-10 h-10" />, title: "Tile & Cut", text: "We fix walls and floor from the most visible line, back-butter large formats for solid coverage, and cut niches and edges cleanly." },
  { icon: <Sparkles className="w-10 h-10" />, title: "Grout, Seal & Snag", text: "We grout, run anti-mould silicone at every movement junction, seal where needed, then clean down and walk the room with you." },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "Do you waterproof the shower before tiling, or just tile over the walls?", a: "We always tank the wet zone before any tile goes on. Tiles and cement grout are porous, so water will get behind them — the waterproof membrane is what catches it. We band every internal corner, seal around pipes and the shower waste, and take the membrane to a sensible height. Over timber floors we use a decoupling membrane that is also waterproof. This is standard BS 5385 practice, not an extra." },
  { q: "How long does it take to tile a bathroom or ensuite in Dublin?", a: "A straightforward shower enclosure or small ensuite is usually a few days on the tiling and waterproofing alone; a full bathroom with floor and walls runs longer, and the tanking must fully cure before grouting. Awkward access, natural stone, intricate patterns and older substrates that need levelling all add time. We give you a realistic schedule in your written quote." },
  { q: "Can you tile over my existing tiles or old bathroom walls?", a: "Sometimes, but we never assume. We tap-test for hollow or drummy tiles and check the wall is sound, flat and dry first. Tiling over loose tiles, active damp or a moving substrate just guarantees the new work fails too. Often the honest answer in an older Dublin home is to strip back to a sound background and board it — we will tell you which applies and price it straight." },
  { q: "What tiles work best on a shower floor?", a: "Small-format tiles or mosaics. The extra grout lines give grip underfoot when the floor is wet and let the surface fall neatly to the drain, which large tiles cannot do on a graded floor. For slip resistance we look for around R11 on a walk-in shower floor. Porcelain is our default for wet areas — dense, low water absorption and hard-wearing in the Irish climate." },
  { q: "My bathroom is tiny — will the tiles still look right?", a: "Small rooms are where setting-out matters most, because every wall is in view at once. We plan the layout so full tiles land where the eye falls and cuts sit in the least visible places — never a sliver at eye level. We set out from the most prominent line rather than an out-of-square wall, and agree the plan with you before fixing. Done right, careful setting-out makes a compact ensuite feel considered rather than cramped." },
  { q: "Can you build a tiled niche or shelf into the shower?", a: "Yes, and it is one of the nicer details we do. A recessed niche gives you somewhere for bottles without a plastic caddy. The key is that it is tanked and tiled to drain, with sealed junctions, so water never sits behind it — a badly built niche is the first thing to leak. We set its position and height into your tile layout so the surrounding courses stay clean." },
  {
    q: "Do I need a full wet room, or will a tiled shower enclosure do?",
    a: (
      <>
        A tiled enclosure over a tray suits most Dublin bathrooms and is what we do most. A full wet room is a trayless, level-floor build with a former and graded falls — more work, more waterproofing, and a different price bracket. If that is what you are after, see our{" "}
        <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">full wet room installation</Link>{" "}page. If you just want a well-tiled, properly tanked shower, an enclosure is usually the sensible choice.
      </>
    ),
  },
  {
    q: "What does bathroom tiling cost in Dublin?",
    a: (
      <>
        It depends on the room — size, tile format, how much prep and levelling the substrate needs, whether it is a simple splashback or a fully tanked shower, and pattern complexity. Large-format and natural stone are slower and more skilled; herringbone and mosaics add labour. We do not post fixed prices because every bathroom is different, but our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">cost guide</Link>{" "}sets out honest ranges, and we always give you a clear written quote after seeing the job.
      </>
    ),
  },
];

export default function BathroomTilingPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("bathroom-tiling", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Bathroom &amp; Shower Tiling Dublin</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Bathroom Tiling Done Properly
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Shower walls and floors, ensuites, wet zones and niches — tiled by a Dublin tradesman with 15 years on the tools. Waterproofed before a single tile goes on, set out so the finish looks right at eye level, and left clean and tidy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
            <div className="flex justify-center mb-14 lg:mb-16"><HeroReviewBadge /></div>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img src={images.bathroomTilingPage.hero.src} alt={images.bathroomTilingPage.hero.alt} fetchPriority="high" sizes="(min-width: 1200px) 1152px, 100vw" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[28rem] max-w-full h-56 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <BelowFold>
      <TrustStrip />

      {/* Intro: done to last */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Bathroom tiling in Dublin, done to last
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A bathroom is the hardest room to tile well — it gets wet daily, it moves, and bright light shows every mistake. Getting it right is less about the tile than what happens first: a sound substrate, waterproofing, and setting-out that lands full tiles where the eye falls. For how we treat different backgrounds, see{" "}
            <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">how we prep floors &amp; walls</Link>.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Tap-test and inspect the real substrate before quoting",
              "Tank shower walls and floors, corners banded, penetrations sealed",
              "Backer board over timber and stud, not straight onto plasterboard",
              "Set out from the most visible line — no slivers at eye level",
              "Silicone, not grout, at every movement junction",
              "Left clean and tidy each day, on the agreed written quote",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where We Tile */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">What We Tile</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every area of your bathroom tiled properly, from floors and walls to shower enclosures and ensuites.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={area.src} alt={area.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1.5 px-4 pb-4">
                  <div>
                    <span className="text-white font-semibold text-sm leading-tight">{area.label}</span>
                    {area.desc && <p className="text-white/75 text-xs mt-0.5">{area.desc}</p>}
                  </div>
                  {area.href && (
                    <Link href={area.href} className="inline-flex items-center gap-1 bg-white text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors">
                      Learn More <ChevronRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Shower Tiling */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Showers, ensuites and the details that matter</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Most of our calls are shower enclosures over a tray and compact ensuites — where craft counts most. We favour small-format or mosaic on the shower floor for grip and correct falls, and set ensuites out carefully because every wall is in view at once.</p>
                <p>
                  A full trayless room is a different build — see our{" "}
                  <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room installation</Link>. Tiles sound but grout tired? Our{" "}
                  <Link href="/services/tile-repairs-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tile &amp; grout repairs</Link>{" "}refresh it for less, and the{" "}
                  <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">cost guide</Link>{" "}sets out the ranges.
                </p>
              </div>
              <div className="space-y-3 mt-6">
                {["Balanced setting-out agreed with you before fixing", "Small-format or mosaic shower floors for grip and falls", "Tanked, drainable niches that look built-in and stay dry", "Flexible S1/S2 adhesive over timber and any surface that moves", "Anti-mould sanitary silicone at baths, trays and corners", "Full solid-bed coverage under large-format — no dot-and-dab"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={images.bathroomTilingPage.showerTilingInline.src} alt={images.bathroomTilingPage.showerTilingInline.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">How We Work</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">The same clean process on every bathroom tiling job.</p>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-[1.5px] bg-primary/30 z-0" />
            {process.map((item, i) => (
              <div key={i} className="group relative z-10 flex flex-col items-center text-center flex-1 px-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/35 flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[200px] text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Waterproofing deep-dive */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            The part you can't see keeps the room dry
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Ask any honest tiler where showers fail and it's almost never the tile — it's the waterproofing behind it. Standard BS 5385 is explicit: the tiled finish is a wearing surface, not the waterproof layer. The leaks we get called to fix are almost always the predictable ones:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Unbanded floor-to-wall junctions",
              "No seal at the shower waste",
              "Membrane stopped too low up the wall",
              "Incompatible products mixed between systems",
              "Tiling before the membrane had cured",
              "A bouncy timber floor never stiffened or decoupled",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A sample of bathroom tiling projects completed across Dublin.</p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.bathroomPage.galleryBathroomTiling.map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group">
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.bathroomPage.galleryBathroomTiling.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        featured="mooney"
        trustLine="A finished bathroom Dublin homeowners rate 5.0 on Google"
      />

      {/* Related Services */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Tiling Services", href: "/services/tiling-services" },
              { label: "Wet Room Installation", href: "/services/wet-room-installation-dublin" },
              { label: "Tile Repairs", href: "/services/tile-repairs-dublin" },
              { label: "Bathroom Renovations", href: "/services/bathroom-renovations" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center justify-between px-5 py-4 bg-background border rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                {link.label} <ChevronRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Bathroom Tiling FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions about bathroom tiling in Dublin.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card px-6 rounded-xl border shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-10 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Based in Dublin.</span> Bathroom and shower tiling throughout the city — Ballsbridge, Sandymount and Donnybrook, Cabra, Marino and Clontarf, Clondalkin and Castleknock, and everywhere between.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Get your bathroom tiled by someone who does it properly</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">Fully insured, 15 years on the tools, clean and tidy, on time and on your written quote. Tell us about your shower, ensuite or bathroom and we'll come and take a look.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
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
