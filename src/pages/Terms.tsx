import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm mb-10">
    <h2 className="text-2xl font-bold text-primary mb-4">
      {title}
    </h2>
    <div className="text-muted-foreground space-y-3 leading-relaxed">
      {children}
    </div>
  </div>
);

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>NEEDIN APP – TERMS & CONDITIONS</title>
        <meta name="description" content="Needin Privacy Policy" />
      </Helmet>

      <Header />

      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                NEEDIN APP – TERMS & CONDITIONS
              </h1>
              <p className="text-lg font-semibold mb-2">(Including Needin Vendor Services & Needin Express) <br />
                <strong>Operated by Viec Carry India Pvt Ltd
                </strong></p>

              <div className="text-muted-foreground text-lg leading-relaxed space-y-4 mt-8">

                <h2 className="text-2xl font-bold text-foreground">
                  1. Platform Role
                </h2>
                <p>
                  Needin is a technology-based platform operated by Viec Carry India Pvt Ltd that connects users with independent third-party vendors onboarded on the platform and independent delivery partners.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  2. Applicability
                </h2>
                <p>
                  These Terms & Conditions apply to all users of the Needin App, including vendor services and Needin Express delivery service.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  3. Acceptance of Terms
                </h2>
                <p>
                  By accessing, registering, or using the Needin App, users agree to comply with and be bound by these Terms & Conditions.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  4. Mandatory Acceptance
                </h2>
                <p>
                  Acceptance of these Terms is mandatory. Users cannot access or use the app without agreeing to them.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  5. Legal Capacity
                </h2>
                <p>
                  Users must be legally capable of entering into a binding agreement under Indian law.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  6. Age Restriction
                </h2>
                <p>
                  Users must be at least 18 years of age to register and use the Needin App and its services.
                </p>
                <p>
                  If user is below age 18 only use needin express service not make a needin vendor.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  7. User Information
                </h2>
                <p>
                  Users are responsible for providing accurate, complete, and updated information during registration and service usage.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  8. Account Suspension
                </h2>
                <p>
                  The company reserves the right to suspend or terminate accounts providing false, misleading, or incomplete information.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  Intellectual Property Rights <br /><br />
                  9. Intellectual Property
                </h2>
                <p>
                  All content, trademarks, logos, app design, software, text, graphics, and material available on the Needin App are the exclusive property of Viec Carry India Pvt Ltd. <br />
                  Unauthorized copying, modification, reproduction, distribution, or misuse of any intellectual property is strictly prohibited and may result in legal action.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  Vendor Services <br /><br />
                  10. Independent Vendors
                </h2>
                <p>
                  Vendor services listed on the app are provided by independent third-party vendors and not by the company itself.
                </p>
                <p>
                  <strong>10 B.</strong><br />
                  The Company reserves the right to monitor, review, and control vendor performance
                  on the platform to maintain service quality and customer trust.
                  <br />If any vendor provides poor-quality service, engages in misconduct, violates
                  platform policies, or receives repeated customer complaints, the Company may,
                  at its sole discretion: <br />
                  (a) Issue warnings or temporary restrictions; <br />
                  (b) Suspend or permanently block the vendor’s account; <br />
                  (c) Remove the vendor from specific service categories; or <br />
                  (d) Terminate access to the platform without prior notice. <br />
                  Where reasonably possible, the Company may attempt to facilitate resolution
                  or corrective action between the vendor and the customer; however, the Company
                  does not guarantee rectification of vendor services and does not assume
                  responsibility for the outcome of such services.
                </p>
                <p>
                  This policy is implemented solely to maintain platform integrity, service
                  standards, and user safety and does not create any employer-employee or agency
                  relationship between the Company and the vendor.

                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  Needin Express – Delivery Service <br /><br />
                  11. Delivery Facilitation
                </h2>
                <p>
                  Needin Express is a delivery facilitation service that connects users with independent delivery partners.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  12. No Employment Relationship
                </h2>
                <p>
                  Delivery partners are not employees, agents, or representatives of Viec Carry India Pvt Ltd.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  13. Permitted Items
                </h2>
                <p>
                  Users must ensure that parcels contain only legal, safe, and permitted items.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  14. Prohibited Items
                </h2>
                <p>
                  Sending illegal, prohibited, hazardous, flammable, explosive, narcotic items, cash, jewellery, or restricted goods is strictly prohibited.
                </p>


                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  15. Sender Responsibility
                </h2>
                <p>
                  The sender is fully responsible for parcel contents, packaging quality, and correct declaration.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  16. No Liability
                </h2>
                <p>
                  The company shall not be liable for any loss, damage, theft, delay, or non-delivery of parcels.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  17. Estimated Timelines
                </h2>
                <p>
                  Pickup and delivery timelines shown in the app are estimates and not guaranteed.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  18. Delay Factors
                </h2>
                <p>
                  Delays may occur due to traffic, weather conditions, technical issues, or other uncontrollable factors.
                </p>
                <p><strong>18A. Force Majeure.</strong>
                  The Company shall not be liable for any failure or delay in performance caused by events beyond its reasonable control, including but not limited to natural disasters, government actions, strikes, internet or network failures, or technical issues.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  19. Delivery Charges
                </h2>
                <p>
                  Delivery charges are calculated based on distance, parcel size, weight, and applicable platform fees.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  20. Payments
                </h2>
                <p>
                  Payments must be completed successfully before a service or delivery request is processed.
                </p>
                <p>
                  Delivery charges once paid are generally non-refundable unless expressly stated or required by law.
                </p>
                <p>
                  Refunds for vendor services, if any, shall be subject to the respective vendor’s policy and the Company’s applicable guidelines.
                </p>
                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  21. Payment Failure
                </h2>
                <p>
                  In case of payment failure, the request may be cancelled automatically without liability.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  22. Cancellation Policy
                </h2>
                <p>
                  Once a parcel has been picked up, cancellation of the delivery request is not permitted.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  23. Availability
                </h2>
                <p>
                  Users must ensure availability at the pickup and delivery locations at the scheduled time.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  24. Address Accuracy
                </h2>
                <p>
                  Incorrect address details may result in delays, additional charges, or cancellation.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  25. Recipient Unavailability
                </h2>
                <p>
                  If the recipient is unavailable, reattempt or return charges may apply.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  User Conduct & App Usage <br /><br />
                  26. User Conduct
                </h2>
                <p>
                  Users shall not misuse the app for fraud, abuse, illegal activities, harassment, posting false reviews, defamatory content, or unauthorized commercial purposes. <br />
                  The company reserves the right to remove content, restrict access, or take legal action against violators.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  Important Legal Clauses <br /><br />
                  27. User Responsibility & Indemnity
                </h2>
                <p>
                  Users agree to indemnify and hold harmless Viec Carry India Pvt Ltd from any claims, losses, damages, liabilities, penalties, or legal costs arising from misuse of the app, violation of laws, incorrect information, or disputes with vendors or delivery partners.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  28. Data Privacy & Information Usage
                </h2>
                <p>
                  User data shall be collected, stored, and used in accordance with the company’s Privacy Policy. Reasonable security measures shall be taken; however, the company shall not be liable for unauthorized access beyond its control.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  29. No Insurance Disclaimer
                </h2>
                <p>
                  Parcels sent through Needin Express are not insured unless expressly stated. Users are advised not to send high-value or sensitive items.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  30. Service Modification & Availability
                </h2>
                <p>
                  Viec Carry India Pvt Ltd reserves the right to modify, suspend, or discontinue any part of the app or its services at any time without prior notice or liability.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  31. Monitoring & Enforcement
                </h2>
                <p>
                  The company reserves the right to monitor usage and take action against suspicious or abusive activities.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  32. Account Termination
                </h2>
                <p>
                  Accounts may be suspended or permanently terminated without prior notice in case of violation of these Terms.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  33. Limitation of Liability
                </h2>
                <p>
                  The company acts only as a platform provider and shall not be responsible for indirect, incidental, or consequential damages.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  34. Amendments
                </h2>
                <p>
                  The company may modify or update these Terms & Conditions at any time. Updated Terms become effective upon publication in the app.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  35. Governing Law & Jurisdiction
                </h2>
                <p>
                  These Terms shall be governed by and interpreted in accordance with the laws of India. Courts at <strong>Meerut, Uttar Pradesh, India</strong> shall have exclusive jurisdiction.
                </p>
                <p>
                  <strong>35A. Dispute Resolution</strong>
                </p>
                <p>
                  Any dispute arising out of or in connection with these Terms shall be resolved amicably.
                </p>
                <p>
                  If unresolved, disputes may be referred to arbitration in accordance with applicable laws of India.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  36. Communication Consent
                </h2>
                <p>
                  By using the Needin App, users consent to receive calls, SMS, WhatsApp messages, emails, and push notifications related to service updates, verification, transactions, and promotional communications.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  37. Contact Information
                </h2>
                <p>
                  For any queries related to these Terms & Conditions, users may contact <strong>Viec Carry India Pvt Ltd</strong> through official contact details provided in the app or visit <br /> <a href="www.vieccarryindia.com" target="_blank">www.vieccarryindia.com</a>
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

export default Terms;
