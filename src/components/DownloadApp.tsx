import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import needinLogo from "@/assets/needin-logo.png";

const DownloadApp = () => {
  const contentRef = useScrollAnimation<HTMLDivElement>({ type: "slideLeft" });
  const phoneRef = useScrollAnimation<HTMLDivElement>({ type: "slideRight", delay: 0.2 });

  const features = [
    "OTP Based Pickup & Delivery Confirmation System",
    "Local services (27+ categories)",
    "Travel-Based Delivery",
    "Track orders in real-time",
    "Secure payments",
    "24/7 support",
    
  ];

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-card rounded-[2.5rem] p-8 md:p-16 relative border border-border overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <div ref={contentRef}>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Download Now</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Download the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Needin App</span>
              </h2>

              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                One app for all your local service needs and Travel-Based Delivery across India.
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Download Buttons - With proper Google Play and App Store styling */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Google Play Button */}
                <Button
                  size="lg"
                  className="bg-card border-2 border-border hover:border-primary/50 text-foreground h-auto py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-normal opacity-60 uppercase tracking-wider">Get it on</div>
                    <div className="font-bold text-lg -mt-0.5">Google Play</div>
                  </div>
                </Button>

                {/* App Store Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border bg-muted hover:bg-muted/80 text-foreground h-auto py-4 px-8 rounded-2xl group"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-normal opacity-60 uppercase tracking-wider">Coming soon on</div>
                    <div className="font-bold text-lg -mt-0.5">App Store</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div ref={phoneRef} className="relative flex justify-center">
              <FloatingCard glowColor="hsl(var(--primary))">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-72 h-[560px] bg-foreground dark:bg-card rounded-[3rem] p-3 shadow-2xl border border-border">
                    <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-primary rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                      {/* Dynamic island */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-foreground dark:bg-background rounded-full" />

                      {/* Screen content */}
                      <div className="text-center text-primary-foreground px-6">
                        <div className="w-32 h-32 rounded-3xl bg-background flex items-center justify-center mx-auto mb-6 border-2 border-primary-foreground/40 overflow-hidden shadow-lg">
                          <img
                            src={needinLogo}
                            alt="Needin Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Needin</h3>
                        <p className="text-sm opacity-80">Services & Delivery</p>

                        {/* Fake UI elements */}
                        <div className="mt-8 space-y-3">
                          <div className="h-10 bg-primary-foreground/20 rounded-xl" />
                          <div className="h-10 bg-primary-foreground/20 rounded-xl" />
                          <div className="h-12 bg-primary-foreground/30 rounded-xl flex items-center justify-center">
                            <span className="font-semibold">Get Started</span>
                          </div>
                        </div>
                      </div>

                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
