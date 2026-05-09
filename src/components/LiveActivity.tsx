
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Truck, Wrench, Sparkles } from "lucide-react";

// Dummy data for activity simulation
const activities = [
    { text: "Rajesh (Mumbai) booked a Plumber", icon: Wrench, color: "text-blue-500" },
    { text: "Priya (Delhi) sent a parcel via Express", icon: Truck, color: "text-orange-500" },
    { text: "Amit (Bangalore) just joined as a Vendor", icon: Sparkles, color: "text-yellow-500" },
    { text: "Sneha (Pune) booked Home Cleaning", icon: CheckCircle, color: "text-green-500" },
    { text: "Vikram (Hyderabad) sent documents to Chennai", icon: Truck, color: "text-orange-500" },
];

const LiveActivity = () => {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show first notification after a delay
        const initialTimer = setTimeout(() => setVisible(true), 3000);

        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % activities.length);
                setVisible(true);
            }, 500); // Wait for exit animation
        }, 8000); // Change every 8 seconds

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    const Activity = activities[current];

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, x: -20 }}
                    className="fixed bottom-24 left-6 z-40 hidden md:flex items-center gap-3 bg-background/80 backdrop-blur-md border border-border p-3 rounded-2xl shadow-lg max-w-[300px]"
                >
                    <div className={`p-2 rounded-full bg-muted ${Activity.color}`}>
                        <Activity.icon className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-foreground">{Activity.text}</p>
                        <p className="text-[10px] text-muted-foreground">Just now</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LiveActivity;
