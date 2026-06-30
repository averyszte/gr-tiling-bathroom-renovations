import { useEffect } from "react";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";

const PAGE_TITLE = "Terms & Conditions | GR Tiling & Bathroom Renovations";
const PAGE_DESCRIPTION = "Terms and conditions for GR Tiling & Bathroom Renovations services in Dublin, Ireland.";
const PAGE_PATH = "/terms";
const LAST_UPDATED = new Date("2026-06-30").toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" });

const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": `${SITE_URL}${PAGE_PATH}` }
  ]
};

export default function TermsPage() {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("terms", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Terms & Conditions</h1>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Service Terms for Renovation and Tiling Work</h2>
          <p className="text-muted-foreground mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Overview</h2>
              <p>These terms and conditions apply to all services provided by GR Tiling & Bathroom Renovations, operated by Gerard Ronan, Dublin, Ireland. By requesting a quote or engaging our services, you agree to these terms.</p>
              <p>For any questions, contact us at <a href="mailto:ronangerard98@gmail.com" className="text-primary underline underline-offset-4 hover:opacity-80">ronangerard98@gmail.com</a> or <a href="tel:+353877209850" className="text-primary underline underline-offset-4 hover:opacity-80">+353 87 720 9850</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Quotes and Estimates</h2>
              <p>All quotes provided by GR Tiling & Bathroom Renovations are based on the information and access available at the time of assessment. A written quote will be provided before any work begins.</p>
              <p>Quotes are valid for 30 days from the date of issue unless otherwise stated. If site conditions differ materially from those assessed  -  such as discovery of structural issues, hidden pipework, or other unforeseen complications  -  we reserve the right to revise the quoted price. We will discuss any such changes with you before proceeding.</p>
              <p>Verbal estimates given prior to a site visit are for indicative purposes only and do not constitute a binding quote.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Tile Supply</h2>
              <p>We offer both supply and fit and labour-only services. Where tiles or materials are supplied by the client, we accept no responsibility for the suitability, quality, or quantity of those materials. We recommend ordering a minimum of 10-15% extra to allow for cuts, breakage, and future repairs.</p>
              <p>Where we supply tiles or materials on your behalf, these will be itemised clearly in your written quote.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Timelines</h2>
              <p>We provide estimated start and completion dates at the time of booking. While we make every effort to adhere to agreed timelines, delays can occasionally occur due to factors outside our control, including supplier delays, unforeseen site conditions, or weather. We will communicate any delays promptly.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Payment</h2>
              <p>Payment terms will be confirmed in your written quote. For larger projects, a deposit may be required before work commences, with the balance due on completion. Final payment is due within the agreed timeframe upon satisfactory completion of the work.</p>
              <p>We reserve the right to charge interest on overdue payments in accordance with applicable Irish law.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Your Responsibilities</h2>
              <p>To allow us to complete work efficiently and safely, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide clear and safe access to the work area at agreed times</li>
                <li>Ensure the work area is cleared of personal belongings before work begins</li>
                <li>Notify us of any known issues with existing plumbing, electrics, or structural elements</li>
                <li>Ensure any required planning permissions or building regulations approvals are in place where applicable</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Our Liability</h2>
              <p>We carry public liability insurance and take care to carry out all work to a professional standard. In the event of damage caused directly by our negligence, we will take responsibility for rectification.</p>
              <p>We are not liable for any pre-existing issues uncovered during the course of works, indirect losses, or losses arising from delays outside our control. Our liability is limited to the value of the contract for the relevant job.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Cancellation</h2>
              <p>If you need to cancel or reschedule a booking, please give us as much notice as possible. Cancellations made with less than 48 hours notice may result in a charge to cover costs already incurred. Any deposit paid may be non-refundable where materials have already been ordered.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Complaints</h2>
              <p>If you are not satisfied with any aspect of our work, please contact us as soon as possible. We take all concerns seriously and will work with you to resolve any issues promptly and fairly. We ask that complaints are raised within a reasonable period of the work being completed.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Governing Law</h2>
              <p>These terms and conditions are governed by the laws of the Republic of Ireland. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Irish courts.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Changes to These Terms</h2>
              <p>We reserve the right to update these terms from time to time. Any changes will be published on this page with an updated date.</p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
