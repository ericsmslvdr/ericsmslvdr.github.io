import { useEffect, useState } from "react"
import Button from "../../../components/button/Button";

const ThemeButton = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme as 'light' | 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const icon = {
        'light': "https://img.icons8.com/?size=100&id=16270&format=png&color=000000",
        'dark': "https://img.icons8.com/?size=100&id=26031&format=png&color=a8adb2"
    }

    return (
        <Button
            onClick={handleToggle}
            className="transition-all duration-300 group hover:-rotate-45"
        >
            <img src={icon[theme]} className='size-6 cursor-pointer -rotate-12' alt="" />
        </Button>
    )
}

export default ThemeButton