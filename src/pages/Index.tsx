import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ExpressDelivery from "@/components/ExpressDelivery";
import HowItWorks from "@/components/HowItWorks";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BecomeVendorCTA from "@/components/BecomeVendorCTA";
import DownloadApp from "@/components/DownloadApp";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Needin - Local Services & Travel-Based Delivery | Hyperlocal Platform India</title>
        <meta name="description" content="Needin connects you with verified local vendors for home repair, cleaning, personal care, and Travel-Based Delivery across India. 27+ service categories. Download now!" />
        <meta name="keywords" content="local services, travel-based delivery, home repair, plumber, electrician, AC repair, hyperlocal, India, Needin, vendor services" />
        <link rel="canonical" href="https://needin.app" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ExpressDelivery />
        <HowItWorks />
        <StatsCounter />
        <Testimonials />
        <BecomeVendorCTA />
        <DownloadApp />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
