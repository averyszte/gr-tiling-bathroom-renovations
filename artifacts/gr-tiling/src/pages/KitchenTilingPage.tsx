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

export const PAGE_TITLE = "Kitchen Tiling Dublin | Splashbacks & Floors — GR Tiling";
export const PAGE_DESCRIPTION = "Kitchen tiling in Dublin by GR Tiling. Metro & herringbone splashbacks, wall and floor tiling, utility rooms, neat cuts around units. 15 yrs, fully insured.";
export const PAGE_PATH = "/services/kitchen-tiling-dublin";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Kitchen Tiling Dublin",
      "description": "Kitchen tiling in Dublin including splashbacks, wall tiles, floor tiles, and utility rooms.",
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
          "name": "How much does a kitchen splashback cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single figure — it depends on the length of the run, the tile, and whether you want a straightforward brick-bond metro or a herringbone or patterned feature that takes far more cutting and labour. We always give an honest, written quote after seeing the kitchen, and our cost guide explains what shapes a splashback price before you call."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between a metro and a herringbone splashback?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A metro splashback is the classic rectangular brick tile, usually 100x200mm, laid in a horizontal offset bond — clean, timeless and quick to set out. Herringbone uses the same or a slimmer tile turned to a 45 or 90-degree zig-zag, which adds movement and a more crafted look but needs far more cutting at the ends of each row. Herringbone typically adds noticeably to the labour; both look superb behind a hob."
          }
        },
        {
          "@type": "Question",
          "name": "Can you tile around my existing kitchen units and worktops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — that is the core of kitchen tiling. We work to the underside of wall cabinets, meet the worktop with a consistent joint, and cut cleanly around sockets, switches, taps and appliance gaps. Where tile meets the worktop or units we finish with a flexible silicone rather than rigid grout, so the joint copes with movement and stays watertight. Neat cuts around obstructions are exactly what separates a fitted splashback from a DIY one."
          }
        },
        {
          "@type": "Question",
          "name": "What grout should I use in a kitchen so it doesn't go grey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Above a hob and around the sink we recommend an epoxy or high-performance stain-resistant grout, which is effectively non-porous — it shrugs off grease, wine and coffee and wipes clean without sealing. Standard cement grout is porous and absorbs cooking grease, which is why older splashbacks go grey along the joints. For lower-exposure walls a good stain-resistant cement grout is often fine. We match the grout to the zone rather than over-spec everywhere."
          }
        },
        {
          "@type": "Question",
          "name": "Do you tile kitchen and utility floors as well as splashbacks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We fit dense porcelain floors for kitchens and utility rooms — low water absorption, hard-wearing, and genuinely easy to mop clean. Utility rooms also get a tiled splash zone behind the sink and washing machine. If your job is mainly about levelling an uneven period-house floor or large-format technique across an open-plan space, that sits under our floor and wall tiling service, and we will tell you which fits."
          }
        },
        {
          "@type": "Question",
          "name": "My splashback tiles are fine but the grout looks awful — do I need a new splashback?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. If the tiles are sound and well-bonded but the grout is stained, cracked or mouldy, raking it out and regrouting — plus renewing the silicone at the worktop and corners — restores the splashback at a fraction of the cost of re-tiling. A full re-tile only makes sense if tiles are drummy, lifting or cracked. That refresh work is our tile and grout repairs service rather than new kitchen tiling."
          }
        },
        {
          "@type": "Question",
          "name": "Which parts of Dublin do you cover, and are you insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GR Tiling is Dublin-based, Irish owned and operated, and covers Dublin city and county. Owner Gerry has 15 years in the trade and the business is fully insured, with a 5.0 Google rating. We turn up on time, keep the kitchen clean and tidy while we work, and give an honest written quote up front — never a fixed guaranteed price pulled off a webpage before we have seen your kitchen."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tiling Services", "item": `${SITE_URL}/services/tiling-services` },
        { "@type": "ListItem", "position": 3, "name": "Kitchen Tiling Dublin", "item": `${SITE_URL}${PAGE_PATH}` }
      ]
    }
  ]
};

