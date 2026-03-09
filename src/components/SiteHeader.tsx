import { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "FPV", hasDropdown: true },
  { label: "Kamikaze", hasDropdown: true },
  { label: "Surveillance & Dropping", hasDropdown: true },
  { label: "Investor Relations", hasDropdown: false },
  { label: "Solutions", hasDropdown: true },
  { label: "Careers", hasDropdown: false },
  { label: "Partner", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className="h-9 bg-neutral border-b border-border">
        <div className="container-main flex items-center justify-end h-full gap-6">
          <div className="hidden md:flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Phone size={11} /> Business Inquiries: +91 84476 12678
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={11} /> Customer Service: +91 77788 84319
            </span>
          </div>
          <button className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Contact Us
          </button>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            🇮🇳 IN
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="h-[72px] bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-main flex items-center justify-between h-full">
          <a href="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Abhy<span className="text-primary">Uday</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.label} className="nav-link flex items-center gap-1">
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg">
          <nav className="container-main py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} className="nav-link py-2 flex items-center justify-between">
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
