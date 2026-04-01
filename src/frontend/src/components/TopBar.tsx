import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-util-bar text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-2 text-sm">
        <Phone className="w-3.5 h-3.5 flex-shrink-0" />
        <a
          href="tel:+919848516044"
          className="hover:underline font-medium tracking-wide"
          data-ocid="topbar.link"
        >
          +91 98485 16044
        </a>
        <span className="mx-1 opacity-50">|</span>
        <a
          href="tel:+918688780155"
          className="hover:underline font-medium tracking-wide"
          data-ocid="topbar.link"
        >
          +91 86887 80155
        </a>
        <span className="mx-2 opacity-50">|</span>
        <span className="text-white/80">
          Mon–Sat: 10 AM – 8 PM&nbsp;|&nbsp;Sun: Holiday
        </span>
      </div>
    </div>
  );
}
