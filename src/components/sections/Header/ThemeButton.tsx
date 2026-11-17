import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import lightIcon from "@/assets/icons/theme/light-mode.png";
import darkIcon from "@/assets/icons/theme/dark-mode.png";
import { headerContent } from "@/data/header";

function ThemeButton() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    function handleToggle() {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const icon = {
        'light': lightIcon,
        'dark': darkIcon,
    };

    return (
        <Button
            type="button"
            onClick={handleToggle}
            variant="outline"
            size="icon"
            className="cursor-pointer"
            aria-label={theme === "light" ? headerContent.themeSwitchToDarkLabel : headerContent.themeSwitchToLightLabel}
            title={theme === "light" ? headerContent.themeSwitchToDarkLabel : headerContent.themeSwitchToLightLabel}
        >
            <img src={icon[theme]} className="size-4" alt="" />
        </Button>
    );
}

export default ThemeButton;
