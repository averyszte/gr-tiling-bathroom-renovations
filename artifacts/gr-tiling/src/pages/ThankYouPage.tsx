import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32 text-center px-4 bg-background">
      <div className="max-w-md w-full p-8 rounded-2xl bg-card border shadow-lg">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Thank You!</h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Your quote request has been sent. We'll be in touch within 24 hours to discuss your project.
        </p>
        <Button asChild size="lg" className="w-full">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}