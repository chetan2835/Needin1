import { Smartphone, Search, Calendar, CheckCircle, FileText, UserCheck, CreditCard, Star, Package, MapPin, Truck, Wallet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FloatingCard from "@/components/3d/FloatingCard";

const HowItWorks = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });

  const workflows = [
    {
      title: "For Customers",
      subtitle: "Book services in 4 simple steps",
      color: "primary",
      steps: [
        { icon: Smartphone, title: "Open Needin", description: "Download & launch the app" },
        { icon: Search, title: "Select Service", description: "Choose from 27+ categories" },
        { icon: Calendar, title: "Book Instantly", description: "Pick your preferred time" },
        { icon: CheckCircle, title: "Get Work Done", description: "Service delivered at your door" },
      ],
    },
    {
      title: "For Vendors",
      subtitle: "Start earning with Needin",
      color: "secondary",
      steps: [
        { icon: FileText, title: "Register", description: "Create your vendor profile" },
        { icon: UserCheck, title: "Complete KYC", description: "Verify your identity" },
        { icon: CreditCard, title: "Activate Subscription", description: "Choose your plan" },
        { icon: Star, title: "Start Earning", description: "Receive orders & grow" },
      ],
    },
    {
      title: "For Delivery Partners",
      subtitle: "Earn per trip with Needin Express",
      color: "accent",
      steps: [
        { icon: Package, title: "Accept Request", description: "Get delivery notifications" },
        { icon: MapPin, title: "Pickup Parcel", description: "Collect from sender" },
        { icon: Truck, title: "Travel-Based Delivery", description: "Deliver while you travel" },
        { icon: Wallet, title: "Earn Per Trip", description: "Instant payment credit" },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/30",
          iconBg: "from-primary to-primary/80",
          glow: "shadow-primary/20"
        };
      case "secondary":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/30",
          iconBg: "from-accent to-accent/80",
          glow: "shadow-accent/20"
        };
      case "accent":
        return {
          bg: "bg-primary/5",
          text: "text-primary",
          border: "border-primary/20",
          iconBg: "from-primary/80 to-accent",
          glow: "shadow-primary/10"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/30",
          iconBg: "from-primary to-primary/80",
          glow: "shadow-primary/20"
        };
    }
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, fast, and reliable for everyone.
          </p>
        </div>

        <div className="space-y-20">
          {workflows.map((workflow, wIndex) => {
            const colors = getColorClasses(workflow.color);
            return (
              <div key={wIndex} className="relative">
                {/* Workflow Header */}
                <div className="text-center mb-12">
                  <h3 className={`text-2xl md:text-3xl font-bold ${colors.text}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {workflow.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">{workflow.subtitle}</p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-8">
                  {workflow.steps.map((step, sIndex) => (
                    <div key={sIndex} className="relative group">
                      {/* Connector Line */}
                      {sIndex < workflow.steps.length - 1 && (
                        <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-border via-border to-transparent z-0" />
                      )}

                      {/* Step Card */}
                      <FloatingCard className="h-full w-full" glowColor={colors.text.includes("primary") ? "hsl(var(--primary))" : "hsl(var(--accent))"}>
                        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/20 hover:bg-card/60 transition-all duration-300 shadow-sm h-full">
                          <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center mb-6 shadow-xl ${colors.glow} group-hover:scale-110 transition-transform duration-300`}>
                            <step.icon className="w-10 h-10 text-primary-foreground" />
                            {/* Step number badge */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-sm font-bold text-foreground shadow-lg">
                              {sIndex + 1}
                            </div>
                          </div>
                          <h4 className="font-bold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </FloatingCard>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
