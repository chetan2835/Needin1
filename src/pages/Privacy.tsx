import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Needin</title>
        <meta name="description" content="Needin Privacy Policy" />
      </Helmet>

      <Header />

      <main className="pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                PRIVACY POLICY
              </h1>
              <p className="text-lg font-semibold mb-2">Operated by Viec Carry India Pvt Ltd</p>

              <div className="text-muted-foreground text-lg leading-relaxed space-y-4 mt-8">

                <p>
                  This Privacy Policy describes how Viec Carry India Pvt Ltd (“Company”, “we”, “our”, or “us”) collects, uses, processes, stores, and protects personal information when you access or use the mobile application (“Needin App”).
                </p>

                <p>
                  By downloading, registering, accessing, or using the Needin App, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>

                <p>This Privacy Policy applies to all services offered through the Needin App, including:</p>
                <ul className="list-disc pl-8">
                  <li>Needin Services (house help services )</li>
                  <li>Needin Express (travel-based delivery services)</li>
                </ul>

                <hr className="my-10" />

                {/* 1 */}
                <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>

                <p className="font-semibold">a) Personal Information</p>
                <p>We may collect the following personal information:</p>
                <ul className="list-disc pl-8">
                  <li>Full name</li>
                  <li>Mobile number</li>
                  <li>Email address</li>
                  <li>Pickup and delivery addresses</li>
                  <li>Profile details provided by the user</li>
                </ul>

                <hr />

                <p className="font-semibold">b) Identity Verification & KYC Information</p>
                <p>For safety, trust, fraud prevention, and legal compliance, we may collect:</p>
                <ul className="list-disc pl-8">
                  <li>Mobile number verification</li>
                  <li>Email verification</li>
                  <li>Aadhaar verification through DigiLocker or other authorized government platforms (only when legally required)</li>
                  <li>Face video recording, selfie, or image capture for identity verification and security checks</li>
                </ul>
                <p className="font-semibold mt-2">Important:</p>
                <p>
                  Aadhaar details are not stored by the Company unless legally required and are processed securely through authorized verification service providers.
                </p>

                <hr />

                <p className="font-semibold">c) Location Information</p>
                <p>
                  We may collect:
                </p>
                <ul className="list-disc pl-8">
                  <li>Real-time location data for pickup, delivery, navigation, and service facilitation</li>
                  <li>Background location data only during active service execution, tracking, safety, and delivery completion</li>
                </ul>
                <p>
                  Location data is collected strictly for service-related purposes and is disabled once the service is completed.
                </p>

                <hr />

                <p className="font-semibold">d) Transaction Information</p>
                <p>We may collect:</p>
                <ul className="list-disc pl-8">
                  <li>Order and service request details</li>
                  <li>Pickup and delivery information</li>
                  <li>Payment status and transaction reference IDs</li>
                </ul>
                <p>
                  We do not store card details, bank account information, or UPI credentials.
                </p>

                <hr />

                <p className="font-semibold">e) Device & Technical Information</p>
                <p>
                  We may automatically collect:
                </p>
                <ul className="list-disc pl-8">
                  <li>Device type, model, and identifiers</li>
                  <li>Operating system and app version</li>
                  <li>IP address</li>
                  <li>Log files, usage statistics, and crash reports</li>
                </ul>

                <hr className="my-10" />

                {/* 2 */}
                <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc pl-8">
                  <li>Provide, operate, and manage Needin services</li>
                  <li>Connect users with vendors and delivery partners</li>
                  <li>Verify identity and prevent fraud, fake accounts, or misuse</li>
                  <li>Enable secure onboarding and KYC verification</li>
                  <li>Process orders, deliveries, and payments</li>
                  <li>Improve app performance, safety, and user experience</li>
                  <li>Send OTPs, alerts, service updates, and notifications</li>
                  <li>Comply with legal, regulatory, and law-enforcement requirements</li>
                </ul>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  3. User Consent & Lawful Processing
                </h2>
                <p>
                  By using the Needin App, users provide explicit consent for the collection, processing, and usage of their personal data.
                </p>
                <p>Users may withdraw consent at any time by:</p>
                <ul className="list-disc pl-8">
                  <li>Disabling app permissions, or</li>
                  <li>Requesting account deletion</li>
                </ul>
                <p>
                  Withdrawal of consent may limit or disable certain app features, subject to legal and regulatory obligations.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  4. App Permissions
                </h2>
                <p>
                  The Needin App may request certain permissions to ensure that services are provided in a safe, reliable, and seamless manner. These permissions include:
                </p>
                
                <h3 className="text-xl font-bold mt-4">1. Location Permission (Foreground & Background)</h3>
                <ul className="list-disc pl-8">
                  <li>For pickup, delivery, navigation, and real-time tracking</li>
                  <li>Background location access is used only while a service is actively in progress</li>
                </ul>

                <h3 className="text-xl font-bold mt-4">2. Camera & Microphone Permission</h3>
                <ul className="list-disc pl-8">
                  <li>For identity verification (selfie / face video)</li>
                  <li>For uploading profile images and required documents</li>
                  <li>For customer support and security-related purposes</li>
                </ul>

                <h3 className="text-xl font-bold mt-4">3. Storage Permission</h3>
                <ul className="list-disc pl-8">
                  <li>For uploading profile photos, documents, and other necessary files</li>
                </ul>

                <h3 className="text-xl font-bold mt-4">4. Phone Call Permission</h3>
                <ul className="list-disc pl-8">
                  <li>To enable call connectivity between users, vendors, and delivery partners</li>
                  <li>Call functionality is limited strictly to service-related communication</li>
                  <li>The App does not record any phone calls</li>
                </ul>

                <h3 className="text-xl font-bold mt-4">5. SMS Permission</h3>
                <ul className="list-disc pl-8">
                  <li>For sending and verifying OTPs</li>
                  <li>For service-related alerts and security notifications</li>
                  <li>The App does not read or store users’ personal SMS messages</li>
                </ul>

                <p className="mt-4">
                  All of the above permissions are requested <strong>only when necessary</strong> and <strong>for limited, specific purposes.</strong><br/>
                  Users may control or revoke these permissions at any time through their device settings.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  5. Sharing of Information
                </h2>
                <p>
                  We may share personal information only when necessary, including with:
                </p>
                <ul className="list-disc pl-8">
                  <li>Vendors to fulfill service requests</li>
                  <li>Delivery partners for pickup and delivery</li>
                  <li>Payment gateway providers for transaction processing</li>
                  <li>Identity verification providers (e.g., DigiLocker, KYC services)</li>
                  <li>Government or legal authorities when required by law</li>
                </ul>
                <p>
                  We do not sell, rent, or trade personal data to third parties.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  6. Vendor & Delivery Partner Data Visibility
                </h2>
                <p>
                  Only the minimum necessary user information is shared with vendors and delivery partners strictly for service fulfillment purposes.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  7. Location Data Usage
                </h2>
                <p>
                  Location data is used solely to:
                </p>
                <ul className="list-disc pl-8">
                  <li>Enable pickup and delivery services</li>
                  <li>Improve route accuracy and service efficiency</li>
                  <li>Provide real-time tracking and safety features</li>
                </ul>
                <p>
                  Location data is never used for advertising purposes and is never sold.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  8. Cookies & Tracking Technologies
                </h2>
                <p>
                  The Needin App and website https://www.withneedin.com may use cookies, SDKs, pixels, and similar tracking technologies to enhance user experience, improve performance, analyze usage patterns, and ensure security.
                </p>
                <p>Cookies and tracking technologies may be used to:</p>
                <ul className="list-disc pl-8">
                  <li>Remember user preferences and login sessions</li>
                  <li>Analyze app and website traffic</li>
                  <li>Monitor performance, crashes, and errors</li>
                  <li>Improve service efficiency and reliability</li>
                </ul>
                <p>
                  Users can control or disable cookies through their device or browser settings. However, disabling cookies may affect certain features or functionality of the App or website.
                  <br/><br/>
                  We do not use cookies for unauthorized advertising purposes and do not sell cookie-based data to third parties.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  9. Analytics & Performance Monitoring
                </h2>
                <p>
                  We may use analytics and crash reporting tools to understand how users interact with the App and to improve service quality. These tools collect aggregated and anonymized data and do not allow us to personally identify users.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  10. Data Security
                </h2>
                <p>
                  We implement reasonable technical, administrative, and organizational safeguards to protect personal data from unauthorized access, loss, misuse, or alteration.
                  <br/><br/>
                  However, no digital system is completely secure, and absolute security cannot be guaranteed.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  11. Data Retention
                </h2>
                <p>
                  User data is retained only for as long as necessary to:
                </p>
                <ul className="list-disc pl-8">
                  <li>Provide and improve services</li>
                  <li>Complete verification and compliance requirements</li>
                  <li>Meet legal, accounting, or regulatory obligations</li>
                </ul>
                <p>
                  Data may be deleted or anonymized when no longer required or upon valid user request, subject to legal requirements.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  12. User Rights
                </h2>
                <p>
                  Users have the right to:
                </p>
                <ul className="list-disc pl-8">
                  <li>Access their personal information</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request account and data deletion (subject to legal obligations)</li>
                </ul>
                <p>
                  Deletion requests are processed within a reasonable time unless retention is required by law.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  13. Automated Decision-Making & Profiling
                </h2>
                <p>
                  The Company does not use personal data for automated decision-making or profiling that produces legal or similarly significant effects on users.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  14. Third-Party Services
                </h2>
                <p>
                  The Needin App may integrate with third-party services such as payment gateways, analytics tools, and identity verification providers.
                  <br/><br/>
                  The Company is not responsible for the privacy practices of third-party platforms. Users are encouraged to review their respective privacy policies.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  15. International Data Processing
                </h2>
                <p>
                  Some data may be processed or stored on secure servers located outside India, subject to appropriate safeguards and in compliance with applicable data protection laws.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  16. Children’s Privacy
                </h2>
                <p>
                  The Needin App is intended only for users who are 18 years of age or older.
                  We do not knowingly collect personal data from minors.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  17. Marketing & Promotional Communication
                </h2>
                <p>
                  Users may receive service-related and promotional communications from the Company.
                  Users may opt out of non-essential promotional communications at any time.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  18. Legal Compliance
                </h2>
                <p>
                  The Company complies with applicable Indian laws, including:
                </p>
                <ul className="list-disc pl-8">
                  <li>Digital Personal Data Protection Act, 2023</li>
                  <li>Information Technology Act and applicable rules</li>
                </ul>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  19. Grievance Officer
                </h2>
                <p>
                  In accordance with Indian IT Rules:<br/><br/>
                  <strong>Grievance Officer</strong><br/>
                  Name Rohit kumar Arya<br/>
                  Designation: Grievance Officer<br/>
                  Email: help@withneedin.com<br/>
                  Response Time: Within 7 working days
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  20. Changes to This Privacy Policy
                </h2>
                <p>
                  The Company may update this Privacy Policy from time to time. Any changes will be effective immediately upon publication on the App or website. Continued use of the App constitutes. acceptance of the updated policy
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-bold text-foreground">
                  21. Contact Information
                </h2>
                <p>
                  For any questions or concerns regarding this Privacy Policy, please contact:
                </p>
                <p>
                  <strong>Viec Carry India Pvt Ltd</strong> <br />
                  Email: support@withneedin.com <br />
                  Website: <a href="https://www.withneedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.withneedin.com</a><br/>
                  Mob- +91 9286783640
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

export default Privacy;
