import { ArrowRight } from "lucide-react";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServiceCategories = () => {
  // You can manually add more services here
  const services = [
    { name: "Car Wash", image: "/images/services/car-wash.png" },
    { name: "Bike Wash", image: "/images/services/bike-wash.png" },
    { name: "Water Tank Cleaning", image: "/images/services/water-tank.png" },
    { name: "Kitchen Cleaning", image: "/images/services/kitchen-clean.png" },
    { name: "Kitchen Prep", image: "/images/services/kitchen-prep.png" },
    { name: "Bath Cleaning", image: "/images/services/bath-clean.png" },
    { name: "Fridge Cleaning", image: "/images/services/fridge-clean.png" },
    { name: "Packing or Unpacking", image: "/images/services/packing.png" },
    { name: "Utensils", image: "/images/services/utensils.png" },
    { name: "Dusting, Brooming & Mopping", image: "/images/services/dusting-mopping.png" },
    { name: "Wardrobe Shifted", image: "/images/services/wardrobe.png" },
    { name: "Ironing & Folding", image: "/images/services/ironing.png" },
    { name: "Window Cleaning", image: "/images/services/window-clean.png" },
    { name: "Laundry Service", image: "/images/services/laundry.png" },
    { name: "Balcony Cleaning", image: "/images/services/balcony-clean.png" },
    { name: "Fan Cleaning", image: "/images/services/fan-clean.png" },
    { name: "Full Kitchen Cabinet Cleaning", image: "/images/services/cabinet-clean.png" },
    { name: "Gardner", image: "/images/services/gardner.png" },
    { name: "Elder Care", image: "/images/services/elder-care.png" },
    { name: "Baby Care", image: "/images/services/baby-care.png" },

  ];

  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const gridRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Services
          </h2>
          <p className="text-muted-foreground font-bold">
            Verified professionals across all essential service categories.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <FloatingCard key={index} className="h-full" glowColor="hsl(var(--primary))">
              <div
                className="bg-card rounded-[2rem] p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-border group h-full flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="bg-muted/50 rounded-[1.5rem] overflow-hidden relative mb-4 aspect-square flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback placeholder if image is not found
                      e.currentTarget.src = `https://placehold.co/400x400/f1f5f9/64748b?text=${encodeURIComponent(service.name)}`;
                    }}
                  />
                </div>
                
                {/* Text and Arrow */}
                <div className="px-2 pb-2 flex flex-col flex-grow justify-between">
                  <h3 className="font-bold text-base md:text-lg text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.name}
                  </h3>
                  {/* <div className="flex justify-end mt-auto">
                    <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-1 transition-transform" />
                  </div> */}
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 font-bold">
          Services may vary by city. All professional are onboarded after verification and subscription activation.
        </p>
      </div>
    </section>
  );
};

export default ServiceCategories;
