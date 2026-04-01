import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+919858516044"
      className="md:hidden fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-full shadow-xl hover:opacity-90 transition-opacity text-sm"
      data-ocid="sticky.primary_button"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  );
}
