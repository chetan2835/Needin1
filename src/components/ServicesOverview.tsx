import { Wrench, Truck, Shield, Clock, IndianRupee, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesOverview = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const cardsRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.15 });
  const featuresRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", delay: 0.3 });

  const services = [
    {
      icon: Wrench,
      title: "Needin Services",
      description: "Book trusted professionals for home, personal care, cleaning, repair, and daily support services.",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      iconBg: "bg-primary text-primary-foreground",
      link: "/professional-services",
    },
    {
      icon: Truck,
      title: "Needin Express",
      description: "Travel-Based parcel & document delivery at low cost. PAN India coverage.",
      gradient: "from-accent/20 via-accent/10 to-transparent",
      iconBg: "bg-accent text-accent-foreground",
      link: "/express-delivery",
    },
  ];

  const features = [
    { icon: Shield, text: "Verified professionals & transparent pricing" },
    { icon: Clock, text: "27+ local service categories" },
    { icon: Truck, text: "Travel-Based & intercity delivery option" },
    { icon: Smartphone, text: "One app for services + delivery" },
    { icon: IndianRupee, text: "Affordable & trusted" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--muted))_1px,transparent_0)] bg-[size:40px_40px] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Everything You Need,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              One Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From local services to Travel-Based Delivery, all in one seamless experience.
          </p>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <FloatingCard key={index} className="h-full" glowColor={index === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}>
              <div className={`relative bg-card rounded-2xl p-8 md:p-10 border border-border overflow-hidden h-full`}>
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${service.gradient} pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="group rounded-xl border-border hover:border-primary hover:bg-primary/5">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* Why Choose Needin */}
        <div ref={featuresRef} className="relative rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose Needin?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium leading-snug">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
