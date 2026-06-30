import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { BelowFold } from "@/components/BelowFold";

const PAGE_TITLE = "Bathroom Renovation & Tiling Guide Dublin | GR Tiling";
const PAGE_DESCRIPTION = "An honest guide to bathroom renovations and tiling in Dublin. Understand what's involved, what affects your quote, and what to expect before work begins.";
const PAGE_PATH = "/cost-guide";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What affects a full bathroom renovation quote in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every job is different. The final scope depends on the size of the bathroom, the tiles chosen, whether any plumbing changes are needed, and the sanitary ware selected. Get in touch and we will visit the site and provide a clear written quote before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "What affects a tiling quote in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tiling quotes vary depending on the tile size, the pattern, and the complexity of the job. Larger tiles and intricate patterns take more skill and time to lay. Get in touch and we will give you an honest quote based on your specific job."
          }
        },
        {
          "@type": "Question",
          "name": "Do you tile kitchen splashbacks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We tile kitchen splashbacks, walls, and floors. We can review the layout, tile choice, and prep needed, then give you a clear written quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you include tiles in renovation quotes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer both supply and fit, and fit only. Many customers prefer to visit a tile merchant and choose their own tiles. We are happy to advise on what works best for your space. All quotes clearly outline what is and is not included."
          }
        },
        {
          "@type": "Question",
          "name": "Why do renovation quotes vary so much?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main variables are tile choice, whether any plumbing needs to move, the condition of existing walls and floors, bathroom size, and the sanitary ware selected. It is also worth checking what is actually included in a quote because scope can vary between contractors."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work within a set budget?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once we understand your priorities, we can advise on where to focus and where to simplify, whether that is tile choice, sanitary ware selection, or the scope of work. We would rather give honest advice upfront than surprise you later."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get an accurate quote for a bathroom renovation in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Get in touch and we will visit the site, take measurements, and discuss your plans. We will then provide a clear written quote covering all labour, scope, and timeline. No obligation, no hidden costs."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Pricing Guide", "item": `${SITE_URL}/cost-guide` }
      ]
    }
  ]
};

const quoteFactors = [
  {
    title: "Tile size and format",
    desc: "Larger tiles take more skill and time to lay correctly. They require more precision to keep level and aligned, but the result is fewer grout lines and a more modern, premium finish.",
  },
  {
    title: "Pattern complexity",
    desc: "Herringbone, chevron, and diagonal patterns require significantly more cuts and time than a straight lay, so it is worth factoring the layout into your plans early.",
  },
  {
    title: "Plumbing changes",
    desc: "Moving the position of a toilet, shower, or bath requires new pipework and adds to the project scope. A like-for-like replacement is far more straightforward. Underfloor heating can also be added under floor tiles while tiling is already underway.",
  },
  {
    title: "Surface preparation",
    desc: "Old tiles need to be removed and walls may need re-boarding before new tiling can begin. The condition of the existing substrate directly affects how much preparation is needed.",
  },
  {
    title: "Bathroom size",
    desc: "More square metres means more tiling, more materials, and more hours on site. An ensuite is usually a smaller scope than a large family bathroom.",
  },
  {
    title: "Sanitary ware",
    desc: "The sanitary ware you choose has a major impact on the final scope. Simple, mid-range, and premium options are all available, and we can advise on what works for your space.",
  },
  {
    title: "Location",
    desc: "We cover all of Dublin and surrounding counties, including further afield where the job warrants it. Jobs requiring significant travel may carry a supplement and we will always confirm this upfront.",
  },
];

const faqs = [
  {
    q: "What affects a full bathroom renovation quote in Dublin?",
    a: "Every job is different. The final scope depends on the size of the bathroom, the tiles chosen, whether any plumbing changes are needed, and the sanitary ware selected. Get in touch and we will visit the site and provide a clear written quote before any work begins.",
  },
  {
    q: "What affects a tiling quote?",
    a: "Tiling quotes vary depending on the tile size, the pattern, and the complexity of the job. Larger tiles and intricate patterns take more skill and time to lay. Small jobs and kitchen splashbacks are assessed on their own scope. Get in touch and we will give you an honest quote based on your specific job.",
  },
  {
    q: "Do you include tiles in renovation quotes?",
    a: "We offer both supply and fit, and labour only. Many of our customers prefer to visit a tile merchant and choose their own tiles. We can point you in the right direction and advise on what formats and finishes will work best for your space. Every quote clearly states what is and is not included so there are no surprises.",
  },
  {
    q: "Why do renovation quotes vary so much?",
    a: "The main variables are tile choice, whether plumbing needs to move, the condition of existing walls and floors, bathroom size, and the sanitary ware selected. It is also worth checking what is actually included in a quote because the difference in scope can make quotes look very different on paper.",
  },
  {
    q: "Can you work within a set budget?",
    a: "Yes. Once we understand your priorities, we can advise on where to focus and where to simplify, whether that is tile format, sanitary ware selection, or the scope of work. Our approach is to give honest advice upfront rather than surprise you later.",
  },
  {
    q: "How do I get an accurate quote?",
    a: "Get in touch and we will arrange a site visit, take measurements, and talk through your plans. We will then provide a clear written quote covering all labour, materials if applicable, scope, and timeline. No obligation and no hidden costs.",
  },
  {
    q: "How long does a bathroom renovation take?",
    a: "Most full bathroom renovations take one to two weeks depending on the size and complexity of the job. We agree a timeline before starting and stick to it. We have a strong team so jobs move quickly and we do not leave sites half-done.",
  },
];

