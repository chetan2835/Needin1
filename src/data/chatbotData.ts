export interface QA {
    keywords: string[];
    answer: string;
}

export const chatbotData: QA[] = [

    /* ================= GREETING & BASIC ================= */

    {
        keywords: ["hello", "hi", "hey", "start", "greetings"],
        answer: "Hello and welcome to Needin. Main aapka virtual assistant hoon. How can I help you today?"
    },
    {
        keywords: ["language", "hindi", "english"],
        answer: "Aap English ya Hindi dono mein baat ya type kar sakte hain. Main aapko usi language mein assist karunga."
    },
    {
        keywords: ["what can you do", "help", "support"],
        answer: "Main aapko services, delivery, pricing, registration, earning aur support ke baare mein madad kar sakta hoon."
    },

    /* ================= COMPANY ================= */

    {
        keywords: ["what is needin", "about needin", "needin kya hai"],
        answer: "Needin ek hyperlocal gig economy platform hai jo customers ko verified vendors aur travelers ke saath services aur delivery ke liye connect karta hai."
    },
    {
        keywords: ["what does needin do", "needin services overview"],
        answer: "Needin customers ko verified carriers aur vendors ke saath deliveries aur local services ke liye connect karta hai."
    },
    {
        keywords: ["is needin a delivery company"],
        answer: "Needin ek technology platform hai jo travel-based deliveries aur service connections enable karta hai."
    },
    {
        keywords: ["owner", "who owns needin", "company"],
        answer: "Needin ko Viec Carry India Pvt Ltd own aur operate karti hai."
    },
    {
        keywords: ["registered", "legal", "is needin safe"],
        answer: "Haan, Viec Carry India Pvt Ltd India mein ek registered private limited company hai, isliye Needin ek safe aur legal platform hai."
    },

    /* ================= NEEDIN EXPRESS ================= */

    {
        keywords: ["needin express", "parcel delivery", "courier"],
        answer: "Needin Express ek same-day, travel-based parcel delivery service hai jo India bhar mein available hai."
    },
    {
        keywords: ["how delivery works", "travel based delivery"],
        answer: "Aapka parcel us verified traveler ke saath match hota hai jo already usi route par travel kar raha hota hai."
    },
    {
        keywords: ["pan india delivery", "all india delivery"],
        answer: "Haan, Needin Express pan-India available hai travel route availability ke basis par."
    },
    {
        keywords: ["same day delivery", "fast delivery"],
        answer: "Travel availability ke basis par kaafi deliveries same day ya few hours mein complete ho jaati hain."
    },

    /* ================= PARCEL RULES ================= */

    {
        keywords: ["what can i send", "allowed items"],
        answer: "Aap documents, kapde, electronics jaise small, medium aur large parcels bhej sakte hain."
    },
    {
        keywords: ["restricted items", "illegal"],
        answer: "Illegal, hazardous ya prohibited items bilkul allow nahi hain."
    },
    {
        keywords: ["parcel size", "size defined"],
        answer: "Parcel size dimensions aur weight ke basis par small, medium ya large categorize hota hai."
    },
    {
        keywords: ["insurance", "parcel safe"],
        answer: "Insurance availability selected service aur booking terms par depend karti hai."
    },
    {
        keywords: ["track", "where is my parcel"],
        answer: "Booking confirm hone ke baad aap apna parcel track kar sakte hain."
    },
    {
        keywords: ["delivery delay", "late delivery"],
        answer: "Delay hone par support team carrier ke travel status ke basis par coordinate karti hai."
    },

    /* ================= PRICING ================= */

    {
        keywords: ["price", "cost", "charges"],
        answer: "Pricing distance, parcel size, route aur delivery time ke basis par calculate hoti hai."
    },
    {
        keywords: ["base price", "starting price"],
        answer: "Needin Express ka base delivery price ₹99 se start hota hai."
    },
    {
        keywords: ["hidden charges"],
        answer: "Nahi, Needin mein koi hidden charges nahi hote."
    },
    {
        keywords: ["payment methods"],
        answer: "Available payment methods booking ke time app mein show hote hain."
    },

    /* ================= CARRIER / TRAVELER ================= */

    {
        keywords: ["carrier", "who is carrier"],
        answer: "Carrier ek verified traveler hota hai jo travel ke dauran parcels deliver karta hai."
    },
    {
        keywords: ["become carrier", "earn while travel"],
        answer: "Needin par register karke aur KYC complete karke aap carrier ban sakte hain."
    },
    {
        keywords: ["carrier verification", "kyc"],
        answer: "Haan, safety aur trust ke liye carrier verification mandatory hai."
    },
    {
        keywords: ["carrier earning", "how carriers earn"],
        answer: "Carriers route aur parcel type ke basis par per delivery earn karte hain."
    },
    {
        keywords: ["accept reject delivery"],
        answer: "Haan, carriers apni marzi se delivery accept ya reject kar sakte hain."
    },

    /* ================= VENDOR ================= */

    {
        keywords: ["vendor", "local services"],
        answer: "Needin verified vendors ko customers se connect karta hai local services ke liye."
    },
    {
        keywords: ["become vendor", "register vendor"],
        answer: "Vendor banne ke liye business details aur documents submit karne hote hain."
    },
    {
        keywords: ["vendor verification"],
        answer: "Vendor activation se pehle verification mandatory hoti hai."
    },
    {
        keywords: ["vendor customers"],
        answer: "Customers ke service requests Needin platform ke through vendors ko assign hote hain."
    },
    {
        keywords: ["vendor payment"],
        answer: "Service successfully complete hone ke baad vendors ko payment milti hai."
    },

    /* ================= SUPPORT ================= */

    {
        keywords: ["contact", "support", "help"],
        answer: "Aap Needin support se phone ya email ke through contact kar sakte hain."
    },
    {
        keywords: ["email"],
        answer: "Hamara official email hai support@withneedin.com."
    },
    {
        keywords: ["phone", "call"],
        answer: "Aap humein 9286783640 par call kar sakte hain."
    },
    {
        keywords: ["complaint", "grievance"],
        answer: "Aap apni complaint booking details ke saath support email par bhej sakte hain. Response time 7 working days hai."
    },

    /* ================= WEBSITE & ADDRESS ================= */

    {
        keywords: ["website", "official site"],
        answer: "Needin ka official website hai www.vieccarryindia.com."
    },
    {
        keywords: ["address", "office location"],
        answer: "Office address hai BG-60,  Main NH-58, Yogi Puram, Meerut – 250002, India."
    },

    /* ================= CLOSING ================= */

    {
        keywords: ["bye", "thank you", "thanks"],
        answer: "Thank you for choosing Needin. Agar aapko aur madad chahiye ho to pooch sakte hain. Have a great day!"
    }
];

export const defaultAnswer =
    "Maaf kijiye, main aapka sawaal samajh nahi paaya. Kripya thoda alag tarike se poochiye ya support se contact kijiye.";
