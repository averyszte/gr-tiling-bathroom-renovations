import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, Wrench, LayoutGrid, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { TrustStrip } from "@/components/TrustStrip";
import { images, gridImages } from "@/data/images";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

const PAGE_TITLE = "Tile Repairs Dublin | Cracked Tiles Fixed | GR Tiling";
const PAGE_DESCRIPTION = "Tile repairs across Dublin. Cracked tiles, loose tiles, broken grout, failed silicone. Honest advice on repair vs retile. Free quotes from GR Tiling.";
const PAGE_PATH = "/services/tile-repairs-dublin";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Tile Repairs Dublin",
      "description": "Tile repairs across Dublin including cracked tiles, loose tiles, broken grout, and failed silicone.",
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "GR Tiling & Bathroom Renovations",
        "url": SITE_URL,
        "telephone": "+353877209850"
      },
      "areaServed": "Dublin"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you replace one cracked tile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in many cases a single tile can be replaced. It is easiest when the customer has a spare matching tile. If not, we discuss the best options, including a close match or a partial retile of a section."
          }
        },
        {
          "@type": "Question",
          "name": "Why are my bathroom tiles coming loose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Loose tiles are usually caused by water getting behind the tiles over time, poor adhesive or surface preparation when originally laid, or movement in the substrate beneath. We assess the cause before recommending the right fix."
          }
        },
        {
          "@type": "Question",
          "name": "Can cracked grout cause leaks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cracked or missing grout, especially in shower areas, allows water to penetrate behind the tiles. Over time this causes tiles to loosen, mould to form, and water damage to spread. It is worth fixing promptly."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to repair or retile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the extent of the damage and the underlying cause. A small number of cracked or loose tiles can often be repaired. If the adhesive has failed across a larger area, or if there is recurring moisture damage, a full retile may be the better long-term option. We give honest advice on which makes more sense."
          }
        },
        {
          "@type": "Question",
          "name": "Do you repair shower tiles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We repair cracked and loose shower tiles, regrout shower areas, and reseal silicone joints. Where water has damaged the surface behind the tiles, we address that too before retiling."
          }
        },
        {
          "@type": "Question",
          "name": "What if I do not have spare tiles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We discuss the options with you. Sometimes a close match is possible. In other cases, tiling a section with a complementary tile or creating a feature panel works better than a poor match. We give you honest options rather than just proceeding with something that will look wrong."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tiling Services", "item": `${SITE_URL}/services/tiling-services` },
        { "@type": "ListItem", "position": 3, "name": "Tile Repairs Dublin", "item": `${SITE_URL}${PAGE_PATH}` }
      ]
    }
  ]
};

const repairTypes = [
  { ...gridImages.bathrooms,      label: "Bathroom Tiles",   href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.kitchens,       label: "Kitchen Tiles",    href: "/services/kitchen-tiling-dublin" },
  { ...gridImages.hallwaysFloors, label: "Floor Tiles",      href: "/services/floor-wall-tiling-dublin" },
  { ...gridImages.showerAreas,    label: "Shower Areas",     href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.groutSilicone,  label: "Grout & Silicone", href: null },
  { ...gridImages.bathroomWalls,  label: "Wall Tiles",       href: "/services/floor-wall-tiling-dublin" },
];

const process = [
  { icon: <Search className="w-10 h-10" />, title: "Assess the damage", text: "We inspect the tiles and substrate to find the actual cause, not just what is visible on the surface." },
  { icon: <Wrench className="w-10 h-10" />, title: "Source and prepare", text: "Matching tiles sourced where possible. Damaged tiles and failed adhesive fully removed." },
  { icon: <LayoutGrid className="w-10 h-10" />, title: "Repair and retile", text: "Replacement tiles laid with the correct adhesive for the location and substrate type." },
  { icon: <Sparkles className="w-10 h-10" />, title: "Regrout, seal and clean", text: "Regrouted with matching grout, siliconed at joints, and fully cleaned down." },
];


const faqs = [
  { q: "Can you replace one cracked tile?", a: "Yes, in many cases a single tile can be replaced. It is easiest when the customer has a spare matching tile. If not, we discuss the best options: a close match, or tiling a section to create a clean result." },
  { q: "Why are my bathroom tiles coming loose?", a: "Loose tiles are usually caused by water getting behind them over time, poor adhesive or surface preparation when originally laid, or movement in the substrate. We assess the cause before recommending the right fix." },
  { q: "Can cracked grout cause leaks?", a: "Yes. Cracked or missing grout, especially in shower areas, allows water to penetrate behind the tiles. Over time this causes tiles to loosen, mould to form, and water damage to spread. It is worth addressing promptly." },
  { q: "Is it better to repair or retile?", a: "It depends on the extent of the damage. A small number of cracked or loose tiles can often be repaired cleanly. If adhesive has failed across a larger area, or there is recurring moisture damage, a full retile may be the better long-term option. We give honest advice on which makes more sense for your situation." },
  { q: "Do you repair shower tiles?", a: "Yes. We repair cracked and loose shower tiles, regrout shower areas, and reseal silicone joints. Where water has damaged the surface behind the tiles, we address that too before retiling." },
  { q: "What if I do not have spare tiles?", a: "We discuss the options with you. Sometimes a close match is possible. In other cases, tiling a small section with a complementary tile works better than a poor match. We give honest options rather than just proceeding with something that will look wrong." },
];

export default function TileRepairsPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("tile-repairs", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Tile Repairs Dublin</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Fixed Properly. Not Just Patched Up.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We repair damaged tiles across Dublin: cracked tiles, loose tiles, broken grout, failed silicone, and water-damaged areas. Honest advice on whether to repair or retile.
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
              <img src={images.tileRepairsPage.hero.src} alt={images.tileRepairsPage.hero.alt} fetchPriority="high" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[28rem] max-w-full h-56 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <BelowFold>
      <TrustStrip />

      {/* What We Fix */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">What We Fix</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tile repairs across all types of rooms and surfaces in Dublin homes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {repairTypes.map((item, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 pb-4">
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                  {item.href && (
                    <Link href={item.href} className="inline-flex items-center gap-1.5 bg-white text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                      Learn More <ChevronRight size={14} />
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

      {/* Repair vs Retile */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Repair or Retile?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Not every tile problem needs a full retile. A small number of cracked or loose tiles can often be repaired cleanly and at a fraction of the cost.</p>
                <p>But some problems point to something deeper. If adhesive has failed across a larger area, or water has been getting behind tiles for a long time, a repair on top of that will only hold for so long. In those cases, a full retile is the honest answer.</p>
                <p>We will always tell you which makes more sense for your situation. We would rather give you the right advice than do a job that needs to be redone in a year.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={images.tileRepairsPage.repairRetileInline.src} alt={images.tileRepairsPage.repairRetileInline.alt} loading="lazy" className="w-full h-full object-cover" />
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
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">We find the cause, fix it properly, and leave a clean finish.</p>
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

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A sample of tiling projects completed for Dublin homeowners.</p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.tilingPage.galleryRepairs.map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group">
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.tilingPage.galleryRepairs.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Related Services */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Tiling Services", href: "/services/tiling-services" },
              { label: "Bathroom Tiling", href: "/services/bathroom-tiling-dublin" },
              { label: "Kitchen Tiling", href: "/services/kitchen-tiling-dublin" },
              { label: "Floor & Wall Tiling", href: "/services/floor-wall-tiling-dublin" },
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Tile Repair FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions about tile repairs in Dublin.</p>
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

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Got Damaged Tiles? Get in Touch</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">Send us photos and we will give you honest advice on whether a repair or a retile is the right option.</p>
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
