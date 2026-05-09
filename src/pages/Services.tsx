import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCategories from "@/components/ServiceCategories";
import ExpressDelivery from "@/components/ExpressDelivery";
import DownloadApp from "@/components/DownloadApp";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Needin | 27+ Local Service Categories</title>
        <meta name="description" content="Explore 27+ verified vendor services including home repair, cleaning, personal care, transport, and Travel-Based Delivery across India." />
      </Helmet>

      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto font-bold">
              Verified local vendors across 27+ categories plus Travel-Based Delivery across India.
            </p>
          </div>
        </section>

        <ServiceCategories />
        <ExpressDelivery />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
};

export default Services;
