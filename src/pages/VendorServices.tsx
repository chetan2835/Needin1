import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Clock, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DownloadApp from "@/components/DownloadApp";
import ServiceCategories from "@/components/ServiceCategories";
import ComingSoonBanner from "@/components/3d/ComingSoonBanner";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import VendorReviews from "@/components/VendorReviews";

const features = [
    {
        icon: Shield,
        title: "Verified Professionals",
        description: "Every vendor undergoes a strict background check and skill verification process."
    },
    {
        icon: Clock,
        title: "On-Time Service",
        description: "We value your time. Our professionals are committed to punctuality."
    },
    {
        icon: Search,
        title: "Transparent Pricing",
        description: "Know the price before you book. No hidden charges or last-minute surprises."
    },
    {
        icon: Star,
        title: "Quality Guaranteed",
        description: "Not satisfied? We will redo the service or offer a refund according to our policy."
    }
];

const VendorServices = () => {
    const heroRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
    const stepsRef = useScrollAnimation<HTMLDivElement>({ type: "stagger" });

    return (
        <>
            <Helmet>
                <title>Vendor Services - Hire Local Experts | Needin</title>
                <meta name="description" content="Find and book verified local professionals for home repairs, cleaning, personal care, and more on Needin. Trusted vendors, transparent pricing." />
            </Helmet>

            <Header />

            <main className="pt-16 md:pt-20">
                <ComingSoonBanner />

                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden bg-background">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
                    {/* Abstract shapes */}
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            ref={heroRef}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-8 hover:bg-primary/20 transition-colors cursor-default">
                                <Star className="w-4 h-4 fill-primary" />
                                <span className="text-sm font-semibold">Over 5,000+ Verified Experts</span>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                Your Trusted Local <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Service Experts</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                            >
                                From leaky taps to hair styling, find the right professional for every need in your neighborhood.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <a href="#categories">
                                    <Button size="lg" className="text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                        Explore Services
                                    </Button>
                                </a>
                                <Link to="/become-vendor">
                                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-accent/10">
                                        Join as Professional
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Categories Grid (Reusing ServiceCategories component) */}
                <div id="categories">
                    <ServiceCategories />
                </div>

                {/* Why Choose Us */}
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl rotate-3 opacity-20" />
                                <img
                                    src={heroImage}
                                    alt="Professional at work"
                                    className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px] hover:scale-[1.02] transition-transform duration-500"
                                    onError={(e) => {
                                        // Fallback if image fails
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1581578731117-104f8a338e2d?auto=format&fit=crop&q=80&w=800";
                                    }}
                                />

                                {/* Floating badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-border animate-bounce-slow"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-green-100 text-green-600 p-3 rounded-full">
                                            <Shield className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground font-semibold">Safety First</p>
                                            <p className="text-xl font-bold">100% Verified</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <div ref={stepsRef}>
                                <motion.h2
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-3xl md:text-5xl font-bold mb-8"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Why Neighbors Trust <br />
                                    <span className="text-primary">Needin Vendors</span>
                                </motion.h2>
                                <p className="text-lg text-muted-foreground mb-12">
                                    We don't just connect you with anyone. We build relationships with the best local professionals to ensure you get top-notch service every time.
                                </p>

                                <div className="space-y-8">
                                    {features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            whileHover={{ x: 10 }}
                                            className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <feature.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                                <p className="text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16" style={{ fontFamily: 'Poppins, sans-serif' }}>How It Works</h2>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                            {[
                                { step: "1", title: "Search", desc: "Choose the service you need from our wide range of categories." },
                                { step: "2", title: "Book", desc: "Select a professional based on ratings, reviews, and price." },
                                { step: "3", title: "Relax", desc: "Get the job done. Pay securely after service completion." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative z-10"
                                >
                                    <div className="w-24 h-24 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground max-w-xs mx-auto">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <VendorReviews />

                <DownloadApp />
            </main>

            <Footer />
        </>
    );
};

export default VendorServices;
