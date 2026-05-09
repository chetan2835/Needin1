
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language, Translations } from "@/data/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        return (localStorage.getItem("language") as Language) || "EN";
    });

    const updateLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (path: string): string => {
        // Basic nested object access: "header.home" -> translations[lang]["header"]["home"]
        const keys = path.split('.');
        let current: Translations | string = translations[language];

        for (const key of keys) {
            if (typeof current !== 'object' || (current as Translations)[key] === undefined) {
                // Fallback to English if missing
                let fallback: Translations | string = translations["EN"];
                for (const fbKey of keys) {
                    if (typeof fallback === 'object' && (fallback as Translations)[fbKey]) {
                        fallback = (fallback as Translations)[fbKey];
                    } else {
                        return path; // Key not found
                    }
                }
                return fallback as string;
            }
            current = (current as Translations)[key];
        }

        return current as string;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
