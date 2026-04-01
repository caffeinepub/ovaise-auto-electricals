import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Loader2, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { VehicleType } from "../backend";
import { useActor } from "../hooks/useActor";

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

const reviews = [
  {
    initials: "RK",
    name: "Ravi K.",
    color: "bg-primary",
    quote:
      "Very good and reasonable price. Got my bike battery replaced quickly. Highly recommended!",
    ocid: "reviews.item.1",
  },
  {
    initials: "SM",
    name: "Suresh M.",
    color: "bg-secondary",
    quote:
      "Good quality and trustworthy. They have genuine parts for all vehicles. Will come back again.",
    ocid: "reviews.item.2",
  },
  {
    initials: "PT",
    name: "Priya T.",
    color: "bg-accent-foreground",
    quote:
      "Good service and excellent nature. The staff is very helpful and knowledgeable. Great experience!",
    ocid: "reviews.item.3",
  },
];

export default function ConversionSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    partRequired: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone) {
      toast.error("Phone number is required.");
      return;
    }
    if (!actor) {
      toast.error("Service not ready. Please try again.");
      return;
    }
    setLoading(true);
    try {
      const vt =
        form.vehicleType === "fourWheeler"
          ? VehicleType.fourWheeler
          : VehicleType.twoWheeler;
      await actor.submitInquiry(
        form.name,
        form.phone,
        vt,
        form.partRequired,
        form.message,
      );
      toast.success("Inquiry submitted! We\u2019ll call you shortly.");
      setForm({
        name: "",
        phone: "",
        vehicleType: "",
        partRequired: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="bg-ice py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customer Reviews */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Customer Reviews
            </h2>
            <div className="flex flex-col gap-4">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="bg-card border border-border rounded-xl shadow-card p-4"
                  data-ocid={r.ocid}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {r.name}
                      </div>
                      <div className="flex gap-0.5 mt-0.5">
                        {STAR_KEYS.map((k) => (
                          <Star
                            key={k}
                            className="w-3 h-3 fill-gold text-gold"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    \u201c{r.quote}\u201d
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Check Part Availability
            </h2>
            <div className="bg-card border border-border rounded-xl shadow-card p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inq-name">Your Name</Label>
                  <Input
                    id="inq-name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    data-ocid="contact.input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inq-phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="inq-phone"
                    type="tel"
                    placeholder="+91 98585 16044"
                    required
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    data-ocid="contact.input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Vehicle Type</Label>
                  <Select
                    value={form.vehicleType}
                    onValueChange={(v) => handleChange("vehicleType", v)}
                  >
                    <SelectTrigger data-ocid="contact.select">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twoWheeler">
                        2-Wheeler (Bike/Scooter)
                      </SelectItem>
                      <SelectItem value="fourWheeler">
                        4-Wheeler (Car/SUV)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inq-part">Part Required</Label>
                  <Input
                    id="inq-part"
                    placeholder="e.g. Battery, Wiring, Starter Motor"
                    value={form.partRequired}
                    onChange={(e) =>
                      handleChange("partRequired", e.target.value)
                    }
                    data-ocid="contact.input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inq-message">Message (optional)</Label>
                  <Textarea
                    id="inq-message"
                    placeholder="Any additional details..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white hover:opacity-90 font-semibold"
                  data-ocid="contact.submit_button"
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Submitting..." : "Check Availability"}
                </Button>
              </form>
            </div>
          </div>

          {/* Visit Our Store */}
          <div id="location">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Visit Our Store
            </h2>
            <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efa496b7a689%3A0x2b7d91d7e01d7f01!2sGovernor%20Peta%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-5 flex flex-col gap-4">
                <div className="flex gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Ovaise Auto Electricals
                    </p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      Owner: Mohammed Shujath Ali
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Shop No. 13, Puvvada Complex, 27-22-43,
                      <br />
                      JD Hospital Road, 27-18-14,
                      <br />
                      Congress Office Rd, Governor Peta,
                      <br />
                      Vijayawada, Andhra Pradesh – 520002
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Mon–Sat: 10:00 AM – 8:00 PM
                    </p>
                    <p className="text-sm font-medium text-orange-600">
                      Sunday: Holiday (Opens for Urgent Needs)
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Ovaise+Auto+Electricals,+Puvvada+Complex,+Governor+Peta,+Vijayawada,+Andhra+Pradesh+520002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-secondary rounded-lg hover:opacity-90 transition-opacity"
                  data-ocid="location.primary_button"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
