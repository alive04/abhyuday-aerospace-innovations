import { useState, useRef, useCallback } from "react";
import { ChevronDown, Phone, Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import fpv7Img from "@/assets/products/fpv-7.jpg";
import fpv10Img from "@/assets/products/fpv-10.jpg";
import shiva1Img from "@/assets/products/shiva-1.jpg";
import shiva5Img from "@/assets/products/shiva-5.jpg";
import shiva20Img from "@/assets/products/shiva-20.jpg";
import sudarshanImg from "@/assets/products/sudarshan.jpg";

interface Product {
  name: string;
  image: string;
  slug: string;
}

interface MegaMenuData {
  products: Product[];
  description: string;
}

const megaMenuData: Record<string, MegaMenuData> = {
  FPV: {
    products: [
      { name: "FPV 7", image: fpv7Img, slug: "fpv-7" },
      { name: "FPV 10", image: fpv10Img, slug: "fpv-10" },
    ],
    description:
      "High-speed first-person-view drones designed for tactical reconnaissance, precision maneuvering, and real-time battlefield awareness.",
  },
  Kamikaze: {
    products: [
      { name: "Shiva 1", image: shiva1Img, slug: "shiva-1" },
      { name: "Shiva 1 (VTX VRX)", image: shiva1Img, slug: "shiva-1-vtx-vrx" },
      { name: "Shiva 5 (Electric)", image: shiva5Img, slug: "shiva-5-electric" },
      { name: "Shiva 5 (VTX VRX & Long Telemetry)", image: shiva5Img, slug: "shiva-5-vtx-vrx" },
      { name: "Shiva 5 (IC Engine)", image: shiva5Img, slug: "shiva-5-ic" },
      { name: "Shiva 20 (IC Engine)", image: shiva20Img, slug: "shiva-20-ic" },
      { name: "Shiva 20 (IC Engine with VTX VRX & Long Telemetry)", image: shiva20Img, slug: "shiva-20-ic-vtx" },
    ],
    description:
      "Loitering munition drones designed for precision strike missions with long-range telemetry and advanced targeting capabilities.",
  },
  "Surveillance & Dropping": {
    products: [
      { name: "Sudarshan AC", image: sudarshanImg, slug: "sudarshan-ac" },
      { name: "Sudarshan AC Range+", image: sudarshanImg, slug: "sudarshan-ac-range-plus" },
      { name: "Sudarshan AC Payload+", image: sudarshanImg, slug: "sudarshan-ac-payload-plus" },
      { name: "Sudarshan Alt+", image: sudarshanImg, slug: "sudarshan-alt-plus" },
    ],
    description:
      "Multi-mission drones designed for aerial surveillance, payload delivery, and extended-range intelligence gathering.",
  },
};

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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  }, []);

  const megaData = activeMenu ? megaMenuData[activeMenu] ?? null : null;

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
          <Link to="/" className="flex items-center gap-2">
            <img src="/src/assets/logo_1.svg" alt="Abhyuday Aerospace" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const hasMega = !!megaMenuData[item.label];
              return (
                <a
                  key={item.label}
                  className={`nav-link flex items-center gap-1 relative py-6 ${
                    activeMenu === item.label ? "text-foreground" : ""
                  }`}
                  onMouseEnter={() => hasMega && openMenu(item.label)}
                  onMouseLeave={() => hasMega && scheduleClose()}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`opacity-50 transition-transform duration-200 ${
                        activeMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
              );
            })}
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

      {/* Mega Dropdown */}
      <AnimatePresence>
        {megaData && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden lg:block absolute left-0 right-0 bg-background border-b border-border shadow-2xl"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="container-main py-10">
              <div className="grid grid-cols-12 gap-10">
                {/* Left — Products */}
                <div className="col-span-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                    Products — {activeMenu}
                  </p>
                  <div
                    className={`grid gap-4 ${
                      megaData.products.length <= 4
                        ? "grid-cols-2 sm:grid-cols-4"
                        : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    }`}
                  >
                    {megaData.products.map((product) => (
                      <Link
                        key={product.name}
                        to={`/product/${product.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className="group rounded-lg border border-border bg-card p-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
                      >
                        <div className="aspect-square rounded-md overflow-hidden bg-muted mb-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {product.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right — Applications */}
                <div className="col-span-4 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                      Applications
                    </p>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {activeMenu}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {megaData.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                  >
                    Explore all {activeMenu} products <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
