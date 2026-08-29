import { useEffect } from "react";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";

export const PAGE_TITLE = "Privacy Policy | GR Tiling & Bathroom Renovations";
export const PAGE_DESCRIPTION = "Privacy policy for GR Tiling & Bathroom Renovations. How we collect, use, and protect your personal information.";
export const PAGE_PATH = "/privacy-policy";
const LAST_UPDATED = new Date("2026-06-30").toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" });

export const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": `${SITE_URL}${PAGE_PATH}` }
  ]
};

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("privacy-policy", schema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Privacy Policy</h1>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">How We Handle Your Information</h2>
          <p className="text-muted-foreground mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="prose-content space-y-10 text-muted-foreground leading-relaxed">

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Who We Are</h2>
              <p>GR Tiling & Bathroom Renovations is a bathroom renovation and tiling service based in Dublin, Ireland. We operate at <a href={SITE_URL} className="text-primary underline underline-offset-4 hover:opacity-80">grtilingandbathrooms.ie</a>.</p>
              <p>For any questions about this policy or how we handle your data, contact us at <a href="mailto:ronangerard98@gmail.com" className="text-primary underline underline-offset-4 hover:opacity-80">ronangerard98@gmail.com</a> or call <a href="tel:+353877209850" className="text-primary underline underline-offset-4 hover:opacity-80">+353 87 720 9850</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">What Information We Collect</h2>
              <p>We collect information you provide directly to us when you submit a quote request or contact form. This includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name</li>
                <li>Your phone number</li>
                <li>Your email address</li>
                <li>Details about your project</li>
              </ul>
              <p>We do not collect any sensitive personal data and we do not collect payment information through this website.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">How We Use Your Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your quote request or enquiry</li>
                <li>Provide information about our services</li>
                <li>Contact you regarding your project</li>
              </ul>
              <p>We will never sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">How We Store Your Information</h2>
              <p>Quote and contact form submissions are processed and stored securely via <strong className="text-foreground">Formspree</strong>, a third-party form handling service. Formspree processes your data in accordance with GDPR. You can view their privacy policy at <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80">formspree.io</a>.</p>
              <p>We retain your contact information only for as long as is necessary to respond to your enquiry and manage our business relationship. If you would like your information removed, contact us and we will delete it promptly.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Google Analytics</h2>
              <p>This website uses <strong className="text-foreground">Google Analytics 4 (GA4)</strong>, a web analytics service provided by Google LLC. GA4 collects anonymous information about how visitors use this website, such as which pages are visited, how long visitors stay, and what actions are taken. This helps us understand how the site is performing and improve the user experience.</p>
              <p>GA4 may collect your IP address and device information. This data is aggregated and anonymised  -  we cannot identify individual visitors from analytics data. For more information about how Google handles this data, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80">Google's Privacy Policy</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Legal Basis for Processing</h2>
              <p>Under GDPR, we rely on the following legal bases for processing your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Legitimate interests</strong>  -  responding to quote requests and business enquiries submitted through our website.</li>
                <li><strong className="text-foreground">Legitimate interests</strong>  -  understanding how our website is used via anonymised analytics data.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Your Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to how we use your data</li>
                <li>Request we restrict our use of your data</li>
                <li>Lodge a complaint with the Data Protection Commission (DPC) at <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:opacity-80">dataprotection.ie</a></li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:ronangerard98@gmail.com" className="text-primary underline underline-offset-4 hover:opacity-80">ronangerard98@gmail.com</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.</p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
