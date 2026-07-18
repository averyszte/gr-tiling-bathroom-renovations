import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Search, Wrench, LayoutGrid, Sparkles } from "lucide-react";
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
import { BelowFold } from "@/components/BelowFold";
import { ReviewsSection } from "@/components/ReviewsSection";

const PAGE_TITLE = "Tile Repairs Dublin | Regrout, Silicone & Grout Fix";
const PAGE_DESCRIPTION = "Tile repairs in Dublin by Gerry, 15 years in the trade, fully insured. Regrouting, silicone renewal, cracked & loose tiles, mouldy grout removal. Free written quote.";
const PAGE_PATH = "/services/tile-repairs-dublin";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Tile Repairs Dublin",
      "description": "Tile repairs across Dublin including cracked tiles, loose tiles, broken grout, and failed silicone.",
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
          "name": "Can you replace grout without removing the tiles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — that's the whole point of a regrout. As long as the tiles are sound and well-bonded, we rake the old grout out of the joints to a proper depth and fill them with fresh grout, leaving the tiles in place. It restores the look and seals the surface again at a fraction of a retile. We only need to lift tiles when they're cracked, loose or drummy, and even then it's usually just the affected ones."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I need a regrout or a full retile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We tap the tiles and listen. A solid, dull sound means the tile is well-bonded and a regrout will do. A hollow, drummy sound means the bed has failed and new grout won't hold — that needs tiles lifted or a full re-tile. Cracked, lifting or moving tiles, or failed waterproofing, all point to a bigger job. We give you the honest verdict in writing so you're not paying for a repair that won't last."
          }
        },
        {
          "@type": "Question",
          "name": "How often should grout be replaced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cement grout typically needs renewing around every eight to ten years, sooner if it's cracked, crumbling or has gone permanently dark. It's porous, so it absorbs soap, limescale and mould over time. Regular resealing slows that down, but grout is a wearing surface and eventually needs raking out and replacing. If yours is cracking well before that, it usually points to movement underneath rather than age, which we'd check on the visit."
          }
        },
        {
          "@type": "Question",
          "name": "Why does mould keep coming back on my silicone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because fresh silicone laid over old never bonds properly and traps mould underneath, so it grows straight back through. The only lasting fix is to cut the old silicone out completely, treat the junction and lay a new bead of sanitary anti-mould silicone. If it still returns after a proper renewal, the cause is usually poor ventilation or moisture getting behind the tiles — worth investigating rather than replacing the sealant on repeat."
          }
        },
        {
          "@type": "Question",
          "name": "What does tile and grout repair cost in Dublin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the size of the area, whether it's a regrout, a silicone renewal, a few loose tiles or a combination, and how the existing joints come out. Small silicone and mould jobs are low-ticket; a full shower regrout is more. We never quote a fixed price online — we give an honest written quote after seeing the job. Our cost guide explains the factors that move the price up or down."
          }
        },
        {
          "@type": "Question",
          "name": "My tiles look fine but water is getting through — can you just regrout it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sometimes, but not always. If the grout has failed and water is tracking through the joints, a regrout and silicone renewal seals it. But if the waterproofing behind a shower has failed, the leak is behind the tile where grout can't reach, and regrouting only masks it. We'll check which it is. A true waterproofing failure needs wet room re-waterproofing done properly, and we'd tell you that rather than sell you a patch."
          }
        },
        {
          "@type": "Question",
          "name": "Do you reseal natural stone and porous grout?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Natural stone — marble, limestone, travertine — and cement grout are both porous and stain or etch if left unsealed. Resealing periodically is normal maintenance, not a sign anything's wrong, and it keeps the surface shedding water and resisting soap and limescale. We can reseal as a standalone job or as the finishing step after a regrout, and we'll tell you honestly how often your particular surface will need it."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tiling Services", "item": `${SITE_URL}/services/tiling-services` },
        { "@type": "ListItem", "position": 3, "name": "Tile Repairs Dublin", "item": `${SITE_URL}${PAGE_PATH}` }
      ]
    }
  ]
};

const repairTypes = [
  { ...gridImages.bathrooms,      label: "Bathroom Tiles",   desc: null,                        href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.kitchens,       label: "Kitchen Tiles",    desc: null,                        href: "/services/kitchen-tiling-dublin" },
  { ...gridImages.hallwaysFloors, label: "Floor Tiles",      desc: null,                        href: "/services/floor-wall-tiling-dublin" },
  { ...gridImages.showerAreas,    label: "Shower Areas",     desc: null,                        href: "/services/bathroom-tiling-dublin" },
  { ...gridImages.groutSilicone,  label: "Grout & Silicone", desc: "Regrouting and resealing",  href: null },
  { ...gridImages.bathroomWalls,  label: "Wall Tiles",       desc: null,                        href: "/services/floor-wall-tiling-dublin" },
];

