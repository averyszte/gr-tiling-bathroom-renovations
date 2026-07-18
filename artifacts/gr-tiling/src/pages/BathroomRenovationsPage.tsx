import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, XCircle, FileText, Layers, ShieldCheck, Trash2, Users, Bath } from "lucide-react";
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
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

export const bathroomSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Bathroom Renovations Dublin",
      "description": "Bathroom renovation services in Dublin by GR Tiling & Bathroom Renovations, focused on clean work, clear pricing, and reliable results.",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "GR Tiling & Bathroom Renovations", "telephone": "+353877209850", "priceRange": "€€", "image": `${SITE_URL}/opengraph.jpg` },
      "areaServed": DUBLIN_AREAS,
      "serviceType": "Bathroom Renovations",
      "url": `${SITE_URL}/services/bathroom-renovations`,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Bathroom Renovations", "item": `${SITE_URL}/services/bathroom-renovations` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a full bathroom renovation take in Dublin?",
          "acceptedAnswer": { "@type": "Answer", "text": "A standard full bathroom typically runs seven to ten working days from strip-out to snag, and a more complex job — moving the layout, a wet-room build-up, or hidden damage found on strip-out — usually ten to fourteen. The honest figure depends on your room, and drying and curing times for levelling and tanking cannot be rushed without risking the finish. We give you a realistic programme with the written quote, not an optimistic promise." },
        },
        {
          "@type": "Question",
          "name": "Do I need planning permission to renovate my bathroom?",
          "acceptedAnswer": { "@type": "Answer", "text": "For a standard like-for-like renovation that does not extend the house or change how the space is used, the work is generally classed as exempted development, so no planning permission is required. Renovating within an existing bathroom, even with a new layout inside the same room, normally falls under this. Because every property differs, we confirm your specific situation rather than assume — and we will always tell you if something needs checking." },
        },
        {
          "@type": "Question",
          "name": "Will you manage the plumber and electrician, or do I arrange them?",
          "acceptedAnswer": { "@type": "Answer", "text": "We manage everything. That is the whole point of a turnkey renovation — one contractor accountable for the full project. Gerry coordinates the first and second-fix plumbing, the electrical work for your extract fan and RCD-protected circuits, the waterproofing, tiling and fit-out, all in the correct sequence. You have a single point of contact and one written quote, rather than juggling five trades and hoping they turn up in the right order." },
        },
        {
          "@type": "Question",
          "name": "What does a full bathroom renovation include?",
          "acceptedAnswer": { "@type": "Answer", "text": "It covers strip-out and skip disposal of the old suite and tiles, first-fix plumbing and electrics, any structural or substrate work such as floor stiffening and backer board, plastering and levelling, waterproofing the wet zones, tiling, second-fix, sanitaryware, shower screen and brassware, then grouting, sealing and a full snag. In short, everything from the empty shell to a finished room you can use — handled by one contractor." },
        },
        {
          "@type": "Question",
          "name": "How much does a bathroom renovation cost in Dublin?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cost is shaped by factors, not a single figure, which is why we never post a fixed guaranteed price online. Keeping the existing layout keeps it down; moving the toilet or soil stack, discovering damp or rot on strip-out, a wet-room build-up, or large-format and natural-stone tiling push it up. We give a clear written quote after seeing the room. See our cost guide for what shapes a bathroom renovation quote in Dublin." },
        },
        {
          "@type": "Question",
          "name": "What if you find damp or damage once the old bathroom is stripped out?",
          "acceptedAnswer": { "@type": "Answer", "text": "Dublin's older houses often hide surprises behind the tiles — damp in a cold return, perished pipework, or a rotten section of subfloor. If we find anything, we stop, show you, and put the additional work in writing with a revised figure before continuing. Nothing gets buried or quietly added to the final bill. Tiling over active damp or a soft floor only guarantees the job fails, so we would never do it." },
        },
        {
          "@type": "Question",
          "name": "Can you renovate a small ensuite as well as a main bathroom?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Ensuite renovations follow the same turnkey process — strip-out, coordinated first and second fix, waterproofing, tiling and fit-out — just in a tighter space where careful setting-out and layout matter even more. Small rooms are less forgiving of poor planning, so signing off the tile layout and fixture positions before we start is where a compact ensuite is won. We give the same written quote and single point of contact." },
        },
        {
          "@type": "Question",
          "name": "Do you handle the tiling yourselves or subcontract it?",
          "acceptedAnswer": { "@type": "Answer", "text": "Tiling is Gerry's own trade — fifteen years of it — so the craft at the heart of your renovation is done by the person running the job, not handed to an unknown sub. That means the substrate prep, waterproofing and setting-out are all controlled by one accountable pair of hands. If your project needs specialist detail, you can see the full range across all our tiling services, all delivered to the same standard." },
        },
      ],
    },
  ],
};

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
    image: images.bathroomPage.services[0].src,
    alt: images.bathroomPage.services[0].alt,
    title: "Full Bathroom Renovations",
    description:
      "Complete bathroom renovation from start to finish, handled by one reliable team. We manage the full project so you don't have to coordinate multiple trades.",
    bullets: [
      "Complete bathroom transformation",
      "Plumbing & fitting",
      "Custom tiling & finishes",
      "Full project management",
    ],
    imageLeft: true,
  },
  {
    image: images.bathroomPage.services[1].src,
    alt: images.bathroomPage.services[1].alt,
    title: "Bathroom Layout & Upgrades",
    description: (
      <>
        Smarter bathroom layouts that improve space, flow, and usability. Modernise fixtures and upgrade finishes without committing to a full gut renovation. We also specialise in{" "}
        <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room installations</Link>
        {" "}and{" "}
        <Link href="/services/accessible-bathroom-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">accessible bathroom conversions</Link>.
      </>
    ),
    bullets: [
      "Space optimisation & layout planning",
      "Modern fixture upgrades",
      "Wet room conversions",
      "Accessible bathroom adaptations",
    ],
    imageLeft: false,
  },
  {
    image: images.bathroomPage.services[2].src,
    alt: images.bathroomPage.services[2].alt,
    title: "Tiling & Finishing",
    description: (
      <>
        Clean, precise tiling and finishes that elevate the final result. Large-format rectified tiles, herringbone patterns, wet rooms, and feature walls with crisp grout lines every time. For standalone work without a full renovation, see our{" "}
        <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
          tiling services
        </Link>
        .
      </>
    ),
    bullets: [
      "Floor & wall tiling",
      "Wet rooms & shower enclosures",
      "Feature walls & niche tiling",
      "Premium high-quality finishes",
    ],
    imageLeft: true,
  },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "How long does a full bathroom renovation take in Dublin?", a: "A standard full bathroom typically runs seven to ten working days from strip-out to snag, and a more complex job — moving the layout, a wet-room build-up, or hidden damage found on strip-out — usually ten to fourteen. The honest figure depends on your room, and drying and curing times for levelling and tanking cannot be rushed without risking the finish. We give you a realistic programme with the written quote, not an optimistic promise." },
  { q: "Do I need planning permission to renovate my bathroom?", a: "For a standard like-for-like renovation that does not extend the house or change how the space is used, the work is generally classed as exempted development, so no planning permission is required. Renovating within an existing bathroom, even with a new layout inside the same room, normally falls under this. Because every property differs, we confirm your specific situation rather than assume — and we will always tell you if something needs checking." },
  { q: "Will you manage the plumber and electrician, or do I arrange them?", a: "We manage everything. That is the whole point of a turnkey renovation — one contractor accountable for the full project. Gerry coordinates the first and second-fix plumbing, the electrical work for your extract fan and RCD-protected circuits, the waterproofing, tiling and fit-out, all in the correct sequence. You have a single point of contact and one written quote, rather than juggling five trades and hoping they turn up in the right order." },
  { q: "What does a full bathroom renovation include?", a: "It covers strip-out and skip disposal of the old suite and tiles, first-fix plumbing and electrics, any structural or substrate work such as floor stiffening and backer board, plastering and levelling, waterproofing the wet zones, tiling, second-fix, sanitaryware, shower screen and brassware, then grouting, sealing and a full snag. In short, everything from the empty shell to a finished room you can use — handled by one contractor." },
  {
    q: "How much does a bathroom renovation cost in Dublin?",
    a: (
      <>
        Cost is shaped by factors, not a single figure, which is why we never post a fixed guaranteed price online. Keeping the existing layout keeps it down; moving the toilet or soil stack, discovering damp or rot on strip-out, a wet-room build-up, or large-format and natural-stone tiling push it up. We give a clear written quote after seeing the room. For what drives the price, see{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
          what shapes a bathroom renovation quote in Dublin
        </Link>
        .
      </>
    ),
  },
  { q: "What if you find damp or damage once the old bathroom is stripped out?", a: "Dublin's older houses often hide surprises behind the tiles — damp in a cold return, perished pipework, or a rotten section of subfloor. If we find anything, we stop, show you, and put the additional work in writing with a revised figure before continuing. Nothing gets buried or quietly added to the final bill. Tiling over active damp or a soft floor only guarantees the job fails, so we would never do it." },
  { q: "Can you renovate a small ensuite as well as a main bathroom?", a: "Yes. Ensuite renovations follow the same turnkey process — strip-out, coordinated first and second fix, waterproofing, tiling and fit-out — just in a tighter space where careful setting-out and layout matter even more. Small rooms are less forgiving of poor planning, so signing off the tile layout and fixture positions before we start is where a compact ensuite is won. We give the same written quote and single point of contact." },
  {
    q: "Do you handle the tiling yourselves or subcontract it?",
    a: (
      <>
        Tiling is Gerry's own trade — fifteen years of it — so the craft at the heart of your renovation is done by the person running the job, not handed to an unknown sub. That means the substrate prep, waterproofing and setting-out are all controlled by one accountable pair of hands. If your project needs specialist detail, you can see the full range across{" "}
        <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
          all our tiling services
        </Link>
        , all delivered to the same standard.
      </>
    ),
  },
];

