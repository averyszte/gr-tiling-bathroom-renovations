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
import { images } from "@/data/images";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

const bathroomSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Bathroom Renovations Dublin",
      "description": "Bathroom renovation services in Dublin by GR Tiling & Bathroom Renovations, focused on clean work, clear pricing, and reliable results.",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "GR Tiling & Bathroom Renovations", "telephone": "+353877209850", "priceRange": "€€", "image": `${SITE_URL}/opengraph.jpg` },
      "areaServed": "Dublin and surrounding areas",
      "serviceType": "Bathroom Renovations",
      "url": `${SITE_URL}/services/bathroom-renovations`,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Bathroom Renovations", "item": `${SITE_URL}/services/bathroom-renovations` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a bathroom renovation cost in Dublin?",
          "acceptedAnswer": { "@type": "Answer", "text": "Costs depend on the size, scope, and materials chosen for your bathroom remodel. We provide clear, detailed quotes before any work starts, with no hidden extras." },
        },
        {
          "@type": "Question",
          "name": "How long does a bathroom renovation take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most standard bathroom renovations take 1 to 3 weeks. We give you a realistic timeline at the start and keep you updated throughout." },
        },
        {
          "@type": "Question",
          "name": "Will the work area be kept clean?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We protect your home, clean up every day, and leave the area tidy. We treat your home the way we'd want ours treated." },
        },
        {
          "@type": "Question",
          "name": "Do I get a written quote?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We provide a clear written quote before any work begins so you know exactly what's included and what the cost will be." },
        },
        {
          "@type": "Question",
          "name": "Do you cover all areas of Dublin?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we work across Dublin and nearby areas. Contact us and we'll confirm availability for your location quickly." },
        },
        {
          "@type": "Question",
          "name": "Can you handle just the tiling, not the full renovation?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We do standalone tiling work as well as full bathroom renovations. Just let us know what you need and we'll quote accordingly." },
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
    image: images.bathroomPage.services[0].src,
    alt: images.bathroomPage.services[0].alt,
    title: "Full Bathroom Renovations",
    description:
      "Complete bathroom renovation from start to finish, handled by one reliable team. We manage the full project so you don't have to coordinate multiple trades.",
    bullets: [
      "Complete bathroom transformation",
      "Plumbing & fitting",
      "Custom tiling & finishes",
      "Full project management",
    ],
    imageLeft: true,
  },
  {
    image: images.bathroomPage.services[1].src,
    alt: images.bathroomPage.services[1].alt,
    title: "Bathroom Layout & Upgrades",
    description: (
      <>
        Smarter bathroom layouts that improve space, flow, and usability. Modernise fixtures and upgrade finishes without committing to a full gut renovation. We also specialise in{" "}
        <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room installations</Link>
        {" "}and{" "}
        <Link href="/services/accessible-bathroom-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">accessible bathroom conversions</Link>.
      </>
    ),
    bullets: [
      "Space optimisation & layout planning",
      "Modern fixture upgrades",
      "Wet room conversions",
      "Accessible bathroom adaptations",
    ],
    imageLeft: false,
  },
  {
    image: images.bathroomPage.services[2].src,
    alt: images.bathroomPage.services[2].alt,
    title: "Tiling & Finishing",
    description: (
      <>
        Clean, precise tiling and finishes that elevate the final result. Large-format rectified tiles, herringbone patterns, wet rooms, and feature walls with crisp grout lines every time. For standalone work without a full renovation, see our{" "}
        <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
          tiling services
        </Link>
        .
      </>
    ),
    bullets: [
      "Floor & wall tiling",
      "Wet rooms & shower enclosures",
      "Feature walls & niche tiling",
      "Premium high-quality finishes",
    ],
    imageLeft: true,
  },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "How much does a bathroom renovation cost in Dublin?", a: "Costs depend on the size, scope, and materials chosen for your bathroom remodel. We provide clear, detailed quotes before any work starts, with no hidden extras." },
  { q: "How long does a bathroom renovation take?", a: "Most standard bathroom renovations take 1-3 weeks. We give you a realistic timeline at the start and keep you updated throughout." },
  { q: "Will the work area be kept clean?", a: "Yes. We protect your home, clean up every day, and leave the area tidy. We treat your home the way we'd want ours treated." },
  { q: "Do I get a written quote?", a: "Absolutely. We provide a clear written quote before any work begins so you know exactly what's included and what the cost will be." },
  {
    q: "Do you cover all areas of Dublin?",
    a: (
      <>
        Yes, we work across Dublin and nearby areas.{" "}
        <Link href="/contact" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
          Contact us
        </Link>{" "}
        and we'll confirm availability for your location quickly.
      </>
    ),
  },
  { q: "Can you handle just the tiling, not the full renovation?", a: "Yes. We do standalone tiling work as well as full bathroom renovations. Just let us know what you need and we'll quote accordingly." },
];

