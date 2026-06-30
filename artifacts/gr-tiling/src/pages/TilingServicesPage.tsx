import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, XCircle, MessageCircle, FileText, Wrench } from "lucide-react";
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
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

export const tilingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Tiling Services Dublin",
      "description": "Professional tiling services in Dublin by GR Tiling & Bathroom Renovations, including bathroom tiling, wall tiling, floor tiling, and tile finishing.",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "GR Tiling & Bathroom Renovations", "telephone": "+353877209850", "priceRange": "€€", "image": `${SITE_URL}/opengraph.jpg` },
      "areaServed": "Dublin and surrounding areas",
      "serviceType": "Tiling Services",
      "url": `${SITE_URL}/services/tiling-services`,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tiling Services", "item": `${SITE_URL}/services/tiling-services` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do tiling services cost in Dublin?",
          "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on the area, tile size, and scope of work. We provide a clear written quote before starting so you know the full price upfront." },
        },
        {
          "@type": "Question",
          "name": "Do you do both wall and floor tiling?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle both wall and floor tiling across bathrooms, kitchens, hallways, and other areas of the home." },
        },
        {
          "@type": "Question",
          "name": "Can you tile bathrooms and wet areas?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Bathroom and wet area tiling is one of the things we do most. We make sure everything is properly prepared, sealed, and finished cleanly." },
        },
        {
          "@type": "Question",
          "name": "Do you remove old tiles?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can lift and dispose of old tiles before installing the new ones. We'll factor that into the quote so there are no surprises." },
        },
        {
          "@type": "Question",
          "name": "How long does a tiling job take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most tiling jobs take a few days, depending on the size of the area and the type of tile. We'll give you a realistic timeline along with the quote." },
        },
        {
          "@type": "Question",
          "name": "What areas around Dublin do you cover?",
          "acceptedAnswer": { "@type": "Answer", "text": "We work across Dublin and nearby areas. Get in touch and we'll confirm availability for your location quickly." },
        },
      ],
    },
  ],
};

type Service = {
  image: string;
  alt: string;
  title: string;
  description: ReactNode;
  bullets: string[];
  imageLeft: boolean;
};

const services: Service[] = [
  {
    image: images.tilingPage.services[0].src,
    alt: images.tilingPage.services[0].alt,
    title: "Bathroom Tiling",
    description: (
      <>
        Clean bathroom tiling for walls, floors, showers, and wet areas, finished with care and attention to detail. See our dedicated{" "}
        <Link href="/services/bathroom-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom tiling page</Link>
        {" "}for more detail.
      </>
    ),
    bullets: [
      "Shower tiling",
      "Floor tiling",
      "Wall tiling",
      "Wet area tiling",
    ],
    imageLeft: true,
  },
  {
    image: images.tilingPage.services[1].src,
    alt: images.tilingPage.services[1].alt,
    title: "Floor & Wall Tiling",
    description: (
      <>
        Reliable wall and floor tiling for bathrooms, kitchens, hallways, and other areas of the home. See our dedicated{" "}
        <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">floor and wall tiling</Link>
        {" "}and{" "}
        <Link href="/services/kitchen-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">kitchen tiling</Link>
        {" "}pages, or our{" "}
        <Link href="/services/bathroom-renovations" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom renovations</Link>
        {" "}service if your project is part of a wider refit.
      </>
    ),
    bullets: [
      "Floor tiles",
      "Wall tiles",
      "Kitchen tiling",
      "Hallway tiling",
    ],
    imageLeft: false,
  },
  {
    image: images.tilingPage.services[2].src,
    alt: images.tilingPage.services[2].alt,
    title: "Tile Repairs & Finishing",
    description: (
      <>
        Careful tile repairs, replacements, grout work, and finishing touches to make the space look clean again. See our{" "}
        <Link href="/services/tile-repairs-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tile repairs page</Link>
        {" "}for more detail.
      </>
    ),
    bullets: [
      "Tile replacement",
      "Grout touch-ups",
      "Edge finishing",
      "Small repair jobs",
    ],
    imageLeft: true,
  },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "How much do tiling services cost in Dublin?", a: "Costs depend on the area, tile size, and scope of work. We provide a clear written quote before starting so you know the full price upfront." },
  { q: "Do you do both wall and floor tiling?", a: "Yes. We handle both wall and floor tiling across bathrooms, kitchens, hallways, and other areas of the home." },
  { q: "Can you tile bathrooms and wet areas?", a: "Yes. Bathroom and wet area tiling is one of the things we do most. We make sure everything is properly prepared, sealed, and finished cleanly." },
  { q: "Do you remove old tiles?", a: "Yes. We can lift and dispose of old tiles before installing the new ones. We'll factor that into the quote so there are no surprises." },
  { q: "How long does a tiling job take?", a: "Most tiling jobs take a few days, depending on the size of the area and the type of tile. We'll give you a realistic timeline along with the quote." },
  {
    q: "What areas around Dublin do you cover?",
    a: (
      <>
        We work across Dublin and nearby areas.{" "}
        <Link href="/contact" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
          Get in touch
        </Link>{" "}
        and we'll confirm availability for your location quickly.
      </>
    ),
  },
];

const processSteps = [
  { icon: <MessageCircle className="w-10 h-10" />, title: "Plan", text: "Tell us what you need and we'll go through your space, layout, and tile options to make sure everything is clear before we start." },
  { icon: <FileText className="w-10 h-10" />, title: "Design", text: "We help you choose the right tiles, layout, and finish so you get a clean, consistent look that works for your space." },
  { icon: <Wrench className="w-10 h-10" />, title: "Build", text: "We install everything with clean, precise workmanship, keeping the area tidy and delivering a sharp, high-quality finish." },
];

