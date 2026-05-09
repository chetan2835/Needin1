import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";


const NeedinExpress = () => {
    return (
        <>
            <Helmet>
                <title>Needin Express - Terms & Policy</title>
                <meta name="description" content="Needin Express Terms & Policy" />
            </Helmet>

            <Header />

            <main className="pt-16 md:pt-20">
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">

                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                NEEDIN EXPRESS – DELIVERY USER AGREEMENT
                            </h1>

                            <p className="text-lg font-semibold mb-2">
                                (For Customers / Senders) <br /> <strong>(For Customers / Senders)</strong>
                            </p>

                            <div className="text-muted-foreground text-lg leading-relaxed space-y-4 mt-8">

                                <h2 className="text-2xl font-bold text-foreground">
                                    Company
                                </h2>

                                <p className="font-semibold">Viec Carry India Pvt Ltd</p>
                                <p>a company incorporated under the Companies Act, 2013, <br />
                                    having its registered office at: <br />
                                    BG-60 , Balaji Garden Main NH-58, Front of Police Chowki, <br />
                                    Yogi Puram, Meerut – 250002, Uttar Pradesh, India <br />
                                    Email: needinexpress06@gmail.com <br />
                                    Website: www.vieccarryindia.com</p>
                                <p>
                                    (here in after referred to as the <strong>"Company"</strong> )
                                </p>


                                <p className="font-semibold">AND</p>
                                <h2 className="text-2xl font-bold text-foreground">
                                    User
                                </h2>
                                <p>The individual registering on and using the <strong>Needin</strong> mobile application to avail <strong>Needin Express</strong> delivery services.
                                    (here in after referred to as the <strong>“User”</strong> )</p>

                                <p>
                                    The Company and the Vendor are individually referred to as a “Party” and collectively as the
                                    “Parties”.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    1. Purpose
                                </h2>
                                <p>
                                    Needin Express is a <strong>technology-enabled delivery facilitation service</strong> that connects Users
                                    with <strong>independent delivery partners</strong> for travel-based, same-day or time-bound deliveries.
                                    The Company does not itself provide delivery services.
                                </p>

                                <hr className="my-10" />
                                <h2 className="text-2xl font-bold text-foreground">
                                    2. Platform Role
                                </h2>
                                <p>
                                    The Company acts <strong>solely as a facilitator and technology platform</strong>. Delivery services are
                                    performed by <strong>independent delivery partners</strong>. Nothing in this Agreement creates an
                                    employer-employee, agency, partnership, or joint-venture relationship between the Company
                                    and any delivery partner.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    3. Eligibility
                                </h2>
                                <p>
                                    Users must be <strong>18 years of age or older</strong> and legally capable of entering into a binding
                                    contract under Indian law to use Needin Express.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    4. User Responsibilities
                                </h2>
                                <p>
                                    The User agrees to:
                                </p>
                                <ul className="list-disc pl-8">
                                    <li>Provide accurate pickup and delivery details;</li>
                                    <li>Ensure safe, secure, and proper packaging of parcels;</li>
                                    <li>Be available (or ensure availability) at pickup and delivery locations at the scheduled time;</li>
                                    <li>Comply with all applicable laws and regulations.</li>
                                </ul>


                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    4.A – Packaging Responsibility & Proof (Evidence of Packaging)                </h2>
                                <ul className="list-disc pl-8">
                                    <li>
                                        <strong>Proof of Packaging Condition</strong><br />
                                        The User acknowledges and agrees that proper and secure packaging of the parcel is
                                        solely the responsibility of the User. To ensure transparency and avoid disputes, the
                                        Company reserves the right to capture photographic evidence of the parcel at the time
                                        of pickup through its delivery partner.
                                    </li>
                                    <li>Such photographs may include images of the outer packaging, seals, and visible
                                        condition of the parcel at the time of pickup. These photographs shall be treated as
                                        valid evidence of the parcel’s apparent external condition at the time of handover.</li>
                                    <li>In the event of any claim, complaint, or dispute regarding damage, leakage, or
                                        breakage of the contents, such photographic evidence shall be relied upon to
                                        determine whether the parcel was externally intact at the time of pickup. The
                                        Company shall not be held liable for damages arising from inadequate, improper, or
                                        defective packaging by the User.</li>
                                </ul>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    5. Permitted & Prohibited Items
                                </h2>
                                <p>
                                    <strong>Permitted Items</strong><br />
                                    Only legal, safe, and non-restricted items may be sent.
                                </p>
                                <p><strong>Prohibited Items</strong>
                                    The User shall <strong>not</strong> send:</p>
                                <ul className="list-disc pl-8">
                                    <li>Illegal, hazardous, flammable, explosive, or narcotic substances;</li>
                                    <li>Cash, jewellery, precious metals/stones, or high-value items;</li>
                                    <li>Restricted goods under applicable laws.</li>
                                </ul>
                                <p>
                                    The User bears <strong>full responsibility</strong> for parcel contents and declarations.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    6. No Inspection & Declaration
                                </h2>
                                <p>
                                    The Company and delivery partners <strong>do not inspect parcel contents</strong>. The User warrants that
                                    all declarations are true and lawful and indemnifies the Company against violations.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    6.A – No Inspection & Right to Refuse Suspicious Parcels
                                </h2>
                                <p>
                                    <strong>No Inspection of Contents & Right to Refuse Suspicious Parcels</strong><br />
                                    The Company and its delivery partners do not open, inspect, or verify the internal contents of
                                    any parcel. However, the delivery partner shall have the absolute right to refuse pickup of any
                                    parcel that appears suspicious, unsafe, illegal, or hazardous based on external observation.
                                </p>
                                <p>
                                    This includes, but is not limited to, parcels showing signs of leakage, unusual odor, abnormal
                                    sounds, improper sealing, damaged packaging, or any indication of prohibited, illegal, or
                                    dangerous items.
                                </p>
                                <p>
                                    Such refusal shall be deemed a preventive safety measure and shall not be considered a
                                    breach of service. The Company shall not be liable for any loss, delay, or inconvenience
                                    arising from refusal of such parcels, and the User shall bear full responsibility for ensuring
                                    that the parcel complies with applicable laws and safety standards.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    7. Delivery Timelines
                                </h2>
                                <p>
                                    Pickup and delivery timelines shown in the App are <strong>estimates only</strong> and <strong>not guaranteed</strong>.
                                    Delays may occur due to traffic, weather, technical issues, or other factors beyond control.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    8. Charges & Payments
                                </h2>
                                <ul className="list-disc pl-8">
                                    <li>Delivery charges are calculated based on distance, parcel characteristics, and
                                        applicable platform fees;</li>
                                    <li>Payments must be completed successfully before a delivery request is processed;</li>
                                    <li><strong>Delivery charges are generally non-refundable,</strong>unless expressly stated or required
                                        by law.</li>
                                </ul>


                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    9. Cancellation
                                </h2>
                                <ul className="list-disc pl-8">
                                    <li>Once a parcel has been picked up,Once a parcel has been picked up, <strong>cancellation is not permitted;</strong></li>
                                    <li>If a User cancels prior to pickup, applicable charges may apply as displayed in the App.</li>
                                </ul>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    10. Recipient Unavailability10. Recipient Unavailability
                                </h2>
                                <p>
                                    If the recipient is unavailable:
                                </p>
                                <ul className="list-disc pl-8">
                                    <li>Reattempt or return charges may apply;</li>
                                    <li>The User shall bear any additional costs incurred.</li>
                                </ul>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    11. No Insurance
                                </h2>
                                <p>
                                    Parcels sent via Needin Express are <strong>not insured by default.</strong>. Users are advised <strong>not to send high-value or sensitive items.</strong>
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    12. Limitation of Liability
                                </h2>
                                <p>
                                    To the maximum extent permitted by law:
                                </p>
                                <ul className="list-disc pl-8">
                                    <li>The Company shall <strong>not be liable</strong> for loss, damage, theft, delay, or non-delivery of
                                        parcels;</li>
                                    <li>
                                        The Company shall not be liable for indirect, incidental, or consequential damages.
                                    </li>
                                </ul>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    13. Force Majeure
                                </h2>
                                <p>
                                    The Company shall not be liable for failure or delay caused by events beyond reasonable
                                    control, including natural disasters, government actions, strikes, network failures, or technical
                                    issues.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    14. Data Privacy
                                </h2>
                                <p>
                                    User data shall be collected and processed in accordance with the Company’s <Link to="/Privacy"><strong>Privacy Policy</strong></Link>.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    15. Account Actions
                                </h2>
                                <p>
                                    The Company reserves the right to suspend or terminate User access for violations of this
                                    Agreement, misuse, or unlawful activity.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    16. Modifications
                                </h2>
                                <p>
                                    The Company may modify this Agreement from time to time. Continued use of Needin
                                    Express constitutes acceptance of the updated Agreement.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    17. Governing Law & Jurisdiction
                                </h2>
                                <p>
                                    This Agreement shall be governed by the laws of India. Courts at <strong>Meerut, Uttar Pradesh</strong>
                                    shall have exclusive jurisdiction.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    17.A Delivery Partner / Traveller Declaration
                                </h2>
                                <p>
                                    The Delivery Partner / Traveller hereby clearly confirms that:
                                </p>
                                <ul className="list-disc pl-8">
                                    <li>He/She is already travelling on the route displayed in the application;</li>
                                    <li>Carrying the parcel will not require any additional travel, special route, or separate
                                        trip;</li>
                                    <li>Needin Express only provides a travel-based parcel connection facility and does not
                                        require or compel any Delivery Partner to undertake an additional journey.</li>
                                </ul>
                                <p>
                                    This declaration shall be mandatorily made by accepting the checkbox provided in the
                                    application.
                                </p>

                                <hr className="my-10" />

                                <h2 className="text-2xl font-bold text-foreground">
                                    18. Acceptance
                                </h2>
                                <p>
                                    By creating a profile or continuing to use the Needin App, the User confirms that they have
                                    read, understood, and accepted this Agreement along with the <Link to="/Terms"><strong>Terms & Conditions</strong></Link> and
                                    <Link to="/Privacy"><strong>Privacy Policy</strong></Link> of the Company.
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

export default NeedinExpress;
