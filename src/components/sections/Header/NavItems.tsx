import { useMenu } from "@/contexts/useMenu";
import type { SectionRef } from "@/contexts/MenuContext";
import ThemeButton from "./ThemeButton";
import { Button } from "@/components/ui/button";
import { headerContent } from "@/data/header";

function NavItems() {
    const {
        closeMenu,
        scrollToSection,
        homeRef,
        skillsRef,
        projectsRef,
        contactMeRef,
    } = useMenu();

    function handleScrollToSection(ref: SectionRef) {
        scrollToSection(ref);
        closeMenu();
    }

    return (
        <ul className='flex flex-col items-end gap-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center'>
            {headerContent.navigationItems.map(({ label, target }) => {
                const sectionRefs = {
                    home: homeRef,
                    skills: skillsRef,
                    projects: projectsRef,
                    contactMe: contactMeRef,
                };

                return (
                    <li key={target}>
                        <Button type="button" variant="ghost" className="cursor-pointer" onClick={() => handleScrollToSection(sectionRefs[target])}>
                            {label}
                        </Button>
                    </li>
                );
            })}
            <li className="flex items-center"><ThemeButton /></li>
        </ul>
    );
}

export default NavItems;
