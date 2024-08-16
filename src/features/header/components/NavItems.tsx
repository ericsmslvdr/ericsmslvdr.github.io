import { useMenu } from "../../../contexts/MenuContext"
import ThemeButton from "./ThemeButton";

const NavItems = () => {
    const {
        closeMenu,
        scrollToSection,
        homeRef,
        skillsRef,
        projectsRef,
        contactMeRef
    } = useMenu();

    const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        scrollToSection(ref)
        closeMenu()
    }

    return (
        <ul className='flex items-end gap-4 flex-col text-lightSecondaryText dark:text-darkSecondaryText md:flex-row md:items-center'>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(homeRef)}>Home</li>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(skillsRef)}>Skills</li>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(projectsRef)}>Projects</li>
            <li className='hover:text-lightLink dark:hover:text-darkLink cursor-pointer' onClick={() => handleScrollToSection(contactMeRef)}>Contact Me</li>
            <li><ThemeButton /></li>
        </ul>
    )
}

export default NavItems;