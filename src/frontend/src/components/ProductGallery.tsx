const products = [
  {
    image: "/assets/generated/self-motor.dim_600x400.jpg",
    title: "Self Starter Motors",
    desc: "High-torque starter motors for bikes & scooters. OEM compatible.",
  },
  {
    image: "/assets/generated/tail-lamp.dim_600x400.jpg",
    title: "Tail Lamps",
    desc: "Bright LED & halogen tail lamps for all 2-wheeler models.",
  },
  {
    image: "/assets/generated/bike-battery.dim_600x400.jpg",
    title: "2-Wheeler Batteries",
    desc: "Long-life batteries for bikes and scooters – maintenance-free.",
  },
  {
    image: "/assets/generated/headlight-indicator.dim_600x400.jpg",
    title: "Headlights & Indicators",
    desc: "Clear visibility LED headlights and indicator sets for cars & bikes.",
  },
  {
    image: "/assets/generated/auto-parts.dim_600x400.jpg",
    title: "Wiring & Electrical Parts",
    desc: "Complete wiring harnesses, relays, fuses & connectors.",
  },
];

export default function ProductGallery() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Our Products
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Genuine auto electrical spare parts for every 2-wheeler and
            4-wheeler.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-foreground mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
          {/* CTA card */}
          <div className="bg-primary rounded-xl p-6 flex flex-col items-start justify-between shadow-card">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">
                Need a specific part?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Call us or send an inquiry. We stock a wide range of genuine
                parts for all vehicles.
              </p>
            </div>
            <a
              href="tel:+919858516044"
              className="mt-6 inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              data-ocid="gallery.cta_button"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
