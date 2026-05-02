import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MapPin, Wrench, Star, Clock, BadgeEuro, Sparkles } from "lucide-react";
import { applyPageSeo, applyJsonLd, SITE_URL } from "@/lib/seo";

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact GR Tiling & Bathroom Renovations",
      "url": `${SITE_URL}/contact`,
      "telephone": "+353877209850",
      "email": "ronangerard98@gmail.com",
      "areaServed": "Dublin and surrounding areas",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How soon will I get a reply?",
          "acceptedAnswer": { "@type": "Answer", "text": "We aim to respond as quickly as possible, usually within the same day." },
        },
        {
          "@type": "Question",
          "name": "Do you provide free quotes?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, all quotes are free and clearly explained before any work starts." },
        },
        {
          "@type": "Question",
          "name": "What areas do you cover?",
          "acceptedAnswer": { "@type": "Answer", "text": "We provide services in and around Dublin." },
        },
        {
          "@type": "Question",
          "name": "Can I request both bathroom renovation and tiling work?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, both services can be included in your quote." },
        },
        {
          "@type": "Question",
          "name": "Should I send photos?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, photos help us understand your project faster." },
        },
      ],
    },
  ],
};
import { submitToFormspree } from "@/lib/formspree";

const PHONE_DISPLAY = "+353 87 720 9850";
const PHONE_TEL = "tel:+353877209850";
const FORM_ID = "quote-form";

const PAGE_TITLE = "Contact GR Tiling & Bathroom Renovations | Free Quote Dublin";
const PAGE_DESCRIPTION =
  "Contact GR Tiling & Bathroom Renovations for bathroom renovation and tiling quotes in Dublin. Call today or request a free quote online.";
const PAGE_PATH = "/contact";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(5, "Phone is required"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Please tell us a little about your project"),
});

type ContactFormValues = z.infer<typeof formSchema>;

const trustPoints = [
  { icon: <Clock className="w-4 h-4" />, label: "On Time" },
  { icon: <BadgeEuro className="w-4 h-4" />, label: "On Budget" },
  { icon: <Sparkles className="w-4 h-4" />, label: "Clean Workmanship" },
  { icon: <MapPin className="w-4 h-4" />, label: "Dublin Area" },
  { icon: <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />, label: "5.0 Google Rating" },
];

const faqs = [
  {
    q: "How soon will I get a reply?",
    a: "We aim to respond as quickly as possible, usually within the same day.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes, all quotes are free and clearly explained before any work starts.",
  },
  {
    q: "What areas do you cover?",
    a: "We provide services in and around Dublin.",
  },
  {
    q: "Can I request both bathroom renovation and tiling work?",
    a: "Yes, both services can be included in your quote.",
  },
  {
    q: "Should I send photos?",
    a: "Yes, photos help us understand your project faster.",
  },
];

function scrollToForm() {
  const el = document.getElementById(FORM_ID);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function ContactPage() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const cleanupSeo = applyPageSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH });
    const cleanupSchema = applyJsonLd("contact", contactSchema);
    return () => { cleanupSeo(); cleanupSchema(); };
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setFormError(null);
    try {
      await submitToFormspree({
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: data.service,
        message: data.message,
      });
      form.reset();
      setLocation("/thank-you");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* 1. Compact Hero */}
      <section className="bg-secondary/30 pt-10 pb-10 lg:pt-14 lg:pb-14 border-b">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Contact GR Tiling &amp; Bathroom Renovations
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-4 tracking-tight">
            Get a Free Quote for Bathroom Renovations or Tiling in Dublin
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-7">
            Tell us what you need and we'll get back to you with clear next steps, honest pricing, and reliable service in and around Dublin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="text-base h-12 px-7" onClick={scrollToForm}>
              Request a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-7" asChild>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Section */}
      <section className="py-[60px] lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-start">

            {/* LEFT: Contact Info Card */}
            <aside className="bg-card rounded-2xl border shadow-sm p-8">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Contact Details
              </h2>

              <ul className="space-y-5 mb-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">Phone</p>
                    <a
                      href={PHONE_TEL}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">Service Area</p>
                    <p className="text-foreground font-medium">
                      Dublin and surrounding areas
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Services</p>
                    <ul className="text-foreground font-medium space-y-0.5">
                      <li>Bathroom Renovations</li>
                      <li>Tiling Services</li>
                    </ul>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">Rating</p>
                    <p className="text-foreground font-medium">5.0 Google Rating</p>
                  </div>
                </li>
              </ul>

              <div className="rounded-xl bg-secondary/40 border p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fast replies, clear quotes, and tidy work from a local Dublin specialist.
                </p>
              </div>
            </aside>

            {/* RIGHT: Quote Form Card */}
            <div
              id={FORM_ID}
              className="bg-card rounded-2xl border shadow-sm p-8 scroll-mt-24"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Request a Free Quote
              </h2>
              <p className="text-muted-foreground mb-6">
                Share a few details about your project and we'll be in touch with the next steps.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Bathroom Renovation">Bathroom Renovation</SelectItem>
                            <SelectItem value="Tiling Services">Tiling Services</SelectItem>
                            <SelectItem value="Bathroom & Tiling">Bathroom &amp; Tiling</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a bit about your project, location, and timing..."
                            className="resize-none min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {formError && (
                    <p className="text-sm text-destructive">{formError}</p>
                  )}
                  <Button type="submit" size="lg" className="w-full text-base h-12" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Quote Request"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* 3. Quick Trust Strip */}
          <div className="mt-12 lg:mt-16 rounded-2xl border bg-secondary/30 px-6 py-5">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-foreground">
              {trustPoints.map((point, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <span className="text-primary">{point.icon}</span>
                  <span>{point.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-[60px] md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Contact FAQs
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card px-6 rounded-xl border shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-10 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Ready to Talk About Your Project?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
            Call today or send a quick message and we'll help you take the next step with clear pricing and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base h-14 px-8"
              asChild
            >
              <a href={PHONE_TEL} className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              onClick={scrollToForm}
            >
              Request a Free Quote
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
