import { Phone, Star, Wrench } from "lucide-react";

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

export default function HeroSection() {
  const handleCheckAvailability = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/hero-workshop.dim_1400x700.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,25,60,0.88) 0%, rgba(10,25,60,0.75) 50%, rgba(10,25,60,0.40) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-6">
            <div className="flex gap-0.5">
              {STAR_KEYS.map((k) => (
                <Star key={k} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white text-xs font-medium">
              5.0 Rating | Trusted by 200+ Local Customers
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Quality Spare Parts for{" "}
            <span className="text-secondary">2 &amp; 4 Wheelers</span>
          </h1>

          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Affordable, reliable parts you can trust – available locally. Visit
            us for genuine auto electrical components at reasonable prices.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919848516044"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              data-ocid="hero.primary_button"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              type="button"
              onClick={handleCheckAvailability}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              data-ocid="hero.secondary_button"
            >
              <Wrench className="w-4 h-4" />
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
