import { Sparkles, Shield, MapPin, ClipboardList, Wrench } from "lucide-react";

export function TrustStrip() {
  return (
    <div className="bg-primary text-primary-foreground py-6 border-y border-primary-foreground/10">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium tracking-wide">
          <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 opacity-80" /><span>Clean & Tidy Work</span></div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4 opacity-80" /><span>Fully Insured</span></div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 opacity-80" /><span>Irish Owned & Operated</span></div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
          <div className="flex items-center gap-2"><ClipboardList className="w-4 h-4 opacity-80" /><span>Free Quotes</span></div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30"></div>
          <div className="flex items-center gap-2"><Wrench className="w-4 h-4 opacity-80" /><span>15 Years in the Trade</span></div>
        </div>
      </div>
    </div>
  );
}
