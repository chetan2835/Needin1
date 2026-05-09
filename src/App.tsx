import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";

import WelcomeScreen from "@/components/WelcomeScreen";

import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Chatbot from "@/components/Chatbot";
import NeedinLogo from "@/assets/needin-logo.png";
import HeroImage from "@/assets/hero-image.jpg";
import Index from "./pages/Index";
import About from "./pages/About";
import Highlights from "./pages/Highlights";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import BecomeVendor from "./pages/BecomeVendor";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import ExpressDelivery from "./pages/ExpressDelivery";
import VendorServices from "./pages/VendorServices";
import VendorAgreement from "./pages/VendorAgreement";
import ExpressAgreement from "./pages/ExpressAgreement";




const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/become-vendor" element={<BecomeVendor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/vendor-services" element={<VendorServices />} />
          <Route path="/express-delivery" element={<ExpressDelivery />} />
          <Route path="/VendorAgreement" element={<VendorAgreement />} />
          <Route path="/ExpressAgreement" element={<ExpressAgreement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);


  useEffect(() => {
    // Preload critical assets
    const images = [
      NeedinLogo,
      HeroImage,
    ];

    Promise.all(
      images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
  }, []);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);



  return (
    <HelmetProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {showWelcome ? (
              <WelcomeScreen onExplore={() => setShowWelcome(false)} />
            ) : (
              <BrowserRouter>
                <ScrollProgress />
                <div className="scroll-smooth">
                  <AnimatedRoutes />
                  <BackToTop />
                  <Chatbot />
                </div>
              </BrowserRouter>
            )}
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
