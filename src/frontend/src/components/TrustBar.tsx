import { Quote } from "lucide-react";

const quotes = [
  "Very good and reasonable price",
  "Good quality and trustworthy",
  "Good service and excellent nature",
];

export default function TrustBar() {
  return (
    <div className="bg-primary py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quotes.map((q) => (
            <div key={q} className="flex items-center gap-2 justify-center">
              <Quote className="w-4 h-4 text-white/60 flex-shrink-0" />
              <span className="text-white text-sm font-medium italic">{q}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