const processSteps = [
  { icon: <FileText className="w-10 h-10" />, title: "Survey & Written Quote", text: "Gerry visits, measures the room, talks through layout and finish, and sends an honest itemised written quote — never a fixed online price." },
  { icon: <Trash2 className="w-10 h-10" />, title: "Strip-Out & First Fix", text: "We remove the old suite and tiles, take the waste away, flag any hidden damp or damage in writing, then run and pressure-test the plumbing and electrics." },
  { icon: <Layers className="w-10 h-10" />, title: "Prep, Waterproof & Tile", text: "Floors and walls are levelled, stiffened and boarded, wet zones waterproofed and cured, then tiles are set out and fixed so no sliver cuts land at eye level." },
  { icon: <ShieldCheck className="w-10 h-10" />, title: "Fit-Out & Snag", text: "We connect the suite, screen and brassware, grout and seal every junction, then snag and clean down so the finished room is ready to use." },
];

const renovationStages = [
  { icon: <Trash2 className="w-6 h-6" />, label: "Full Strip-Out", desc: "Old suite out, waste gone" },
  { icon: <Users className="w-6 h-6" />, label: "Trades Coordinated", desc: "Plumbing and electrics managed" },
  { icon: <Layers className="w-6 h-6" />, label: "Walls & Floors Prepped", desc: "Levelled, boarded, waterproofed" },
  { icon: <CheckCircle2 className="w-6 h-6" />, label: "Expert Tiling", desc: "Set out, fixed, grouted right" },
  { icon: <Bath className="w-6 h-6" />, label: "Full Fit-Out", desc: "Suite, screen, brassware installed" },
  { icon: <ShieldCheck className="w-6 h-6" />, label: "Snagged & Sealed", desc: "Finished, checked, cleaned down" },
];

