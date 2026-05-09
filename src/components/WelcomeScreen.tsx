import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import needinLogo from "@/assets/needin-logo.png";
import heroBg from "@/assets/welcome-bg.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
    onExplore: () => void;
}

const WelcomeScreen = ({ onExplore }: WelcomeScreenProps) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleExplore = () => {
        setIsVisible(false);
        setTimeout(onExplore, 500); // Wait for exit animation
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden font-sans"
                >
                    {/* Background Image & Overlay */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 10, ease: "linear" }}
                            className="w-full h-full"
                        >
                            <img
                                src={heroBg}
                                alt="City Skyline"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        {/* Warm Sunset Overlay to match the provided image style */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/80 via-white/40 to-orange-900/30 backdrop-blur-[1px]" />
                        <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 w-full h-full text-center flex flex-col items-center justify-center overflow-y-auto py-10">
                        <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-min my-auto">

                            {/* Logo */}
                            <motion.img
                                src={needinLogo}
                                alt="Needin Logo"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                                className="w-24 md:w-32 lg:w-48 mb-4 md:mb-8 drop-shadow-2xl flex-shrink-0"
                            />

                            {/* Headline */}
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-[#2D2D2D] mb-2 md:mb-4 leading-tight tracking-tight drop-shadow-sm"
                            >
                                A Trusted Peer-to-Peer Express Delivery Network
                            </motion.h1>

                            {/* Sub-headline */}
                            <motion.h2
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="text-base md:text-2xl font-bold text-[#A04000] mb-4 md:mb-8 max-w-3xl"
                            >
                                for Urgent City-to-City Deliveries, Verified Travelers, and Faster-than-Courier Shipping
                            </motion.h2>

                            {/* Body Text */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="mb-8 md:mb-12 max-w-3xl text-sm md:text-lg text-gray-800 font-medium leading-relaxed drop-shadow-sm bg-white/30 p-4 md:p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg"
                            >
                                <p className="mb-2 md:mb-4">
                                    Through <span className="text-[#D35400] font-bold">verified travelers</span>, <span className="text-[#D35400] font-bold">strong KYC</span>, and <span className="text-[#D35400] font-bold">secure OTP-based delivery</span>, Needin enables people to send small, urgent parcels between cities in just <span className="text-[#D35400] font-bold">hours, not days</span>.
                                </p>
                                <p>
                                    By leveraging existing travel routes, Needin creates a faster, more affordable, and safer alternative to traditional courier services, while allowing travelers to earn on the go.
                                </p>
                            </motion.div>

                            {/* Button */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ delay: 1.1, duration: 0.5 }}
                                className="flex-shrink-0 pb-10"
                            >
                                <Button
                                    onClick={handleExplore}
                                    className="bg-gradient-to-r from-[#E67E22] to-[#D35400] hover:from-[#D35400] hover:to-[#A04000] text-lg md:text-2xl font-bold py-4 md:py-8 px-8 md:px-12 rounded-2xl shadow-[0_4px_14px_0_rgba(230,126,34,0.39)] transition-all duration-300 border-2 border-[#F39C12]/20"
                                >
                                    Explore Needin
                                    <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeScreen;
