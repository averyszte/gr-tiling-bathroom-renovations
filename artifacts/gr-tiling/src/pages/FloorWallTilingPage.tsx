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

const PAGE_TITLE = "Floor & Wall Tiling Dublin | GR Tiling — Done Properly";
const PAGE_DESCRIPTION = "Floor and wall tiling in Dublin done on a sound substrate. Large-format, self-levelling, timber floor prep, 15 years, fully insured. Free written quote.";
const PAGE_PATH = "/services/floor-wall-tiling-dublin";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Floor & Wall Tiling Dublin",
      "description": "Professional floor and wall tiling across Dublin including bathrooms, kitchens, hallways, splashbacks, and renovation projects.",
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
          "name": "Can you tile over a wooden floor without it cracking later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but not by tiling straight onto the boards. A suspended timber floor flexes, and that movement cracks rigid tile and grout. We stiffen the deck first — over-boarding and extra noggins — then bond down a decoupling membrane so the tile is separated from the timber's movement. Only then do we fix with a flexible S1 or S2 adhesive. Skipping those steps is the usual reason a timber-floor tile job fails."
          }
        },
        {
          "@type": "Question",
          "name": "What is self-levelling compound and does my floor need it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Self-levelling compound is a pourable mix that flows out to correct a floor that dips or slopes. Older Dublin floors 20mm out of level are common, and that unevenness is invisible until large-format tiles start lipping — edges sitting proud of each other. We prime the sound base first, then level it; for bigger deviations we use a latex screed. The flatter the bed, the bigger the tile you can lay cleanly. We confirm what your floor needs at survey."
          }
        },
        {
          "@type": "Question",
          "name": "Why do large-format tiles cost more to lay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Large-format tiles are less forgiving. They need a genuinely flat substrate, full back-buttering and solid-bed coverage rather than dot-and-dab, the correct notched trowel, and often levelling clips to stop lipping. That is more preparation, more time and more skill than standard porcelain. They look superb in a hallway or open-plan floor, and we are happy to fix them — the quote simply reflects the extra work. See our cost guide for what drives the price."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between porcelain, ceramic and natural stone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porcelain is dense and barely absorbs water, so it resists frost and stains — ideal for busy floors and thresholds in the Irish climate. Ceramic is softer and more absorbent, cheaper, and well suited to walls and light-use floors. Natural stone like marble or limestone is beautiful but porous: it needs sealing, can etch and stain, and asks for more care. We talk through the trade-offs before you buy so the choice suits how the room is actually used."
          }
        },
        {
          "@type": "Question",
          "name": "Can you tile over underfloor heating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tile is the best possible finish over underfloor heating — it conducts heat well and turns a cold Dublin floor warm underfoot. Electric mats suit a single retrofit room; wet systems suit larger projects. We fix with a flexible adhesive and flexible grout, keep perimeter movement joints so the assembly can expand and contract, and heat the system up gradually per the manufacturer's instructions rather than blasting it on, which is what stresses the tile and grout."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need movement or expansion joints in a tiled floor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, on any sizeable floor. BS 5385 best practice calls for movement joints at floor perimeters against walls, over structural joints, at changes of substrate, across large areas and around the edges of underfloor-heated zones. They let the floor expand and contract without tenting or cracking. They are easy to leave out to save time, and leaving them out is a leading cause of a floor lifting later. We plan them into the layout from the start."
          }
        },
        {
          "@type": "Question",
          "name": "How much does floor and wall tiling cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on real factors, so we give a written quote rather than a fixed online price. What pushes it up: floors needing stiffening, levelling and decoupling; large-format or natural stone tiles, which are slower and more skilled; intricate patterns like herringbone; and awkward period-home access. What keeps it down: a sound existing substrate, standard-format porcelain and a simple straight lay. Our cost guide sets out what drives the price."
          }
        },
        {
          "@type": "Question",
          "name": "Do you do bathroom and kitchen tiling too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We do, but they are treated as their own crafts because the details differ. Wet zones need waterproofing and tanking, covered on our bathroom and shower tiling page, and kitchen work centres on splashbacks and worktop-height detailing, covered under kitchen tiling and splashbacks. This page is for general floor and wall tiling across the home — hallways, living areas and beyond."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tiling Services", "item": `${SITE_URL}/services/tiling-services` },
        { "@type": "ListItem", "position": 3, "name": "Floor & Wall Tiling Dublin", "item": `${SITE_URL}${PAGE_PATH}` }
      ]
    }
  ]
};

const rooms = [
  { ...gridImages.bathrooms,      label: "Bathrooms",         desc: null,                       href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.kitchens,       label: "Kitchens",          desc: null,                       href: "/services/kitchen-tiling-dublin" },
  { ...gridImages.hallwaysFloors, label: "Hallways & Floors", desc: "Porcelain, marble & more", href: null },
  { ...gridImages.showerAreas,    label: "Shower Areas",      desc: null,                       href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.ensuites,       label: "Ensuites",          desc: null,                       href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.utilityRooms,   label: "Utility Rooms",     desc: "Practical, durable tiles", href: null },
];

