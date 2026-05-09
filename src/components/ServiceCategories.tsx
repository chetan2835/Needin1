import {
  Wrench, Droplets, Zap, Wind, Flame, WashingMachine,
  Sparkles, Home, Car, PartyPopper, Bird, Scissors,
  Heart, User, GraduationCap, Key, Circle, BookOpen,
  ThermometerSun, Snowflake, Waves
} from "lucide-react";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServiceCategories = () => {
  const categories = [
  {
    title: "Home & Repair Services",
    icon: Home,
    color: "from-emerald-600 to-emerald-500", // Strong green
    services: [
      { name: "AC / Refrigerator Mechanic", icon: Snowflake },
      { name: "Electrician", icon: Zap },
      { name: "Plumber", icon: Droplets },
      { name: "RO Mechanic", icon: Waves },
      { name: "Geyser Repair", icon: ThermometerSun },
      { name: "Washing Machine / Cooler Mechanic", icon: WashingMachine },
      { name: "Gas / Stove / Cooker Mechanic", icon: Flame },
      { name: "Submersible Mechanic", icon: Wrench },
      { name: "Water Tank Cleaner", icon: Droplets },
    ],
  },
  {
    title: "Cleaning & Household",
    icon: Sparkles,
    color: "from-teal-500 to-teal-400", // Teal green
    services: [
      { name: "Bathroom Cleaning", icon: Sparkles },
      { name: "House Help", icon: Home },
      { name: "Maid", icon: User },
      { name: "Sweeper", icon: Wind },
      { name: "Car Cleaner", icon: Car },
    ],
  },
  {
    title: "Event & Special",
    icon: PartyPopper,
    color: "from-lime-500 to-lime-400", // Lime green
    services: [
      { name: "Balloon Vendor", icon: PartyPopper },
      { name: "Bird Net & Chick Services", icon: Bird },
    ],
  },
  {
    title: "Personal & Wellness",
    icon: Heart,
    color: "from-green-500 to-green-400", // Pure green
    services: [
      { name: "Barber", icon: Scissors },
      { name: "Beauty Parlour", icon: Sparkles },
      { name: "Massage Therapist (Male)", icon: Heart },
      { name: "Massage Therapist (Female)", icon: Heart },
      { name: "Yoga Teacher", icon: User },
    ],
  },
  {
    title: "Transport & Drivers",
    icon: Car,
    color: "from-emerald-500 to-teal-500", // Green-teal blend
    services: [
      { name: "Daily Driver", icon: Car },
      { name: "Chauffeur", icon: User },
    ],
  },
  {
    title: "Utility & Local Support",
    icon: Key,
    color: "from-green-600 to-lime-500", // Olive style
    services: [
      { name: "Duplicate Key Maker", icon: Key },
      { name: "Tyre Puncture", icon: Circle },
    ],
  },
  {
    title: "Labour & Education",
    icon: GraduationCap,
    color: "from-emerald-700 to-emerald-500", // Deep forest green
    services: [
      { name: "Labour (Men)", icon: Wrench },
      { name: "Home Tutors", icon: BookOpen },
    ],
  },
];


  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const gridRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            27+ Service Categories
          </h2>
          <p className="text-muted-foreground font-bold">
            Verified local vendors across all essential service categories.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FloatingCard key={index} className="h-full" glowColor="hsl(var(--primary))">
              <div
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 border border-border group h-full"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-5`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-primary-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Services List */}
                <div className="p-5">
                  <ul className="space-y-3">
                    {category.services.map((service, sIndex) => (
                      <li
                        key={sIndex}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer group/item font-bold"
                      >
                        <service.icon className="w-4 h-4 text-primary group-hover/item:scale-110 transition-transform" />
                        <span>{service.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 font-bold">
          Services may vary by city. All vendors are onboarded after verification and subscription activation.
        </p>
      </div>
    </section>
  );
};

export default ServiceCategories;
