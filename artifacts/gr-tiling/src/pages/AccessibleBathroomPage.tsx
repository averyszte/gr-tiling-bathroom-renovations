import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Grip, LayoutGrid, Frame, Maximize2, MessageCircle, FileText, Wrench } from "lucide-react";
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

const PAGE_TITLE = "Accessible Bathroom Renovations Dublin | GR Tiling";
const PAGE_DESCRIPTION = "Accessible bathroom renovations in Dublin. Walk-in showers, wet rooms, grab rails, and non-slip tiles. Safe, practical work from GR Tiling.";
const PAGE_PATH = "/services/accessible-bathroom-dublin";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Accessible Bathroom Renovations Dublin",
      "description": "Accessible bathroom renovations in Dublin including walk-in showers, wet rooms, grab rails, non-slip tiles, and level-access installations.",
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
          "name": "Can you replace a bath with a walk-in shower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Replacing a bath with a walk-in shower or wet room is one of the most common accessible bathroom upgrades we carry out. It removes the need to step over a high bath edge and makes daily washing significantly safer and easier."
          }
        },
        {
          "@type": "Question",
          "name": "Can accessible bathrooms still look modern?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Grab rails now come in finishes that match modern bathroom fixtures. Non-slip tiles are available in a wide range of styles. Walk-in showers look sleek and contemporary. An accessible bathroom does not have to look clinical."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Housing Adaptation Grant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Housing Adaptation Grant is a scheme provided by local councils in Ireland to help cover the cost of adapting a home for a person with a disability or mobility issue. It can contribute significantly toward the cost of accessible bathroom modifications including level-access showers, grab rails, and other adaptations."
          }
        },
        {
          "@type": "Question",
          "name": "Do you install grab rails and shower seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We install grab rails, shower seats, and other safety fittings as part of an accessible bathroom renovation. We can work alongside any recommendations from an occupational therapist."
          }
        },
        {
          "@type": "Question",
          "name": "What tiles are best for an accessible bathroom?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Floor tiles should have a suitable slip resistance rating for wet areas. We advise on the right tile types and finishes during the planning stage to balance safety with the look you want."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an accessible bathroom renovation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most accessible bathroom renovations take between one and two weeks depending on the scope of the job. We agree a clear timeline before starting and keep you updated throughout."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Bathroom Renovations", "item": `${SITE_URL}/services/bathroom-renovations` },
        { "@type": "ListItem", "position": 3, "name": "Accessible Bathroom Dublin", "item": `${SITE_URL}${PAGE_PATH}` }
      ]
    }
  ]
};

const whoWeHelp = [
  "Older adults wanting a safer, easier-to-use bathroom",
  "People with limited mobility or a disability",
  "Anyone recovering from an injury or surgery",
  "Families adapting a home for a parent or family member",
  "Homeowners future-proofing their bathroom",
  "Anyone who wants a safer walk-in shower setup",
];

const designElements = [
  {
    icon: <Grip className="w-5 h-5" />,
    title: "Grab rails that don't look medical",
    desc: "Available in matte black, brushed gold, and chrome to match your fixtures rather than stand out.",
  },
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    title: "Non-slip tiles in any style",
    desc: "Large format, stone effect, wood effect. Non-slip floors come in hundreds of finishes.",
  },
  {
    icon: <Frame className="w-5 h-5" />,
    title: "Frameless glass and open showers",
    desc: "No bulky trays or enclosures. Just a clean, level walk-in shower with frameless glass.",
  },
  {
    icon: <Maximize2 className="w-5 h-5" />,
    title: "Layouts that work better",
    desc: "Wall-hung fittings, wider clearances, and better positioning, all designed in from the start.",
  },
];

const process = [
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "Tell us what you need",
    text: "We talk through your bathroom, what is currently difficult, and what you want to change.",
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: "Site visit and quote",
    text: "We assess the space and provide a clear written quote before any work begins.",
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "Install and hand over",
    text: "One team handles everything from strip out to finishing. The space is cleaned and checked before handover.",
  },
];


