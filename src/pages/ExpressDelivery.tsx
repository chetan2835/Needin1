import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpressDeliverySection from "@/components/ExpressDelivery";
import DownloadApp from "@/components/DownloadApp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, PackageCheck, Truck, Shield, IndianRupee } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ComingSoonBanner from "@/components/3d/ComingSoonBanner";
import { motion } from "framer-motion";

// 3D/Animation components
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function DeliveryTruck(props: JSX.IntrinsicElements['group']) {
    // Low poly truck or abstract representation
    // For now using simple geometries to represent a delivery vehicle
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + Math.PI / 1.2;
            group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Truck Body */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[2.5, 1.2, 1]} />
                <meshStandardMaterial color="#f97316" roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Truck Cab */}
            <mesh position={[1.5, 0.4, 0]}>
                <boxGeometry args={[0.8, 1.0, 1]} />
                <meshStandardMaterial color="#ea580c" roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Wheels */}
            <mesh position={[-0.8, -0.2, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[-0.8, -0.2, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[1.5, -0.2, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[1.5, -0.2, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
                <meshStandardMaterial color="#333" />
            </mesh>
        </group>
    );
}

function FloatingParcels() {
    const count = 10;
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2} position={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 5 + 2,
                    (Math.random() - 0.5) * 5 - 2
                ]}>
                    <mesh rotation={[Math.random(), Math.random(), Math.random()]}>
                        <boxGeometry args={[0.3, 0.3, 0.3]} />
                        <meshStandardMaterial color={i % 2 === 0 ? "#f97316" : "#fb923c"} />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

const ExpressDelivery = () => {
    const { pathname } = useLocation();
    const heroRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
    const stepsRef = useScrollAnimation<HTMLDivElement>({ type: "stagger" });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const deliverySteps = [
        {
            icon: PackageCheck,
            title: "List Your Parcel",
            desc: "Enter details like weight, dimensions, pickup & drop location.",
        },
        {
            icon: Truck,
            title: "Match with Traveler",
            desc: "Our AI finds verified travelers going your way.",
        },
        {
            icon: MapPin,
            title: "Real-Time Tracking",
            desc: "Track your package journey from pickup to delivery.",
        },
        {
            icon: Shield,
            title: "Secure Delivery",
            desc: "Receiver verifies with OTP. Payment is released to traveler.",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Express Delivery - Travel Based & Intercity | Needin</title>
                <meta name="description" content="Send parcels across India with verified travelers. Faster than courier, cheaper than express shipping. Book travel-based delivery on Needin." />
            </Helmet>

            <Header />

            <main className="pt-16 md:pt-20">
                <ComingSoonBanner />

                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-background to-orange-100/30 dark:from-orange-950/20 dark:to-background" />

                    {/* 3D Scene */}
                    <div className="absolute inset-0 z-0">
                        <Canvas gl={{ antialias: true }}>
                            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <Environment preset="city" />
                            <group position={[4.5, -1, 0]} rotation={[0, -0.5, 0]} scale={1.2}>
                                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                                    <DeliveryTruck />
                                </Float>
                            </group>
                            <FloatingParcels />
                        </Canvas>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            ref={heroRef}
                            className="max-w-2xl bg-background/30 backdrop-blur-sm p-6 rounded-3xl border border-white/20 shadow-xl"
                        >
                            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full px-4 py-1.5 mb-6">
                                <Truck className="w-4 h-4" />
                                <span className="text-sm font-bold uppercase tracking-wider">India's First</span>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight leading-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                Deliver Faster Via <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                    Travelers
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-medium"
                            >
                                Connect with travelers heading towards your destination and send parcels instantly. Cheaper, Faster, Greener.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform">
                                    Send a Parcel
                                </Button>
                                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-background/50">
                                    Become a Carrier
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Component Section */}
                <div className="relative z-10 bg-background">
                    <ExpressDeliverySection />
                </div>

                {/* How Travel Based Delivery Works */}
                <section className="py-20 md:py-28 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl font-bold mb-6"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                How It Works
                            </motion.h2>
                            <p className="text-xl text-muted-foreground">The most efficient way to send anything, anywhere.</p>
                        </div>

                        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {deliverySteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-card p-8 rounded-3xl border border-border/50 hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto bg-card rounded-3xl border border-border shadow-sm overflow-hidden"
                        >
                            <div className="p-8 md:p-12 text-center bg-gradient-to-br from-orange-500 to-red-600 text-white">
                                <h2 className="text-3xl font-bold mb-2">Why Switch to Needin?</h2>
                                <p className="opacity-90">Compare us with traditional Services</p>
                            </div>

                            <div className="p-8 overflow-x-auto">
                                <table className="w-full min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="text-left py-4 px-4 text-muted-foreground font-medium w-1/3">Features</th>
                                            <th className="text-left py-4 px-4 text-orange-600 font-bold text-lg w-1/3">Needin Express</th>
                                            <th className="text-left py-4 px-4 text-muted-foreground font-medium w-1/3">Traditional Services</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feat: "Speed", needin: "Same/Next Day (Direct)", trad: "3-5 Days (Hub & Spoke)" },
                                            { feat: "Cost", needin: "Up to 40% Cheaper", trad: "Expensive" },
                                            { feat: "Tracking", needin: "Live GPS on Map", trad: "Checkpoint Updates" },
                                            { feat: "Weekend Delivery", needin: "Yes, 24/7", trad: "No / Extra Charge" },
                                            { feat: "Packaging", needin: "Minimal Required", trad: "Strict Packaging Rules" }
                                        ].map((row, i) => (
                                            <motion.tr
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="border-b border-border/50 hover:bg-muted/20"
                                            >
                                                <td className="py-4 px-4 font-medium">{row.feat}</td>
                                                <td className="py-4 px-4 font-bold text-foreground">{row.needin}</td>
                                                <td className="py-4 px-4 text-muted-foreground">{row.trad}</td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <DownloadApp />
            </main>

            <Footer />
        </>
    );
};

export default ExpressDelivery;
