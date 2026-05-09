
import { useRef } from "react";
import { Star, Quote, MapPin } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { cn } from "@/lib/utils";

const reviews = [
    {
        name: "Sunny Malik",
        location: "Shamli",
        service: "Electrician Service",
        rating: 5,
        review: "Needin se electrician dhundhna bahut hi easy raha. Kaam time par complete hua aur wiring quality bhi excellent thi. Charges bilkul transparent the. Definitely recommend!",
    },
    {
        name: "Munesh Devi",
        location: "Saharanpur",
        service: "Home Cleaning Service",
        rating: 5,
        review: "Mujhe urgent home cleaning service chahiye thi aur Needin ne same day trusted vendor provide kar diya. Staff polite tha aur kaam professionally hua.",
    },
    {
        name: "Mohit Kumar",
        location: "Saharanpur",
        service: "Plumbing Service",
        rating: 5,
        review: "Plumber booking ka experience kaafi smooth raha. Leakage issue properly resolve hua aur extra charge nahi liya gaya. Needin par vendors reliable hain.",
    },
    {
        name: "Aman Verma",
        location: "Delhi",
        service: "Small Parcel",
        rating: 4,
        review: "Delhi se Guwahati small parcel bhejna tha aur Needin Express ne flight ke through same-day dispatch arrange kar diya. Parcel bilkul safe mila aur live updates bhi milte rahe. Bahut trusted service!",
    },
    {
        name: "Pooja Meena",
        location: "Jaipur",
        service: "Medium Parcel",
        rating: 5,
        review: "Jaipur se Delhi medium parcel bhejna tha. Needin Express ne verified traveller arrange kiya aur delivery train ke through bilkul time par hui. Charges clear the, koi hidden cost nahi.",
    },
    {
        name: "Rohit Sharma",
        location: "Mathura",
        service: "Medium Parcel",
        rating: 5,
        review: "Mathura se Lucknow medium parcel own car ke through bheja. Driver polite tha, parcel handle bahut carefully kiya gya. Needin Express ka experience smooth aur reliable raha.",
    },
];

const ReviewCard = ({ review, index }: { review: typeof reviews[0], index: number }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-[400px] bg-card/60 dark:bg-card/40 backdrop-blur-md border border-border/50 p-6 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors mx-4"
            whileHover={{ y: -5, scale: 1.02 }}
        >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Quote Icon Background */}
            <div className="absolute -right-4 -top-4 text-primary/10 group-hover:text-primary/20 transition-colors rotate-12">
                <Quote size={120} />
            </div>

            <div className="relative z-10 w-full">
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={18}
                            className={cn(
                                "transition-colors",
                                i < review.rating ? "fill-yellow-500 text-yellow-500" : "fill-muted text-muted"
                            )}
                        />
                    ))}
                    <span className="text-sm font-medium text-muted-foreground ml-2">({review.rating}.0)</span>
                </div>

                <p className="text-lg text-foreground/90 font-medium mb-6 line-clamp-4 min-h-[120px] leading-relaxed">
                    "{review.review}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {review.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground">{review.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <MapPin size={12} /> {review.location}
                            </span>
                            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                            <span className="text-primary font-medium">{review.service}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Marquee = ({ children, direction = "left", speed = 20 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    // Duplicate children for seamless loop
    return (
        <div className="relative w-full overflow-hidden mask-gradient-x group">
            <style>{`
            .mask-gradient-x {
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            @keyframes scroll-left {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
                from { transform: translateX(-50%); }
                to { transform: translateX(0); }
            }
            .animate-scroll-left {
                animation: scroll-left var(--duration, 40s) linear infinite;
            }
            .animate-scroll-right {
                animation: scroll-right var(--duration, 40s) linear infinite;
            }
            .pause-on-hover:hover .animate-scroll-left,
            .pause-on-hover:hover .animate-scroll-right {
                animation-play-state: paused;
            }
           `}</style>

            <div
                className={cn(
                    "flex min-w-full w-max pause-on-hover py-8",
                    direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
                )}
                style={{ "--duration": `${speed}s` } as React.CSSProperties}
            >
                {children}
                {children}
            </div>
        </div>
    );
};

const VendorReviews = () => {
    return (
        <section className="py-24 bg-muted/20 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 mb-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-6"
                >
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Community Feedback</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                >
                    Trusted by Thousands of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Happy Neighbors</span>
                </motion.h2>
            </div>

            <div className="relative w-full">
                <Marquee speed={50}>
                    <div className="flex">
                        {reviews.map((review, idx) => (
                            <ReviewCard key={idx} review={review} index={idx} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default VendorReviews;
