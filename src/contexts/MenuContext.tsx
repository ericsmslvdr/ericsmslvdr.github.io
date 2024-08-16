import { ReactNode, RefObject, createContext, useContext, useRef, useState } from "react";

type MenuContextProps = {
    toggleMenu: () => void;
    closeMenu: () => void;
    showMenu: boolean;
    scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
    homeRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactMeRef: RefObject<HTMLDivElement>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined)

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
        setShowMenu(false);
    }

    const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
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
        contactMeRef
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext;

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuContextProvider');
    }
    return context;
}