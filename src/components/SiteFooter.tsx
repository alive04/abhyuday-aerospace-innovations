import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo_1.svg";


const footerLinks = {
  Products: ["FPV Drones", "Kamikaze Drones", "Surveillance Drones", "Dropping Systems"],
  Solutions: ["Border Security", "Counter-UAS", "Maritime Patrol", "Urban Operations"],
  Company: ["About Us", "Careers", "Investor Relations", "Partner Program"],
  Resources: ["Documentation", "Case Studies", "News & Events", "Support"],
};

const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-flex items-center">
              <img src={logo} alt="Abhyuday Aerospace" className="h-12 w-auto" />
            </a>
            <p className="mt-4 text-secondary-foreground/50 text-sm leading-relaxed">
              Pioneering autonomous drone systems for defense and security applications.
            </p>
            <div className="mt-6 space-y-3 text-sm text-secondary-foreground/60">
              <p className="flex items-center gap-2"><Mail size={14} /> info@abhyuday.in</p>
              <p className="flex items-center gap-2"><Phone size={14} /> +91 91735 29393</p>
              <p className="flex items-center gap-2"><MapPin size={14} /> Thaltej, India</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-foreground/40">
          <p>© 2026 AbhyUday Technologies. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
