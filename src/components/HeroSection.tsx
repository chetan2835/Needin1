import { Button } from "@/components/ui/button";
import { Download, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import heroImage from "@/assets/hero-bg-final.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const badgeRef = useScrollAnimation<HTMLDivElement>({ type: "fadeIn", delay: 0.1 });
  const headlineRef = useScrollAnimation<HTMLHeadingElement>({ type: "fadeUp", delay: 0.2 });
  const subheadRef = useScrollAnimation<HTMLParagraphElement>({ type: "fadeUp", delay: 0.3 });
  const ctaRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", delay: 0.4 });
  const statsRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", delay: 0.5 });
  const parallaxBgRef = useParallax<HTMLDivElement>({ speed: 0.3, direction: "down" });
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted snap-start">
      {/* Hero Background Image with Parallax */}
      <div
        ref={parallaxBgRef}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent z-[1]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-6 border border-primary/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-foreground/90 text-sm font-medium tracking-wide">
              {t("hero.tagline")}
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {t("hero.services")} & {t("hero.delivery")} {" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
                {t("hero.needin")} - App
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadRef}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
          >
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-[0_10px_40px_-10px] shadow-primary/50 transition-all duration-300 hover:shadow-[0_15px_50px_-10px] hover:shadow-primary/60 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Download className="w-5 h-5 mr-2" />
              {t("header.downloadApp")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/become-vendor">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border/50 text-foreground hover:bg-muted/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm text-lg px-8 py-6 w-full sm:w-auto rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Users className="w-5 h-5 mr-2" />
                {t("header.becomeVendor")}
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-8">
            {[
              { value: "27+", label: t("services.title") },
              { value: "5000+", label: t("header.becomeVendor") },
              { value: "PAN", label: "India" },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative text-center sm:text-left p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                  <div
                    className="text-3xl md:text-4xl font-bold text-foreground mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
