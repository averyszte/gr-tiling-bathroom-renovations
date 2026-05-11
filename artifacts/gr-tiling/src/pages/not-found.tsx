import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32 text-center px-4 bg-background">
      <div className="max-w-md w-full p-8 rounded-2xl bg-card border shadow-lg">
        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Sorry, we couldn't find that page. Please check the URL or head back to the homepage.
        </p>
        <Button asChild size="lg" className="w-full">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
