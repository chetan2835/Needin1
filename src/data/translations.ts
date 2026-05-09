
export type Language = "EN" | "HI";

export interface Translations {
    [key: string]: string | Translations;
}

export const translations: Record<Language, Translations> = {
    EN: {
        header: {
            home: "Home",
            about: "About",
            services: "Services",
            howItWorks: "How It Works",
            becomeVendor: "Become Vendor",
            contact: "Contact",
            downloadApp: "Download App",
        },
        hero: {
            needin: "Needin",
            services: "Local Services",
            delivery: "Travel-Based Delivery",
            tagline: "India's Trusted Hyperlocal Platform",
            description: "Connect with verified local professionals for home services and send parcels intercity through trusted travelers. Faster, cheaper, and safer.",
            exploreServices: "Explore Services",
            sendParcel: "Send a Parcel"
        },
        services: {
            title: "Our Services",
            subtitle: "Everything you need, right at your doorstep",
            homeRepairs: "Home Repairs",
            cleaning: "Cleaning",
            personalCare: "Personal Care",
            shifting: "Shifting",
        },
        footer: {
            about: "About Needin",
            aboutDesc: "Needin connects you with verified experts and travel-based delivery partners for a seamless, hyperlocal experience.",
            quickLinks: "Quick Links",
            contact: "Contact Us",
            newsletter: "Newsletter",
            subscribe: "Subscribe",
            rights: "All rights reserved."
        },
        common: {
            loading: "Loading...",
            explore: "Explore Needin",
            welcomeTitle: "A Trusted Peer-to-Peer Express Delivery Network",
            welcomeSubtitle: "for Urgent City-to-City Deliveries, Verified Travelers, and Faster-than-Courier Shipping",
            comingSoon: "COMING SOON",
            launchingSoon: "LAUNCHING ACROSS INDIA SOON"
        }
    },
    HI: {
        header: {
            home: "होम",
            about: "हमारे बारे में",
            services: "सेवाएं",
            howItWorks: "यह कैसे काम करता है",
            becomeVendor: "विक्रेता बनें",
            contact: "संपर्क करें",
            downloadApp: "ऐप डाउनलोड करें",
        },
        hero: {
            needin: "नीडिन",
            services: "स्थानीय सेवाएं",
            delivery: "यात्रा-आधारित डिलीवरी",
            tagline: "आपका इंटरसिटी लोकल हेल्पर",
            description: "घरेलु सेवाओं के लिए सत्यापित स्थानीय पेशेवरों से जुड़ें और विश्वसनीय यात्रियों के माध्यम से इंटरसिटी पार्सल भेजें। तेज़, सस्ता और सुरक्षित।",
            exploreServices: "सेवाएं देखें",
            sendParcel: "पार्सल भेजें"
        },
        services: {
            title: "हमारी सेवाएं",
            subtitle: "आपकी ज़रूरत की हर चीज़, आपके दरवाज़े पर",
            homeRepairs: "घर की मरम्मत",
            cleaning: "सफाई",
            personalCare: "व्यक्तिगत देखभाल",
            shifting: "शिफ्टिंग",
        },
        footer: {
            about: "नीडिन के बारे में",
            aboutDesc: "नीडिन आपको एक सहज, हाइपरलोकल अनुभव के लिए सत्यापित स्थानीय विशेषज्ञों और यात्रा-आधारित डिलीवरी भागीदारों से जोड़ता है।",
            quickLinks: "महत्वपूर्ण लिंक",
            contact: "संपर्क करें",
            newsletter: "न्यूज़लेटर",
            subscribe: "सब्सक्राइब करें",
            rights: "सर्वाधिकार सुरक्षित।"
        },
        common: {
            loading: "लोड हो रहा है...",
            explore: "नीडिन देखें",
            welcomeTitle: "एक विश्वसनीय पीयर-टू-पीयर एक्सप्रेस डिलीवरी नेटवर्क",
            welcomeSubtitle: "तत्काल शहर-से-शहर डिलीवरी, सत्यापित यात्रियों और कूरियर से तेज़ शिपिंग के लिए",
            comingSoon: "जल्द आ रहा है",
            launchingSoon: "जल्द ही पूरे भारत में लॉन्च हो रहा है"
        }
    }
};
