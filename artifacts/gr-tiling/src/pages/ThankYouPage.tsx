import { useState } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStoredLeadDetails } from "@/lib/lead";

const PHONE_DISPLAY = "+353 87 720 9850";
const PHONE_TEL = "tel:+353877209850";

export default function ThankYouPage() {
  const [lead] = useState(getStoredLeadDetails);

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32 text-center px-4 bg-background">
      <div className="max-w-md w-full p-8 rounded-2xl bg-card border shadow-lg">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Quote Request Sent</h1>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
          Thank You{lead?.name ? `, ${lead.name.split(" ")[0]}` : ""}!
        </h2>
        {lead ? (
          <>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Your quote request has been sent. We'll be in touch within 24 hours on:
            </p>
            <div className="rounded-xl bg-secondary/40 border px-4 py-3 mb-6">
              <p className="inline-flex items-center gap-2 text-foreground font-semibold text-xl">
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                {lead.phone}
              </p>
              {lead.email && (
                <p className="text-muted-foreground text-sm mt-1 break-all">{lead.email}</p>
              )}
            </div>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Number not right? Call us directly on{" "}
              <a href={PHONE_TEL} className="text-primary font-medium whitespace-nowrap">
                {PHONE_DISPLAY}
              </a>{" "}
              so we don't miss you.
            </p>
          </>
        ) : (
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Your quote request has been sent. We'll be in touch within 24 hours to discuss your project.
          </p>
        )}
        <Button asChild size="lg" className="w-full">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
