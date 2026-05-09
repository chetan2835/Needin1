import { Star, Quote } from "lucide-react";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    review: "Needin made finding a reliable electrician so easy! The vendor was professional and the pricing was transparent. Highly recommend!",
    service: "Electrician",
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    location: "Meerut",
    rating: 5,
    review: "Used Needin Express for urgent document delivery. Travel-Based Delivery at such affordable rates. Amazing service!",
    service: "Express Delivery",
    avatar: "RK",
  },
  {
    name: "Anjali Verma",
    location: "Noida",
    rating: 4,
    review: "Booked a house cleaning service through Needin. The team was punctual and did a thorough job. Will use again!",
    service: "House Cleaning",
    avatar: "AV",
  },
  {
    name: "Vikram Singh",
    location: "Ghaziabad",
    rating: 5,
    review: "As a vendor, Needin has helped me grow my plumbing business. Getting regular customers and earning well!",
    service: "Plumber (Vendor)",
    avatar: "VS",
  },
  {
    name: "Meera Patel",
    location: "Lucknow",
    rating: 5,
    review: "The AC mechanic arrived within an hour of booking. Fixed the issue quickly and charged fairly. Great platform!",
    service: "AC Repair",
    avatar: "MP",
  },
  {
    name: "Amit Gupta",
    location: "Agra",
    rating: 4,
    review: "Sent a parcel to Mumbai using Needin Express. Delivered via Travel-Based Delivery! Much better than traditional couriers.",
    service: "Express Delivery",
    avatar: "AG",
  },
];

const Testimonials = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const gridRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of customers and vendors across India
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FloatingCard
              key={index}
              className="h-full"
              glowColor={index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
            >
              <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                        }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
