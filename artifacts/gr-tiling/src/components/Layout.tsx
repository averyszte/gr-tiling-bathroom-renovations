import { Link } from "wouter";
import { Menu, X, Phone, Star, ChevronDown, ChevronRight, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header({ openQuote }: { openQuote: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">GR</span>
            <span className="font-sans text-sm font-medium tracking-wide uppercase hidden sm:inline-block text-foreground/80 mt-1">
              Tiling & Bathroom Renovations
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" data-testid="header-nav">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                onKeyDown={(e) => { if (e.key === "Escape") setDesktopServicesOpen(false); }}
                aria-expanded={desktopServicesOpen}
                aria-haspopup="true"
                aria-controls="desktop-services-menu"
              >
                Services <ChevronDown size={14} className={`mt-0.5 transition-transform duration-200 group-hover:rotate-180 ${desktopServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <div id="desktop-services-menu" className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-background border border-border rounded-xl shadow-lg p-4 transition-all duration-200 z-50 ${desktopServicesOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}>
                <div className="grid grid-cols-2 gap-2">
                  {/* Bathroom Renovations column */}
                  <div>
                    <Link href="/services/bathroom-renovations" className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg mb-1" onClick={() => setDesktopServicesOpen(false)}>
                      Bathroom Renovations <ChevronRight size={13} />
                    </Link>
                    <div className="flex flex-col">
                      <Link href="/services/wet-room-installation-dublin" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors rounded-lg" onClick={() => setDesktopServicesOpen(false)}>Wet Room Installation</Link>
                      <Link href="/services/accessible-bathroom-dublin" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors rounded-lg" onClick={() => setDesktopServicesOpen(false)}>Accessible Bathroom</Link>
                    </div>
                  </div>
                  {/* Tiling Services column */}
                  <div>
                    <Link href="/services/tiling-services" className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg mb-1" onClick={() => setDesktopServicesOpen(false)}>
                      Tiling Services <ChevronRight size={13} />
                    </Link>
                    <div className="flex flex-col">
                      <Link href="/services/floor-wall-tiling-dublin" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors rounded-lg" onClick={() => setDesktopServicesOpen(false)}>Floor & Wall Tiling</Link>
                      <Link href="/services/bathroom-tiling-dublin" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors rounded-lg" onClick={() => setDesktopServicesOpen(false)}>Bathroom Tiling</Link>
                      <Link href="/services/kitchen-tiling-dublin" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors rounded-lg" onClick={() => setDesktopServicesOpen(false)}>Kitchen Tiling</Link>
                      <Link href="/services/tile-repairs-dublin" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors rounded-lg" onClick={() => setDesktopServicesOpen(false)}>Tile Repairs</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/cost-guide" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <a href="https://www.instagram.com/grtiling_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="hidden md:inline-flex"
              onClick={openQuote}
              data-testid="button-get-quote-header"
            >
              Get Free Quote
            </Button>
            <button
              className="md:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-hamburger-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-1">
            <Link href="/" className="text-lg font-medium py-2.5 border-b px-1" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            {/* Mobile Services Accordion */}
            <div className="border-b">
              <button
                className="w-full flex items-center justify-between text-lg font-medium py-2.5 px-1"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                aria-haspopup="true"
                aria-controls="mobile-services-menu"
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div id="mobile-services-menu" className="pb-3 pl-2 flex flex-col">
                  <Link href="/services/bathroom-renovations" className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg mb-1" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Bathroom Renovations <ChevronRight size={13} /></Link>
                  <div className="pl-3 flex flex-col mb-2">
                    <Link href="/services/wet-room-installation-dublin" className="text-sm text-muted-foreground py-1.5 px-2 block" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Wet Room Installation</Link>
                    <Link href="/services/accessible-bathroom-dublin" className="text-sm text-muted-foreground py-1.5 px-2 block" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Accessible Bathroom</Link>
                  </div>
                  <Link href="/services/tiling-services" className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg mb-1" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Tiling Services <ChevronRight size={13} /></Link>
                  <div className="pl-3 flex flex-col">
                    <Link href="/services/floor-wall-tiling-dublin" className="text-sm text-muted-foreground py-1.5 px-2 block" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Floor & Wall Tiling</Link>
                    <Link href="/services/bathroom-tiling-dublin" className="text-sm text-muted-foreground py-1.5 px-2 block" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Bathroom Tiling</Link>
                    <Link href="/services/kitchen-tiling-dublin" className="text-sm text-muted-foreground py-1.5 px-2 block" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Kitchen Tiling</Link>
                    <Link href="/services/tile-repairs-dublin" className="text-sm text-muted-foreground py-1.5 px-2 block" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>Tile Repairs</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/cost-guide" className="text-lg font-medium py-2.5 border-b px-1" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/about" className="text-lg font-medium py-2.5 border-b px-1" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="text-lg font-medium py-2.5 px-1" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t p-3 z-50 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]" aria-label="Quick contact actions">
        <Button variant="outline" className="flex-1 gap-2" asChild>
          <a href="tel:+353877209850" aria-label="Call GR Tiling and Bathroom Renovations"><Phone size={16} /> Call Us</a>
        </Button>
        <Button className="flex-1" onClick={openQuote} aria-label="Open quote request form">
          Get a Free Quote
        </Button>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl font-bold tracking-tight">GR</span>
            <span className="font-sans text-sm font-medium tracking-wide uppercase opacity-90 mt-1">
              Tiling & Bathroom Renovations
            </span>
          </div>
          <p className="text-background/70 max-w-sm leading-relaxed">
            Dublin's trusted specialists in luxury bathroom renovations and premium tiling. We transform tired spaces into beautiful, functional rooms.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <Star className="fill-yellow-400 text-yellow-400" size={16} aria-hidden="true" />
            <Star className="fill-yellow-400 text-yellow-400" size={16} aria-hidden="true" />
            <Star className="fill-yellow-400 text-yellow-400" size={16} aria-hidden="true" />
            <Star className="fill-yellow-400 text-yellow-400" size={16} aria-hidden="true" />
            <Star className="fill-yellow-400 text-yellow-400" size={16} aria-hidden="true" />
            <span className="text-sm ml-2 font-medium">5.0 Google Rating</span>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.instagram.com/grtiling_/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-5 md:col-span-2">
          <h4 className="font-serif text-xl">Services</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            <div className="flex flex-col gap-2">
              <Link href="/services/bathroom-renovations" className="flex items-center gap-1 text-background font-medium hover:text-background/80 transition-colors">Bathroom Renovations <ChevronRight size={13} className="opacity-60" /></Link>
              <Link href="/services/wet-room-installation-dublin" className="text-background/60 text-sm hover:text-background transition-colors">Wet Room Installation</Link>
              <Link href="/services/accessible-bathroom-dublin" className="text-background/60 text-sm hover:text-background transition-colors">Accessible Bathroom</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/services/tiling-services" className="flex items-center gap-1 text-background font-medium hover:text-background/80 transition-colors">Tiling Services <ChevronRight size={13} className="opacity-60" /></Link>
              <Link href="/services/floor-wall-tiling-dublin" className="text-background/60 text-sm hover:text-background transition-colors">Floor & Wall Tiling</Link>
              <Link href="/services/bathroom-tiling-dublin" className="text-background/60 text-sm hover:text-background transition-colors">Bathroom Tiling</Link>
              <Link href="/services/kitchen-tiling-dublin" className="text-background/60 text-sm hover:text-background transition-colors">Kitchen Tiling</Link>
              <Link href="/services/tile-repairs-dublin" className="text-background/60 text-sm hover:text-background transition-colors">Tile Repairs</Link>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-xl">Contact</h4>
          <div className="flex flex-col gap-3 text-background/70">
            <p>Dublin, Ireland</p>
            <a href="tel:+353877209850" className="hover:text-background transition-colors inline-flex items-center gap-2">
              <Phone size={16} /> +353 87 720 9850
            </a>
            <Link href="/contact" className="hover:text-background transition-colors">Contact Form</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-background/10 text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-background/50">
          <p>Copyright {new Date().getFullYear()} GR Tiling & Bathroom Renovations. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-background/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background/80 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
