import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";
import { ReviewsSection } from "@/components/ReviewsSection";
import { images } from "@/data/images";

export const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "name": "About GR Tiling & Bathroom Renovations",
      "description": "Learn about Gerard Ronan and GR Tiling & Bathroom Renovations, providing bathroom renovation and tiling services in Dublin.",
      "url": `${SITE_URL}/about`,
      "mainEntity": { "@type": "LocalBusiness", "name": "GR Tiling & Bathroom Renovations", "telephone": "+353877209850", "priceRange": "€€", "image": `${SITE_URL}/opengraph.jpg` },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` },
      ],
    },
  ],
};

const credentials = [
  { stat: "15 Years", label: "In the trade" },
  { stat: "Family Business", label: "Irish owned & operated" },
  { stat: "One Team", label: "Full job, start to finish" },
];

const principles = [
  {
    title: "Clear timelines from the start",
    text: "Realistic schedules agreed upfront, with regular updates so you always know where the job stands.",
  },
  {
    title: "Honest pricing with no surprises",
    text: "Detailed written quotes before any work begins. The price quoted is the price paid.",
  },
  {
    title: "Clean workmanship and daily tidy-up",
    text: "Surfaces protected, dust kept down, and the work area cleared at the end of every visit.",
  },
  {
    title: "Respect for your home and space",
    text: "We treat every home like our own, working tidily and considerately from start to finish.",
  },
];


const PAGE_TITLE = "About GR Tiling & Bathroom Renovations | Dublin";
const PAGE_DESCRIPTION =
  "Learn more about GR Tiling & Bathroom Renovations, a trusted local provider of bathroom renovations and tiling services in Dublin.";
const PAGE_PATH = "/about";

export default function AboutPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("about", aboutSchema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Personal section */}
      <section className="pt-[60px] pb-[60px] lg:pt-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-secondary/30">
            <img
              src={images.about.portrait.src}
              alt={images.about.portrait.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              About GR Tiling Dublin
            </h1>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Meet Gerard Ronan Behind the Work
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi, I'm Gerard Ronan, most people just call me Gerry.
              </p>
              <p>
                I started GR Tiling & Bathroom Renovations to offer something simple. Reliable, high-quality work without the usual hassle. No chasing trades, no unclear pricing, and no jobs left half done.
              </p>
              <p>
                Working in homes across Dublin and surrounding counties, the focus is always the same. Do the job right, keep things tidy, and make sure the customer is genuinely happy with the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              How I Work on Every Job
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Credential stats */}
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-border border rounded-2xl overflow-hidden bg-background mb-12">
            {credentials.map((c, i) => (
              <div key={i} className="flex-1 px-8 py-8 text-center">
                <p className="font-bold text-2xl sm:text-3xl text-primary mb-1">{c.stat}</p>
                <p className="text-sm text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>

          {/* Principles list */}
          <div className="divide-y divide-border">
            {principles.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-8 py-6">
                <h3 className="font-semibold text-foreground sm:w-56 flex-shrink-0">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="py-[60px] md:py-24 bg-background">
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

      <ReviewsSection className="bg-secondary/30" />

      {/* Final CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
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
