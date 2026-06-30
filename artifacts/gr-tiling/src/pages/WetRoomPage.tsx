import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { TrustStrip } from "@/components/TrustStrip";
import { images } from "@/data/images";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

const PAGE_TITLE = "Wet Room Installation Dublin | GR Tiling";
const PAGE_DESCRIPTION = "Professional wet room installation in Dublin with full waterproofing, drainage, tiling, and finishing from GR Tiling & Bathroom Renovations.";
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
      "areaServed": "Dublin"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a wet room cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every wet room is different depending on size, tile choice, drainage setup, and whether it is a new install or a conversion. Get in touch and we will visit the site and provide a clear written quote before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Can any bathroom be converted into a wet room?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most bathrooms can be converted into a wet room, but it depends on the floor type, subfloor condition, drainage position, and available ceiling height. We assess your bathroom before recommending the best approach."
          }
        },
        {
          "@type": "Question",
          "name": "Do wet rooms leak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A properly installed wet room should not leak. The key is full tanking of walls and floor before tiling, correct drainage falls, and quality sealing at all joints and edges. Poor installation is the main cause of wet room leaks."
          }
        },
        {
          "@type": "Question",
          "name": "Are wet rooms suitable for small bathrooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Removing a raised shower tray and enclosure can make a small bathroom feel significantly larger and easier to use. Wet rooms work particularly well in ensuites and compact bathroom layouts."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need special tiles for a wet room?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Floor tiles in a wet room should have a suitable slip resistance rating. Wall tiles need to be suitable for wet areas. We advise on the right tile types and finishes during the planning stage."
          }
        },
        {
          "@type": "Question",
          "name": "How long does wet room installation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most wet room installations take between one and two weeks depending on the size and complexity. We agree a timeline before starting and stick to it."
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
    title: "Site visit and quote",
    desc: "We visit the bathroom, assess the layout, drainage options, and subfloor condition, and provide a clear written quote before any work begins.",
  },
  {
    step: "02",
    title: "Layout and plumbing planning",
    desc: "Plumbing routes, drain position, floor falls, and the overall layout are all planned before anything is touched. Getting this right at the start is what prevents problems later.",
  },
  {
    step: "03",
    title: "Waterproofing and tanking",
    desc: "Full tanking of walls and floor before any tile goes down. This is the most critical stage of a wet room installation.",
  },
  {
    step: "04",
    title: "Tiling and bathroom fitting",
    desc: "Tiles are laid with correct falls toward the drain using appropriate adhesive and grout for wet areas. Sanitary ware, shower screens, and all fittings are installed and finished once tiling is complete.",
  },
  {
    step: "05",
    title: "Finishing and handover",
    desc: "Siliconing, sealing, and a full clean-down. We check everything before handing back a space that is ready to use.",
  },
];


const faqs = [
  {
    q: "How much does a wet room cost in Dublin?",
    a: "Every wet room is different depending on size, tile choice, drainage setup, and whether it is a new install or a conversion. Get in touch and we will visit the site and give you a clear written quote before any work begins.",
  },
  {
    q: "Can any bathroom be converted into a wet room?",
    a: "Most bathrooms can be converted, but it depends on the floor type, subfloor condition, drainage position, and ceiling height. We will assess the space before recommending the right approach.",
  },
  {
    q: "Do wet rooms leak?",
    a: "A properly installed wet room should not leak. The key is full tanking of walls and floor before tiling, correct drainage falls, and proper sealing at all joints and edges. Poor preparation is the main cause of wet room leaks, which is why we treat the waterproofing stage as the most important part of the job.",
  },
  {
    q: "Are wet rooms good for small bathrooms?",
    a: "Yes. Removing a raised shower tray and enclosure can make a small bathroom feel significantly larger and more practical. Wet rooms work particularly well in ensuites and tighter layouts.",
  },
  {
    q: "Do I need special tiles for a wet room?",
    a: "Floor tiles should have a suitable slip resistance rating for wet areas. Wall tiles need to be suitable for constant moisture. We will advise on the right options during the planning stage.",
  },
  {
    q: "How long does wet room installation take?",
    a: "Most wet room installations take between one and two weeks depending on the size and complexity. We agree a clear timeline before starting and stick to it.",
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
              Installed Properly From Start to Finish
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We design and install wet rooms for Dublin homes, handling full waterproofing, drainage, tiling, shower screens, and finishing. Built properly from the ground up.
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

      {/* Waterproofing trust section */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
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
                Waterproofing is What Separates a Good Wet Room from a Bad One
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most wet room problems (leaks, loose tiles, damp, mould) come back to one thing: waterproofing that was not done properly before the tiles went down.
                </p>
                <p>
                  We treat the tanking and drainage stage as the most important part of the installation. The floor needs to fall correctly toward the drain, every joint and corner needs proper sealing, and the right adhesive and grout must be used throughout.
                </p>
                <p>
                  Once the tiles are on top, you cannot go back and fix what is underneath without pulling everything out. We get it right the first time.
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

      <ReviewsSection />

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

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to Start Your Wet Room?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get a clear, written quote for your wet room installation. No vague estimates, no hidden costs.
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
