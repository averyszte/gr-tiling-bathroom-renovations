import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL, DUBLIN_AREAS } from "@/lib/seo";
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
      "mainEntity": { "@type": "LocalBusiness", "name": "GR Tiling & Bathroom Renovations", "telephone": "+353877209850", "priceRange": "€€", "image": `${SITE_URL}/opengraph.jpg`, "areaServed": DUBLIN_AREAS },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Gerry and who actually does the work?",
          "acceptedAnswer": { "@type": "Answer", "text": "Gerry is the owner of GR Tiling & Bathroom Renovations and the tradesman who carries out the work himself. When you ring, you speak to him directly — the same person who surveys your job, gives you the written quote, and lays the tile. There's no call centre, no anonymous subcontractor, and no handover to someone you've never met. One accountable name is behind every job from start to finish." },
        },
        {
          "@type": "Question",
          "name": "How long has GR Tiling & Bathroom Renovations been going?",
          "acceptedAnswer": { "@type": "Answer", "text": "Gerry has fifteen years in the tiling and bathroom trade, working across Dublin homes of every era — Victorian red-bricks, mid-century semis, and modern apartments. That experience is the heart of the business: fifteen years of hands-on work on real Dublin bathrooms, which is exactly the kind of practical knowledge that keeps a job on time and gets the hidden details right." },
        },
        {
          "@type": "Question",
          "name": "Are you fully insured?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. GR Tiling & Bathroom Renovations is fully insured, with cover in place on every job. That matters in bathroom work because it involves water, electrics, and structure — things that are costly if they go wrong. Insurance means the risk doesn't fall on you if something unexpected happens. It's a deliberate choice about how the business treats its customers, and one reason to think twice about cheaper uninsured cash-job quotes." },
        },
        {
          "@type": "Question",
          "name": "Is the business Irish owned and local?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. GR Tiling & Bathroom Renovations is Irish owned and operated, based in and serving Dublin. Gerry knows the local housing stock intimately — the period terraces, the suburban semis, the new-build apartments — and understands the specific quirks each throws up on site. Hiring local means a tradesman who's accountable in the community he works in." },
        },
        {
          "@type": "Question",
          "name": "What does your 5.0 Google rating tell me?",
          "acceptedAnswer": { "@type": "Answer", "text": "It tells you that the homeowners Gerry has actually worked for rate the experience at the very top. Reviews are the most honest signal in this trade — they're written after the job, by people living with the result. The recurring themes are the four things the business is built on: on time, on budget, tidy work, and honest pricing." },
        },
        {
          "@type": "Question",
          "name": "Why won't you give a fixed price online?",
          "acceptedAnswer": { "@type": "Answer", "text": "Because an honest quote needs a proper look at the actual job. Every Dublin bathroom is different — the substrate, the condition of the existing work, and what's hiding behind the old tile all shape the price. A fixed online figure either pads in a big safety margin or balloons once work starts. Gerry surveys the room, then gives you a clear written quote you approve before anything begins." },
        },
        {
          "@type": "Question",
          "name": "What areas of Dublin do you cover?",
          "acceptedAnswer": { "@type": "Answer", "text": "Gerry is based in Dublin and works across the city and surrounding areas. Fifteen years on the tools means he's worked in homes of every type the city has — from period returns in Rathmines and Portobello to semis in Cabra and Raheny and apartments in newer developments. If you're unsure whether your location is covered, the quickest answer is a phone call to Gerry on +353 87 720 9850." },
        },
      ],
    },
  ],
};

