import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<string>(() =>
        typeof window !== "undefined" && localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button onClick={toggleTheme} className="btn">
            {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
        </button>
    );
};

export default ThemeSwitcher;
