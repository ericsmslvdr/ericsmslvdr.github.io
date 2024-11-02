import { useMenu } from "@/contexts/MenuContext";
import ThemeButton from "./ThemeButton";

function NavItems() {
    const {
        closeMenu,
        scrollToSection,
        homeRef,
        skillsRef,
        projectsRef,
        contactMeRef,
    } = useMenu();

    function handleScrollToSection(ref: React.RefObject<HTMLDivElement>) {
        scrollToSection(ref);
        closeMenu();
    }

    return (
        <ul className='flex items-end gap-4 flex-col md:flex-row md:items-center text-lightSecondaryText dark:text-darkSecondaryText'>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(homeRef)}>Home</li>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(skillsRef)}>Skills</li>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(projectsRef)}>Projects</li>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(contactMeRef)}>Contact Me</li>
            <li className="flex items-center"><ThemeButton /></li>
        </ul>
    );
}

export default NavItems;