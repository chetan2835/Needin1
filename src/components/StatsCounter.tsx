import { Users, Package, MapPin, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Verified Vendors",
  },
  {
    icon: Package,
    value: 50000,
    suffix: "+",
    label: "Deliveries Completed",
  },
  {
    icon: MapPin,
    value: 100,
    suffix: "+",
    label: "Cities Covered",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "",
    label: "Average Rating",
    decimals: 1,
  },
];

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const stepValue = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += stepValue;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
}

const StatsCounter = () => {
  const containerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:32px_32px]" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-5 group-hover:scale-110 transition-transform duration-300 border border-primary-foreground/20">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="text-primary-foreground/80 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