const areas = [
  { ...gridImages.kitchenSplashbacks, label: "Splashbacks",         desc: "Metro, herringbone, patterned", href: null },
  { ...gridImages.kitchenWalls,       label: "Kitchen Walls",       desc: "Neat cuts around units",       href: null },
  { ...gridImages.utilityRooms,       label: "Utility Rooms",       desc: "Hard-wearing walls & floors",  href: null },
  { ...gridImages.hallwaysFloors,     label: "Floor & Wall Tiling", desc: null, href: "/services/floor-wall-tiling-dublin" },
];

const process = [
  { icon: <FileText className="w-10 h-10" />, title: "Survey & set-out", text: "We measure the run, agree tile, pattern and grout, and mark the setting-out so full tiles land at eye level and cuts fall out of sight." },
  { icon: <Wrench className="w-10 h-10" />, title: "Prep & prime", text: "We check the wall or floor is sound, flat and dry, then prime absorbent surfaces so the adhesive bonds and tiles don't debond later." },
  { icon: <LayoutGrid className="w-10 h-10" />, title: "Tile around the kitchen", text: "We fix the splashback, walls or floor with the right adhesive, cutting cleanly around sockets, taps, units, appliances and extractor boxing." },
  { icon: <Sparkles className="w-10 h-10" />, title: "Grout, seal & snag", text: "We grout with the stain-resistant spec agreed, silicone every movement junction, then clean off and walk the job with you." },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  {
    q: "How much does a kitchen splashback cost in Dublin?",
    a: (
      <>
        There's no single figure — it depends on the length of the run, the tile, and whether you want a straightforward brick-bond metro or a herringbone or patterned feature that takes far more cutting and labour. We always give an honest, written quote after seeing the kitchen, and you can read more about{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">what shapes a splashback price</Link>{" "}before you call.
      </>
    ),
  },
  { q: "What's the difference between a metro and a herringbone splashback?", a: "A metro splashback is the classic rectangular brick tile, usually 100x200mm, laid in a horizontal offset bond — clean, timeless and quick to set out. Herringbone uses the same or a slimmer tile turned to a 45 or 90-degree zig-zag, which adds movement and a more crafted look but needs far more cutting at the ends of each row. Herringbone typically adds noticeably to the labour; both look superb behind a hob." },
  { q: "Can you tile around my existing kitchen units and worktops?", a: "Yes — that's the core of kitchen tiling. We work to the underside of wall cabinets, meet the worktop with a consistent joint, and cut cleanly around sockets, switches, taps and appliance gaps. Where tile meets the worktop or units we finish with a flexible silicone rather than rigid grout, so the joint copes with movement and stays watertight. Neat cuts around obstructions are exactly what separates a fitted splashback from a DIY one." },
  { q: "What grout should I use in a kitchen so it doesn't go grey?", a: "Above a hob and around the sink we recommend an epoxy or high-performance stain-resistant grout, which is effectively non-porous — it shrugs off grease, wine and coffee and wipes clean without sealing. Standard cement grout is porous and absorbs cooking grease, which is why older splashbacks go grey along the joints. For lower-exposure walls a good stain-resistant cement grout is often fine. We match the grout to the zone rather than over-spec everywhere." },
  {
    q: "Do you tile kitchen and utility floors as well as splashbacks?",
    a: (
      <>
        Yes. We fit dense porcelain floors for kitchens and utility rooms — low water absorption, hard-wearing, and genuinely easy to mop clean. Utility rooms also get a tiled splash zone behind the sink and washing machine. If your job is mainly about levelling an uneven period-house floor or large-format technique, that sits under our{" "}
        <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">floor &amp; wall tiling</Link>{" "}service, and we'll tell you which fits.
      </>
    ),
  },
  { q: "My splashback tiles are fine but the grout looks awful — do I need a new splashback?", a: "Usually not. If the tiles are sound and well-bonded but the grout is stained, cracked or mouldy, raking it out and regrouting — plus renewing the silicone at the worktop and corners — restores the splashback at a fraction of the cost of re-tiling. A full re-tile only makes sense if tiles are drummy, lifting or cracked. That refresh work is our tile and grout repairs service rather than new kitchen tiling." },
  { q: "Which parts of Dublin do you cover, and are you insured?", a: "GR Tiling is Dublin-based, Irish owned and operated, and covers Dublin city and county. Owner Gerry has 15 years in the trade and the business is fully insured, with a 5.0 Google rating. We turn up on time, keep the kitchen clean and tidy while we work, and give an honest written quote up front — never a fixed guaranteed price pulled off a webpage before we've seen your kitchen." },
];

