import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Zap, Shield, Star, Mail } from "lucide-react";
import shiwaniImg from "@/assets/shivani.jpeg";
import jyotiImg from "@/assets/jyoti.png";
import { Quote } from "lucide-react";
import FloatingCard from "@/components/3d/FloatingCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const coreValues = [
    { icon: Shield, title: "Trust & Transparency", description: "Verified vendors and clear pricing" },
    { icon: Zap, title: "Speed & Reliability", description: "Fast service delivery you can count on" },
    { icon: Heart, title: "Customer Satisfaction", description: "Your happiness is our priority" },
    { icon: Users, title: "Vendor Empowerment", description: "Supporting local professionals to thrive" },
  ];

  const founders = [
    {
      name: "Shiwani",
      position: "Director & Chief Executive Officer",
      email: "shiwani@needin.in",
      image: shiwaniImg,
    },
    {
      name: "Jyoti Malik",
      position: "Director & Chief Operating Officer",
      email: "jyoti@needin.in",
      image: jyotiImg,
    },
  ];

  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const messageRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", delay: 0.1 });
  const foundersRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.2 });
  const visionRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", delay: 0.2 });
  const valuesRef = useScrollAnimation<HTMLDivElement>({ type: "stagger", staggerDelay: 0.1 });

  return (
    <>
      <Helmet>
        <title>About Us - Needin | Viec Carry India Pvt Ltd</title>
        <meta name="description" content="Learn about Needin, a hyperlocal gig economy platform by Viec Carry India Pvt Ltd, empowering vendors and connecting customers with trusted local services." />
      </Helmet>

      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About Needin
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto font-bold">
              A hyperlocal gig economy platform solving local service discovery and delivery challenges using technology.
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div ref={headerRef} className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  About Viec Carry India Pvt Ltd
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed font-bold">
                  Viec Carry India Pvt Ltd operates the Needin mobile application to solve local service discovery and delivery challenges using technology.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed font-bold">
                  We are a hyperlocal gig economy platform for the unorganised sector, empowering vendors, delivery partners, and service professionals with sustainable earning opportunities.
                </p>
              </div>

              <div ref={headerRef} className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  About Needin
                </h2>

                <p className="text-muted-foreground mb-6 text-lg leading-relaxed font-semibold">
                  Needin is a <span className="text-primary font-bold">women-led</span>, <span className="text-primary font-bold">DPIIT-recognised</span> hyperlocal gig economy platform building a new way for India to move goods and access local services. We enable <span className="font-bold">affordable, travel-based deliveries</span> and <span className="font-bold">trusted vendor services</span> across <span className="text-primary font-bold">PAN India</span>.
                </p>

                <p className="text-muted-foreground mb-6 text-lg leading-relaxed font-semibold">
                  Needin is not just focused on speed. We are creating a <span className="font-bold">new economic layer on top of everyday travel</span> — empowering vendors, delivery partners, and service professionals to earn sustainably while making logistics and services more accessible for everyone.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed font-bold italic">
                  “Needin is not chasing delivery speed. It is building a new economic layer on top of travel.”
                </p>

                <p className="mt-6 text-primary font-extrabold text-lg tracking-wide">
                  NEED IN — Now. Easy. Every. Desk. India.
                </p>
              </div>


              {/* Founder's Message */}
              <div ref={messageRef} className="mb-16">
                <FloatingCard className="w-full" glowColor="hsl(var(--primary))">
                  <div className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-12 -translate-y-6">
                      <Quote className="w-64 h-64" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Founder's Message
                        </h2>
                      </div>

                      <div className="space-y-6 text-lg leading-relaxed font-medium opacity-95">
                        <p>
                          "Rohit Kumar Arya is the Founder of Viec Carry India Pvt Ltd, where he laid the foundation of the company’s vision, concept, and business framework. He played a key role in conceptualising the platform and defining its core purpose and long-term direction.
                        </p>
                        <p>
                          With a strong understanding of operations, finance, and execution, he contributed to building a scalable model for the company’s hyperlocal gig-economy platform, Needin. His approach focuses on practical solutions, sustainable systems, and real-world impact for individuals and service providers.
                        </p>
                        <p>
                          He believes in creating transparent, efficient, and inclusive platforms that convert everyday travel into earning opportunities while strengthening trust and value across the unorganised service ecosystem."
                        </p>
                        <p>
                          "This startup is not chasing delivery speed. It is building a new economic layer on top of travel."
                        </p>
                      </div>

                      <div className="mt-8 pt-8 border-t border-white/20">
                        <h3 className="text-xl font-bold">Rohit Kumar Arya</h3>
                        <p className="opacity-80">Founder</p>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              </div>

              {/* ================= DIRECTOR & CEO ================= */}
              <div className="mb-16">
                <FloatingCard className="w-full" glowColor="hsl(var(--primary))">
                  <div className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">

                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-12 -translate-y-6">
                      <Quote className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 grid md:grid-cols-[1fr_280px] gap-10 items-start">

                      {/* TEXT */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                            <Quote className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                              Director Bio
                            </h2>
                            <p className="opacity-80">Director & Chief Executive Officer (CEO)</p>
                          </div>
                        </div>

                        <div className="space-y-6 text-lg leading-relaxed font-medium opacity-95">
                          <p>
                            Shiwani serves as the Director & Chief Executive Officer (CEO) of Viec Carry India Pvt Ltd, where she leads the company’s long-term vision, strategic direction, and organisational growth. She is deeply involved in defining business policies, growth planning, and building a strong foundation for sustainable development.
                          </p>
                          <p>
                            With a strong focus on innovation and execution, she plays a key role in developing scalable systems for Needin. Her leadership drives the mission of transforming everyday travel into meaningful earning opportunities across India.
                          </p>
                          <p>
                            She believes in transparent operations, people-centric leadership, and long-term value creation while strengthening the unorganised service ecosystem.
                          </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/20">
                          <h3 className="text-xl font-bold">Shiwani</h3>
                          <p className="opacity-80">Director & Chief Executive Officer</p>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div className="flex justify-center md:justify-end">
                        <img
                          src={shiwaniImg}
                          alt="Shiwani"
                          className="w-60 h-72 object-cover rounded-2xl shadow-xl border-4 border-white/20"
                        />
                      </div>

                    </div>
                  </div>
                </FloatingCard>
              </div>

              {/* ================= DIRECTOR & COO ================= */}
              <div className="mb-16">
                <FloatingCard className="w-full" glowColor="hsl(var(--primary))">
                  <div className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">

                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-12 -translate-y-6">
                      <Quote className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 grid md:grid-cols-[1fr_280px] gap-10 items-start">

                      {/* TEXT */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                            <Quote className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                              Director Bio
                            </h2>
                            <p className="opacity-80">Director & Chief Operating Officer (COO)</p>
                          </div>
                        </div>

                        <div className="space-y-6 text-lg leading-relaxed font-medium opacity-95">
                          <p>
                            Jyoti Malik serves as the Director & Chief Operating Officer (COO) of Viec Carry India Pvt Ltd, where she leads operational strategy, compliance alignment, and internal process governance across the organisation.
                          </p>
                          <p>
                            She plays a critical role in execution planning, service optimisation, and cross-functional coordination between business, technology, and operations teams for Needin.
                          </p>
                          <p>
                            Her leadership emphasizes discipline, accountability, and scalable operational frameworks while supporting the company’s mission of building a trusted gig-economy network across India.
                          </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/20">
                          <h3 className="text-xl font-bold">Jyoti Malik</h3>
                          <p className="opacity-80">Director & Chief Operating Officer</p>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div className="flex justify-center md:justify-end">
                        <img
                          src={jyotiImg}
                          alt="Jyoti Malik"
                          className="w-60 h-72 object-cover rounded-2xl shadow-xl border-4 border-white/20"
                        />
                      </div>

                    </div>
                  </div>
                </FloatingCard>
              </div>


              {/* Founders Section */}
              {/* <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Meet Our Board of Directors
                </h2>
                <div ref={foundersRef} className="flex flex-wrap justify-center gap-8">
                  {founders.map((founder, index) => (
                    <FloatingCard key={index} className="w-full max-w-xs" glowColor="hsl(var(--primary))">
                      <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 h-full">
                        <div className="w-60 h-72 rounded-2xl overflow-hidden mb-5 shadow-md relative group">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <h3 className="font-bold text-lg mb-1 text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{founder.name}</h3>
                        <p className="text-xs text-muted-foreground mb-5 h-8 flex items-center justify-center font-bold">{founder.position}</p>
                        <a
                          href={`mailto:${founder.email}`}
                          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-2.5 rounded-lg transition-colors text-sm font-medium w-full justify-center group/btn"
                        >
                          <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Email
                        </a>
                      </div>
                    </FloatingCard>
                  ))}
                </div>
              </div> */}

              {/* Vision & Mission */}
              <div ref={visionRef} className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Vision</h3>
                  <p className="text-muted-foreground font-bold">
                    To become India's most trusted hyperlocal service and delivery platform.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-xl gradient-warm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h3>
                  <ul className="text-muted-foreground space-y-2 font-bold">
                    <li>• Fast & affordable local services</li>
                    <li>• Strong earning ecosystem for vendors</li>
                    <li>• Simple Travel-Based & intercity delivery</li>
                  </ul>
                </div>
              </div>

              {/* Core Values */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our Core Values
                </h2>
                <p className="text-muted-foreground font-bold">
                  The principles that guide everything we do.
                </p>
              </div>

              <div ref={valuesRef} className="grid sm:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 shadow-card border border-border flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{value.title}</h4>
                      <p className="text-sm text-muted-foreground font-bold">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Journey */}
              <div className="mt-16 bg-muted/50 rounded-3xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed font-bold">
                  Founded with a vision to solve local service challenges, Needin started as a small project aimed at connecting service providers with customers in their vicinity. Over the years, we have grown into a robust platform, expanding our services and reaching more customers. Our journey is a testament to the power of community and innovation, and we continue to strive towards becoming India's most trusted hyperlocal platform.
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

export default About;
