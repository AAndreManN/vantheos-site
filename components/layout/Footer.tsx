import { Link } from "react-router-dom";
import logo from "@/assets/vantheos-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <div className="bg-white rounded-lg p-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-navy/30">
                <img src={logo} alt="Vantheos" className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-white/50 max-w-md leading-relaxed">
              Autonomous systems that execute with precision. Operational intelligence for real-world workflows.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/50 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/50 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/50 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/50 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://calendly.com/andre-mattera/discovery-automation-and-increased-profit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/50 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Vantheos. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
