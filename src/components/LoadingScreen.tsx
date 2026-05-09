import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import needinLogo from "@/assets/needin-logo.png";
import heroBg from "@/assets/hero-bg-new.jpg"; // Using existing asset
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'welcome'>('loading');

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // --- LOADING PHASE LOGIC ---
  useEffect(() => {
    if (phase !== 'loading') return;

    const tl = gsap.timeline();

    // Initial Loader Entrance
    tl.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [phase]);

  // Handle Loader Completion -> Transition to Welcome
  useEffect(() => {
    if (progress >= 100 && phase === 'loading') {
      const tl = gsap.timeline({
        onComplete: () => setPhase('welcome'),
      });

      // Animate Loader Elements Out
      tl.to([logoRef.current, progressRef.current, ".loader-text"], {
        scale: 0.9,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [progress, phase]);

  // --- WELCOME PHASE ANIMATION ---
  useEffect(() => {
    if (phase === 'welcome' && welcomeRef.current) {
      const tl = gsap.timeline();

      // Animate Welcome Elements In
      tl.fromTo(welcomeRef.current.querySelectorAll(".animate-in"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [phase]);

  const handleExplore = () => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power2.inOut"
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-background text-foreground overflow-hidden font-sans"
    >
      {/* 
        =============================================
        PHASE 1: LOADER
        =============================================
      */}
      {phase === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background">
          {/* Ambient Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                }}
              />
            ))}
            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Loader Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <img
              ref={logoRef}
              src={needinLogo}
              alt="Needin Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8 drop-shadow-lg"
            />

            <div className="loader-text w-full max-w-[200px] relative">
              {/* Progress Bar Track */}
              <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  ref={progressRef}
                  className="h-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>

              <div className="mt-4 flex justify-between items-center text-sm font-medium text-muted-foreground">
                <span className="animate-pulse">Loading Experience...</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 
        =============================================
        PHASE 2: WELCOME LANDING
        =============================================
      */}
      {phase === 'welcome' && (
        <div className="absolute inset-0 flex flex-col relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 md:from-white/80 md:via-white/60 md:to-white/80 backdrop-blur-[2px]" />
          </div>

          {/* Content Container */}
          <div
            ref={welcomeRef}
            className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6 text-center pt-10 pb-10"
          >
            {/* Logo */}
            <img
              src={needinLogo}
              alt="Needin Logo"
              className="animate-in w-28 md:w-36 mb-8 drop-shadow-md"
            />

            {/* Main Headline */}
            <h1 className="animate-in text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight tracking-tight">
              A Trusted <span className="text-primary">Peer-to-Peer</span> <br className="hidden md:block" />
              Express Delivery Network
            </h1>

            {/* Sub-headline / Features */}
            <div className="animate-in flex flex-wrap justify-center gap-3 md:gap-6 mb-8 text-base md:text-lg font-semibold text-gray-700">
              <span className="flex items-center gap-2">
                Urgent City-to-City Deliveries <span className="text-primary">•</span>
              </span>
              <span className="flex items-center gap-2">
                Verified Travelers <span className="text-primary">•</span>
              </span>
              <span className="flex items-center gap-2">
                Faster-than-Courier Shipping
              </span>
            </div>

            {/* Description Text */}
            <p className="animate-in text-base md:text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed">
              Through <strong className="text-primary font-bold">verified travelers</strong>, <strong className="text-primary font-bold">strong KYC</strong>, and <strong className="text-primary font-bold">secure OTP-based delivery</strong>, Needin enables people to send small, urgent parcels between cities in just <strong className="text-orange-700 font-bold bg-orange-100 px-1 rounded">hours, not days</strong>.
              <br className="hidden md:block" />
              <span className="mt-2 block">By leveraging existing travel routes, Needin creates a faster, more affordable, and safer alternative to traditional courier services.</span>
            </p>

            {/* CTA Button */}
            <div className="animate-in">
              <Button
                onClick={handleExplore}
                size="lg"
                className="text-lg px-10 py-7 rounded-full bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-700 hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(249,115,22,0.3)] text-white font-bold group"
              >
                Explore Needin
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Bottom Decoration/Skyline Hint could go here if needed */}
          </div>
        </div>
      )}
    </div>
  );
}