const PAGE_TITLE = "Tiling Services Dublin | GR Tiling & Bathroom Renovations";
const PAGE_DESCRIPTION =
  "Clean, reliable tiling services in Dublin for bathrooms, walls, floors, and repairs. Precise finishes, honest pricing, and tidy work. Get a free quote.";
const PAGE_PATH = "/services/tiling-services";

export default function TilingServicesPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("tiling-services", tilingSchema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          {/* Centered text content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Tiling Services Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Clean Lines. Sharp Finish. No Mess.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Get precise, reliable tiling services in and around Dublin from a trusted local specialist. Clean workmanship, clear pricing, and a finish that makes the whole room feel complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
            <div className="flex justify-center mb-14 lg:mb-16">
              <HeroReviewBadge />
            </div>
          </div>
          {/* Wide image below */}
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src={images.tilingPage.hero.src}
                alt={images.tilingPage.hero.alt}
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

      {/* Before / After Comparison */}
      <section className="py-[60px] lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Real Tiling Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how worn or unfinished spaces are upgraded with clean, precise tiling and a sharp final finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {images.tilingPage.transformations.map((t, i) => (
              <BeforeAfterSlider
                key={i}
                beforeSrc={t.before.src}
                beforeAlt={t.before.alt}
                afterSrc={t.after.src}
                afterAlt={t.after.alt}
                aspectClassName="aspect-[3/4]"
                className="shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Your Tiling Project in 3 Simple Steps</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Clean, precise tiling done right from the start. No uneven finishes, no mess, no hassle.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-[1.5px] bg-primary/30 z-0" />
            {processSteps.map((item, i) => (
              <div key={i} className="group relative z-10 flex flex-col items-center text-center flex-1 px-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/35 flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[220px]">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Where We Tile */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Where We Tile</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From bathroom walls to kitchen splashbacks, we tile across all types of rooms and surfaces.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ...gridImages.bathrooms, label: "Bathrooms", href: "/services/bathroom-tiling-dublin" },
              { ...gridImages.showerAreas, label: "Shower Areas", href: "/services/bathroom-tiling-dublin" },
              { ...gridImages.kitchens, label: "Kitchens", href: "/services/kitchen-tiling-dublin" },
              { ...gridImages.hallwaysFloors, label: "Floors & Walls", href: "/services/floor-wall-tiling-dublin" },
            ].map((room, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={room.src} alt={room.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1.5 px-4 pb-4">
                  <span className="text-white font-semibold text-sm leading-tight">{room.label}</span>
                  <Link href={room.href} className="inline-flex items-center gap-1 bg-white text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors">
                    Learn More <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem to solution */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Tiling Work Should Look Clean, Straight, and Built to Last
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            <div className="space-y-10">
              <h3 className="text-xl font-medium text-muted-foreground uppercase tracking-widest mb-8">The Problem</h3>
              <ul className="grid gap-4">
                {[
                  "Uneven tiles and messy lines",
                  "Poor cuts around edges and corners",
                  "Grout cracking or looking rough",
                  "Tradesmen leaving dust and mess behind",
                ].map((point, i) => (
                  <li key={i} className="grid grid-cols-[24px_1fr] gap-4 items-start">
                    <div className="mt-0.5 flex-shrink-0 text-rose-400/80"><XCircle className="w-5 h-5" /></div>
                    <span className="text-foreground/75 text-lg leading-[1.55]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-medium text-primary uppercase tracking-widest mb-8">The GR Way</h3>
              <ul className="grid gap-4">
                {[
                  "Precise tile layout from the start",
                  "Clean cuts around edges and fittings",
                  "Neat grout lines and strong finish",
                  "Tidy work with your home respected",
                ].map((point, i) => (
                  <li key={i} className="grid grid-cols-[24px_1fr] gap-4 items-start">
                    <div className="mt-0.5 flex-shrink-0 text-green-600"><CheckCircle2 className="w-5 h-5" /></div>
                    <span className="text-foreground text-lg leading-[1.55]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Tiling Services in Dublin
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wall and floor tiling, bathroom tiling, and tile repairs for homes in and around Dublin, all delivered with the same clean, careful approach.
            </p>
          </div>
          <div className="space-y-24">
            {services.map((service, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${!service.imageLeft ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={!service.imageLeft ? "lg:order-1" : ""}>
                  <h3 className="font-serif text-3xl text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 items-center">
                        <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                        <span className="text-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" onClick={openQuote}>Get a Free Quote</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Recent Tiling Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent tiling jobs showing clean grout lines, sharp edges, and neat finishes across Dublin homes.
            </p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.tilingPage.gallery.map(({ src, alt }) => (
              <div
                key={src}
                className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group"
              >
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.tilingPage.gallery.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection heading="Trusted for Tiling and Bathroom Work Across Dublin" />

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Tiling Services FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions from Dublin homeowners about wall and floor tiling.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card px-6 rounded-xl border shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Need Tiling Done Cleanly and Properly?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get a clear quote for tiling services in Dublin from a local tradesman known for clean work, honest pricing, and reliable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base h-14 px-8" onClick={openQuote}>
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="tel:+353877209850">Call Now: +353 87 720 9850</a>
            </Button>
          </div>
        </div>
      </section>

      </BelowFold>
    </main>
  );
}
