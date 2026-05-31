import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";


const VendorAgreement = () => {
  return (
    <>
      <Helmet>
        <title>Needin Professional Agreement</title>
        <meta name="description" content="Needin Professional Agreement" />
      </Helmet>

      <Header />

      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                NEEDIN VENDOR AGREEMENT
              </h1>
              <p className="text-lg font-semibold mb-2">
                This Professional Agreement (“Agreement”) is entered into between:              </p>

              <div className="text-muted-foreground text-lg leading-relaxed space-y-4 mt-8">

                <h2 className="text-2xl font-bold text-foreground">
                  Company
                </h2>

                <p className="font-semibold">Viec Carry India Pvt Ltd</p>
                <p>a company incorporated under the Companies Act, 2013, <br />
                  having its registered office at: <br />
                  BG-60 , Balaji Garden Main NH-58, Front of Police Chowki, <br />
                  Yogi Puram, Meerut – 250001, Uttar Pradesh, India <br />
                  Email:support@withneedin.com <br />
                  Website: www.withneedin.com</p>
                <p>
                  (here in after referred to as the <strong>"Company"</strong> )
                </p>


                <p className="font-semibold">AND</p>
                <h2 className="text-2xl font-bold text-foreground">
                  Professional
                </h2>
                <p>The individual / entity registering on the <strong>Needin</strong> mobile application
                  (here in after referred to as the <strong>“Professional”</strong> )</p>

                <p>
                  The Company and the Professional are individually referred to as a “Party” and collectively as the
                  “Parties”.
                </p>


                <hr className="my-10" />

                {/* 2 */}
                <h2 className="text-2xl font-bold text-foreground">
                  1. Purpose
                </h2>
                <p>
                  The Company operates the <strong>Needin</strong> mobile application, a technology platform connecting
                  customers with independent third-party professionals. This Agreement governs the onboarding,
                  listing, and provision of professional services through the platform.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  2. Independent Professional Status
                </h2>
                <p>
                  The Professional acknowledges that:
                </p>
                <ul className="list-disc pl-8">
                  <li>The Professional is an <strong>independent service provider.</strong></li>
                  <li>No employer-employee, partnership, agency, or joint-venture relationship is created.</li>
                  <li>The Company acts <strong>only as a technology platform</strong> and does not control professional
                    services.</li>
                </ul>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  3. Eligibility & Onboarding
                </h2>
                <p>
                  The Professional must:
                </p>
                <ul className="list-disc pl-8">
                  <li>Be <strong>18 years of age or older</strong></li>
                  <li>Provide accurate details and complete KYC as required</li>
                  <li>Digitally accept this Agreement within the App.</li>
                </ul>
                <p>
                  The Company may approve or reject any application at its sole discretion.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  4. Professional Obligations
                </h2>
                <p>
                  The Professional shall:
                </p>
                <ul className="list-disc pl-8">
                  <li>Provide services lawfully, safely, and professionally;</li>
                  <li>Use appropriate skills, tools, and materials;</li>
                  <li>Comply with all applicable laws;</li>
                  <li>Behave respectfully with customers;</li>
                  <li>Not misrepresent skills, pricing, or service capability.</li>
                </ul>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  5. Service Quality Responsibility
                </h2>
                <p>
                  The Professional is <strong>solely responsible</strong> for the quality, safety, legality, and outcome of services
                  provided. The Company does not guarantee service outcomes. Service-related disputes shall
                  be primarily resolved between the Professional and the customer.
                </p>
                <p>
                  <strong>5.1.</strong> Professional agrees to meet minimum service quality standards as defined by the Company from
                  time to time via the platform dashboard.
                </p>
                <p>
                  Professional shall not represent itself as an employee, agent, or official representative of the Company
                  outside the platform.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  6. Professional Performance &amp; Quality Control Policy
                </h2>
                <p>
                  The Company reserves the right to monitor and review professional performance to maintain
                  service quality and customer trust.
                </p>
                <p>
                  If a Professional provides poor-quality service, engages in misconduct, violates platform policies,
                  or receives repeated complaints, the Company may, at its sole discretion:
                </p>
                <ul className="list-disc pl-8">
                  <li>Issue warnings or temporary restrictions;</li>
                  <li>Suspend or permanently block the Professional’s account;</li>
                  <li>Remove the Professional from specific service categories; or</li>
                  <li>Terminate access to the platform without prior notice.</li>
                </ul>
                <p>
                  Where reasonably possible, the Company may attempt to facilitate corrective action between
                  the Professional and the customer; however, the Company does not guarantee rectification and
                  does not assume responsibility for service outcomes. This policy does not create any
                  employer-employee or agency relationship.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  7. Subscription & Fees
                </h2>
                <ul className="list-disc pl-8">
                  <li>Professional onboarding is <strong>subscription-based.</strong></li>
                  <li>Subscription details are displayed in the App.</li>
                  <li><strong>Subscription fees are non-refundable</strong>, unless expressly stated.</li>
                  <li>The Company may revise subscription plans at any time.</li>
                </ul>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  8. Payments
                </h2>
                <p>
                  Payments, if applicable, are subject to Company policies. The Company does not guarantee
                  minimum earnings and is not liable for delays due to technical or banking issues.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  9. Prohibited Conduct
                </h2>
                <p>
                  The Professional shall not:
                </p>
                <ul className="list-disc pl-8">
                  <li>Provide illegal or unsafe services;</li>
                  <li>Misuse customer data;</li>
                  <li>Engage in fraud, abuse, or harassment;</li>
                  <li>Solicit customers outside the platform;</li>
                  <li>Use the Needin brand without authorization.</li>
                </ul>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  10. Suspension & Termination
                </h2>
                <p>
                  The Company may suspend or terminate the Professional’s account for policy violations, repeated
                  complaints, false information, unpaid subscriptions, or legal non-compliance. Termination
                  may be temporary or permanent, without prior notice.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  11. Intellectual Property
                </h2>
                <p>
                  All trademarks, logos, content, and technology belong exclusively to <strong>Viec Carry India Pvt
                    Ltd.</strong> No ownership rights are granted to the Professional.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  12. Data Protection
                </h2>
                <p>
                  Professional data shall be processed in accordance with the Company’s <Link to="/Privacy"><strong>Privacy Policy</strong></Link>. The
                  Professional shall not misuse customer data.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  13. Indemnity
                </h2>
                <p>
                  The Professional agrees to indemnify and hold harmless the Company from all claims, losses,
                  damages, liabilities, penalties, and legal costs arising from professional services, disputes,
                  violations, or negligence.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  14. Limitation of Liability
                </h2>
                <p>
                  The Company shall not be liable for service outcomes, customer dissatisfaction, or indirect or
                  consequential damages.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  15. Modification
                </h2>
                <p>
                  The Company may modify this Agreement at any time. Continued use of the App constitutes
                  acceptance of the updated Agreement.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  16. Governing Law & Jurisdiction
                </h2>
                <p>
                  This Agreement shall be governed by the laws of India. Courts at Meerut, Uttar Pradesh
                  shall have exclusive jurisdiction.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  17. Acceptance
                </h2>
                <p>
                  By clicking <strong>“I Agree” </strong>during onboarding on the Needin App, the Professional confirms
                  acceptance of this Agreement.
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

export default VendorAgreement;
