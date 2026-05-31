import { Star } from "lucide-react";
import { GoogleIcon } from "@/components/ui/google-icon";

const avatars = [
  { src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=80", alt: "" },
  { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80", alt: "" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80&h=80&auto=format&fit=crop", alt: "" },
  { src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80", alt: "" },
];

export function HeroReviewBadge() {
  return (
    <a
      href="https://g.page/r/CYbr8BuhCsMAEBE/review"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
      aria-label="Read GR Tiling Google reviews"
    >
      {/* Stacked avatars */}
      <div className="flex -space-x-3">
        {avatars.map((avatar, i) => (
          <img
            key={i}
            src={avatar.src}
            alt={avatar.alt}
            className="w-10 h-10 rounded-full border-2 border-background object-cover object-top hover:-translate-y-1 transition-transform duration-200"
            style={{ zIndex: i + 1 }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-10 bg-border" aria-hidden="true" />

      {/* Rating */}
      <div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="fill-yellow-400 text-yellow-400 w-4 h-4" aria-hidden="true" />
            ))}
          </div>
          <span className="font-semibold text-foreground text-sm">5.0</span>
          <GoogleIcon size={16} className="flex-shrink-0" />
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">Verified Google Reviews - Dublin</p>
      </div>
    </a>
  );
}
