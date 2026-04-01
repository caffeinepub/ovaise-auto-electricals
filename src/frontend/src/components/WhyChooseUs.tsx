import { IndianRupee, ShieldCheck, Smile, Users } from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Competitive and reasonable prices on all spare parts – no hidden charges.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Quality Parts",
    desc: "Only reliable, tested components from trusted manufacturers and suppliers.",
  },
  {
    icon: Smile,
    title: "Friendly Service",
    desc: "Our team is approachable, helpful, and always ready to assist you.",
  },
  {
    icon: Users,
    title: "Trusted by Locals",
    desc: "Repeat customers and mechanics trust us for consistent quality and service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground text-base">
            We’ve been serving local customers with the best auto electrical
            parts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="text-center p-6 rounded-xl border border-border hover:shadow-card transition-shadow bg-card"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