const process = [
  { icon: <Search className="w-10 h-10" />, title: "Tap Test & Verdict", text: "We tap the tiles to check what's sound and give you an honest regrout-or-retile answer before any work starts." },
  { icon: <Wrench className="w-10 h-10" />, title: "Rake & Cut Out", text: "Old grout is raked out to a proper depth and every scrap of perished silicone is cut away, not skimmed over." },
  { icon: <LayoutGrid className="w-10 h-10" />, title: "Treat & Renew", text: "Mould is treated at the source, then we regrout the joints and lay fresh anti-mould sanitary silicone at the movement lines." },
  { icon: <Sparkles className="w-10 h-10" />, title: "Seal & Leave Clean", text: "We reseal porous grout and stone, wipe everything down and leave the bathroom as tidy as we found it." },
];


type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  { q: "Can you replace grout without removing the tiles?", a: "Yes — that's the whole point of a regrout. As long as the tiles are sound and well-bonded, we rake the old grout out of the joints to a proper depth and fill them with fresh grout, leaving the tiles in place. It restores the look and seals the surface again at a fraction of a retile. We only need to lift tiles when they're cracked, loose or drummy, and even then it's usually just the affected ones." },
  { q: "How do I know if I need a regrout or a full retile?", a: "We tap the tiles and listen. A solid, dull sound means the tile is well-bonded and a regrout will do. A hollow, drummy sound means the bed has failed and new grout won't hold — that needs tiles lifted or a full re-tile. Cracked, lifting or moving tiles, or failed waterproofing, all point to a bigger job. We give you the honest verdict in writing so you're not paying for a repair that won't last." },
  { q: "How often should grout be replaced?", a: "Cement grout typically needs renewing around every eight to ten years, sooner if it's cracked, crumbling or has gone permanently dark. It's porous, so it absorbs soap, limescale and mould over time. Regular resealing slows that down, but grout is a wearing surface and eventually needs raking out and replacing. If yours is cracking well before that, it usually points to movement underneath rather than age, which we'd check on the visit." },
  { q: "Why does mould keep coming back on my silicone?", a: "Because fresh silicone laid over old never bonds properly and traps mould underneath, so it grows straight back through. The only lasting fix is to cut the old silicone out completely, treat the junction and lay a new bead of sanitary anti-mould silicone. If it still returns after a proper renewal, the cause is usually poor ventilation or moisture getting behind the tiles — worth investigating rather than replacing the sealant on repeat." },
  {
    q: "What does tile and grout repair cost in Dublin?",
    a: (
      <>
        It depends on the size of the area, whether it's a regrout, a silicone renewal, a few loose tiles or a combination, and how the existing joints come out. Small silicone and mould jobs are low-ticket; a full shower regrout is more. We never quote a fixed price online — we give an honest written quote after seeing the job. Our{" "}
        <Link href="/cost-guide" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">regrout &amp; repair costs</Link>{" "}guide explains the factors that move the price.
      </>
    ),
  },
  {
    q: "My tiles look fine but water is getting through — can you just regrout it?",
    a: (
      <>
        Sometimes, but not always. If the grout has failed and water is tracking through the joints, a regrout and silicone renewal seals it. But if the waterproofing behind a shower has failed, the leak is behind the tile where grout can't reach, and regrouting only masks it. We'll check which it is. A true waterproofing failure needs{" "}
        <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room re-waterproofing</Link>{" "}done properly, and we'd tell you that rather than sell you a patch.
      </>
    ),
  },
  { q: "Do you reseal natural stone and porous grout?", a: "Yes. Natural stone — marble, limestone, travertine — and cement grout are both porous and stain or etch if left unsealed. Resealing periodically is normal maintenance, not a sign anything's wrong, and it keeps the surface shedding water and resisting soap and limescale. We can reseal as a standalone job or as the finishing step after a regrout, and we'll tell you honestly how often your particular surface will need it." },
];