const faqs = [
  {
    q: "Can you replace a bath with a walk-in shower?",
    a: "Yes. Replacing a bath with a walk-in shower or wet room is one of the most common upgrades we carry out. It removes the need to step over a high bath edge and makes daily washing significantly safer and easier.",
  },
  {
    q: "Can accessible bathrooms still look modern?",
    a: "Absolutely. Grab rails now come in finishes that match modern bathroom fixtures. Non-slip tiles are available in a wide range of styles and formats. Walk-in showers look sleek and contemporary. An accessible bathroom does not have to look clinical.",
  },
  {
    q: "What is the Housing Adaptation Grant?",
    a: "The Housing Adaptation Grant is a scheme run by local councils in Ireland that can contribute significantly toward the cost of adapting a home for someone with a disability or mobility issue. It can cover accessible bathroom work including level-access showers, grab rails, and other adaptations. We recommend checking with your local council for eligibility and current grant amounts.",
  },
  {
    q: "Do you install grab rails and shower seats?",
    a: "Yes. We install grab rails, shower seats, and other safety fittings as part of an accessible bathroom renovation. We can also work alongside any recommendations from an occupational therapist.",
  },
  {
    q: "What tiles are best for an accessible bathroom?",
    a: "Floor tiles should have a suitable slip resistance rating for wet areas. We advise on the right options during the planning stage to make sure the finished bathroom is both safe and good-looking.",
  },
  {
    q: "How long does an accessible bathroom renovation take?",
    a: "Most accessible bathroom renovations take between one and two weeks depending on the scope. We agree a clear timeline before starting and keep you updated throughout.",
  },
];

export default function AccessibleBathroomPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("accessible-bathroom", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Accessible Bathroom Renovations Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Designed for Safety, Comfort & Everyday Use
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We renovate bathrooms across Dublin to make them safer and easier to use, without making them feel cold or clinical. Practical changes that make a real difference every day.
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
                src={images.accessibleBathroomPage.hero.src}
                alt={images.accessibleBathroomPage.hero.alt}
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

      {/* Process */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">How It Works</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A straightforward process with no pressure and no surprises.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-[1.5px] bg-primary/30 z-0" />
            {process.map((item, i) => (
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

      {/* Who We Help */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                Who We Help
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Accessible bathrooms are not just for one type of person. We carry out these renovations for a wide range of homeowners across Dublin, and the result is always a bathroom that works better for whoever is using it.
              </p>
              <div className="space-y-3 mb-8">
                {whoWeHelp.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={images.accessibleBathroomPage.whoWeHelp.src}
                alt={images.accessibleBathroomPage.whoWeHelp.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safe Without Looking Clinical */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Safe Without Looking Clinical
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accessible bathrooms do not have to feel medical or institutional. The details are what make the difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {designElements.map((el, i) => (
              <div key={i} className="flex gap-5 bg-background rounded-2xl p-6 border">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {el.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{el.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing Adaptation Grant */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              You May Qualify for a Grant
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The <strong className="text-foreground">Housing Adaptation Grant</strong> is a scheme run by local councils across Ireland that can contribute significantly toward the cost of adapting a home for a person with a disability or mobility issue. It can cover a wide range of accessible bathroom work, including:
            </p>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              {[
                "Level-access shower or wet room installation",
                "Grab rails and safety fittings",
                "Non-slip flooring",
                "Widened doorways and improved access",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We carry out accessible bathroom installations that align with grant requirements and can work alongside occupational therapist recommendations where applicable. We recommend checking with your local council for current eligibility criteria and grant amounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Discuss Your Bathroom</Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 gap-2" asChild>
                <a href="https://www.gov.ie/en/department-of-housing-local-government-and-heritage/services/housing-adaptation-grant-for-disabled-people/" target="_blank" rel="noopener noreferrer">
                  Learn About the Grant <ChevronRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sample of bathroom renovation projects completed for Dublin homeowners.
            </p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.bathroomPage.galleryAccessible.map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group">
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.bathroomPage.galleryAccessible.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection className="bg-secondary/30" />

      {/* Related Services */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Wet Room Installation", href: "/services/wet-room-installation-dublin" },
              { label: "Bathroom Tiling", href: "/services/bathroom-tiling-dublin" },
              { label: "Bathroom Renovations", href: "/services/bathroom-renovations" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center justify-between px-5 py-4 bg-secondary/30 border rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                {link.label} <ChevronRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Accessible Bathroom FAQs</h2>
            <p className="text-lg text-muted-foreground">Answers to questions we often hear about accessible bathroom renovations.</p>
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
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Make Your Bathroom Safer and More Comfortable</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get a free, no-obligation quote for your accessible bathroom renovation in Dublin.
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
