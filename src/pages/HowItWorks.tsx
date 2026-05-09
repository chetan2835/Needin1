import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksComponent from "@/components/HowItWorks";
import DownloadApp from "@/components/DownloadApp";

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - Needin | Simple Steps to Get Started</title>
        <meta name="description" content="Learn how Needin works for customers, vendors, and delivery partners. Simple 4-step process to book services or start earning." />
      </Helmet>

      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How It Works
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Simple, fast, and reliable for everyone.
            </p>
          </div>
        </section>

        <HowItWorksComponent />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