const processSteps = [
  { icon: <MessageCircle className="w-10 h-10" />, title: "Plan", text: "Tell us what you need and we'll go through your bathroom, ideas, and budget to get everything clear from the start." },
  { icon: <FileText className="w-10 h-10" />, title: "Design", text: "We help you choose the right layout, tiles, and finishes so you know exactly what you're getting before work begins." },
  { icon: <Wrench className="w-10 h-10" />, title: "Build", text: "We complete the full renovation on time, keep everything clean, and deliver a high-quality finish that lasts." },
];

const PAGE_TITLE = "Bathroom Renovations Dublin | GR Tiling & Bathroom Renovations";
const PAGE_DESCRIPTION =
  "Bathroom renovations in Dublin done on time and on budget by a trusted local specialist. Clean work, clear pricing, and reliable results. Get a free quote.";
const PAGE_PATH = "/services/bathroom-renovations";

export default function BathroomRenovationsPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("bathroom-renovations", bathroomSchema);
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
              Bathroom Renovations Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              One Team. Clear Quote. Clean Finish.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Get your bathroom renovated on time and on budget with a trusted local Dublin specialist. No delays, no hidden costs, and no mess left behind.
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
                src={images.bathroomPage.hero.src}
                alt={images.bathroomPage.hero.alt}
                fetchPriority="high"
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
              Real Bathroom Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how outdated bathrooms are turned into clean, finished spaces with careful planning, tidy work, and proper attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {images.bathroomPage.transformations.map((t, i) => (
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Your Bathroom Renovation in 3 Simple Steps</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A clear, stress-free process from first message to finished bathroom. On time, on budget, no surprises.
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

      {/* Types of Bathroom Renovations */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">What We Renovate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From full family bathrooms to ensuites, wet rooms, and accessible bathroom conversions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ...images.bathroomPage.whatWeRenovate[0], label: "Full Bathroom", desc: "Complete strip out and refit", href: null },
              { ...images.bathroomPage.whatWeRenovate[1], label: "Ensuite", desc: "Smaller scale, same quality", href: null },
              { ...images.bathroomPage.whatWeRenovate[2], label: "Wet Room", desc: null, href: "/services/wet-room-installation-dublin" },
              { ...images.bathroomPage.whatWeRenovate[3], label: "Accessible", desc: null, href: "/services/accessible-bathroom-dublin" },
            ].map((room, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={room.src} alt={room.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 pb-4">
                  <div>
                    <p className="text-white font-semibold text-sm">{room.label}</p>
                    {room.desc && <p className="text-white/70 text-xs mt-0.5">{room.desc}</p>}
                  </div>
                  {room.href && (
                    <Link href={room.href} className="inline-flex items-center gap-1.5 bg-white text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/90 transition-colors flex-shrink-0">
                      Learn More <ChevronRight size={14} />
                    </Link>
                  )}
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
              Tired of Bathroom Renovations Running Over Time and Budget?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            <div className="space-y-10">
              <h3 className="text-xl font-medium text-muted-foreground uppercase tracking-widest mb-8">The Problem</h3>
              <ul className="grid gap-4">
                {[
                  "Jobs that drag on for weeks longer than promised",
                  "Prices going up halfway through the job",
                  "Your home left in a mess every day",
                  "Not knowing what's happening or when it'll be finished",
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
                  "Clear timelines, we stick to them",
                  "Honest upfront pricing, no surprises",
                  "Spotless work, we clean up daily",
                  "Regular updates, you're always in the loop",
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
              Bathroom Renovation Services in Dublin
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted bathroom renovation services for homes in and around Dublin, delivered with the same care and attention on every project.
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
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Recent Bathroom Renovations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sample of recent bathroom renovation and tiling projects completed for Dublin homeowners.
            </p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.bathroomPage.gallery.map(({ src, alt }) => (
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
            {images.bathroomPage.gallery.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Bathroom Renovation FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions from Dublin homeowners about bathroom renovations.</p>
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
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to Start Your Bathroom Renovation?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get a clear quote and work with a team that shows up, sticks to the price, and gets the job done right.
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
