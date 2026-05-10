import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FloatingCard from "@/components/3d/FloatingCard";

const Contact = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const infoRef = useScrollAnimation<HTMLDivElement>({ type: "slideRight", delay: 0.2 });
  const formRef = useScrollAnimation<HTMLDivElement>({ type: "slideLeft", delay: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bac7c53d-53a9-4154-b882-63aab85fe26e", // Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact Request from ${formData.name}`,
          from_name: "Needin Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We will get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Error Sending Message",
          description: result.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not send the message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "BG-60,  Main NH-58, Yogi Puram, Meerut – 250002, India",
    },
    // {
    //   icon: MapPin,
    //   title: "WhatsApp",
    //   content: "+91 9286783640",
    //   link: "https://wa.me/919286783640",
    //   external: true,
    //   isWhatsApp: true,
    // },
    {
      icon: MapPin,
      title: "WhatsApp",
      content: "+91 9286783640",
      link: "https://wa.me/919286783640",
      external: true,
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@withneedin.com",
      link: "mailto:support@withneedin.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Needin | Get in Touch</title>
        <meta name="description" content="Contact Needin for support, inquiries, or partnership opportunities. Reach us via phone, email, or visit our office in Meerut." />
      </Helmet>

      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 gradient-hero">
          <div ref={headerRef} className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto font-bold">
              We're here to help. Reach out to us for any queries or support.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div ref={infoRef}>
                <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Get in Touch
                </h2>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const isWhatsApp = 'isWhatsApp' in info && info.isWhatsApp;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${isWhatsApp ? 'bg-green-500/10' : 'bg-primary/10'} flex items-center justify-center flex-shrink-0`}>
                          {isWhatsApp ? (
                            <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                          ) : (
                            <IconComponent className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{info.title}</h3>
                          {'link' in info && info.link ? (
                            <a
                              href={info.link}
                              className={`${isWhatsApp ? 'text-muted-foreground hover:text-green-500' : 'text-muted-foreground hover:text-primary'} transition-colors font-bold`}
                              {...('external' in info && info.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground font-bold">{info.content}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp CTA */}
                <FloatingCard className="mb-0" glowColor="hsl(var(--accent))">
                  <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 h-full">
                    <h3 className="font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Quick Support via WhatsApp
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 font-bold">
                      Get instant support on WhatsApp for queries.
                    </p>
                    {/* <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </a> */}
                    <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </FloatingCard>

                {/* Company Info */}
                <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
                  <p className="text-sm text-muted-foreground font-bold">
                    <strong className="text-foreground">Viec Carry India Pvt Ltd</strong><br />
                    Website: <a href="https://www.withneedin.com" className="text-primary hover:underline font-bold">www.withneedin.com</a>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div ref={formRef}>
                <FloatingCard className="h-full" glowColor="hsl(var(--primary))">
                  <div className="bg-card rounded-3xl p-8 shadow-card border border-border h-full">
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Send us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Your Name</label>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">Email Address</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">Message</label>
                        <Textarea
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full gradient-hero border-0" disabled={isSubmitting}>
                        <Send className={`w-4 h-4 mr-2 ${isSubmitting ? "animate-pulse" : ""}`} />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-muted">
          {/* <iframe
            src="https://www.google.com/maps/"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Needin Office Location"
          /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3489.5359300306504!2d77.64410917551443!3d29.001119675465535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzA0LjAiTiA3N8KwMzgnNDguMSJF!5e0!3m2!1sen!2sin!4v1771065413895!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Needin Office Location">
          </iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
