import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What is Needin?",
    answer:
      "Needin is a hyperlocal gig economy platform that connects customers with verified local vendors for home services, personal care, and Travel-Based Delivery across India. We offer 27+ service categories and Needin Express for fast parcel delivery.",
  },
  {
    question: "How do I book a service on Needin?",
    answer:
      "Simply download the Needin app, select the service you need, choose a verified vendor based on ratings and reviews, and book instantly. The vendor will arrive at your scheduled time.",
  },
  {
    question: "Are the vendors verified?",
    answer:
      "Yes, all vendors on Needin go through a thorough verification process including KYC documentation and background checks. They are activated only after completing our subscription-based onboarding process.",
  },
  {
    question: "What is Needin Express?",
    answer:
      "Needin Express is our travel-based peer-to-peer delivery service offering Travel-Based and intercity parcel & document delivery at affordable rates. It's ideal for urgent deliveries across India.",
  },
  {
    question: "How can I become a vendor on Needin?",
    answer:
      <>
        To become a vendor, register on our app or website, complete your KYC verification, subscribe to our vendor plan, and start receiving customer bookings in your area. You can also contact us at{" "}
        
        <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          +91 9286783640
        </a>{" "}
        for assistance.
      </>,
  },
  {
    question: "What are the charges for using Needin services?",
    answer:
      "Pricing is transparent and varies by service category. You can see the estimated cost before confirming your booking. There are no hidden charges, and vendors follow standardized pricing guidelines.",
  },
  {
    question: "Which cities does Needin operate in?",
    answer:
      "Needin is expanding rapidly across India. We currently operate in 100+ cities including Delhi NCR, Meerut, Lucknow, Agra, and many more. Download the app to check availability in your area.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      <>
        You can reach our customer support team via WhatsApp at{" "}
        
        <a href="https://wa.me/919286783640" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          +91 9286783640
        </a>,, email at support@withneedin.com, or through the in-app chat feature. We're available to help you with any queries.
      </>,
  },
];

const FAQ = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp" });
  const accordionRef = useScrollAnimation<HTMLDivElement>({ type: "fadeUp", delay: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We have answers. Find everything you need to know about Needin.
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-lg data-[state=open]:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline group">
                  <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
