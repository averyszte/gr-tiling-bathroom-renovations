import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Clock, BadgeEuro, Sparkles, Home, ChevronRight } from "lucide-react";
import { applyPageSeo } from "@/lib/seo";

const principles = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Clear timelines from the start",
    text: "Realistic schedules agreed upfront, with regular updates so you always know where the job stands.",
  },
  {
    icon: <BadgeEuro className="w-6 h-6" />,
    title: "Honest pricing with no surprises",
    text: "Detailed written quotes before any work begins. The price quoted is the price paid.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Clean workmanship and daily tidy-up",
    text: "Surfaces protected, dust kept down, and the work area cleared at the end of every visit.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Respect for your home and space",
    text: "We treat every home like our own, working tidily and considerately from start to finish.",
  },
];

const reviews = [
  {
    name: "Raimonda Brooks",
    text: "Gerry and the team transformed our bathroom beyond expectations. On time, tidy, and the finish is immaculate.",
  },
  {
    name: "Dionne Haslam",
    text: "Excellent communication from start to finish. The tiling is perfect and they left the house spotless every day.",
  },
  {
    name: "Alan L",
    text: "A genuinely professional service. Honest quote, fast turnaround, and top-quality workmanship throughout.",
  },
];

const PAGE_TITLE = "About GR Tiling & Bathroom Renovations | Dublin";
const PAGE_DESCRIPTION =
  "Learn more about GR Tiling & Bathroom Renovations, a trusted local provider of bathroom renovations and tiling services in Dublin.";
const PAGE_PATH = "/about";

export default function AboutPage({ openQuote }: { openQuote: () => void }) {
  useEffect(
    () =>
      applyPageSeo({
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        path: PAGE_PATH,
      }),
    [],
  );

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Personal section (image + text) — first section on the page */}
      <section className="pt-16 pb-24 lg:pt-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-secondary/30">
            {/* Placeholder image, swap for a real portrait later */}
            <img
              src="/images/banner-3.png"
              alt="Local Dublin tiler and bathroom renovation specialist on site"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Meet the Person Behind the Work
            </h1>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                This business is built on hands-on experience in bathroom renovations and tiling. Every project is completed with attention to detail, clear communication, and a focus on doing the job properly from start to finish.
              </p>
              <p>
                The goal is simple: deliver clean, reliable work without delays, hidden costs, or unnecessary stress for the homeowner.
              </p>
              <p>
                With experience working in homes across Dublin, the focus is always on quality finishes, tidy work, and results that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              How I Work on Every Job
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-card rounded-2xl border shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Working Across Dublin
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GR Tiling &amp; Bathroom Renovations provides{" "}
            <Link
              href="/services/bathroom-renovations"
              className="text-primary font-medium underline underline-offset-4 hover:opacity-80"
            >
              bathroom renovation
            </Link>{" "}
            and{" "}
            <Link
              href="/services/tiling-services"
              className="text-primary font-medium underline underline-offset-4 hover:opacity-80"
            >
              tiling services
            </Link>{" "}
            in and around Dublin, working directly with homeowners to deliver reliable results and a smooth process from start to finish.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">
              5.0 Google Rating from verified Dublin customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-card p-8 pb-10 rounded-2xl shadow-lg border relative"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
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
                href="https://maps.app.goo.gl/zXMYDcdtwATJcR9AA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                See All Google Reviews <ChevronRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Ready to Start Your Bathroom Renovation or Tiling Project?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Get in touch today for a clear quote and reliable service from a local Dublin specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base h-14 px-8"
              onClick={openQuote}
            >
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="tel:+353877209850">Call +353 87 720 9850</a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