export default function KitchenTilingPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("kitchen-tiling", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Kitchen Tiling · Dublin</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Splashbacks And Floors, Done Right
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              From a crisp metro splashback behind the hob to a full kitchen and utility floor, we deliver clean lines, tight cuts around every unit and socket, and grout built to shrug off heat, grease and daily scrubbing.
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
              <img src={images.kitchenTilingPage.hero.src} alt={images.kitchenTilingPage.hero.alt} fetchPriority="high" sizes="(min-width: 1200px) 1152px, 100vw" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[28rem] max-w-full h-56 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <BelowFold>
      <TrustStrip />

      {/* Intro: splashback to full floor */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Kitchen tiling in Dublin, from splashback to full floor
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A kitchen is the hardest-working room in the house — spitting fat behind the hob, constant splashing at the sink, dropped pans underfoot. We tile Dublin kitchens so the finish still looks sharp years on: full tiles and clean joints where the eye lands, not awkward slivers by the extractor.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Metro, herringbone and patterned splashbacks set out around the hob",
              "Clean cuts around sockets, switches, taps and extractor boxing",
              "Wall cabinets and worktops met with a tidy, even joint",
              "Stain-resistant epoxy grout offered where grease and heat are worst",
              "Flexible sanitary silicone at all worktop, sink and corner junctions",
              "Porcelain kitchen and utility floors that mop clean and wear hard",
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
              From a quick splashback to a full kitchen floor, we cover all kitchen tiling needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {areas.map((area, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer${i === areas.length - 1 && areas.length % 3 !== 0 ? " md:col-start-2" : ""}`}>
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

      {/* Splashback highlight */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={images.kitchenTilingPage.splashbackSection.src} alt={images.kitchenTilingPage.splashbackSection.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Tiling around cabinets and appliances</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>A splashback is only as good as the cuts around everything bolted to the wall. We measure and cut so tile lines run through cleanly — sockets square on a joint, not clipped at an angle — and tile behind range cookers and fridges so there are no bare patches when they're pulled out.</p>
                <p>
                  Mainly floor build-up or large-format across an open-plan kitchen-diner? That's our{" "}
                  <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">floor &amp; wall tiling</Link>. Planning a wider refit? See{" "}
                  <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">our full tiling services</Link>.
                </p>
              </div>
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
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">The same clean process on every kitchen tiling job.</p>
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

      {/* Why grout goes grey */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Why kitchen grout goes grey above the hob
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The commonest complaint about older kitchen tiling is grey, greasy grout above the cooker that no scrubbing brings back. It's not surface dirt — it's grease absorbed into porous cement grout, which oxidises and darkens. The fix is specification, not elbow grease:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Epoxy or high-performance grout in the hardest-hit zones — non-porous, wipes clean, no sealing",
              "A sensible stain-resistant cement grout elsewhere — matched to exposure, not blanket-spec",
              "Flexible silicone at movement junctions, not rigid grout that cracks",
              "Substrate primed before tiling so nothing debonds later",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            If your tiles are sound but the grout has simply stained, you often don't need a re-tile at all — that's our{" "}
            <Link href="/services/tile-repairs-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tile &amp; grout repairs</Link>{" "}work.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A sample of tiling projects completed across Dublin.</p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.tilingPage.galleryKitchen.map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group">
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.tilingPage.galleryKitchen.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        featured="alan"
        trustLine="Kitchen and floor work Dublin homeowners rate 5.0 on Google"
      />

      {/* Related Services */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Tiling Services", href: "/services/tiling-services" },
              { label: "Floor & Wall Tiling", href: "/services/floor-wall-tiling-dublin" },
              { label: "Tile Repairs", href: "/services/tile-repairs-dublin" },
              { label: "Bathroom Tiling", href: "/services/bathroom-tiling-dublin" },
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Kitchen Tiling FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions about kitchen tiling in Dublin.</p>
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
            <span className="font-medium text-foreground">Based in Dublin.</span> Kitchen tiling and splashbacks across the city — Rathfarnham, Dundrum and Stillorgan, Clontarf and Raheny, Swords and Malahide, and the city centre.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Get a written quote for your kitchen tiling</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">Splashback, walls or full kitchen and utility floor — tell us what you have in mind and Gerry will give you an honest, written quote. Dublin-based, fully insured, on time and tidy.</p>
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
