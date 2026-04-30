import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, ChevronRight, XCircle, MessageCircle, FileText, Wrench } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

const reviews = [
  { name: "Raimonda Brooks", text: "Gerry and the team transformed our bathroom beyond expectations. On time, tidy, and the finish is immaculate." },
  { name: "Dionne Haslam", text: "Excellent communication from start to finish. The tiling is perfect and they left the house spotless every day." },
  { name: "Alan L", text: "A genuinely professional service. Honest quote, fast turnaround, and top-quality workmanship throughout." },
];

type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "How much does a bathroom renovation cost in Dublin?", a: "Costs depend on the size, scope, and materials chosen for your bathroom remodel. We provide clear, detailed quotes before any work starts, with no hidden extras." },
  { q: "How long does a bathroom renovation take?", a: "Most standard bathroom renovations take 1 to 3 weeks. We give you a realistic timeline at the start and keep you updated throughout." },
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

export default function HomePage({ openQuote }: { openQuote: () => void }) {
  return (
    <main className="flex-1 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30 pt-8 pb-16 lg:pt-10 lg:pb-20" data-testid="hero-section">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Dublin Bathroom Renovation
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] mb-5 tracking-tight">
              On Time. On Budget. No Surprises.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Fast, clean, high-quality bathroom renovations from a trusted local Dublin specialist who shows up on time and sticks to the price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote} data-testid="button-hero-get-quote">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild data-testid="link-hero-call">
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
          </div>
          <div className="relative lg:-mt-4">
            <div className="aspect-[4/3] lg:aspect-[4/4.35] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="/images/hero-bathroom-1.png"
                alt="Modern bathroom renovation in Dublin with freestanding bath and marble tiling"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-primary text-primary-foreground py-6 border-y border-primary-foreground/10">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 text-sm font-medium tracking-wide">
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
              <span>5.0 Google Rating</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 opacity-80" />
              <span>Bathroom Renovations</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 opacity-80" />
              <span>Tiling Services</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 opacity-80" />
              <span>Clean & Tidy Work</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 opacity-80" />
              <span>Dublin Area</span>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-24 bg-secondary/30" data-testid="process-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Get Started in 3 Simple Steps</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">A simple, clear process from first message to finished work.</p>
          </div>

          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-[1.5px] bg-primary/30 z-0" />

            {[
              {
                icon: <MessageCircle className="w-10 h-10" />,
                title: "Tell Us What You Need",
                text: "Send a quick message or call us about your bathroom or tiling project.",
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: "We Plan It With You",
                text: "We'll go through your ideas, discuss options, and give you a clear quote with no surprises.",
              },
              {
                icon: <Wrench className="w-10 h-10" />,
                title: "We Get It Done",
                text: "We complete the work on time, keep everything clean, and deliver a high-quality finish.",
              },
            ].map((item, i) => (
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

          <div className="flex justify-center mt-16">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">A Cleaner, Faster Way to Renovate Your Bathroom</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

            <div className="space-y-10">
              <h3 className="text-xl font-medium text-muted-foreground uppercase tracking-widest mb-8">Other Renovators</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-rose-400/80"><XCircle /></div>
                  <div>
                    <strong className="text-foreground/75 block text-lg mb-1">Cut corners and rushed work</strong>
                    <span className="text-muted-foreground/70">Shortcuts taken, poor attention to detail, and results that don't last.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-rose-400/80"><XCircle /></div>
                  <div>
                    <strong className="text-foreground/75 block text-lg mb-1">Messy contractors</strong>
                    <span className="text-muted-foreground/70">Dust, debris, damage left behind</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-rose-400/80"><XCircle /></div>
                  <div>
                    <strong className="text-foreground/75 block text-lg mb-1">Unclear pricing</strong>
                    <span className="text-muted-foreground/70">Surprise costs, vague estimates</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-rose-400/80"><XCircle /></div>
                  <div>
                    <strong className="text-foreground/75 block text-lg mb-1">Long delays</strong>
                    <span className="text-muted-foreground/70">Missed deadlines, weeks becoming months</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-10">
              <h3 className="text-xl font-medium text-primary uppercase tracking-widest mb-8">The GR Way</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-green-600"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">Fast, reliable service</strong>
                    <span className="text-muted-foreground">Clear timelines, constant communication, and prompt completion.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-green-600"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">Clean workmanship</strong>
                    <span className="text-muted-foreground">Your home left spotless. We protect your property and clean up daily.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-green-600"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">Honest, upfront pricing</strong>
                    <span className="text-muted-foreground">Clear, detailed quotes with no hidden surprises.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-green-600"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">High-quality finishes that last</strong>
                    <span className="text-muted-foreground">Premium materials installed with meticulous attention to detail.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Bathroom Renovation & Tiling Services in Dublin</h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Primary Service */}
            <div className="lg:col-span-7 group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border h-full transition-transform duration-300 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/gallery-5.png"
                    alt="Complete bathroom renovation by GR Tiling, modern finish with premium tiles and fittings, Dublin"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-serif text-3xl mb-4">Bathroom Renovations</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Complete bathroom transformations, from design and demolition to fitting, tiling, plumbing, and final finish. We handle the whole project so you don't have to.
                  </p>
                  <ul className="flex flex-wrap gap-3 mb-8">
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Full Project Management</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Supply & Fit</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Custom Layouts</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Premium Finishes</li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className="sm:w-auto" onClick={openQuote}>
                      Get a Renovation Quote
                    </Button>
                    <Button size="lg" variant="ghost" className="sm:w-auto" asChild>
                      <Link href="/services/bathroom-renovations">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Service */}
            <div className="lg:col-span-5 group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-md border flex flex-col transition-transform duration-300 hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/gallery-2.png"
                    alt="Professional floor and wall tiling service in Dublin, herringbone pattern by GR Tiling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl mb-3">Tiling Services</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Expert tiling for floors, walls, and wet areas. From herringbone feature walls to large-format rectified tiles, precision cuts and perfect grout lines every time.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <Button variant="secondary" className="sm:w-auto" onClick={openQuote}>Get a Tiling Quote</Button>
                    <Button variant="ghost" className="sm:w-auto" asChild>
                      <Link href="/services/tiling-services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Recent Work & Finished Projects</h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { num: 1, alt: "Freshly renovated bathroom with white ceramic tiles and modern vanity unit, Dublin" },
              { num: 2, alt: "Herringbone floor tile pattern in warm beige limestone, professional bathroom tiling Dublin" },
              { num: 3, alt: "Modern walk-in shower with large format tiles and black fixtures, Dublin bathroom" },
              { num: 4, alt: "Luxury bathroom with floating vanity and wall hung toilet, renovated in Dublin" },
              { num: 5, alt: "Beautiful bathtub area with feature wall tiling and clean modern finish, Dublin" },
              { num: 6, alt: "Close-up of large format rectified tiles with fine grout lines, precise tiling workmanship Dublin" },
            ].map((img) => (
              <div key={img.num} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square hover:shadow-xl transition-shadow duration-300">
                <img
                  src={`/images/gallery-${img.num}.png`}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">5.0 Google Rating from verified local customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, i) => (
              <div key={i} className="bg-card p-8 pb-10 rounded-2xl shadow-lg border relative">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                  ))}
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
              <a href="https://maps.app.goo.gl/zXMYDcdtwATJcR9AA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                See All Google Reviews <ChevronRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Common Questions About Bathroom Renovations</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border shadow-sm px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to Renovate Your Bathroom?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get in touch today for a clear quote and reliable service from a trusted Dublin specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base h-14 px-8" onClick={openQuote}>
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent" asChild>
              <a href="tel:+353877209850">Call +353 87 720 9850</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
