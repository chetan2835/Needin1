
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLang = () => {
        setLanguage(language === "EN" ? "HI" : "EN");
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLang}
            className="gap-1 px-2 text-muted-foreground hover:text-foreground hidden sm:flex"
            title="Switch Language"
        >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold w-4">{language}</span>
        </Button>
    );
};

export default LanguageToggle;
