import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, CreditCard, Shield, Users, TrendingUp, Headphones, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FloatingCard from "@/components/3d/FloatingCard";

const BecomeVendor = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const benefitsRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.1 });
  const stepsRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.2 });
  const ctaRef = useScrollAnimation<HTMLDivElement>({ type: "scale", delay: 0.2 });
  const benefits = [
    { icon: MapPin, title: "City-wise Customer Reach", description: "Get connected with customers in your local area" },
    { icon: Clock, title: "Flexible Working Hours", description: "Work on your own schedule, be your own boss" },
    { icon: CreditCard, title: "Subscription-based Onboarding", description: "Affordable plans to get started" },
    { icon: Shield, title: "Verified Platform Support", description: "Build trust with verified badge" },
    { icon: TrendingUp, title: "Grow Your Business", description: "Expand your customer base with Needin" },
    { icon: Headphones, title: "Dedicated Support", description: "Our team is here to help you succeed" },
  ];

  const steps = [
    { number: "1", title: "Register on Needin", description: "Create your vendor account with basic details" },
    { number: "2", title: "Complete KYC Verification", description: "Submit required documents for verification" },
    { number: "3", title: "Activate Subscription", description: "Choose a plan that suits your business" },
    { number: "4", title: "Go Live & Start Earning", description: "Start receiving orders from customers" },
  ];

  return (
    <>
      <Helmet>
        <title>Become a Vendor - Needin | Grow Your Business</title>
        <meta name="description" content="Join Needin as a vendor and grow your business. Reach more customers, flexible working, and verified platform support. Register now!" />
      </Helmet>

      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Join Needin as a Needin Partner
            </h1>
            <p ref={headerRef} className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 font-bold">
              Grow your business with Needin and reach more customers in your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-bold">
                Register Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
             
              <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent w-full sm:w-auto font-bold">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp: +91 9286783640
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Why Partner with Needin?
              </h2>
              <p className="text-muted-foreground font-bold">
                Join thousands of vendors already earning with Needin.
              </p>
            </div>

            <div ref={benefitsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <FloatingCard key={index} className="h-full" glowColor="hsl(var(--primary))">
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-lg transition-shadow h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground font-bold">{benefit.description}</p>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                How to Get Started
              </h2>
              <p className="text-muted-foreground font-bold">
                Four simple steps to become a Needin vendor.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div ref={stepsRef} className="grid md:grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <FloatingCard key={index} className="h-full" glowColor="hsl(var(--accent))">
                    <div className="relative bg-card rounded-2xl p-6 shadow-card border border-border h-full">
                      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold shadow-lg z-10">
                        {step.number}
                      </div>
                      <div className="pl-4 pt-2">
                        <h3 className="font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{step.title}</h3>
                        <p className="text-sm text-muted-foreground font-bold">{step.description}</p>
                      </div>
                      <CheckCircle className="absolute bottom-4 right-4 w-5 h-5 text-accent opacity-50" />
                    </div>
                  </FloatingCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div ref={ctaRef} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-16 text-center shadow-lg border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Start Earning?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-bold">
                Join Needin today and be part of India's growing hyperlocal service network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-hero border-0">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contact on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BecomeVendor;