const PAGE_TITLE = "Bathroom Renovations Dublin | One Contractor, Start to Finish";
const PAGE_DESCRIPTION =
  "Full bathroom renovations in Dublin managed by one contractor start to finish. Strip-out, plumbing, tiling and fit-out. On time, on budget, fully insured.";
const PAGE_PATH = "/services/bathroom-renovations";

export default function BathroomRenovationsPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("bathroom-renovations", bathroomSchema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          {/* Centered text content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Turnkey Bathroom Renovations · Dublin
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Your Whole Bathroom, One Contractor
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              From strip-out to the final seal, Gerry runs the entire project so you are not left chasing plumbers, sparks and tilers yourself. Fifteen years in Dublin bathrooms, fully insured, and finished on time and on budget with an honest written quote before we lift a tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
            <div className="flex justify-center mb-14 lg:mb-16">
              <HeroReviewBadge />
            </div>
          </div>
          {/* Wide image below */}
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src={images.bathroomPage.hero.src}
                alt={images.bathroomPage.hero.alt}
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

      {/* Turnkey intro prose */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            One contractor for the whole bathroom, not five numbers to chase
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A full bathroom touches nearly every trade — plumber, electrician, plasterer, waterproofer and tiler, plus the strip-out and skip. Manage it yourself and you become the unpaid project manager. Gerry runs the whole job as your single point of contact, in the right order, so no stage undoes the one before it.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-8">
            {[
              "One contractor accountable for the entire project, start to finish",
              "A written, itemised quote before work begins — never a fixed online guess",
              "Trades booked and sequenced so no stage undoes the one before it",
              "Layout and tile setting-out signed off by you before anything is fixed",
              "Fully insured, Irish owned and operated, 15 years in Dublin bathrooms",
              "The room left clean and tidy at the end of every working day",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Renovation stages */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Everything a Full Renovation Covers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every stage handled and sequenced by one team, from the empty shell to a finished room you can use.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {renovationStages.map((stage, i) => (
              <div key={i} className="bg-card rounded-2xl border shadow-sm p-6 flex flex-col gap-3">
                <div className="text-primary">{stage.icon}</div>
                <div>
                  <p className="font-semibold text-foreground">{stage.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="py-[60px] lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Real Bathroom Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how outdated bathrooms are turned into clean, finished spaces with careful planning, tidy work, and proper attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {images.bathroomPage.transformations.map((t, i) => (
              <BeforeAfterSlider
                key={i}
                beforeSrc={t.before.src}
                beforeAlt={t.before.alt}
                afterSrc={t.after.src}
                afterAlt={t.after.alt}
                aspectClassName="aspect-[3/4]"
                className="shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Your Bathroom Renovation in 4 Simple Steps</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              One contractor, one accountable sequence — from the first survey to a snagged, sealed and finished bathroom. On time, on budget, no surprises.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-[1.5px] bg-primary/30 z-0" />
            {processSteps.map((item, i) => (
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

      {/* Types of Bathroom Renovations */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">What We Renovate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From full family bathrooms to ensuites, wet rooms, and accessible bathroom conversions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ...images.bathroomPage.whatWeRenovate[0], label: "Full Bathroom", desc: "Complete strip out and refit", href: null },
              { ...images.bathroomPage.whatWeRenovate[1], label: "Ensuite", desc: "Smaller scale, same quality", href: null },
              { ...images.bathroomPage.whatWeRenovate[2], label: "Wet Room", desc: null, href: "/services/wet-room-installation-dublin" },
              { ...images.bathroomPage.whatWeRenovate[3], label: "Accessible", desc: null, href: "/services/accessible-bathroom-dublin" },
            ].map((room, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={room.src} alt={room.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1.5 px-4 pb-4">
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">{room.label}</p>
                    {room.desc && <p className="text-white/70 text-xs mt-0.5">{room.desc}</p>}
                  </div>
                  {room.href && (
                    <Link href={room.href} className="inline-flex items-center gap-1 bg-white text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors">
                      Learn More <ChevronRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a full renovation includes */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            What a full bathroom renovation actually includes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            "Renovation" gets used loosely, so here is exactly what a full refit covers — everything from the empty shell to a finished room, handled by one contractor. The deep tiling detail lives across{" "}
            <Link href="/services/tiling-services" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">all our tiling services</Link>, and{" "}
            <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">what shapes your quote</Link>{" "}is set out on the cost guide.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-8">
            {[
              "Strip-out and skip disposal included, not billed as an extra later",
              "Hidden damage flagged in writing before we continue, never buried",
              "First and second fix plumbing and electrics coordinated for you",
              "Substrate put right — levelling, stiffening, backer board — before tiling",
              "Sanitaryware, screen and brassware supplied and fitted, or your own installed",
              "A snag and clean-down so the room is finished, not just \"nearly there\"",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem to solution */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Tired of Bathroom Renovations Running Over Time and Budget?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            <div className="space-y-10">
              <h3 className="text-xl font-medium text-muted-foreground uppercase tracking-widest mb-8">The Problem</h3>
              <ul className="grid gap-4">
                {[
                  "Jobs that drag on for weeks longer than promised",
                  "Prices going up halfway through the job",
                  "Your home left in a mess every day",
                  "Not knowing what's happening or when it'll be finished",
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
                  "Clear timelines, we stick to them",
                  "Honest upfront pricing, no surprises",
                  "Spotless work, we clean up daily",
                  "Regular updates, you're always in the loop",
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

      {/* Deep dive: sequencing */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Why the order matters
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Most bathroom disasters aren't bad tiling — they're a sequencing failure, where two stages happen in the wrong order and one wrecks the other. Tile before the plumbing is pressure-tested and a slow leak means smashing new tile to reach the pipe. One contractor keeps the order right:
          </p>
          <ol className="space-y-3">
            {[
              "Survey, design and layout signed off with you",
              "Strip-out and disposal",
              "First-fix plumbing and electrics, pressure-tested",
              "Substrate put right — stiffening, backer board, levelling",
              "Waterproofing, left to cure before anything goes on top",
              "Tiling, set out from the most visible line",
              "Second fix, sanitaryware and fit-out",
              "Grout, silicone, seal and a full snag",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                <span className="text-foreground leading-[1.55] pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            A standard like-for-like bathroom is generally exempted development — no planning permission needed, though we always confirm your specifics. Insist on the boring stuff the cheapest quote skips: pressure testing, tanking that's allowed to cure, floor stiffening, priming and pattressing.
          </p>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Bathroom Renovation Services in Dublin
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted bathroom renovation services for homes in and around Dublin, delivered with the same care and attention on every project.
            </p>
          </div>
          <div className="space-y-24">
            {services.map((service, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${!service.imageLeft ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
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
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Recent Bathroom Renovations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sample of recent bathroom renovation and tiling projects completed for Dublin homeowners.
            </p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.bathroomPage.gallery.map(({ src, alt }) => (
              <div
                key={src}
                className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group"
              >
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.bathroomPage.gallery.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        featured="mooney"
        trustLine="Rated 5.0 on Google by Dublin homeowners we have renovated for"
      />

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Bathroom Renovation FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions from Dublin homeowners about full bathroom renovations.</p>
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

      {/* Areas served */}
      <section className="py-10 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Based in Dublin.</span> We renovate bathrooms right across the city and county — from the period terraces of Rathmines, Ranelagh and Phibsborough to the semis of Raheny, Crumlin and Dundrum, and out to Swords, Malahide and Lucan.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to renovate your bathroom the easy way?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            One contractor, one written quote, one accountable finish — on time, on budget, and fully insured. Call Gerry on +353 87 720 9850 for a free survey and an honest written quote for your Dublin bathroom renovation.
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

      </BelowFold>
    </main>
  );
}