const prepPoints = [
  "Substrate surveyed and primed before any tile is set",
  "Floors levelled with self-levelling compound or latex screed",
  "Suspended timber floors stiffened and decoupled, not just glued",
  "Large-format tiles solid-bed fixed and back-buttered, no dot-and-dab",
  "Perimeter and movement joints planned into the layout from the start",
  "Setting-out signed off with you before the first tile goes down",
];

const process = [
  { icon: <FileText className="w-10 h-10" />, title: "Survey & Substrate Read", text: "We check the floor and walls for level, movement, damp and what the existing surface actually is before quoting." },
  { icon: <Wrench className="w-10 h-10" />, title: "Prep & Level", text: "Timber decks are stiffened and decoupled, floors levelled and primed, backer boards fitted where the substrate needs them." },
  { icon: <LayoutGrid className="w-10 h-10" />, title: "Set Out & Tile", text: "Layout is agreed with you, then tiles are solid-bed fixed from the most visible line so no sliver cuts land at eye level." },
  { icon: <Sparkles className="w-10 h-10" />, title: "Joint, Grout & Snag", text: "We grout, silicone every movement junction, leave perimeter joints in, then walk the finished floor with you." },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "Can you tile over a wooden floor without it cracking later?", a: "Yes, but not by tiling straight onto the boards. A suspended timber floor flexes, and that movement cracks rigid tile and grout. We stiffen the deck first — over-boarding and extra noggins — then bond down a decoupling membrane so the tile is separated from the timber's movement. Only then do we fix with a flexible S1 or S2 adhesive. Skipping those steps is the usual reason a timber-floor tile job fails." },
  { q: "What is self-levelling compound and does my floor need it?", a: "Self-levelling compound is a pourable mix that flows out to correct a floor that dips or slopes. Older Dublin floors 20mm out of level are common, and that unevenness is invisible until large-format tiles start lipping — edges sitting proud of each other. We prime the sound base first, then level it; for bigger deviations we use a latex screed. The flatter the bed, the bigger the tile you can lay cleanly. We confirm what your floor needs at survey." },
  {
    q: "Why do large-format tiles cost more to lay?",
    a: (
      <>
        Large-format tiles are less forgiving. They need a genuinely flat substrate, full back-buttering and solid-bed coverage rather than dot-and-dab, the correct notched trowel, and often levelling clips to stop lipping. That is more preparation, more time and more skill than standard porcelain. They look superb in a hallway or open-plan floor — the quote simply reflects the extra work. For what drives the price, see our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tiling cost factors</Link>{" "}guide.
      </>
    ),
  },
  { q: "What is the difference between porcelain, ceramic and natural stone?", a: "Porcelain is dense and barely absorbs water, so it resists frost and stains — ideal for busy floors and thresholds in the Irish climate. Ceramic is softer and more absorbent, cheaper, and well suited to walls and light-use floors. Natural stone like marble or limestone is beautiful but porous: it needs sealing, can etch and stain, and asks for more care. We talk through the trade-offs before you buy so the choice suits how the room is actually used." },
  { q: "Can you tile over underfloor heating?", a: "Tile is the best possible finish over underfloor heating — it conducts heat well and turns a cold Dublin floor warm underfoot. Electric mats suit a single retrofit room; wet systems suit larger projects. We fix with a flexible adhesive and flexible grout, keep perimeter movement joints so the assembly can expand and contract, and heat the system up gradually per the manufacturer's instructions rather than blasting it on, which is what stresses the tile and grout." },
  { q: "Do I need movement or expansion joints in a tiled floor?", a: "Yes, on any sizeable floor. BS 5385 best practice calls for movement joints at floor perimeters against walls, over structural joints, at changes of substrate, across large areas and around the edges of underfloor-heated zones. They let the floor expand and contract without tenting or cracking. They are easy to leave out to save time, and leaving them out is a leading cause of a floor lifting later. We plan them into the layout from the start." },
  {
    q: "How much does floor and wall tiling cost in Dublin?",
    a: (
      <>
        It depends on real factors, so we give a written quote rather than a fixed online price. What pushes it up: floors needing stiffening, levelling and decoupling; large-format or natural stone tiles; intricate patterns like herringbone; and awkward period-home access. What keeps it down: a sound existing substrate, standard-format porcelain and a simple straight lay. Our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tiling cost factors</Link>{" "}page sets out what drives the price.
      </>
    ),
  },
  {
    q: "Do you do bathroom and kitchen tiling too?",
    a: (
      <>
        We do, but they are treated as their own crafts because the details differ. Wet zones need waterproofing and tanking, covered on our{" "}
        <Link href="/services/bathroom-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom &amp; shower tiling</Link>{" "}page, and kitchen work centres on splashbacks, covered under{" "}
        <Link href="/services/kitchen-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">kitchen tiling &amp; splashbacks</Link>. See everything together under{" "}
        <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">our full tiling services</Link>.
      </>
    ),
  },
];