export default function TileRepairsPage({ openQuote }: { openQuote: () => void }) {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("tile-repairs", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/30 pt-10 pb-[60px] lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Tile &amp; Grout Repairs · Dublin</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
              Refresh It Without Renovating
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Cracked tiles, mouldy grout and failing silicone don't always mean a full retile. We rake out, regrout, reseal and renew across Dublin — a fast, insured, honestly-priced fix that stops water getting where it shouldn't.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent" asChild>
                <a href="tel:+353877209850">Call +353 87 720 9850</a>
              </Button>
            </div>
            <div className="flex justify-center mb-14 lg:mb-16"><HeroReviewBadge /></div>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img src={images.tileRepairsPage.hero.src} alt={images.tileRepairsPage.hero.alt} fetchPriority="high" sizes="(min-width: 1200px) 1152px, 100vw" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[28rem] max-w-full h-56 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <BelowFold>
      <TrustStrip />

      {/* Intro: affordable fix */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            The affordable fix before the expensive one
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Most Dublin bathrooms don't need ripping out — they need the joints sorted. Grout is porous and silicone perishes, so the lines go dark, crack and let water behind the tile. Caught early it's a straightforward fix — and the honest question we answer every visit is regrout or retile.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Grout raked out to a sound depth, not just skimmed",
              "Sanitary-grade anti-mould silicone at every movement junction",
              "Old silicone fully removed — never a fresh bead over perished old",
              "Mould treated at the source, not painted over",
              "Porous grout and natural stone resealed to slow re-staining",
              "An honest verdict on whether repair or retile is the sensible spend",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">What We Fix</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tile repairs across all types of rooms and surfaces in Dublin homes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {repairTypes.map((item, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1.5 px-4 pb-4">
                  <div>
                    <span className="text-white font-semibold text-sm leading-tight">{item.label}</span>
                    {item.desc && <p className="text-white/75 text-xs mt-0.5">{item.desc}</p>}
                  </div>
                  {item.href && (
                    <Link href={item.href} className="inline-flex items-center gap-1 bg-white text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors">
                      Learn More <ChevronRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Repair vs Retile */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Regrout or retile? The tap test decides</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>The most useful thing on a repair call is the tap test. A solid, dull note means the tile is well-bonded — if only the grout and silicone have failed, a regrout restores the surface for a fraction of a retile. A drummy note means the bed has failed, and no new grout fixes that.</p>
                <p>
                  Where the waterproofing behind a shower has failed, the fix is{" "}
                  <Link href="/services/wet-room-installation-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">wet room re-waterproofing</Link>, not a regrout; a floor on a failed substrate wants proper{" "}
                  <Link href="/services/floor-wall-tiling-dublin" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">floor re-tiling</Link>. Borderline? We give you both options in writing.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={images.tileRepairsPage.repairRetileInline.src} alt={images.tileRepairsPage.repairRetileInline.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">How We Work</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">We find the cause, fix it properly, and leave a clean finish.</p>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-0">
            <div className="hidden md:block absolute top-[3rem] left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-[1.5px] bg-primary/30 z-0" />
            {process.map((item, i) => (
              <div key={i} className="group relative z-10 flex flex-col items-center text-center flex-1 px-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/35 flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[200px] text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Button size="lg" className="text-base h-14 px-8" onClick={openQuote}>Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Grout vs silicone */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Grout, silicone and where each belongs
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            People use "grout" and "silicone" interchangeably, but they do different jobs — mixing them up is why so many DIY repairs fail. Grout is rigid and fills the joints; silicone is flexible and belongs only at movement junctions — corners, floor-to-wall, around the bath. Put rigid grout where the building moves and it cracks.
          </p>
          <p className="font-semibold text-foreground mb-3">Signs it's time to call:</p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Grout lines cracked, crumbling or missing in patches",
              "Black or pink mould in the silicone that won't scrub out",
              "Silicone lifting, shrinking or peeling away from the tile",
              "Tiles that sound hollow (drummy) when tapped, or feel loose",
              "Water appearing below a bathroom, or a musty damp smell",
              "Grout gone permanently dark despite regular cleaning",
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A sample of tiling projects completed for Dublin homeowners.</p>
          </div>
          <div className="hidden md:flex h-[620px] w-full gap-4">
            {images.tilingPage.galleryRepairs.map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden flex-1 hover:flex-[3] transition-all duration-500 ease-in-out cursor-pointer group">
                <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-4">
            {images.tilingPage.galleryRepairs.map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection
        featured="brooks"
        trustLine="Fast, tidy, honestly priced — rated 5.0 on Google"
      />

      {/* Related Services */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Tiling Services", href: "/services/tiling-services" },
              { label: "Bathroom Tiling", href: "/services/bathroom-tiling-dublin" },
              { label: "Kitchen Tiling", href: "/services/kitchen-tiling-dublin" },
              { label: "Floor & Wall Tiling", href: "/services/floor-wall-tiling-dublin" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center justify-between px-5 py-4 bg-background border rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                {link.label} <ChevronRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[60px] md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Tile Repair FAQs</h2>
            <p className="text-lg text-muted-foreground">Common questions about tile repairs in Dublin.</p>
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
            <span className="font-medium text-foreground">Based in Dublin.</span> Tile and grout repairs across the city and county — Phibsborough, Drumcondra and Glasnevin, Crumlin, Kimmage and Walkinstown, Dún Laoghaire and Blackrock.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Get it fixed before it spreads</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">Mouldy grout and failing silicone only get worse — and dearer — the longer they're left. Call Gerry for an honest written quote. Fully insured, 15 years in the trade, and your bathroom left as clean as we found it.</p>
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
