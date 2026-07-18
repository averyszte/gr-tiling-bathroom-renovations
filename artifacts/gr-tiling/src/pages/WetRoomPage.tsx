import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL, DUBLIN_AREAS } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { TrustStrip } from "@/components/TrustStrip";
import { images } from "@/data/images";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

const PAGE_TITLE = "Wet Room Installation Dublin | Tanking Experts";
const PAGE_DESCRIPTION = "Wet room installation in Dublin done right. Full tanking, level-access drainage, R11 slip-resistant tiles. 15 years, fully insured, honest written quotes. Free survey.";
const PAGE_PATH = "/services/wet-room-installation-dublin";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Wet Room Installation Dublin",
      "description": "Professional wet room installation in Dublin including full waterproofing, drainage planning, tiling, shower screens, and finishing.",
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
          "name": "Will a wet room leak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not when the waterproofing is done properly. The reason wet rooms leak is almost never the tiles — it is an unsealed junction, corner or pipe penetration behind them. We tank the whole wet zone as one continuous system, band every internal corner and change of plane with reinforcing tape, seal the shower waste and pipes directly into the membrane, and let it fully cure before tiling. Done that way, the tanking, not the grout, keeps the room dry."
          }
        },
        {
          "@type": "Question",
          "name": "What is tanking and why does it cost extra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tanking is the hidden waterproof membrane — liquid-applied or a bonded sheet — that turns the floor and walls into a sealed tank beneath the tile. It is the extra cost, and the extra time, that separates a wet room from a simple shower. Tiles and cement grout are porous and not waterproof on their own, so without tanking, water gets behind the finish. It is the one part of the job that is never worth saving money on."
          }
        },
        {
          "@type": "Question",
          "name": "Wet room or walk-in shower — which should I choose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A walk-in shower sits within a standard bathroom, usually with a low-profile tray and a glass screen. A true wet room has no tray and no threshold — the whole floor is tanked and graded to a drain. Wet rooms feel more open, are easier to clean and suit small or awkward rooms well, but they cost more because of the drainage, graded screed and full tanking. We will give you an honest steer for your specific room before anything is ordered."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build a wet room upstairs on a timber floor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and it is one of the most common Dublin jobs we do, but it is also the highest-risk detail in domestic tiling. A timber floor flexes, and that movement will crack rigid tile and open a leak straight into the ceiling below. We stiffen the deck, then bond down a decoupling membrane — often one that is waterproof too — so movement is isolated and the floor forms part of the tank. It has to be surveyed properly first."
          }
        },
        {
          "@type": "Question",
          "name": "How do you stop the water spreading across the floor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With falls. The whole shower area is graded at a gentle, even gradient toward the drain, so water always runs to the outlet rather than travelling across the room. On a pre-formed base this is built in; on a screeded floor we form the falls by hand to a linear channel or a central point drain. Setting that gradient correctly — enough to drain, gentle enough to stay safe underfoot — is one of the most skilled parts of the build."
          }
        },
        {
          "@type": "Question",
          "name": "Which tiles are safe for a wet-room floor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Slip-resistant porcelain. We work to R11 on the DIN 51130 ramp scale as the sensible minimum for a wet-room floor, which is grippier than the R10 you might accept on a bathroom used with a bath mat. Smaller-format tiles or mosaics on the shower floor are ideal because the extra grout lines add grip and let the floor follow the falls to the drain. Walls can be large-format porcelain for a clean, continuous, low-maintenance finish."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a wet room cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the room, so we only ever give a written quote after a survey. The figure is driven by your floor structure, whether an upstairs timber deck needs stiffening and decoupling, the drainage and screed build-up, the tile spec, and any hidden damp found on strip-out. A wet room carries a genuine premium over a standard shower because of the tanking, falls and drainage. Our cost guide breaks down exactly what moves the price."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle grab rails, seats and grant paperwork?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Those belong to a different service. This page is about the design and waterproofing craft of a wet room. If the project is about mobility, ageing in place, or a Housing Adaptation Grant, our accessible and mobility bathrooms service is built around exactly that — level access, structural pattressing for grab rails, seats and grant-compliant design. A wet room and an accessible bathroom share vocabulary but are quite different briefs, and we will point you to the right one."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Bathroom Renovations", "item": `${SITE_URL}/services/bathroom-renovations` },
        { "@type": "ListItem", "position": 3, "name": "Wet Room Installation Dublin", "item": `${SITE_URL}${PAGE_PATH}` }
      ]
    }
  ]
};

