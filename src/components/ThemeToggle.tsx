import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun 
        className={`w-5 h-5 absolute transition-all duration-500 ${
          isDark 
            ? "rotate-90 scale-0 opacity-0" 
            : "rotate-0 scale-100 opacity-100 text-primary"
        }`} 
      />
      <Moon 
        className={`w-5 h-5 absolute transition-all duration-500 ${
          isDark 
            ? "rotate-0 scale-100 opacity-100 text-primary" 
            : "-rotate-90 scale-0 opacity-0"
        }`} 
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