export default function CostGuidePage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("cost-guide", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Bathroom Renovations & Tiling Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              What to Expect.<br className="hidden sm:block" /> No Surprises.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Every renovation and tiling job is different. This guide explains what is typically involved, what affects your quote, and what to expect when you get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
            <div className="flex justify-center">
              <HeroReviewBadge />
            </div>
          </div>
        </div>
      </section>

      <BelowFold>
      {/* Bathroom renovation quote factors */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              What Shapes a Bathroom Renovation Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The scope of the job is the biggest factor. Here is what different types of bathroom projects typically involve.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl border mb-6 bg-background">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold">Type of Job</th>
                    <th className="text-right px-5 py-4 font-semibold">What to Know</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Full bathroom renovation", "Complete strip out and refit with plumbing, tiling, sanitary ware, and finishing"],
                    ["Ensuite renovation", "Smaller scale with less tiling area, compact sanitary ware, and simpler plumbing"],
                    ["Wet room conversion", "Full waterproofing, drainage planning, and precision tiling, usually more involved than a standard refit"],
                    ["Like-for-like refit", "Replacing existing fittings in the same positions, usually the most straightforward option"],
                    ["Layout change", "Moving toilets, showers, or baths involves new pipework and adds to the project scope"],
                    ["Tiling and finishing only", "If plumbing is already done, we can handle tiling and finishing as a standalone job"],
                  ].map(([type, note], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-secondary/20" : ""}>
                      <td className="px-5 py-4">{type}</td>
                      <td className="px-5 py-4 text-right text-muted-foreground">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <Info size={18} className="flex-shrink-0 mt-0.5 text-primary" />
              <p>
                <strong className="text-foreground">Every bathroom is different.</strong> The best way to get an accurate picture of what your job involves is to get in touch. We will visit the site, talk through your plans, and give you a clear written quote.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tiling quote factors */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              What Shapes a Tiling Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tiling is not one-size-fits-all. The type of tile, the pattern, and the job size all affect the time and skill involved.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl border mb-6 bg-background">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold">Tile Type / Job</th>
                    <th className="text-right px-5 py-4 font-semibold">What to Know</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Standard tiles (60x60cm)", "Straightforward to lay with a clean and efficient process"],
                    ["Mid-size tiles (60x120cm)", "More precision required to keep flat and aligned"],
                    ["Large format tiles (80x80cm+)", "More time-intensive, with fewer grout lines and a premium result"],
                    ["Complex patterns (herringbone, chevron)", "More cuts and time than a straight lay"],
                    ["Compact jobs", "Scope confirmed after a short discussion and site details"],
                    ["Kitchen splashback", "Layout, tile format, sockets, edges, and wall preparation all considered"],
                  ].map(([type, note], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-secondary/20" : ""}>
                      <td className="px-5 py-4">{type}</td>
                      <td className="px-5 py-4 text-right text-muted-foreground">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <Info size={18} className="flex-shrink-0 mt-0.5 text-primary" />
              <p>
                <strong className="text-foreground">Labour only:</strong> We can quote for installation when you have already chosen your tiles. We are happy to advise on tile formats that work best for your space.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote factors */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              What Affects Your Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No two jobs are the same. These are the main factors we look at before writing a renovation or tiling quote.
            </p>
          </div>
          <QuoteFactorTabs />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">Honest answers to the questions Dublin homeowners ask most.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card px-6 rounded-xl border shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready for a Clear Written Quote?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Every GR Tiling quote is clear, written, and obligation-free. No vague estimates, no hidden extras. Just honest advice for your specific job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base h-14 px-8" onClick={openQuote}>
              Get a Free Quote
            </Button>
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

function QuoteFactorTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-1">
        {quoteFactors.map((factor, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              active === i
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            {factor.title}
          </button>
        ))}
      </div>
      <div className="lg:col-span-2 bg-secondary/30 rounded-2xl p-8 flex flex-col justify-center min-h-[200px]">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{quoteFactors[active].title}</h3>
        <p className="text-muted-foreground leading-relaxed">{quoteFactors[active].desc}</p>
      </div>
    </div>
  );
}
