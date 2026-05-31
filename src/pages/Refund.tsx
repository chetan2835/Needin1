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
                Cancellation & Refund Policy
              </h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg mb-6 font-semibold">
                  Last update MAY 06, 2026
                </p>

                <p className="mb-6">
                  This Cancellation and Refund Policy (the “Policy”) is made by viec carry india Private Limited, a private limited company incorporated under the Companies Act, 2013, (hereinafter referred to as “Needin ” or the “Company”, which expression shall, unless the context otherwise requires, be deemed to mean and include its successor and permitted assigns). Needin operates through a technology enabled platform (the “Platform”) providing house keeping services with travel based delivery service and other services (the “Service(s)”) to users (defined below) through service partner (defined below). The Platform solely acts as an intermediary facilitating service partner s (the “Service partner (s)”) and customers (the “User(s)”). This Platform does not provide any Service directly.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Services offered on the Platform</h2>
                <p className="mb-4">The Platform offers the following Services:</p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Instant Services</strong> - Services which are provided by the Service partner immediately or within a short period of time.</li>
                  <li><strong>Scheduled Services</strong> - Services that are provided at a later date and time.</li>
                  <li><strong>Recurring Services</strong> - Services booked on a weekly, monthly, or custom recurring basis.</li>
                </ol>
                <p className="mb-6">Each of the above Services have different cancellation and refund mechanisms.</p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Cancellation</h2>
                <ol className="list-decimal pl-6 mb-6 space-y-4">
                  <li><strong>Instant Services</strong> - Once a Service partner has been assigned or has commenced the provision of Services, the User shall not be entitled to cancel such Services. In the event that a Service partner has not yet been assigned, the User may cancel the Services availed through the Platform.</li>
                  <li><strong>Scheduled Services</strong> - For scheduled Services the following are the cancellation timelines:
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>If a cancellation occurs 4 (four) or more hours prior to the Scheduled Service Time, the User shall be entitled to a full refund.</li>
                      <li>If a cancellation occurs within a period of not less than 1 (one) hour and not more than 4 (four) hours prior to the Scheduled Service Time, the Company shall refund up to 50% (fifty percent) of the amount paid by the User.</li>
                      <li>If a cancellation occurs less than 1 (one) hour prior to the Scheduled Service Time, the Company shall not be liable to provide any refund.</li>
                      <li>For scheduled services, if the User is not available at the scheduled time and location, it shall be treated as a "no-show." Any instance of a no-show shall not be eligible for a refund.</li>
                    </ul>
                  </li>
                  <li><strong>Recurring Services</strong> -
                    <br /><br /><strong>Cancellation of Individual Sessions</strong>
                    <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                      <li>Users may cancel an individual session within a recurring plan at no cost, provided the cancellation is made at least 4 hours prior to the scheduled start time.</li>
                      <li>Cancellations made with less than 4 (Four) hours’ notice or a no show , will result in a late cancellation fee equal to 100% of the session cost.</li>
                    </ul>
                    <strong>Cancellation of Entire Plan</strong>
                    <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                      <li>Users may terminate a recurring plan at any time.</li>
                      <li>Any sessions scheduled within Four (4) hours of a plan cancellation shall remain billable and non-refundable,</li>
                      <li>Any future sessions beyond this period shall not be charged.</li>
                    </ul>
                    <strong>Service Suspension (Pausing)</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>Recurring Services may be paused through the app at any time by the User.</li>
                      <li>Any period which is paused by the User shall not be subject to any refund.</li>
                      <li>During the pause period, the User will not be charged.</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Cancellations by service partner or the Company</h2>
                <p className="mb-6">
                  If cancellation is carried out by the Company or the Service partner , the User shall receive the full amount of refund. The User shall be offered the option to reschedule the Service or be provided with equivalent service credits.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Refunds</h2>
                <ol className="list-decimal pl-6 mb-6 space-y-4">
                  <li><strong>Instant Services</strong> - Refunds for Instant Services shall be only provided in the following cases:
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>If the Service partner did not arrive at the assigned time;</li>
                      <li>Service provided by the Service partner was different from what was requested by the User; or</li>
                      <li>Service could not be completed due to reasons by the Service partner .</li>
                    </ul>
                  </li>
                  <li><strong>Scheduled Services</strong> - User will receive refunds if the cancellation timeline is followed as per point 3.</li>
                  <li><strong>Recurring Services</strong> - Users may cancel an individual session within a recurring plan at no cost, provided the cancellation is made at least 4 (Four) hours prior to the scheduled start time and will be subject to refund. Any Services that are booked using coupons or discounts are not eligible for a refund. If promotional credits are refunded, they will be reissued as service credits.</li>
                </ol>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Quality Issues</h2>
                <p className="mb-4">
                  Any quality issues with respect to the Service provided by the Service partner must be reported by the User within 24 (Twenty Four ) hours of the Service. Service quality issues must be reported to the following mail <a href="mailto:help@withneedin.com" className="text-primary hover:underline">help@withneedin.com</a>. If the User is not satisfied with the Service provided by the Service partner , Users may receive either of the following:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Partial or full refund based on a case to case basis;</li>
                  <li>Equivalent Amount of Service credits’; or</li>
                  <li>Re-service.</li>
                </ul>
                <p className="mb-6">
                  Any quality-related issue shall be subject to internal review by the Company and will be determined on a case-by-case basis.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Refund Processing Timeline</h2>
                <p className="mb-6">
                  Any refunds initiated by the Company shall be processed within 7 (Seven) to 10 (Ten) business days and credited to the User’s original mode of payment.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Notice for Refunds/ Cancellations</h2>
                <p className="mb-6">
                  Any issues related to refunds and cancellations must be raised within 1 (ONE ) days receiving the Service. This notice shall be applicable for instant Services, scheduled and recurring Services.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Misuse of Policy</h2>
                <p className="mb-6">
                  The Company reserves the right to refuse any refunds in case the Company reasonably believes that there are repeated cancellations or fraudulent activities carried out.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Force Majeure</h2>
                <p className="mb-4">
                  The Company shall not be liable for any delays or cancellations which are beyond its reasonable control. These events include the following:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Acts of God;</li>
                  <li>Natural disasters (such as floods, earthquakes, or epidemics);</li>
                  <li>War;</li>
                  <li>Terrorism;</li>
                  <li>Civil commotion;</li>
                  <li>Epidemics, pandemics</li>
                  <li>Riots;</li>
                  <li>Strikes or labour disputes (not involving the affected Party’s workforce);</li>
                  <li>Governmental actions, orders or restrictions;</li>
                  <li>Failure of utilities; or</li>
                  <li>any other event which is unforeseeable and beyond the reasonable control of the affected Party.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Contact Us</h2>
                <p>
                  For any questions or concerns pertaining to this Policy, please contact <a href="mailto:help@withneedin.com" className="text-primary hover:underline">help@withneedin.com</a>
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
