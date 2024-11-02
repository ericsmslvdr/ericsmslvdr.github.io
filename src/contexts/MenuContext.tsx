import { PropsWithChildren, RefObject, createContext, useContext, useRef, useState } from "react";

type MenuContextProps = {
    toggleMenu: () => void;
    closeMenu: () => void;
    showMenu: boolean;
    scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
    homeRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactMeRef: RefObject<HTMLDivElement>;
};

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export function MenuContextProvider({ children }: PropsWithChildren) {
    const [showMenu, setShowMenu] = useState(false);

    const homeRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactMeRef = useRef<HTMLDivElement>(null);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function closeMenu() {
        setShowMenu(false);
    }

    function scrollToSection(ref: RefObject<HTMLDivElement>) {
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

export function useMenu() {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('useMenu must be used within a MenuContextProvider');
    }

    return context;
}