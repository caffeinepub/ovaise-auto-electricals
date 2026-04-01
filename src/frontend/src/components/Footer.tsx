import { Phone, Zap } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-border pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-foreground">
                  Ovaise Auto
                </div>
                <div className="text-xs text-muted-foreground">Electricals</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted local supplier for 2 &amp; 4-wheeler spare parts.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="font-medium text-foreground">Owner:</span>{" "}
              Mohammed Shujath Ali
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                ["Home", "#home"],
                ["Categories", "#categories"],
                ["Reviews", "#reviews"],
                ["Contact Us", "#contact"],
                ["Location", "#location"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid="footer.link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">
              Categories
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "2-Wheeler Batteries",
                "Wiring Components",
                "Switches & Electrical",
                "Car Batteries",
                "Starter Motors",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#categories"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid="footer.link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Contact</h4>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+919848516044"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                data-ocid="footer.link"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 98485 16044
              </a>
              <a
                href="tel:+918688780155"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                data-ocid="footer.link"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 86887 80155
              </a>
              <p className="text-sm text-muted-foreground">
                Mon–Sat: 10 AM – 8 PM
              </p>
              <p className="text-sm font-medium text-orange-600">
                Sunday: Holiday (Opens for Urgent Needs)
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Shop No. 13, Puvvada Complex,
                <br />
                JD Hospital Road, Governor Peta,
                <br />
                Vijayawada, AP – 520002
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <span>© {year} Ovaise Auto Electricals. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
