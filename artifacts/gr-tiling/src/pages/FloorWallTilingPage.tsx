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

const PAGE_TITLE = "Floor & Wall Tiling Dublin | Expert Tilers | GR Tiling";
const PAGE_DESCRIPTION = "Professional floor and wall tiling in Dublin for bathrooms, kitchens, hallways and splashbacks. Clean lines, durable results, tidy work.";
const PAGE_PATH = "/services/floor-wall-tiling-dublin";

const schema = {
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
      "areaServed": "Dublin"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is tiling priced in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tiling is priced based on the tile size, pattern, and complexity of the job. Larger tiles and intricate patterns take more skill and time to lay. Get in touch and we will give you a clear written quote for your specific job."
          }
        },
        {
          "@type": "Question",
          "name": "Do you supply tiles or just install them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer both supply and fit, and labour only. Many customers prefer to choose their own tiles from a tile merchant. We are happy to advise on what works best before you go."
          }
        },
        {
          "@type": "Question",
          "name": "Can you replace old tiles or a bad job?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We remove old or poorly laid tiles, prepare the surface properly, and retile to a clean standard. If a previous tiling job has failed, cracked, or just looks bad, we can sort it out."
          }
        },
        {
          "@type": "Question",
          "name": "Do floors need to be level before tiling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A level, stable surface is essential for a good tiling result. Where floors are uneven, we use self-levelling compound as part of the preparation before any tiles go down."
          }
        },
        {
          "@type": "Question",
          "name": "Do you do small tiling jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We are happy to quote for smaller tiling jobs including splashbacks, individual rooms, and repairs. Get in touch and we will give you a straight answer on what makes sense for your job."
          }
        },
        {
          "@type": "Question",
          "name": "What tile types do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with porcelain, ceramic, mosaic, metro, large-format, marble-effect, stone-effect, and pattern tiles across floors and walls."
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
  { ...gridImages.bathrooms,      label: "Bathrooms",       href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.kitchens,       label: "Kitchens",        href: "/services/kitchen-tiling-dublin" },
  { ...gridImages.hallwaysFloors, label: "Hallways & Floors", href: null },
  { ...gridImages.showerAreas,    label: "Shower Areas",    href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.ensuites,       label: "Ensuites",        href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.utilityRooms,   label: "Utility Rooms",   href: null },
];

const prepPoints = [
  "Surface levelling where floors are uneven",
  "Removing loose, damaged, or unsuitable material",
  "Re-boarding or plastering walls where needed",
  "Correct adhesive chosen for the tile type and surface",
  "Waterproofing applied in wet areas before tiling",
  "Expansion gaps planned to prevent cracking over time",
];

const process = [
  {
    icon: <FileText className="w-10 h-10" />,
    title: "Site visit and quote",
    text: "We assess the surface and provide a clear written quote.",
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "Surface preparation",
    text: "Levelling, re-boarding, or removing existing tiles as needed.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10" />,
    title: "Layout planning",
    text: "Tile layout planned before anything is fixed down.",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Tiling and finishing",
    text: "Tiles laid, grouted, sealed, and cleaned down.",
  },
];


const faqs = [
  {
    q: "How is tiling priced in Dublin?",
    a: "Tiling is priced based on the tile size, pattern, and complexity of the job. Larger tiles and intricate patterns like herringbone take more skill and time to lay. Get in touch and we will give you a clear written quote for your specific job.",
  },
  {
    q: "Do you supply tiles or just install them?",
    a: "We offer both supply and fit, and labour only. Many customers prefer to choose their own tiles from a tile merchant. We are happy to advise on what works best for your space before you go.",
  },
  {
    q: "Can you replace old tiles or a bad job?",
    a: "Yes. We remove old or poorly laid tiles, prepare the surface properly, and retile to a clean standard. If a previous tiling job has failed, cracked, or just looks bad, we can sort it out.",
  },
  {
    q: "Do floors need to be level before tiling?",
    a: "Yes. A level, stable surface is essential for a good tiling result. Where floors are uneven, we use self-levelling compound as part of the preparation before any tiles go down.",
  },
  {
    q: "Do you do small tiling jobs?",
    a: "Yes. We are happy to quote for smaller tiling jobs including splashbacks, individual rooms, and repairs. Get in touch and we will give you a straight answer on what makes sense for your job.",
  },
  {
    q: "What tile types do you work with?",
    a: "We work with porcelain, ceramic, mosaic, metro, large-format, marble-effect, stone-effect, and pattern tiles across all types of floors and walls.",
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
              Floor & Wall Tiling Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Clean Lines. Sharp Cuts. Tidy Finish.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We tile floors and walls across Dublin  -  bathrooms, kitchens, hallways, splashbacks, utility rooms, and renovation projects. Clean lines, durable results, and tidy workmanship on every job.
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
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 pb-4">
                  <span className="text-white font-semibold text-sm">{room.label}</span>
                  {room.href && (
                    <Link href={room.href} className="inline-flex items-center gap-1.5 bg-white text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
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

      {/* Why Preparation Matters */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Why Preparation Makes the Difference
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A tiling job is only as good as the surface underneath it. Tiles laid on a poorly prepared surface will crack, lift, or look uneven within months  -  no matter how good the tiles themselves are.
                </p>
                <p>
                  Before a single tile goes down, we make sure the surface is level, clean, stable, and suited to the tile type and location. This adds time to the job, but it is the reason our work lasts.
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

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to Get Your Floors and Walls Tiled?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get a clear, written quote for your tiling job. No vague estimates, no hidden costs.
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
