import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, ChevronRight, XCircle, MessageCircle, FileText, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    image: "/images/gallery-3.png",
    alt: "Bathroom tiling Dublin, walk-in shower with dark marble tiles by GR Tiling",
    title: "Bathroom Tiling",
    description:
      "Clean bathroom tiling for walls, floors, showers, and wet areas, finished with care and attention to detail.",
    bullets: [
      "Shower tiling",
      "Floor tiling",
      "Wall tiling",
      "Wet area tiling",
    ],
    imageLeft: true,
  },
  {
    image: "/images/gallery-2.png",
    alt: "Wall and floor tiling Dublin, herringbone floor pattern by GR Tiling",
    title: "Floor & Wall Tiling",
    description: (
      <>
        Reliable wall and floor tiling for bathrooms, kitchens, hallways, and other areas of the home. If your project is part of a wider refit, take a look at our{" "}
        <Link href="/services/bathroom-renovations" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
          bathroom renovations
        </Link>{" "}
        service too.
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
    image: "/images/gallery-4.png",
    alt: "Tile repairs and finishing Dublin, neat grout work by GR Tiling",
    title: "Tile Repairs & Finishing",
    description:
      "Careful tile repairs, replacements, grout work, and finishing touches to make the space look clean again.",
    bullets: [
      "Tile replacement",
      "Grout touch-ups",
      "Edge finishing",
      "Small repair jobs",
    ],
    imageLeft: true,
  },
];

const reasons = [
  { title: "Clean, Precise Finish", text: "Every job is finished to a high standard, with attention to detail in every cut and joint." },
  { title: "Straight Lines and Neat Grout", text: "Even tile spacing, sharp lines, and crisp grout work that holds up over time." },
  { title: "Honest Upfront Pricing", text: "Clear quotes before any work starts. The price we quote is the price you pay." },
  { title: "Reliable Local Dublin Service", text: "Based in Dublin and working across the city. We turn up when we say we will." },
  { title: "Respect for Your Home", text: "We protect floors and surfaces, clean up daily, and leave the area tidy at the end of each visit." },
  { title: "Bathroom Renovation Experience", text: "Years of full bathroom work means we understand how tiling fits into the bigger picture." },
];

const reviews = [
  { name: "Raimonda Brooks", text: "Gerry's tiling is outstanding. Sharp lines, even spacing, and the grout work is immaculate. Could not be happier with the finish." },
  { name: "Dionne Haslam", text: "Excellent tiling work in our bathroom. The cuts around the fittings were precise and the place was left spotless every day." },
  { name: "Alan L", text: "Honest quote, fast turnaround, and top-quality tiling throughout. A really professional, tidy job from start to finish." },
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

const galleryImages = [
  { num: 6, alt: "Large format rectified tiles with fine grout lines, precision tiling Dublin" },
  { num: 2, alt: "Herringbone floor tiling in warm beige, professional tile installation Dublin" },
  { num: 4, alt: "Wall and floor tiling, neat finishes by a tiler in Dublin" },
  { num: 3, alt: "Walk-in shower with dark marble tiles, bathroom tiling Dublin" },
  { num: 1, alt: "Clean bathroom tiling with sharp edges, GR Tiling Dublin" },
];

const processSteps = [
  { icon: <MessageCircle className="w-10 h-10" />, title: "Tell Us What You Need", text: "Send details about the area, tile type, and the work needed." },
  { icon: <FileText className="w-10 h-10" />, title: "Get a Clear Quote", text: "You'll get a clear price and timeline before any work starts." },
  { icon: <Wrench className="w-10 h-10" />, title: "We Tile It Properly", text: "The work is completed cleanly, carefully, and with attention to detail." },
];

const PAGE_TITLE = "Tiling Services Dublin | GR Tiling & Bathroom Renovations";
const PAGE_DESCRIPTION =
  "GR Tiling & Bathroom Renovations provides clean, reliable tiling services in Dublin, including bathroom tiling, wall tiling, floor tiling, and tile repairs. Get a free quote.";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function TilingServicesPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription =
      document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? "";

    document.title = PAGE_TITLE;
    setMetaTag("name", "description", PAGE_DESCRIPTION);
    setMetaTag("property", "og:title", PAGE_TITLE);
    setMetaTag("property", "og:description", PAGE_DESCRIPTION);
    setMetaTag("name", "twitter:title", PAGE_TITLE);
    setMetaTag("name", "twitter:description", PAGE_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        setMetaTag("name", "description", previousDescription);
      }
    };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image — left on desktop, top on mobile */}
          <div className="relative lg:-mt-4">
            <div className="aspect-[4/3] lg:aspect-[4/4.35] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="/images/gallery-6.png"
                alt="Tiling services in Dublin, large format rectified wall tiles with fine grout lines"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
          {/* Text — right on desktop, below image on mobile */}
          <div>
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Tiling Services in Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] mb-5 tracking-tight">
              Clean Lines. Sharp Finish. No Mess.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Get precise, reliable tiling services in and around Dublin from a trusted local specialist. Clean workmanship, clear pricing, and a finish that makes the whole room feel complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
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
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Recent Tiling Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent tiling jobs showing clean grout lines, sharp edges, and neat finishes across Dublin homes.
            </p>
          </div>
          <div className="hidden md:flex h-[500px] w-full gap-4">
            {galleryImages.map(({ num, alt }) => (
              <div
                key={num}
                className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group"
              >
                <img src={`/images/gallery-${num}.png`} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-2 gap-4">
            {galleryImages.slice(0, 4).map(({ num, alt }) => (
              <div key={num} className="aspect-square rounded-2xl overflow-hidden">
                <img src={`/images/gallery-${num}.png`} alt={alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">How Your Tiling Job Works</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A simple, honest process for tiling work in local Dublin homes, from first message to a finished room.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-[1.5px] bg-primary/30 z-0" />
            {processSteps.map((item, i) => (
              <div
                key={i}
                className="group relative z-10 flex flex-col items-center text-center flex-1 px-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/35 flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[220px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GR */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Why Choose GR for Tiling Services?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-card rounded-2xl border shadow-sm">
                <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Trusted for Tiling and Bathroom Work Across Dublin</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />)}
            </div>
            <p className="text-lg text-muted-foreground">5.0 Google Rating from verified Dublin customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, i) => (
              <div key={i} className="bg-card p-8 pb-10 rounded-2xl shadow-lg border relative">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="fill-yellow-400 text-yellow-400 w-4 h-4" />)}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
                <p className="font-medium text-foreground">{review.name}</p>
                <div className="absolute bottom-3 right-4 opacity-70">
                  <svg width="18" height="18" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
                    <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
                    <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
                    <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.google.com/search?q=GR+Tiling+%26+Bathroom+Renovations+Dublin"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2"
              >
                See All Google Reviews <ChevronRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
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
      <section className="py-24 bg-primary text-primary-foreground">
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

    </main>
  );
}
