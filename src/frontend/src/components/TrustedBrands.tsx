const brands = [
  { name: "Yessem", sub: "2-Wheeler Electrical" },
  { name: "Yessem Grand", sub: "Premium Series" },
  { name: "Super", sub: "Batteries & Parts" },
  { name: "Minda", sub: "Auto Electricals" },
  { name: "Pricol", sub: "Instruments & Switches" },
  { name: "Lucas TVS", sub: "Batteries" },
  { name: "Exide", sub: "Batteries" },
  { name: "Amaron", sub: "Batteries" },
];

export default function TrustedBrands() {
  return (
    <section className="bg-ice py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Trusted Brands We Carry
          </h2>
          <p className="text-muted-foreground text-sm">
            We stock genuine parts from India's most reliable auto electrical
            brands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center hover:border-primary/40 hover:shadow-card transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-extrabold text-lg">
                  {b.name.charAt(0)}
                </span>
              </div>
              <p className="font-bold text-sm text-foreground">{b.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
