import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeAndNavigate = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-border"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 flex-shrink-0"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-foreground">Ovaise Auto</div>
            <div className="text-xs text-muted-foreground">Electricals</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 text-sm font-semibold text-white bg-secondary rounded-full hover:opacity-90 transition-opacity"
            data-ocid="nav.link"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className="py-2 text-sm font-medium text-foreground hover:text-primary text-left"
              onClick={() => closeAndNavigate(link.href)}
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="mt-1 px-4 py-2 text-sm font-semibold text-white bg-secondary rounded-full text-center"
            onClick={() => closeAndNavigate("#contact")}
            data-ocid="nav.link"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
