import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage({ openQuote }: { openQuote: () => void }) {
  return (
    <main className="flex-1 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-20 lg:pt-14 lg:pb-24" data-testid="hero-section">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-5 block">
              Dublin Bathroom Renovation Specialists
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05] mb-5 max-w-[12ch]">
              Bathroom Renovations in Dublin
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Fast, clean, high-quality bathroom renovations from a trusted local Dublin specialist.
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
                alt="Luxury modern bathroom renovation" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative background element */}
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
              <h3 className="text-xl font-medium text-muted-foreground uppercase tracking-widest mb-8">The Old Way</h3>
              <ul className="space-y-8">
                <li>
                  <strong className="text-foreground block text-lg mb-1">Outdated bathrooms</strong>
                  <span className="text-muted-foreground">Dated fixtures, cramped layouts, worn-out tiles</span>
                </li>
                <li>
                  <strong className="text-foreground block text-lg mb-1">Messy contractors</strong>
                  <span className="text-muted-foreground">Dust, debris, damage left behind</span>
                </li>
                <li>
                  <strong className="text-foreground block text-lg mb-1">Unclear pricing</strong>
                  <span className="text-muted-foreground">Surprise costs, vague estimates</span>
                </li>
                <li>
                  <strong className="text-foreground block text-lg mb-1">Long delays</strong>
                  <span className="text-muted-foreground">Missed deadlines, weeks becoming months</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <h3 className="text-xl font-medium text-primary uppercase tracking-widest mb-8">The GR Tiling Way</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-primary"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">High-quality finishes that last</strong>
                    <span className="text-muted-foreground">Premium materials installed with meticulous attention to detail.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-primary"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">Clean workmanship</strong>
                    <span className="text-muted-foreground">Your home left spotless. We protect your property and clean up daily.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-primary"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">Honest, upfront pricing</strong>
                    <span className="text-muted-foreground">Clear, detailed quotes with no hidden surprises.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-primary"><CheckCircle2 /></div>
                  <div>
                    <strong className="text-foreground block text-lg mb-1">Fast, reliable service</strong>
                    <span className="text-muted-foreground">Clear timelines, constant communication, and prompt completion.</span>
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

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Service */}
            <div className="lg:col-span-7 group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border h-full transition-transform duration-300 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/gallery-5.png" 
                    alt="Bathroom Renovations" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-serif text-3xl mb-4">Bathroom Renovations</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Complete bathroom transformations — from design and demolition to fitting, tiling, plumbing, and final finish. We handle the whole project so you don't have to.
                  </p>
                  <ul className="flex flex-wrap gap-3 mb-8">
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Full Project Management</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Supply & Fit</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Custom Layouts</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">Premium Finishes</li>
                  </ul>
                  <Button size="lg" className="w-full sm:w-auto" onClick={openQuote}>
                    Get a Renovation Quote
                  </Button>
                </div>
              </div>
            </div>

            {/* Secondary Service */}
            <div className="lg:col-span-5 group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-md border h-full flex flex-col transition-transform duration-300 hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/images/gallery-2.png" 
                    alt="Tiling Services" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl mb-4">Tiling Services</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    Expert tiling for floors, walls, and wet areas. From herringbone feature walls to large-format rectified tiles — precision cuts and perfect grout lines every time.
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    <li className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">Floor & Wall Tiling</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">Wet Rooms</li>
                    <li className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">Feature Walls</li>
                  </ul>
                  <Button variant="outline" className="w-full" onClick={openQuote}>
                    Get a Tiling Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8">See What Your Bathroom Could Become</h2>
          <Button size="lg" onClick={openQuote}>Start Your Renovation Quote</Button>
        </div>

        <div className="space-y-6">
          {/* Row 1: Scroll Left */}
          <div className="relative w-full flex overflow-hidden">
            <div className="animate-scroll-left flex min-w-max gap-6 px-3">
              {[1, 2, 3, 4, 1, 2, 3, 4].map((num, i) => (
                <div key={`row1-${i}`} className="w-[280px] h-[200px] md:w-[320px] md:h-[220px] rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border">
                  <img src={`/images/banner-${num}.png`} alt={`Modern bathroom project ${num}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Row 2: Scroll Right */}
          <div className="relative w-full flex overflow-hidden">
            <div className="animate-scroll-right flex min-w-max gap-6 px-3">
              {[5, 6, 7, 8, 5, 6, 7, 8].map((num, i) => (
                <div key={`row2-${i}`} className="w-[280px] h-[200px] md:w-[320px] md:h-[220px] rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border">
                  <img src={`/images/banner-${num}.png`} alt={`Bathroom tiling project ${num}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Gallery */}
      <section className="py-24 bg-foreground text-background" data-testid="gallery-section">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Recent Bathroom & Tiling Work</h2>
            <p className="text-background/70 text-lg max-w-2xl">
              A preview of clean finishes, modern bathrooms, and detailed tiling work completed for local homeowners.
            </p>
          </div>

          {/* Desktop Accordion Gallery */}
          <div className="hidden md:flex h-[600px] w-full gap-4">
            {[
              { num: 1, alt: "Freshly renovated bathroom with floor-to-ceiling white ceramic tiles and modern floating vanity" },
              { num: 2, alt: "Herringbone floor tile pattern in warm beige limestone — professional bathroom tiling Dublin" },
              { num: 3, alt: "Walk-in shower niche with dark marble subway tiles and rainfall shower head" },
              { num: 4, alt: "Modern bathroom vanity area with floating cabinet and backlit mirror, warm white finish" },
              { num: 5, alt: "Full bathroom renovation overview with freestanding bath and large format grey tiles" },
              { num: 6, alt: "Close-up of large format rectified tiles with fine grout lines — precise tiling workmanship Dublin" },
            ].map(({ num, alt }) => (
              <div 
                key={`gallery-${num}`}
                className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group"
              >
                <img 
                  src={`/images/gallery-${num}.png`} 
                  alt={alt} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          {/* Mobile Stacked Gallery */}
          <div className="md:hidden grid gap-4">
            {[
              { num: 1, alt: "Freshly renovated bathroom with white ceramic tiles and modern vanity unit — Dublin" },
              { num: 2, alt: "Herringbone floor tiling in warm beige limestone — bathroom floor tiling Dublin" },
              { num: 3, alt: "Walk-in shower with dark marble tiles and frameless glass door" },
              { num: 4, alt: "Bathroom vanity area with backlit mirror and floating cabinet" },
            ].map(({ num, alt }) => (
              <div key={`mob-gallery-${num}`} className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src={`/images/gallery-${num}.png`} 
                  alt={alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-background" data-testid="reviews-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Trusted by Homeowners Across Dublin</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="fill-yellow-400 text-yellow-400 w-6 h-6" />)}
            </div>
            <p className="text-muted-foreground font-medium">5.0 Average Rating</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Raimonda Brooks",
                text: "Gerry was fantastic to work with — friendly, reliable, and so professional. Our bathroom was completely transformed in just over a week and the workmanship is outstanding. Not a spec of dust left behind. Highly recommend GR Tiling to anyone in Dublin."
              },
              {
                name: "Dionne Haslam",
                text: "We had our bathroom and en-suite done at the same time and Gerry got both done quickly and to an incredibly high standard. The tiling is perfect, the finish is brilliant. Honest pricing with no surprises — exactly what he quoted is what we paid."
              },
              {
                name: "Alan L",
                text: "Couldn't be happier with the result. Gerry is a real craftsman — meticulous work, clean and tidy throughout, and the bathroom looks like something out of a magazine. Would absolutely hire again without hesitation."
              }
            ].map((review, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-sm border relative">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="fill-yellow-400 text-yellow-400 w-4 h-4" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
                <p className="font-semibold text-foreground">— {review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.google.com/search?q=GR+Tiling+%26+Bathroom+Renovations+Dublin" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2">
                See All Google Reviews <ChevronRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-secondary/30" data-testid="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Bathroom Renovation FAQs</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card rounded-2xl shadow-sm border p-4 md:p-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium">How much does a bathroom renovation cost in Dublin?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Bathroom renovation costs in Dublin vary depending on the size of the space, materials selected, and scope of work. A standard bathroom renovation typically ranges from a modest refresh to a full transformation. We provide free, transparent quotes with no hidden costs so you know exactly what you're paying before work begins.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">How long does a bathroom renovation take?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Most bathroom renovations are completed within 5 to 10 working days, depending on the size and complexity of the project. We work efficiently and keep disruption to a minimum, keeping you updated throughout so there are no surprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">Do you handle both bathroom renovations and tiling?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes — we offer both full bathroom renovations and standalone tiling services. Whether you need a complete bathroom overhaul or just a new tiled floor or feature wall, we can help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium">Will my home be left clean during the work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely. We take pride in clean and tidy workmanship. We protect surrounding areas, clean up at the end of each working day, and leave your home in great condition when the job is complete.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium">Do you provide quotes before starting?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes, always. We provide free, no-obligation quotes before any work begins. You'll receive a clear breakdown of costs so you can make an informed decision with no pressure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-medium">What areas of Dublin do you cover?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We cover Dublin city and surrounding areas including North Dublin, South Dublin, West Dublin, and County Dublin. Contact us to confirm availability in your specific location.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center" data-testid="final-cta-section">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Renovate Your Bathroom?</h2>
          <p className="text-primary-foreground/80 text-xl mb-10 leading-relaxed">
            Tell us what you need and we'll help you take the next step with a clear, honest quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8 text-primary" onClick={openQuote}>
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+353877209850">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}