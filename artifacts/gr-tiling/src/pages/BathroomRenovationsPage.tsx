import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, ChevronRight, XCircle, MessageCircle, FileText, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    image: "/images/gallery-1.png",
    alt: "Full bathroom renovation in Dublin — complete transformation by GR Tiling & Bathroom Renovations",
    title: "Full Bathroom Renovations",
    description:
      "End-to-end bathroom transformations — from first design discussion to final clean. We manage the full project so you don't have to coordinate multiple trades.",
    bullets: [
      "Complete bathroom transformation",
      "Plumbing & fitting",
      "Custom tiling & finishes",
      "Full project management",
    ],
    imageLeft: true,
  },
  {
    image: "/images/gallery-3.png",
    alt: "Bathroom layout upgrade and modern fixture installation Dublin — GR Tiling",
    title: "Bathroom Layout & Upgrades",
    description:
      "Reconfigure your bathroom for better use of space, modernise fixtures, and upgrade finishes — without a full gut renovation.",
    bullets: [
      "Space optimisation & layout planning",
      "Modern fixture upgrades",
      "Wet room conversions",
      "Accessible bathroom adaptations",
    ],
    imageLeft: false,
  },
  {
    image: "/images/gallery-4.png",
    alt: "Professional floor and wall tiling Dublin — wet rooms and feature walls by GR Tiling",
    title: "Tiling & Finishing",
    description:
      "Precision tiling from floor to ceiling — large-format rectified tiles, herringbone patterns, wet rooms, and feature walls. Clean grout lines every time.",
    bullets: [
      "Floor & wall tiling",
      "Wet rooms & shower enclosures",
      "Feature walls & niche tiling",
      "Premium high-quality finishes",
    ],
    imageLeft: true,
  },
];

const reasons = [
  { title: "On Time Completion", text: "We set a realistic timeline at the start and stick to it. No unexplained delays." },
  { title: "On Budget Pricing", text: "Clear, detailed quotes upfront. The price we quote is the price you pay." },
  { title: "Clean Workmanship", text: "We protect your home, clean up daily, and leave every area tidy." },
  { title: "Honest Communication", text: "Regular updates throughout the project — you always know where things stand." },
  { title: "Local Dublin Specialist", text: "We work across Dublin and surrounding areas. Based local, working local." },
  { title: "High-Quality Finishes", text: "Premium materials and precision work that looks great and lasts for years." },
];

const reviews = [
  { name: "Raimonda Brooks", text: "Gerry and the team transformed our bathroom beyond expectations. On time, tidy, and the finish is immaculate." },
  { name: "Dionne Haslam", text: "Excellent communication from start to finish. The tiling is perfect and they left the house spotless every day." },
  { name: "Alan L", text: "A genuinely professional service. Honest quote, fast turnaround, and top-quality workmanship throughout." },
];

const faqs = [
  { q: "How much does a bathroom renovation cost in Dublin?", a: "Costs depend on the size, scope, and materials chosen. We provide clear, detailed quotes before any work starts — no hidden extras." },
  { q: "How long does a bathroom renovation take?", a: "Most standard bathroom renovations take 1–3 weeks. We give you a realistic timeline at the start and keep you updated throughout." },
  { q: "Will the work area be kept clean?", a: "Yes. We protect your home, clean up every day, and leave the area tidy. We treat your home the way we'd want ours treated." },
  { q: "Do I get a written quote?", a: "Absolutely. We provide a clear written quote before any work begins so you know exactly what's included and what the cost will be." },
  { q: "Do you cover all areas of Dublin?", a: "Yes — we work across Dublin and nearby areas. Contact us and we'll confirm availability for your location quickly." },
  { q: "Can you handle just the tiling, not the full renovation?", a: "Yes. We do standalone tiling work as well as full bathroom renovations. Just let us know what you need and we'll quote accordingly." },
];

const galleryImages = [
  { num: 1, alt: "Modern bathroom renovation with white ceramic tiles and floating vanity — Dublin" },
  { num: 2, alt: "Herringbone floor tiling in warm beige — professional tiling Dublin" },
  { num: 3, alt: "Walk-in shower with dark marble tiles — bathroom renovation Dublin" },
  { num: 5, alt: "Luxury freestanding bath in renovated bathroom — GR Tiling Dublin" },
  { num: 6, alt: "Large format rectified tiles with fine grout lines — precision tiling Dublin" },
];

const processSteps = [
  { icon: <MessageCircle className="w-10 h-10" />, title: "Tell Us What You Need", text: "Send a few details about your bathroom or renovation idea." },
  { icon: <FileText className="w-10 h-10" />, title: "Get a Clear Quote", text: "We'll discuss the work, timeline, and price — no surprises." },
  { icon: <Wrench className="w-10 h-10" />, title: "We Get to Work", text: "Clean, reliable work completed on time, every time." },
];

export default function BathroomRenovationsPage({ openQuote }: { openQuote: () => void }) {
  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          {/* Image — left on desktop, top on mobile */}
          <div className="relative lg:-mt-4">
            <div className="aspect-[4/3] lg:aspect-[4/4.35] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="/images/hero-bathroom-2.png"
                alt="Bathroom renovation in Dublin — modern bathroom with large format tiles and clean finish"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
          {/* Text — right on desktop, below image on mobile */}
          <div>
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Bathroom Renovations Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] mb-5 tracking-tight">
              Done Right. On Time. On Budget.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Get your bathroom renovated on time and on budget with a trusted local Dublin specialist. No delays, no hidden costs, and no mess left behind.
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
              Tired of Bathroom Renovations Running Over Time and Budget?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            <div className="space-y-10">
              <h3 className="text-xl font-medium text-muted-foreground uppercase tracking-widest mb-8">The Problem</h3>
              <ul className="space-y-8">
                {[
                  "Projects dragging on for weeks",
                  "Costs increasing after work starts",
                  "Contractors leaving a mess",
                  "Poor communication throughout",
                ].map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 text-rose-400/80"><XCircle /></div>
                    <span className="text-foreground/75 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-medium text-primary uppercase tracking-widest mb-8">The GR Way</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We keep your renovation simple, clear, and on track — with honest pricing, clean workmanship, and a timeline you can rely on.
              </p>
              <ul className="space-y-6">
                {[
                  "Clear timelines — we stick to them",
                  "Honest upfront pricing — no surprises",
                  "Spotless work — we clean up daily",
                  "Regular updates — you're always in the loop",
                ].map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 text-green-600"><CheckCircle2 /></div>
                    <span className="text-foreground text-lg">{point}</span>
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
              Bathroom Renovation Services in Dublin
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
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
                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Recent Bathroom Renovations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sample of recent bathroom renovation and tiling projects completed for Dublin homeowners.
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">How Your Renovation Works</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A quick, clear process from first message to a finished bathroom.
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
              Why Choose GR Tiling & Bathroom Renovations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-card rounded-2xl border shadow-sm">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">What Our Customers Say</h2>
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
      <section className="py-24 bg-primary text-primary-foreground">
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

    </main>
  );
}
