import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Grip, LayoutGrid, Frame, Maximize2, Search, FileText, Wrench, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL, DUBLIN_AREAS } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { TrustStrip } from "@/components/TrustStrip";
import { images } from "@/data/images";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

export const PAGE_TITLE = "Accessible Bathrooms Dublin | Grant-Ready Wet Rooms";
export const PAGE_DESCRIPTION = "Mobility bathrooms in Dublin — level-access showers, grab rails and non-slip floors, built grant-compliant. Fully insured, 15 years. Free written quote.";
export const PAGE_PATH = "/services/accessible-bathroom-dublin";

export const schema = {
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
      "areaServed": DUBLIN_AREAS
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What grants are available for an accessible bathroom in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The three main supports are the Housing Adaptation Grant for People with a Disability, the Mobility Aids Grant for smaller works like grab rails and accessible showers, and Housing Aid for Older Persons. They're administered by your local authority — Dublin City, Fingal, Dun Laoghaire-Rathdown or South Dublin — and are means-tested. We supply the itemised written quote applications need. Current amounts and bands are on our cost guide."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle the grant paperwork for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle the contractor's part properly: a clear, itemised written quote, a design that meets the accessibility standards the grant expects, and work carried out to your occupational therapist's recommendations. The application itself, the means test and the OT assessment go through the council and HSE, so those stay with you. We've worked alongside plenty of Dublin families through this process and will give you exactly the documentation the council asks a contractor to provide."
          }
        },
        {
          "@type": "Question",
          "name": "What makes a shower genuinely level-access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There's no tray and no lip — the floor is continuous and step-free, laid to a gentle, controlled fall so water runs to a linear or point drain rather than spreading. The wet zone is finished in R11-rated non-slip tile, and we usually add a wall-fixed folding seat and a half-height door. Getting the gradient right is the skilled part: enough to drain fully, gentle enough to be safe and wheelchair-friendly."
          }
        },
        {
          "@type": "Question",
          "name": "Can grab rails go on any bathroom wall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not safely. Many Dublin homes have timber stud walls, and a load-bearing rail fixed only into plasterboard can tear out under weight. The correct method is to install a timber pattress — a plywood or noggin backing — behind the board before tiling, so the rail bolts into something structural. In solid masonry we use resin or expansion fixings. This has to be planned before tiling, which is why we design rail positions in from the start."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an accessible bathroom take to install?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A focused accessible conversion typically takes around three to five days on site, depending on the condition of the existing room and whether we uncover damp, rot or a floor that needs stiffening once we strip out. If the work is part of a wider refit with plumbing moves and a new layout, it runs longer and is better treated as a full renovation. We give you a realistic timeline with your written quote."
          }
        },
        {
          "@type": "Question",
          "name": "What does an accessible bathroom cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost depends on the room: whether the floor needs stiffening, whether we find hidden damp, the drainage build-up for level access, tile choice and how much sanitaryware changes. Grant funding also affects what you pay out of pocket. We never publish fixed prices — every job gets an honest, itemised written quote after we've seen the space. For typical ranges and how grants offset them, see our accessible bathroom costs and grants guide."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between an accessible bathroom and a wet room?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They overlap but the reason to build differs. An accessible bathroom is driven by mobility and safety — level entry, grab rails, seating, non-slip floors and grant-compliant design. A wet room is driven by design and the waterproofing craft of a fully open, tanked space. We build both, and many accessible projects are level-access wet rooms; the tanking and falls detail is covered on our wet room installation page."
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
  { icon: <Search className="w-10 h-10" />, title: "Assessment & Measure", text: "We visit, review any OT recommendations and measure up so the design suits the actual user and the space." },
  { icon: <FileText className="w-10 h-10" />, title: "Written Quote & Design", text: "You get a clear, itemised written quote and a grant-compliant layout you can put in front of the council." },
  { icon: <Wrench className="w-10 h-10" />, title: "Prep & Pattressing", text: "We strip out, stiffen the floor where needed, fit timber pattressing for rails and tank the wet zone." },
  { icon: <ShieldCheck className="w-10 h-10" />, title: "Fit & Finish", text: "Level-access shower, non-slip tiling, rails, seat and sanitaryware fitted, tested, sealed and left clean." },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  {
    q: "What grants are available for an accessible bathroom in Dublin?",
    a: (
      <>
        The three main supports are the Housing Adaptation Grant for People with a Disability, the Mobility Aids Grant for smaller works like grab rails and accessible showers, and Housing Aid for Older Persons. They're administered by your local authority — Dublin City, Fingal, Dún Laoghaire-Rathdown or South Dublin — and are means-tested. We supply the itemised written quote applications need. Current amounts and bands are on our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">cost guide</Link>.
      </>
    ),
  },
  { q: "Do you handle the grant paperwork for me?", a: "We handle the contractor's part properly: a clear, itemised written quote, a design that meets the accessibility standards the grant expects, and work carried out to your occupational therapist's recommendations. The application itself, the means test and the OT assessment go through the council and HSE, so those stay with you. We've worked alongside plenty of Dublin families through this process and will give you exactly the documentation the council asks a contractor to provide." },
  { q: "What makes a shower genuinely level-access?", a: "There's no tray and no lip — the floor is continuous and step-free, laid to a gentle, controlled fall so water runs to a linear or point drain rather than spreading. The wet zone is finished in R11-rated non-slip tile, and we usually add a wall-fixed folding seat and a half-height door. Getting the gradient right is the skilled part: enough to drain fully, gentle enough to be safe and wheelchair-friendly." },
  { q: "Can grab rails go on any bathroom wall?", a: "Not safely. Many Dublin homes have timber stud walls, and a load-bearing rail fixed only into plasterboard can tear out under weight. The correct method is to install a timber pattress — a plywood or noggin backing — behind the board before tiling, so the rail bolts into something structural. In solid masonry we use resin or expansion fixings. This has to be planned before tiling, which is why we design rail positions in from the start." },
  { q: "How long does an accessible bathroom take to install?", a: "A focused accessible conversion typically takes around three to five days on site, depending on the condition of the existing room and whether we uncover damp, rot or a floor that needs stiffening once we strip out. If the work is part of a wider refit with plumbing moves and a new layout, it runs longer and is better treated as a full renovation. We give you a realistic timeline with your written quote." },
  {
    q: "What does an accessible bathroom cost?",
    a: (
      <>
        Cost depends on the room: whether the floor needs stiffening, whether we find hidden damp, the drainage build-up for level access, tile choice and how much sanitaryware changes. Grant funding also affects what you pay out of pocket. We never publish fixed prices — every job gets an honest, itemised written quote after we've seen the space. For typical ranges and how grants offset them, see our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">accessible bathroom costs &amp; grants</Link>{" "}guide.
      </>
    ),
  },
  {
    q: "What's the difference between an accessible bathroom and a wet room?",
    a: (
      <>
        They overlap but the reason to build differs. An accessible bathroom is driven by mobility and safety — level entry, grab rails, seating, non-slip floors and grant-compliant design. A wet room is driven by design and the waterproofing craft of a fully open, tanked space. We build both, and many accessible projects are level-access wet rooms; the tanking and falls detail is covered on our{" "}
        <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room installation</Link>{" "}page.
      </>
    ),
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
              Mobility &amp; Accessible Bathrooms · Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Safe, Level-Access Bathrooms Done Right
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We build mobility bathrooms across Dublin for ageing in place and reduced mobility — level-access showers, sturdy grab rails and non-slip floors, designed to meet grant requirements and installed clean, on time and to standard.
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

      {/* Intro: safe and independent */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Bathrooms that keep people safe and independent at home
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Most calls about accessible bathrooms come from a son, daughter or carer — after a fall, or a hospital discharge that's made the old over-bath shower a daily risk. The heart of the job is a level-access shower: no tray, no lip, a controlled fall to the drain, R11 non-slip tile underfoot. For a full open wet-floor layout, see{" "}
            <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">how we build a level-access wet room</Link>.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Step-free, level-access shower with a controlled fall to drain",
              "R11 non-slip floor tile rated for frequently-wet areas",
              "Grab rails fixed into solid timber pattressing, never plasterboard plugs",
              "Wall-mounted basins and folding shower seats for clear, usable space",
              "Half-height doors for carer access and reduced flooding",
              "Layout planned around the specific user, not a showroom template",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
            <div className="hidden md:block absolute top-[3rem] left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-[1.5px] bg-primary/30 z-0" />
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
              Grants, paperwork and grant-compliant design
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For most Dublin families the grant is what makes the project possible. There are three main supports, administered by your local council — Dublin City, Fingal, Dún Laoghaire-Rathdown or South Dublin:
            </p>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              {[
                "Housing Adaptation Grant for People with a Disability — level-access showers and disability-related adaptations",
                "Mobility Aids Grant — a smaller, faster scheme for basics like grab rails and accessible showers",
                "Housing Aid for Older Persons — repairs and improvements for older homeowners",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We make the contractor side straightforward: the itemised written quote these applications need, a design built to Part M standards, and work to your OT's recommendations. Grants are means-tested and amounts change, so current bands live on our{" "}
              <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">accessible bathroom costs &amp; grants</Link>{" "}guide. Part of a wider refit? Better handled as one of our{" "}
              <Link href="/services/bathroom-renovations" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">full bathroom renovations</Link>.
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

      {/* Deep: rails & level entry */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Why grab rails and level entry are a trade skill
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A grab rail is only as safe as what it's screwed into, and this is where cut-price jobs quietly fail. Many Dublin homes have timber stud walls, not solid block, so a rail fixed to plasterboard and plugs can tear out under load. The safe fixing has to be planned in before tiling:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "A timber pattress behind the board before tiling, so the rail bolts into something structural",
              "Resin or expansion fixings in solid masonry",
              "Level entry graded to the drain — enough to drain, gentle enough to be safe and wheelchair-passable",
              "On upstairs timber floors, that fall formed into a stiffened, decoupled, waterproofed deck",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            It's careful, standards-led work — the reason we won't cut corners on preparation to shave a quote.
          </p>
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

      <ReviewsSection
        className="bg-secondary/30"
        featured="brooks"
        trustLine="The reassurance carers tell us matters most — rated 5.0 on Google"
      />

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

      {/* Areas served */}
      <section className="py-10 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Based in Dublin.</span> Accessible and mobility bathrooms across the city — working with families in Terenure, Rathfarnham and Dundrum, Clontarf and Raheny, Tallaght and Lucan, and right across Dublin.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Help a parent stay safe at home</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Talk to Gerry about a grant-ready accessible bathroom. Fully insured, 15 years on Dublin bathrooms, and an honest written quote with no pressure. Call for a free assessment.
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
