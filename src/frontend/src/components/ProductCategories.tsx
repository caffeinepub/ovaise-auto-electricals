import {
  Battery,
  Cable,
  Lightbulb,
  Phone,
  Settings,
  ToggleLeft,
} from "lucide-react";

const categories = [
  {
    icon: Battery,
    title: "2-Wheeler Batteries",
    tag: "2-Wheeler",
    description:
      "High-performance batteries for bikes & scooters. Long life, reliable cranking power.",
  },
  {
    icon: Cable,
    title: "Wiring Components",
    tag: "2-Wheeler",
    description:
      "Complete wiring harnesses, connectors & cable sets for all two-wheeler models.",
  },
  {
    icon: ToggleLeft,
    title: "Switches & Electrical",
    tag: "2-Wheeler",
    description:
      "Ignition switches, handle switches, and all electrical control components.",
  },
  {
    icon: Lightbulb,
    title: "Lights & Indicators",
    tag: "2-Wheeler",
    description:
      "LED & halogen headlights, tail lamps, indicator sets for bikes and scooters.",
  },
  {
    icon: Battery,
    title: "Car Batteries & Alternators",
    tag: "4-Wheeler",
    description:
      "Heavy-duty car batteries and alternators for all major car brands.",
  },
  {
    icon: Settings,
    title: "Starter Motors & Fuses",
    tag: "4-Wheeler",
    description:
      "Reliable starter motors, fuse boxes, relays & complete wiring accessories.",
  },
];

const tagColors: Record<string, string> = {
  "2-Wheeler": "bg-primary/10 text-primary",
  "4-Wheeler": "bg-secondary/10 text-secondary",
};

export default function ProductCategories() {
  return (
    <section id="categories" className="bg-ice py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Browse Spare Parts by Category
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Genuine and reliable electrical parts for all types of vehicles.
            Call us for availability and pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-5 flex flex-col gap-4"
              data-ocid={`categories.item.${i + 1}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[cat.tag]}`}
                  >
                    {cat.tag}
                  </span>
                  <h3 className="text-base font-bold text-foreground mt-1">
                    {cat.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {cat.description}
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mt-auto"
                data-ocid={`categories.primary_button.${i + 1}`}
              >
                <Phone className="w-3.5 h-3.5" />
                Call for Availability
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
