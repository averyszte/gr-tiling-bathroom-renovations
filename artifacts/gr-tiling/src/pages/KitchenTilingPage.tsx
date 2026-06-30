import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Wrench, LayoutGrid, Sparkles } from "lucide-react";
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

const PAGE_TITLE = "Kitchen Tiling Dublin | Splashbacks & Floors | GR Tiling";
const PAGE_DESCRIPTION = "Kitchen tiling in Dublin. Splashbacks, wall tiles, floor tiles, and utility rooms. Clean, practical finishes. Free quotes from GR Tiling.";
const PAGE_PATH = "/services/kitchen-tiling-dublin";

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
      "areaServed": "Dublin"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a kitchen splashback cost to tile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Splashback tiling quotes depend on the tile, layout, surface condition, and finish you want. Get in touch and we will give you a clear written quote for your kitchen."
          }
        },
        {
          "@type": "Question",
          "name": "Can you tile behind a cooker?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tiling behind a cooker or hob is one of the most common kitchen tiling jobs we do. The area is measured, prepared, and tiled with appropriate grout and silicone finishing."
          }
        },
        {
          "@type": "Question",
          "name": "What tiles are best for kitchen floors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porcelain is generally the most practical choice for kitchen floors, durable, easy to clean, and available in a wide range of finishes. We are happy to advise on formats that work best for your space."
          }
        },
        {
          "@type": "Question",
          "name": "Can you tile around existing cabinets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We tile around existing cabinets, appliances, and fixtures without disrupting them. We plan the layout carefully to keep cuts clean and consistent."
          }
        },
        {
          "@type": "Question",
          "name": "Do you do small kitchen tiling jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We are happy to quote for smaller jobs including individual splashbacks. Get in touch and we will give you a straight answer on what makes sense for your kitchen."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a kitchen splashback take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard kitchen splashback is usually completed in a day. Larger areas or more complex layouts will take longer. We confirm the timeline when we quote."
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
  { ...gridImages.kitchenSplashbacks, label: "Splashbacks",         desc: "Fixed price available",    href: null },
  { ...gridImages.kitchenWalls,       label: "Kitchen Walls",       desc: "Clean, easy to maintain",  href: null },
  { ...gridImages.utilityRooms,       label: "Utility Rooms",       desc: "Practical, durable tiles", href: null },
  { ...gridImages.hallwaysFloors,     label: "Floor & Wall Tiling", desc: null, href: "/services/floor-wall-tiling-dublin" },
];

const process = [
  { icon: <FileText className="w-10 h-10" />, title: "Measure and plan", text: "Layout planned around your cabinets, sockets, and appliances before anything starts." },
  { icon: <Wrench className="w-10 h-10" />, title: "Prepare the surface", text: "Walls and floors cleaned, primed, and levelled so tiles sit flat and stay put." },
  { icon: <LayoutGrid className="w-10 h-10" />, title: "Tile installation", text: "Precise cuts around existing fixtures for a seamless, professional finish." },
  { icon: <Sparkles className="w-10 h-10" />, title: "Grout, silicone and clean", text: "Finished with matching grout, silicone at joints, and a full clean-down." },
];


const faqs = [
  { q: "How much does a kitchen splashback cost to tile?", a: "Splashback tiling quotes depend on the tile, layout, surface condition, and finish you want. Get in touch and we will give you a clear written quote for your kitchen." },
  { q: "Can you tile behind a cooker?", a: "Yes. Tiling behind a cooker or hob is one of the most common kitchen jobs we do. The area is measured, prepared, and tiled with appropriate finishing throughout." },
  { q: "What tiles are best for kitchen floors?", a: "Porcelain is generally the most practical choice for kitchen floors, durable, easy to clean, and available in a wide range of finishes and formats. We are happy to advise on what works best for your space." },
  { q: "Can you tile around existing cabinets?", a: "Yes. We tile around existing cabinets, appliances, and fixtures without disrupting them. We plan the layout carefully to keep cuts clean and consistent throughout." },
  { q: "Do you do small kitchen tiling jobs?", a: "Yes. We are happy to quote for smaller jobs including individual splashbacks. Get in touch and we will give you a straight answer on what makes sense for your kitchen." },
  { q: "How long does a kitchen splashback take?", a: "A standard kitchen splashback is usually completed in a day. Larger areas or more complex layouts will take a little longer. We confirm the exact timeline when we quote." },
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
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Kitchen Tiling Dublin</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Clean Cuts. Neat Finish. Every Time.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We tile kitchens across Dublin including splashbacks, walls, floors, and utility rooms. Whether you want a simple metro tile splashback or a full kitchen floor, we give the space a clean, professional finish.
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
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Kitchen Splashbacks</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>A kitchen splashback is one of the most impactful and practical upgrades you can make. It protects walls from grease and moisture, and with the right tile it transforms the look of the whole kitchen.</p>
                <p>Your written quote depends on the tile, layout, surface condition, and finish you want. Metro tiles, large format, herringbone, pattern tiles. We can lay them all to a clean, professional finish.</p>
                <p>Small jobs are always welcome. Get in touch and we will give you a straight answer on quote and timing.</p>
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

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
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

      <ReviewsSection />

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

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to Upgrade Your Kitchen?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">Get a clear, written quote for your kitchen tiling. No vague estimates, no hidden costs.</p>
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
