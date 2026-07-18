import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/ui/google-icon";
import { cn } from "@/lib/utils";

// The three genuine Google reviews. Keyed so each page can feature the single
// one that topically matches it (see _strategy.md) instead of repeating the
// same three-card block site-wide, which made sibling pages read as duplicates.
const reviews = {
  mooney: {
    name: "Jessicaelizabeth Mooney",
    text: "Excellent service. Had my bathroom done and I am absolutely delighted with the results. Highly recommend.",
  },
  brooks: {
    name: "Raimonda Brooks",
    text: "Gerry is a true legend, super nice guy. Came in and got stuck into work straight away and had it done in no time. Left the place as clean as he found it.\n\nSuper honest about pricing too. I actually ended up paying less than expected. Overall 100% pleased with the result.",
  },
  alan: {
    name: "Alan L",
    text: "Used GR Tiling in my own house. Bathroom done in 3 days. Also did flooring in hallway and kitchen for my mother-in-law.\n\nSuperb job, over the moon. Highly recommend for fast, professional, friendly service.",
  },
} as const;

export type ReviewKey = keyof typeof reviews;

type ReviewsSectionProps = {
  heading?: string;
  className?: string;
  /** Feature a single topically-matched review instead of all three. */
  featured?: ReviewKey;
  /** Vary the trust line beneath the stars so it isn't byte-identical per page. */
  trustLine?: string;
};

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-card p-8 pb-10 rounded-2xl shadow-lg border relative">
      <div className="flex gap-1 mb-4" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((j) => (
          <Star key={j} className="fill-yellow-400 text-yellow-400 w-4 h-4" aria-hidden="true" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed italic whitespace-pre-line">"{text}"</p>
      <p className="font-medium text-foreground">{name}</p>
      <div className="absolute bottom-3 right-4 opacity-70">
        <GoogleIcon />
      </div>
    </div>
  );
}

export function ReviewsSection({
  heading = "What Our Customers Say",
  className = "bg-background",
  featured,
  trustLine = "5.0 Google Rating from verified Dublin customers",
}: ReviewsSectionProps) {
  return (
    <section className={cn("py-[60px] md:py-24", className)}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">{heading}</h2>
          <div className="flex justify-center items-center gap-2 mb-4" aria-label="5 star Google rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" aria-hidden="true" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">{trustLine}</p>
        </div>
        {featured ? (
          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <ReviewCard name={reviews[featured].name} text={reviews[featured].text} />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-8 md:mb-12">
            {Object.values(reviews).map((review) => (
              <ReviewCard key={review.name} name={review.name} text={review.text} />
            ))}
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base h-14 px-8 gap-2" asChild>
            <a href="https://g.page/r/CYbr8BuhCsMAEBE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              Leave a Review <ChevronRight size={16} aria-hidden="true" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base h-14 px-8 gap-2" asChild>
            <a href="https://share.google/m5u3G8XUm5444yEkY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              See All Google Reviews <ChevronRight size={16} aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
