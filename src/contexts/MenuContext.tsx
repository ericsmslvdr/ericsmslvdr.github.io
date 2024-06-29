import React, { ReactNode, createContext, useRef, useState } from "react";

const MenuContext = createContext({
    toggleMenu: () => { },
    closeMenu: () => { },
    showMenu: false,
    scrollToSection: (_ref: React.RefObject<HTMLDivElement>) => { },
    homeRef: {} as React.RefObject<HTMLDivElement>,
    skillsRef: {} as React.RefObject<HTMLDivElement>,
    projectsRef: {} as React.RefObject<HTMLDivElement>,
    contactMeRef: {} as React.RefObject<HTMLDivElement>,
})

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
    const [showMenu, setShowMenu] = useState(false);
    const homeRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactMeRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false)
    }

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

            const offsetTop = ref.current.getBoundingClientRect().top + window.scrollY - 100;

            window.scrollTo({
                top: offsetTop,
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
        contactMeRef
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext