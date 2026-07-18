import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, XCircle, FileText, Eye, Layers, ShieldCheck, Bath, Utensils, LayoutGrid, Package, Building2, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSeo, applyJsonLd, SITE_URL, DUBLIN_AREAS } from "@/lib/seo";
import { HeroReviewBadge } from "@/components/ui/hero-review-badge";
import { TrustStrip } from "@/components/TrustStrip";
import { images, gridImages } from "@/data/images";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

export const tilingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Tiling Services Dublin",
      "description": "Professional tiling services in Dublin by GR Tiling & Bathroom Renovations, including bathroom tiling, wall tiling, floor tiling, and tile finishing.",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "GR Tiling & Bathroom Renovations", "telephone": "+353877209850", "priceRange": "€€", "image": `${SITE_URL}/opengraph.jpg` },
      "areaServed": DUBLIN_AREAS,
      "serviceType": "Tiling Services",
      "url": `${SITE_URL}/services/tiling-services`,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tiling Services", "item": `${SITE_URL}/services/tiling-services` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas of Dublin do you cover?",
          "acceptedAnswer": { "@type": "Answer", "text": "We cover Dublin city and county — north and south of the Liffey, the coastal villages and the surrounding suburbs. Over 15 years we have tiled in period terraces around Rathmines and Drumcondra, semis in Raheny, Crumlin and Dundrum, and newer apartments across the city. If you are unsure whether we reach you, ring +353 87 720 9850 and ask; we will give you a straight answer." },
        },
        {
          "@type": "Question",
          "name": "Do you supply the tiles or do I buy them?",
          "acceptedAnswer": { "@type": "Answer", "text": "Both options work. With supply-and-fit we help you choose the right tile for the room, source it and lay it, with one point of responsibility for material and workmanship. With fit-only you buy the tiles you like and we fit them — we will just tell you the coverage plus wastage first so you order enough. The fitting standard is identical either way." },
        },
        {
          "@type": "Question",
          "name": "How much does tiling cost in Dublin?",
          "acceptedAnswer": { "@type": "Answer", "text": "It depends on the area, the tile, the prep and the pattern — large-format and natural stone take longer, and herringbone or mosaic adds labour. We do not post fixed prices online because no honest tiler can quote unseen, but we give a clear written quote after a visit. See our cost guide for what shapes the price." },
        },
        {
          "@type": "Question",
          "name": "Do you do both residential and commercial tiling?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most of our work is for Dublin homeowners — bathrooms, kitchens, hallways and full houses — but we also tile commercial spaces such as shops, cafes, offices and rental units. Commercial jobs often need harder-wearing porcelain, higher slip ratings underfoot and work scheduled around opening hours or a handover date. Tell us the setting and we will spec and plan the job accordingly." },
        },
        {
          "@type": "Question",
          "name": "Can you just fix or regrout my existing tiles?",
          "acceptedAnswer": { "@type": "Answer", "text": "Often, yes — and it can save you a lot. If the tiles are sound and well bonded but the grout is stained, cracked or mouldy, raking out and regrouting plus renewing the silicone brings it back for a fraction of a re-tile. We only recommend replacing when tiles are drummy, lifting or cracked, or the waterproofing has failed. See our tile and grout repairs page for detail." },
        },
        {
          "@type": "Question",
          "name": "My bathroom floor is a timber upstairs floor — can it be tiled?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, but it has to be done right. Suspended timber flexes, and flex is what cracks rigid tile and grout. We stiffen the deck where needed, add a decoupling membrane so board movement is not transmitted into the tile, tank wet zones, and use a flexible S1 or S2 adhesive. No adhesive rescues a genuinely bouncy floor on its own — the prep does. Our floor and wall tiling page covers the technique." },
        },
        {
          "@type": "Question",
          "name": "Are you insured, and how experienced are you?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes — GR Tiling is fully insured, Irish owned and operated, and Gerry has 15 years in the trade. We hold a 5.0 Google rating and are happy to provide references or point you to recent work. We would always encourage you to check insurance and experience with any tiler you are considering; it is the simplest way to avoid a job that fails and costs more to put right later." },
        },
        {
          "@type": "Question",
          "name": "What's the difference between the tiling pages on your site?",
          "acceptedAnswer": { "@type": "Answer", "text": "This page is the overview — it routes you to the right specialist. For showers and wet zones see bathroom tiling; for splashbacks and kitchen floors see kitchen tiling; for technique, substrate prep and large-format work see floor and wall tiling; and for regrouting, resealing and cracked tiles see tile and grout repairs." },
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
    image: images.tilingPage.services[0].src,
    alt: images.tilingPage.services[0].alt,
    title: "Bathroom Tiling",
    description: (
      <>
        Clean bathroom tiling for walls, floors, showers, and wet areas, finished with care and attention to detail. See our dedicated{" "}
        <Link href="/services/bathroom-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom tiling page</Link>
        {" "}for more detail.
      </>
    ),
    bullets: [
      "Shower tiling",
      "Floor tiling",
      "Wall tiling",
      "Wet area tiling",
    ],
    imageLeft: true,
  },
  {
    image: images.tilingPage.services[1].src,
    alt: images.tilingPage.services[1].alt,
    title: "Floor & Wall Tiling",
    description: (
      <>
        Reliable wall and floor tiling for bathrooms, kitchens, hallways, and other areas of the home. See our dedicated{" "}
        <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">floor and wall tiling</Link>
        {" "}and{" "}
        <Link href="/services/kitchen-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">kitchen tiling</Link>
        {" "}pages, or our{" "}
        <Link href="/services/bathroom-renovations" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom renovations</Link>
        {" "}service if your project is part of a wider refit.
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
    image: images.tilingPage.services[2].src,
    alt: images.tilingPage.services[2].alt,
    title: "Tile Repairs & Finishing",
    description: (
      <>
        Careful tile repairs, replacements, grout work, and finishing touches to make the space look clean again. See our{" "}
        <Link href="/services/tile-repairs-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tile repairs page</Link>
        {" "}for more detail.
      </>
    ),
    bullets: [
      "Tile replacement",
      "Grout touch-ups",
      "Edge finishing",
      "Small repair jobs",
    ],
    imageLeft: true,
  },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "What areas of Dublin do you cover?", a: "We cover Dublin city and county — north and south of the Liffey, the coastal villages and the surrounding suburbs. Over 15 years we have tiled in period terraces around Rathmines and Drumcondra, semis in Raheny, Crumlin and Dundrum, and newer apartments across the city. If you are unsure whether we reach you, ring +353 87 720 9850 and ask; we will give you a straight answer." },
  {
    q: "Do you supply the tiles or do I buy them?",
    a: "Both options work. With supply-and-fit we help you choose the right tile for the room, source it and lay it, with one point of responsibility for material and workmanship. With fit-only you buy the tiles you like and we fit them — we will just tell you the coverage plus wastage first so you order enough. The fitting standard is identical either way.",
  },
  {
    q: "How much does tiling cost in Dublin?",
    a: (
      <>
        It depends on the area, the tile, the prep and the pattern — large-format and natural stone take longer, and herringbone or mosaic adds labour. We do not post fixed prices online because no honest tiler can quote unseen, but we give a clear written quote after a visit. See our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">cost guide</Link>{" "}for what shapes the price.
      </>
    ),
  },
  { q: "Do you do both residential and commercial tiling?", a: "Yes. Most of our work is for Dublin homeowners — bathrooms, kitchens, hallways and full houses — but we also tile commercial spaces such as shops, cafes, offices and rental units. Commercial jobs often need harder-wearing porcelain, higher slip ratings underfoot and work scheduled around opening hours or a handover date. Tell us the setting and we will spec and plan the job accordingly." },
  {
    q: "Can you just fix or regrout my existing tiles?",
    a: (
      <>
        Often, yes — and it can save you a lot. If the tiles are sound and well bonded but the grout is stained, cracked or mouldy, raking out and regrouting plus renewing the silicone brings it back for a fraction of a re-tile. We only recommend replacing when tiles are drummy, lifting or cracked, or the waterproofing has failed. See our{" "}
        <Link href="/services/tile-repairs-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tile &amp; grout repairs</Link>{" "}page for detail.
      </>
    ),
  },
  {
    q: "My bathroom floor is a timber upstairs floor — can it be tiled?",
    a: (
      <>
        Yes, but it has to be done right. Suspended timber flexes, and flex is what cracks rigid tile and grout. We stiffen the deck where needed, add a decoupling membrane so board movement is not transmitted into the tile, tank wet zones, and use a flexible S1 or S2 adhesive. No adhesive rescues a genuinely bouncy floor on its own — the prep does. Our{" "}
        <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">floor &amp; wall tiling</Link>{" "}page covers the technique.
      </>
    ),
  },
  { q: "Are you insured, and how experienced are you?", a: "Yes — GR Tiling is fully insured, Irish owned and operated, and Gerry has 15 years in the trade. We hold a 5.0 Google rating and are happy to provide references or point you to recent work. We would always encourage you to check insurance and experience with any tiler you are considering; it is the simplest way to avoid a job that fails and costs more to put right later." },
  {
    q: "What's the difference between the tiling pages on your site?",
    a: (
      <>
        This page is the overview — it routes you to the right specialist. For showers and wet zones see{" "}
        <Link href="/services/bathroom-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">bathroom tiling</Link>; for{" "}
        <Link href="/services/kitchen-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">kitchen tiling &amp; splashbacks</Link>{" "}see the kitchen page; for technique, prep and large-format see{" "}
        <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">floor &amp; wall tiling</Link>; and for regrouting and cracked tiles see{" "}
        <Link href="/services/tile-repairs-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">tile &amp; grout repairs</Link>.
      </>
    ),
  },
];

const processSteps = [
  { icon: <Eye className="w-10 h-10" />, title: "Free Site Visit", text: "We come out, look at your walls, floors and substrate, and talk through options and materials." },
  { icon: <FileText className="w-10 h-10" />, title: "Written Quote", text: "You get an honest, written quote with the scope and prep clearly set out — no surprise extras." },
  { icon: <Layers className="w-10 h-10" />, title: "Prep & Tile", text: "We prep properly — level, prime, tank and decouple as needed — then set out and tile to last." },
  { icon: <ShieldCheck className="w-10 h-10" />, title: "Grout, Seal & Snag", text: "We grout, silicone the movement joints, seal where needed, then walk the job with you before we leave." },
];

const areaCards = [
  { icon: <Bath className="w-6 h-6" />, label: "Bathroom Tiling", desc: "Walls, floors, wet zones" },
  { icon: <Utensils className="w-6 h-6" />, label: "Kitchen & Splashbacks", desc: "Splashbacks and kitchen floors" },
  { icon: <LayoutGrid className="w-6 h-6" />, label: "Floor & Wall Tiling", desc: "Large-format, patterns, all rooms" },
  { icon: <Wrench className="w-6 h-6" />, label: "Tile & Grout Repairs", desc: "Regrout, reseal, cracked tiles" },
  { icon: <Package className="w-6 h-6" />, label: "Supply & Fit", desc: "We source or you supply" },
  { icon: <Building2 className="w-6 h-6" />, label: "Residential & Commercial", desc: "Homes, shops, units, offices" },
];

