import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy - Needin</title>
        <meta name="description" content="Read Needin's refund and cancellation policy for services and delivery." />
      </Helmet>

      <Header />
      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Refund & Cancellation Policy
              </h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg mb-6">
                  Last updated: December 2024
                </p>

                <p className="mb-6">
                  Refunds are processed as per service type and applicable conditions. Please read this policy carefully before booking any service.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Cancellation Policy</h2>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">For Customers:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Free cancellation up to 1 hour before scheduled service</li>
                  <li>Cancellation within 1 hour may incur a small convenience fee</li>
                  <li>No cancellation after vendor has started the service</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">For Vendors:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Vendors should inform customers in advance if unable to provide service</li>
                  <li>Repeated cancellations may affect vendor ratings and visibility</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Refund Policy</h2>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Eligible for Refund:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Service not provided as described</li>
                  <li>Vendor did not arrive for scheduled appointment</li>
                  <li>Double payment or technical errors</li>
                  <li>Delivery not completed for Needin Express</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Refund Process:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Submit refund request through the app or contact support</li>
                  <li>Refund requests are reviewed within 24-48 hours</li>
                  <li>Approved refunds are processed within 5-7 business days</li>
                  <li>Refunds are credited to the original payment method</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Needin Express Delivery</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Full refund if parcel not picked up</li>
                  <li>Partial refund for delayed deliveries (case by case)</li>
                  <li>Compensation for damaged items as per our insurance policy</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact for Refunds</h2>
                <p>
                  For refund queries, contact us at:{" "}
                  <a href="mailto:needinexpress06@gmail.com" className="text-primary hover:underline">
                    needinexpress06@gmail.com
                  </a>{" "}
                  or contact via WhatsApp{" "}
                  <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +91 9286783640
                  </a>
                  <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +91 9286783640
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Refund;
