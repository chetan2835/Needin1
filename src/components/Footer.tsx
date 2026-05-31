import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import needinLogo from "@/assets/needin-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-muted dark:bg-card relative overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:32px_32px]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-primary-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/90 mb-10 max-w-xl mx-auto text-lg">
            Join thousands of other users on Needin today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-card text-card-foreground hover:bg-card/90 px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {t("header.downloadApp")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/become-professional">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-8 py-6 rounded-xl backdrop-blur-sm"
              >
                {t("header.becomeVendor")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 md:py-20 relative bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--muted))_1px,transparent_0)] bg-[size:40px_40px] opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img
                  src={needinLogo}
                  alt="Needin Logo"
                  className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                />              </div>
              <p className="text-muted-foreground text-sm font-semibold mb-5 leading-relaxed">
                {t("footer.aboutDesc")}
              </p>
              <p className="text-foreground text-lg font-bold mt-4">
                Needin is a product of Viec Carry India Private Limited
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-lg text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{t("footer.quickLinks")}</h4>
              <ul className="space-y-3">
                {[
                  { name: t("header.home"), path: "/" },
                  { name: t("header.about"), path: "/about" },
                  { name: t("header.services"), path: "/services" },
                  { name: "Highlights", path: "/highlights" },
                  { name: t("header.howItWorks"), path: "/how-it-works" },
                  { name: t("header.becomeVendor"), path: "/become-professional" },
                  { name: t("header.contact"), path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-6 text-lg text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>Legal</h4>
              <ul className="space-y-3">
                {[
                  
                  { name: "Terms & Conditions", path: "/terms" },
                  { name: "Privacy Policy", path: "/privacy" },
                  { name: "Refund Policy", path: "/refund" },
                  // { name: "Professional Agreement", path: "/VendorAgreement" },
                  { name: "Express Agreement", path: "/ExpressAgreement" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6 text-lg text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{t("footer.contact")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-sm font-semibold text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="pt-2">BG-60,  Main NH-58, Yogi Puram, Meerut – 250002, India</span>
                </li>
                
                <li>

                  <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm font-semibold text-muted-foreground hover:text-green-500 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-muted group-hover:bg-green-500/20 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span>+91 9286783640</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:support@withneedin.com" className="flex items-center gap-4 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-muted group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span>support@withneedin.com</span>
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-3 mt-8">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-xl bg-muted hover:bg-primary/20 hover:scale-110 flex items-center justify-center transition-all duration-300 text-muted-foreground hover:text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-border text-center text-sm font-bold text-muted-foreground">
            <p>&copy; {currentYear} Viec Carry India Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
