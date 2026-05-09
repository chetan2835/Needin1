import { MapPin, Clock, CreditCard, Shield, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BecomeVendorCTA = () => {
  const containerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });

  const benefits = [
    { icon: MapPin, text: "City-wise customer reach" },
    { icon: Clock, text: "Flexible working hours" },
    { icon: CreditCard, text: "Subscription-based onboarding" },
    { icon: Shield, text: "Verified platform support" },
  ];

  const steps = [
    { number: "01", title: "Register", description: "Create your account" },
    { number: "02", title: "KYC Verification", description: "Submit documents" },
    { number: "03", title: "Subscription", description: "Choose your plan" },
    { number: "04", title: "Go Live & Earn", description: "Start receiving orders" },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <FloatingCard glowColor="hsl(var(--primary))">
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 md:p-12 lg:p-14">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider">Join Our Network</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Become a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Needin Vendor</span>
                </h2>
                
                <p className="text-muted-foreground mb-10 text-lg">
                  Grow your business with Needin and reach more customers in your city.
                </p>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-semibold">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/become-vendor">
                    <Button 
                      size="lg" 
                      className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl shadow-lg w-full sm:w-auto"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full sm:w-auto border-2 border-border hover:border-primary/50 rounded-xl px-8 py-6"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp: +91 9286783640
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Content - Steps */}
              <div className="bg-gradient-to-br from-primary via-primary to-accent p-8 md:p-12 lg:p-14 relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px]" />
                
                <h3 className="text-2xl font-bold text-primary-foreground mb-10 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  How to Get Started
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
                        <span className="font-bold text-primary-foreground text-lg">{step.number}</span>
                      </div>
                      <div className="pt-2">
                        <h4 className="font-bold text-primary-foreground text-lg">{step.title}</h4>
                        <p className="text-sm text-primary-foreground/70">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FloatingCard>
      </div>
    </section>
  );
};

export default BecomeVendorCTA;
