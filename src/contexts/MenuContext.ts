import { createContext } from "react";
import type { RefObject } from "react";

export type SectionRef = RefObject<HTMLElement | null>;

export type MenuContextProps = {
    toggleMenu: () => void;
    closeMenu: () => void;
    showMenu: boolean;
    scrollToSection: (ref: SectionRef) => void;
    homeRef: SectionRef;
    skillsRef: SectionRef;
    projectsRef: SectionRef;
    contactMeRef: SectionRef;
};

const MenuContext = createContext<MenuContextProps | undefined>(undefined);
export default MenuContext;