const PAGE_TITLE = "Tiling Services Dublin | Fully Insured Tiler — GR Tiling";
const PAGE_DESCRIPTION =
  "Trusted tiling services in Dublin. Supply-and-fit or fit-only, residential and commercial, fully insured, 15 years' experience. Free written quote — call today.";
const PAGE_PATH = "/services/tiling-services";

export default function TilingServicesPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("tiling-services", tilingSchema);
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
              Dublin's Tiling Specialists
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Tiling Done Right, First Time
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              A fully insured Dublin tiler with 15 years on the tools — floors, walls, bathrooms, kitchens and repairs. One trusted team, honest written quotes, and a finish that lasts. Tell us what you need and we'll point you to the right service.
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
                src={images.tilingPage.hero.src}
                alt={images.tilingPage.hero.alt}
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

      {/* Intro: one tiler for every job */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            One Dublin tiler for every tiling job
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Searching "tiler near me" throws up dozens of names and little to tell them apart. Gerry has spent 15 years tiling across Dublin — period returns, 1970s semis, new-build apartments — so whatever's behind your wall, we've likely seen it. This page is the starting point: we handle the lot and point you to the right specialist.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {areaCards.map((card, i) => (
              <div key={i} className="bg-card rounded-2xl border shadow-sm p-6 flex flex-col gap-3">
                <div className="text-primary">{card.icon}</div>
                <div>
                  <p className="font-semibold text-foreground">{card.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Fully insured, 15 years on the tools, references on request",
              "Supply-and-fit or fit-only — your choice",
              "Residential and commercial work across Dublin",
              "Correct prep, adhesive and waterproofing for the substrate",
              "Clean, tidy site — dust managed, floors protected",
              "One honest written quote, on time and on budget",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="py-[60px] lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Real Tiling Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how worn or unfinished spaces are upgraded with clean, precise tiling and a sharp final finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {images.tilingPage.transformations.map((t, i) => (
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
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Your Tiling Project in 4 Simple Steps</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Clean, precise tiling done right from the start. No uneven finishes, no mess, no hassle.
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

      {/* Where We Tile */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Where We Tile</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From bathroom walls to kitchen splashbacks, we tile across all types of rooms and surfaces.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ...gridImages.bathrooms, label: "Bathrooms", href: "/services/bathroom-tiling-dublin" },
              { ...gridImages.showerAreas, label: "Shower Areas", href: "/services/bathroom-tiling-dublin" },
              { ...gridImages.kitchens, label: "Kitchens", href: "/services/kitchen-tiling-dublin" },
              { ...gridImages.hallwaysFloors, label: "Floors & Walls", href: "/services/floor-wall-tiling-dublin" },
            ].map((room, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={room.src} alt={room.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1.5 px-4 pb-4">
                  <span className="text-white font-semibold text-sm leading-tight">{room.label}</span>
                  <Link href={room.href} className="inline-flex items-center gap-1 bg-white text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors">
                    Learn More <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose a tiler */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            How to choose a tiler in Dublin
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The cheapest quote is rarely the cheapest job. Whether a tile lasts twenty years or cracks inside twelve months is almost always down to what happened <em>before</em> the first tile — stiffening a bouncy floor, levelling walls, priming a dusty substrate. Look past the price line and ask:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-12">
            {[
              "Are you fully insured, and can I see proof?",
              "How many years have you been tiling?",
              "Can you show references or recent Dublin jobs?",
              "How will you prep my floor and walls first?",
              "Do you tank wet areas, and to what standard?",
              "Is the quote written down and fixed in scope?",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl border shadow-sm p-6">
              <h3 className="font-semibold text-lg text-foreground mb-2">Supply &amp; fit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Don't want to gamble on the wrong tile? We match it to the room — slip rating, water absorption, format — source it and fit it, with one point of responsibility for material and workmanship.
              </p>
            </div>
            <div className="bg-card rounded-2xl border shadow-sm p-6">
              <h3 className="font-semibold text-lg text-foreground mb-2">Fit only</h3>
              <p className="text-muted-foreground leading-relaxed">
                Already chosen your tiles? We'll lay them properly — we just tell you the coverage plus wastage before you buy, so a mid-job re-order doesn't land a different, mismatched batch.
              </p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            Either way the fitting standard is identical and the quote is written down first. For what drives cost up or down, see our{" "}
            <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">cost guide</Link>.
          </p>
        </div>
      </section>

      {/* Problem to solution */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
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
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
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
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Recent Tiling Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent tiling jobs showing clean grout lines, sharp edges, and neat finishes across Dublin homes.
            </p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.tilingPage.gallery.map(({ src, alt }) => (
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
            {images.tilingPage.gallery.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        heading="Trusted for Tiling and Bathroom Work Across Dublin"
        featured="alan"
        trustLine="Fully insured, 15 years on the tools, rated 5.0 on Google"
      />

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
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

      {/* Areas served */}
      <section className="py-10 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Based in Dublin.</span> We tile across the city and county — Drumcondra, Glasnevin and Clontarf on the northside, Terenure, Rathgar and Rathfarnham on the south, and the suburbs from Tallaght to Blanchardstown.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Get an honest written quote for your tiling</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Fully insured, 15 years in Dublin, on time and on budget. Tell us about your floors, walls or bathroom and we'll come out, take a proper look and put it in writing. Call +353 87 720 9850.
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