const process = [
  {
    step: "01",
    title: "Survey & Falls Plan",
    desc: "We assess your floor structure, subfloor and drainage options, then set the level-access design and where the falls run.",
  },
  {
    step: "02",
    title: "Structure & Decouple",
    desc: "We stiffen any timber deck, install backer boards and bond down a decoupling membrane so movement never reaches the tile.",
  },
  {
    step: "03",
    title: "Tank & Cure",
    desc: "We apply the full tanking system, band every junction and pipe, seal the drain in, and let it fully cure before tiling begins.",
  },
  {
    step: "04",
    title: "Tile, Grout & Check",
    desc: "We tile to the falls in R11 floor porcelain, grout and silicone the movement junctions, then flood-check the finished detail.",
  },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "Will a wet room leak?", a: "Not when the waterproofing is done properly. The reason wet rooms leak is almost never the tiles — it is an unsealed junction, corner or pipe penetration behind them. We tank the whole wet zone as one continuous system, band every internal corner and change of plane with reinforcing tape, seal the shower waste and pipes directly into the membrane, and let it fully cure before tiling. Done that way, the tanking, not the grout, keeps the room dry." },
  { q: "What is tanking and why does it cost extra?", a: "Tanking is the hidden waterproof membrane — liquid-applied or a bonded sheet — that turns the floor and walls into a sealed tank beneath the tile. It is the extra cost, and the extra time, that separates a wet room from a simple shower. Tiles and cement grout are porous and not waterproof on their own, so without tanking, water gets behind the finish. It is the one part of the job that is never worth saving money on." },
  { q: "Wet room or walk-in shower — which should I choose?", a: "A walk-in shower sits within a standard bathroom, usually with a low-profile tray and a glass screen. A true wet room has no tray and no threshold — the whole floor is tanked and graded to a drain. Wet rooms feel more open, are easier to clean and suit small or awkward rooms well, but they cost more because of the drainage, graded screed and full tanking. We will give you an honest steer for your specific room before anything is ordered." },
  { q: "Can you build a wet room upstairs on a timber floor?", a: "Yes, and it is one of the most common Dublin jobs we do, but it is also the highest-risk detail in domestic tiling. A timber floor flexes, and that movement will crack rigid tile and open a leak straight into the ceiling below. We stiffen the deck, then bond down a decoupling membrane — often one that is waterproof too — so movement is isolated and the floor forms part of the tank. It has to be surveyed properly first." },
  { q: "How do you stop the water spreading across the floor?", a: "With falls. The whole shower area is graded at a gentle, even gradient toward the drain, so water always runs to the outlet rather than travelling across the room. On a pre-formed base this is built in; on a screeded floor we form the falls by hand to a linear channel or a central point drain. Setting that gradient correctly — enough to drain, gentle enough to stay safe underfoot — is one of the most skilled parts of the build." },
  { q: "Which tiles are safe for a wet-room floor?", a: "Slip-resistant porcelain. We work to R11 on the DIN 51130 ramp scale as the sensible minimum for a wet-room floor, which is grippier than the R10 you might accept on a bathroom used with a bath mat. Smaller-format tiles or mosaics on the shower floor are ideal because the extra grout lines add grip and let the floor follow the falls to the drain. Walls can be large-format porcelain for a clean, continuous, low-maintenance finish." },
  {
    q: "How much does a wet room cost in Dublin?",
    a: (
      <>
        It depends on the room, so we only ever give a written quote after a survey. The figure is driven by your floor structure, whether an upstairs timber deck needs stiffening and decoupling, the drainage and screed build-up, the tile spec, and any hidden damp found on strip-out. A wet room carries a genuine premium over a standard shower because of the tanking, falls and drainage. Our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room costs</Link>{" "}guide breaks down what moves the price.
      </>
    ),
  },
  {
    q: "Do you handle grab rails, seats and grant paperwork?",
    a: (
      <>
        Those belong to a different service. This page is about the design and waterproofing craft of a wet room. If the project is about mobility, ageing in place, or a Housing Adaptation Grant, our{" "}
        <Link href="/services/accessible-bathroom-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">accessible &amp; mobility bathrooms</Link>{" "}service is built around exactly that — level access, structural pattressing for grab rails, seats and grant-compliant design. We will point you to the right one.
      </>
    ),
  },
];