type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "Who is Gerry and who actually does the work?", a: "Gerry is the owner of GR Tiling & Bathroom Renovations and the tradesman who carries out the work himself. When you ring, you speak to him directly — the same person who surveys your job, gives you the written quote, and lays the tile. There's no call centre, no anonymous subcontractor, and no handover to someone you've never met. One accountable name is behind every job from start to finish." },
  { q: "How long has GR Tiling & Bathroom Renovations been going?", a: "Gerry has fifteen years in the tiling and bathroom trade, working across Dublin homes of every era — Victorian red-bricks, mid-century semis, and modern apartments. That experience is the heart of the business: fifteen years of hands-on work on real Dublin bathrooms, which is exactly the kind of practical knowledge that keeps a job on time and gets the hidden details right." },
  { q: "Are you fully insured?", a: "Yes. GR Tiling & Bathroom Renovations is fully insured, with cover in place on every job. That matters in bathroom work because it involves water, electrics, and structure — things that are costly if they go wrong. Insurance means the risk doesn't fall on you if something unexpected happens. It's a deliberate choice about how the business treats its customers, and one reason to think twice about cheaper uninsured cash-job quotes." },
  { q: "Is the business Irish owned and local?", a: "Yes. GR Tiling & Bathroom Renovations is Irish owned and operated, based in and serving Dublin. Gerry knows the local housing stock intimately — the period terraces, the suburban semis, the new-build apartments — and understands the specific quirks each throws up on site. Hiring local means a tradesman who's accountable in the community he works in." },
  { q: "What does your 5.0 Google rating tell me?", a: "It tells you that the homeowners Gerry has actually worked for rate the experience at the very top. Reviews are the most honest signal in this trade — they're written after the job, by people living with the result. The recurring themes are the four things the business is built on: on time, on budget, tidy work, and honest pricing." },
  {
    q: "Why won't you give a fixed price online?",
    a: (
      <>
        Because an honest quote needs a proper look at the actual job. Every Dublin bathroom is different — the substrate, the condition of the existing work, and what's hiding behind the old tile all shape the price. A fixed online figure either pads in a big safety margin or balloons once work starts. Gerry surveys the room, then gives you a clear written quote you approve before anything begins. For the factors behind price, see our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">renovation &amp; tiling cost guide</Link>.
      </>
    ),
  },
  { q: "What areas of Dublin do you cover?", a: "Gerry is based in Dublin and works across the city and surrounding areas. Fifteen years on the tools means he's worked in homes of every type the city has — from period returns in Rathmines and Portobello to semis in Cabra and Raheny and apartments in newer developments. If you're unsure whether your location is covered, the quickest answer is a phone call to Gerry on +353 87 720 9850." },
];

const credentials = [
  { stat: "15 Years", label: "On the tools in Dublin" },
  { stat: "Fully Insured", label: "Cover in place on every job" },
  { stat: "5.0 on Google", label: "Rated by real customers" },
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


export const PAGE_TITLE = "About GR Tiling & Bathroom Renovations Dublin | Gerry";
export const PAGE_DESCRIPTION =
  "Meet Gerry, the fully insured Dublin tiler with 15 years in the trade behind GR Tiling & Bathroom Renovations. Irish owned, 5.0 on Google. Get a written quote.";
export const PAGE_PATH = "/about";

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
            in and around Dublin, working directly with homeowners to deliver reliable results and a smooth process from start to finish. Gerry works right across the city and county — from Rathmines, Ranelagh and Drumcondra to Clontarf, Raheny and Dundrum, and out to Swords, Malahide, Tallaght and Lucan.
          </p>
        </div>
      </section>

      {/* Why insured & time-served matter */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Why "fully insured" and "time-served" actually matter
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Anyone can call themselves a tiler — there's no mandatory licence in Ireland, which is exactly why "fully insured" and "fifteen years" carry weight. Insurance matters because bathroom work touches water, electrics and structure; experience matters because good tiling is almost entirely the parts you never see:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Cover on every job — a badly tanked shower can leak into the room below months later, and uninsured cash jobs leave that risk with you",
              "Waterproofing behind the tile, done right the first time",
              "The floor stiffened and decoupled so a bouncing Dublin joist doesn't crack the grout",
              "A pattress behind the wall so a grab rail has something solid to fix into",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            A good finish can hide a bad build for a while — but only experience gets the hidden details right. That's the value of a time-served tradesman over the lowest quote.
          </p>
        </div>
      </section>

      <ReviewsSection
        className="bg-background"
        featured="brooks"
        trustLine="Rated 5.0 on Google by the Dublin homeowners Gerry works for"
      />

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">About GR Tiling FAQs</h2>
            <p className="text-lg text-muted-foreground">The questions Dublin homeowners ask before getting in touch.</p>
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

      {/* Final CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Talk to Gerry directly
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            No call centres, no middlemen — just the tradesman who'll do the work. Ring +353 87 720 9850 for a friendly chat and an honest written quote for your Dublin bathroom or tiling job.
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
