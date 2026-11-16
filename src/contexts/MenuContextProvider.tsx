import { useRef, useState } from "react";
import type { PropsWithChildren } from "react";
import MenuContext from "./MenuContext";
import type { SectionRef } from "./MenuContext";


export function MenuContextProvider({ children }: PropsWithChildren) {
    const [showMenu, setShowMenu] = useState(false);

    const homeRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactMeRef = useRef<HTMLElement>(null);

    function toggleMenu() {
        setShowMenu((isOpen) => !isOpen);
    }

    function closeMenu() {
        setShowMenu(false);
    }

    function scrollToSection(ref: SectionRef) {
        if (ref.current) {
            const section = ref.current;
            const sectionTop = section.getBoundingClientRect().top;
            const scrollPosition = sectionTop + window.scrollY - 100;

            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth",
            });
        }
    }

    const value = {
        toggleMenu,
        closeMenu,
        showMenu,
        scrollToSection,
        homeRef,
        skillsRef,
        projectsRef,
        contactMeRef,
    };

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
}
