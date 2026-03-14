import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/vantheos-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // All pages now have dark heroes
  const hasDarkHero = true;
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Determine if navbar should be light (dark text) or dark (light text)
  const isLight = scrolled || !hasDarkHero;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isLight 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-[#598BAF]/95 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`rounded-lg p-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${!isLight ? "bg-white group-hover:shadow-white/20" : "group-hover:shadow-primary/20"}`}>
              <img 
                src={logo} 
                alt="Vantheos" 
                className="h-10 w-auto transition-all"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? isLight ? "text-primary" : "text-white"
                    : isLight 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-navy text-white hover:bg-navy/90"
            >
              <a
                href="https://calendly.com/andre-mattera/discovery-automation-and-increased-profit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isLight ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-6 border-t animate-fade-in ${
            isLight ? "border-border bg-background" : "border-white/10 bg-navy"
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.href
                      ? isLight ? "text-primary" : "text-white"
                      : isLight 
                        ? "text-muted-foreground" 
                        : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild 
                className="mt-4 bg-navy text-white hover:bg-navy/90"
              >
                <a
                  href="https://calendly.com/andre-mattera/discovery-automation-and-increased-profit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