export default function WetRoomPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("wet-room", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Wet Room Installation Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Wet Rooms That Never Leak
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              A wet room lives or dies on the waterproofing you can't see. We build the whole room as one sealed tank — banded junctions, graded falls, level-access drainage — so what looks stunning on day one stays sound for decades.
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
                src={images.wetRoomPage.hero.src}
                alt={images.wetRoomPage.hero.alt}
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

      {/* Problem to solution */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Is a Wet Room Right for Your Bathroom?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most bathrooms can be converted into a wet room. Here is what one solves and what we need to consider before starting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-5">Common problems we hear:</h3>
              {[
                "Shower tray is cracked, raised, or hard to step over",
                "Existing shower enclosure is old, mouldy, or leaking",
                "Bathroom feels cramped and tired",
                "Tiles are loose or water is getting behind them",
                "Want a more accessible shower for family members",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400/80 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-5">What a wet room gives you:</h3>
              {[
                "No tray to step over, just an open, level floor throughout",
                "Clean, seamless look with no enclosure to scrub",
                "A bathroom that feels larger and more modern",
                "Properly waterproofed from walls to floor",
                "Easier to use for all ages and mobility levels",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Wet room vs walk-in shower */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Wet Room or Walk-In Shower?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Both are good options — the right one depends on your room, your budget and how open and accessible you want it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Wet room",
                desc: "Trayless and level-access — the whole floor tanked and graded to a drain.",
                traits: [
                  "No tray or threshold to step over",
                  "Feels open and is easier to clean",
                  "Suits small, awkward or accessible layouts",
                  "Full-room tanking, falls and drainage",
                  "A higher-spec, more involved build",
                ],
              },
              {
                title: "Walk-in shower",
                desc: "A low-profile tray and glass screen within a standard bathroom.",
                traits: [
                  "Simpler, more cost-effective build",
                  "A low tray and threshold at the entry",
                  "An enclosure and screen to clean",
                  "Waterproofing focused on the shower zone",
                  "Suits most standard bathrooms",
                ],
              },
            ].map((col, i) => (
              <div key={i} className="bg-background rounded-2xl border shadow-sm p-8">
                <h3 className="font-serif text-2xl text-foreground mb-2">{col.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{col.desc}</p>
                <ul className="grid gap-3">
                  {col.traits.map((t, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      <span className="text-foreground leading-[1.5]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mt-8 max-w-3xl mx-auto text-center">
            Not sure which suits your room? We'll give you an honest steer before anything's ordered. The enclosure route lives on our{" "}
            <Link href="/services/bathroom-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom &amp; shower tiling</Link>{" "}page.
          </p>
        </div>
      </section>

      {/* Waterproofing trust section */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={images.wetRoomPage.waterproofing.src}
                alt={images.wetRoomPage.waterproofing.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                What actually makes a wet room a wet room
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A wet room isn't a shower without the tray — it's the most demanding waterproofing job in domestic tiling. Tiles and grout are a wearing surface, not the waterproof layer. What keeps the room dry is a continuous tanking membrane hidden beneath the tile, sealed at every junction, pipe and drain. Get it wrong and it's not a repair, it's a rebuild.
                </p>
                <p>
                  Want the wider fit-out managed end to end? That's our{" "}
                  <Link href="/services/bathroom-renovations" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">full bathroom renovations</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              How We Install a Wet Room
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear process from the first visit to the final handover.
            </p>
          </div>
          <div className="divide-y divide-border">
            {process.map((item) => (
              <div key={item.step} className="flex gap-6 py-8">
                <span className="font-serif text-3xl text-primary/40 font-bold flex-shrink-0 w-12">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Falls, drainage, slip */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Falls, drainage and slip-resistance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A wet room has no upstand, so the floor itself contains the water — a gentle, even fall to the drain: too flat and it pools, too steep and it's unsafe. The tile spec is a safety choice, not a style one: R11 slip-resistant porcelain, well above the R10 you'd accept with a bath mat. Still weighing a wet room against a{" "}
            <Link href="/services/bathroom-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">walk-in shower enclosure</Link>? Worth an honest chat first.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Even, continuous falls to a linear or point drain — no ponding",
              "R11-rated slip-resistant porcelain as the wet-room floor standard",
              "Small-format or mosaic shower floors for grip and to follow the falls",
              "Large-format porcelain walls for a clean, low-grout, easy-clean finish",
              "Drain type chosen around your layout, screed depth and preferred look",
              "Epoxy grout offered in the wet zone for near-impervious joints",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deep: upstairs timber risk */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Upstairs wet rooms on a timber floor
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The single biggest wet-room risk in Dublin is a first-floor wet room over a suspended timber deck — common in older terraces and semis, on joists notched by decades of plumbers. Timber moves, tile doesn't, so rigid tile over a flexing deck cracks and leaks into the ceiling below. Done right, it's a sequence:
          </p>
          <ol className="space-y-3">
            {[
              "Stiffen the deck — over-board and add noggins — so it stops bouncing",
              "Bond down a decoupling membrane, often waterproof, so it isolates movement and forms part of the tank",
              "Only then tank, tile to the falls and grout with flexible products",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                <span className="text-foreground leading-[1.55] pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            A tanking failure over a habitable room means rot, blown plaster and a damaged ceiling — many multiples of the correct tanking cost, which is why the cheapest quote is often the dearest. We survey before we quote; for what drives the figure see our{" "}
            <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room costs</Link>{" "}guide.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sample of bathroom and wet room projects completed for Dublin homeowners.
            </p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.bathroomPage.galleryWetRoom.map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group">
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.bathroomPage.galleryWetRoom.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        featured="mooney"
        trustLine="A finished, watertight bathroom rated 5.0 on Google"
      />

      {/* Related Services */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Accessible Bathroom", href: "/services/accessible-bathroom-dublin" },
              { label: "Bathroom Tiling", href: "/services/bathroom-tiling-dublin" },
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Wet Room FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions from Dublin homeowners about wet room installation.</p>
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
            <span className="font-medium text-foreground">Based in Dublin.</span> Wet room installations across the city — from period returns in Rathmines and Ranelagh to the semis of Cabra, Raheny and Crumlin, and out to Swords and Lucan.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Get a wet room built to last</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Book a free on-site survey and we'll assess your floor, plan the falls and drainage, and send an honest written quote — no fixed online prices, no surprises mid-build. Fully insured, 15 years in the trade.
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