export default function FloorWallTilingPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("floor-wall-tiling", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Floor &amp; Wall Tiling · Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Tiling That Starts Underneath
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              A tiled floor or wall only lasts as long as what sits behind it. We prepare the substrate first — levelling, priming, decoupling — then set porcelain, ceramic or stone across your hallway, living space and beyond. Fully insured, 15 years in the trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
            <div className="flex justify-center mb-14 lg:mb-16">
              <HeroReviewBadge />
            </div>
          </div>
          {/* Wide hero image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src={images.floorWallTilingPage.hero.src}
                alt={images.floorWallTilingPage.hero.alt}
                fetchPriority="high"
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[28rem] max-w-full h-56 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <BelowFold>
      <TrustStrip />

      {/* Rooms We Tile */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Where We Tile
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a single kitchen splashback to a full house renovation, we tile floors and walls across all types of rooms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {rooms.map((room, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={room.src} alt={room.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1.5 px-4 pb-4">
                  <div>
                    <span className="text-white font-semibold text-sm leading-tight">{room.label}</span>
                    {room.desc && <p className="text-white/75 text-xs mt-0.5">{room.desc}</p>}
                  </div>
                  {room.href && (
                    <Link href={room.href} className="inline-flex items-center gap-1 bg-white text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors">
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

      {/* Why Preparation Matters */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Tiling done on a substrate that will hold it
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most tiling we're called to fix has nothing to do with the tile — the tile's fine. What failed is underneath: a timber floor never stiffened, a wall the adhesive never gripped, a floor out of level that leaves tiles lipping. So we treat preparation as the job — read, primed, levelled, timber decoupled before anything rigid goes on.
                </p>
                <p>
                  For{" "}
                  <Link href="/services/bathroom-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom &amp; shower tiling</Link>{" "}and{" "}
                  <Link href="/services/kitchen-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">kitchen splashbacks</Link>, the craft-specific details live on their own pages.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {prepPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">How We Work</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The same straightforward process on every job, big or small.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-[1.5px] bg-primary/30 z-0" />
            {process.map((item, i) => (
              <div key={i} className="group relative z-10 flex flex-col items-center text-center flex-1 px-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/35 flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[200px]">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Choosing tile, adhesive, heating */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Choosing the right tile, adhesive and heating
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The tile you pick changes how the floor is built. Porcelain shrugs off frost and stains — the default for a busy hallway; ceramic suits walls and light use; natural stone is beautiful but porous, needing sealing and care. Adhesive is matched to the substrate, and tile is ideal over underfloor heating.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Porcelain, ceramic or stone matched to the room's use and traffic",
              "EN 12004 S1/S2 flexible adhesives on timber and stud substrates",
              "BS 5385 movement joints at perimeters and heated edges",
              "Underfloor heating tiled with flexible adhesive and grout, heated gradually",
              "Natural stone sealed, with a clear care conversation first",
              "Honest guidance on what drives tiling costs before you commit",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deep: timber floors */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Tiling over suspended timber floors
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The most common way a floor fails in a Dublin terrace or 1930s semi is being tiled straight onto a timber deck that moves. Tile is rigid; joists notched by decades of plumbers flex underfoot, and that deflection cracks the grout first, then the tile. Fixing it properly is a sequence, not a product:
          </p>
          <ol className="space-y-3">
            {[
              "Stiffen the deck — over-board, add noggins, sometimes sister joists — so it stops bouncing",
              "Bond down a decoupling membrane so board movement is absorbed, not transmitted into the tile",
              "Level any dips, because large-format tiles lip on an uneven bed",
              "Tile with a flexible S1/S2 adhesive and grout, perimeter movement joints left in",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                <span className="text-foreground leading-[1.55] pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            A flexible grout on its own does none of this — flexibility manages micro-movement, it doesn't carry structural deflection. If your existing tiles are sound but the odd one has gone drummy, replacing the whole floor is often the wrong call; see{" "}
            <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">our full tiling services</Link>{" "}for the repair route.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sample of tiling projects completed for Dublin homeowners.
            </p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.tilingPage.galleryFloorWall.map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group">
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.tilingPage.galleryFloorWall.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        featured="alan"
        trustLine="Floor and hallway work Dublin homeowners rate 5.0 on Google"
      />

      {/* Related Services */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Tiling Services", href: "/services/tiling-services" },
              { label: "Bathroom Tiling", href: "/services/bathroom-tiling-dublin" },
              { label: "Kitchen Tiling", href: "/services/kitchen-tiling-dublin" },
              { label: "Tile Repairs", href: "/services/tile-repairs-dublin" },
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Tiling FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions about floor and wall tiling in Dublin.</p>
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
            <span className="font-medium text-foreground">Based in Dublin.</span> Floor and wall tiling across the city — hallways in Rathmines and Ranelagh, living-room floors in Terenure and Rathgar, and homes from Blackrock to Blanchardstown.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Get your floor tiled properly the first time</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Fifteen years in the trade, fully insured, Irish owned and operated. We survey the substrate, tell you honestly what it needs and put it in a written quote — on time, on budget, clean and tidy.
          </p>
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
