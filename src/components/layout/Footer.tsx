import { Link } from "react-router-dom";
import logo from "@/assets/vantheos-logo.png";
import { siteCtas, siteLegalLinks, siteNavLinks } from "@/content/site";

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
              {siteNavLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteCtas.bookCall.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {siteCtas.bookCall.label}
                </a>
              </li>
              <li>
                <Link to={siteCtas.contactUs.href} className="text-white/50 hover:text-white transition-colors">
                  {siteCtas.contactUs.label}
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
            {siteLegalLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-white/30 hover:text-white/60 text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
