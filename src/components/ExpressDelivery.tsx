import { Truck, Clock, MapPin, IndianRupee, FileText, Package, Gift, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExpressDelivery = () => {
  const contentRef = useScrollAnimation<HTMLDivElement>({ type: "slideLeft" });
  const cardRef = useScrollAnimation<HTMLDivElement>({ type: "slideRight", delay: 0.2 });

  const features = [
    { icon: Clock, text: "Travel-Based Delivery" },
    { icon: MapPin, text: "Travel-based peer-to-peer model" },
    { icon: Truck, text: "Intercity parcel & document delivery" },
    { icon: IndianRupee, text: "Low-cost alternative to couriers" },
  ];

  const idealFor = [
    { icon: FileText, text: "Documents" },
    { icon: Package, text: "Small Parcels" },
    { icon: Gift, text: "All Types of Parcels" },
    { icon: Send, text: "Urgent Deliveries" },
  ];

  return (
    <section id="express" className="py-20 md:py-28 bg-card overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--muted))_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-primary/30">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold tracking-wide text-primary">Needin Express</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Travel-Based Delivery
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Across India
              </span>
            </h2>

            <p className="text-muted-foreground mb-10 text-lg leading-relaxed font-bold">
              Our innovative travel-based delivery model connects your parcels with travelers heading in the same direction. Fast, affordable, and reliable.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:bg-muted transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl shadow-[0_10px_40px_-10px] shadow-primary/50 transition-all duration-300 font-bold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Send a Parcel
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Ideal For Section */}
          <div ref={cardRef} className="relative">
            <FloatingCard glowColor="hsl(var(--primary))">
              <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-3xl p-8 md:p-10 border border-border backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-8 text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Ideal For:
                </h3>
                <div className="grid grid-cols-2 gap-5">
                  {idealFor.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-card transition-all duration-300 group border border-border"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-primary/30">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="font-bold text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-primary/20 rounded-2xl text-center border border-primary/30">
                  <p className="text-sm text-foreground font-bold">
                    PAN India Coverage • All Types of Parcel • All Over India
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpressDelivery;
