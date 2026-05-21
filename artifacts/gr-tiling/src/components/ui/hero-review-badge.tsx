import { Star } from "lucide-react";

const avatars = [
  { src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", alt: "Dublin customer" },
  { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", alt: "Dublin customer" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop", alt: "Dublin customer" },
  { src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200", alt: "Dublin customer" },
];

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
      <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
      <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
      <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
    </svg>
  );
}

export function HeroReviewBadge() {
  return (
    <div className="flex items-center gap-3">
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
      <div className="w-px h-10 bg-border" />

      {/* Rating */}
      <div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="fill-yellow-400 text-yellow-400 w-4 h-4" />
            ))}
          </div>
          <span className="font-semibold text-foreground text-sm">5.0</span>
          <GoogleIcon />
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">Verified Google Reviews · Dublin</p>
      </div>
    </div>
  );
}
