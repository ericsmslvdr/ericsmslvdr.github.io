import { useEffect, useState } from "react";
import Button from "../ui/Button";
import lightIcon from "@/assets/icons/theme/light-mode.png";
import darkIcon from "@/assets/icons/theme/dark-mode.png";

function ThemeButton() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme as 'light' | 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    function handleToggle() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const icon = {
        'light': lightIcon,
        'dark': darkIcon,
    };

    return (
        <Button
            onClick={handleToggle}
            className="transition-all duration-300 group hover:-rotate-45"
        >
            <img src={icon[theme]} className='size-6 cursor-pointer -rotate-12' alt="" />
        </Button>
    );
}

export default ThemeButton;