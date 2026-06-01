import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, FileText, Wrench, LayoutGrid, Sparkles } from "lucide-react";
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

const PAGE_TITLE = "Bathroom Tiling Dublin | Professional Tilers | GR Tiling";
const PAGE_DESCRIPTION = "Professional bathroom tiling in Dublin. Floors, walls, showers, ensuites and wet rooms with proper prep, clean grout lines, and tidy finishes.";
const PAGE_PATH = "/services/bathroom-tiling-dublin";

const schema = {
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
      "areaServed": "Dublin"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does bathroom tiling cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tiling rates vary depending on tile size, pattern, and the area being tiled. Get in touch and we will give you a clear written quote for your specific job."
          }
        },
        {
          "@type": "Question",
          "name": "Do shower walls need waterproofing before tiling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Shower walls should be properly waterproofed before tiling to prevent water getting behind the tiles over time. Skipping this step is a common cause of loose tiles, mould, and water damage."
          }
        },
        {
          "@type": "Question",
          "name": "Can you replace cracked or loose bathroom tiles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We remove and replace damaged tiles and address any underlying issues. See our tile repairs page for more detail."
          }
        },
        {
          "@type": "Question",
          "name": "What tiles are best for bathroom floors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Floor tiles should have a suitable slip resistance rating for wet areas. Porcelain is generally a durable, low-maintenance choice. We are happy to advise on formats and finishes during the planning stage."
          }
        },
        {
          "@type": "Question",
          "name": "Do you tile shower niches and recessed shelving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Shower niches and recessed shelving are a popular finish and we tile these as part of the overall shower or bathroom tiling job."
          }
        },
        {
          "@type": "Question",
          "name": "How long does bathroom tiling take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most bathroom tiling jobs take between two and five days depending on the size of the space and the complexity of the tile layout. We agree a timeline before starting and stick to it."
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
  { ...gridImages.bathroomFloors,  label: "Bathroom Floors", href: null },
  { ...gridImages.bathroomWalls,   label: "Bathroom Walls",  href: null },
  { ...gridImages.showerAreas,     label: "Shower Areas",    href: null },
  { ...gridImages.ensuites,        label: "Ensuites",        href: null },
  { ...gridImages.wetRooms,        label: "Wet Rooms",       href: "/services/wet-room-installation-dublin" },
  { ...gridImages.tileRepairsCard, label: "Tile Repairs",    href: "/services/tile-repairs-dublin" },
];

const process = [
  { icon: <FileText className="w-10 h-10" />, title: "Survey and quote", text: "We measure the space, plan the tile layout, and check what prep is needed." },
  { icon: <Wrench className="w-10 h-10" />, title: "Waterproofing", text: "Shower and wet areas waterproofed properly before any tile goes down." },
  { icon: <LayoutGrid className="w-10 h-10" />, title: "Tile installation", text: "Laid with waterproof adhesive, precise cuts, and consistent spacing." },
  { icon: <Sparkles className="w-10 h-10" />, title: "Grout, seal and finish", text: "Grouted with water-resistant grout, siliconed at all joints, fully cleaned." },
];


const faqs = [
  { q: "How much does bathroom tiling cost in Dublin?", a: "Tiling rates vary depending on tile size, pattern, and the area being tiled. Get in touch and we will give you a clear written quote based on your specific job." },
  { q: "Do shower walls need waterproofing before tiling?", a: "Yes. Shower walls should be properly waterproofed before tiling to prevent water getting behind the tiles over time. Skipping this step is one of the most common causes of loose tiles, mould, and water damage." },
  { q: "Can you replace cracked or loose bathroom tiles?", a: "Yes. We remove damaged tiles, address any underlying issues, and replace them to match as closely as possible. See our tile repairs page for more detail." },
  { q: "What tiles are best for bathroom floors?", a: "Floor tiles should have a suitable slip resistance rating for wet areas. Porcelain is generally a durable, low-maintenance choice. We are happy to advise on the right options for your space." },
  { q: "Do you tile shower niches and recessed shelving?", a: "Yes. Shower niches and recessed shelving are tiled as part of the overall job. We plan these into the layout from the start." },
  { q: "How long does bathroom tiling take?", a: "Most bathroom tiling jobs take between two and five days depending on the size of the space and the tile layout. We agree a clear timeline before starting." },
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
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Bathroom Tiling Dublin</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Prepared Right. Tiled Right. Built to Last.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We provide bathroom tiling across Dublin, covering floors, walls, shower areas, ensuites, and wet rooms. Proper preparation, clean grout lines, and a finish that holds up over time.
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
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 pb-4">
                  <span className="text-white font-semibold text-sm">{area.label}</span>
                  {area.href && (
                    <Link href={area.href} className="inline-flex items-center gap-1.5 bg-white text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
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

      {/* Shower Tiling */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Shower Tiling in Dublin</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Shower tiling needs more than a neat finish. The surface behind the tiles must be properly waterproofed before anything goes down. This is what prevents leaks, loose tiles, and water damage further down the line.</p>
                <p>We tile shower walls, shower floors, walk-in showers, and shower niches. Whether it is part of a full bathroom renovation or a standalone tiling job, we treat shower areas with the care they need.</p>
              </div>
              <div className="space-y-3 mt-6">
                {["Shower wall and floor tiling", "Waterproofing applied before tiling", "Walk-in shower and wet room tiling", "Shower niche and recess tiling", "Mosaic shower floors", "Regrouting and resealing"].map((item, i) => (
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

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
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

      <ReviewsSection />

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

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to Get Your Bathroom Tiled?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">Get a clear, written quote for your bathroom tiling. No vague estimates, no hidden costs.</p>
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
