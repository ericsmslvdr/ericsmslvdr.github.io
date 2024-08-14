import { useContext } from "react";
import MenuContext from "../../contexts/MenuContext";
import Toggle from "./components/SwitchThemeButton";

const Header = () => {
    const { showMenu, homeRef, scrollToSection } = useContext(MenuContext);

    const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        scrollToSection(ref)
    }

    return (
        <header className="bg-lightBackground dark:bg-darkBackground fixed z-10 top-0 left-0 right-0 w-full py-6 px-8 shadow-lg">
            <div className="flex justify-between items-center max-w-container min-w-[40px] mx-auto">
                <span
                    className="text-lightSecondaryText hover:text-lightLink dark:text-darkSecondaryText dark:hover:text-darkLink cursor-pointer"
                    onClick={() => handleScrollToSection(homeRef)}
                >
                    &lt;
                    <span className='text-lightSecondaryText dark:text-darkSecondaryText'>ericsmslvdr </span>
                    &#47;&gt;
                </span >

                <nav className="md:flex md:items-center hidden">
                    <NavItems />
                </nav>

                <MenuIcon />

                {showMenu && (
                    <nav className="md:hidden absolute top-16 left-0 right-0 bg-lightBackground dark:bg-darkBackground py-4 px-8 shadow-lg">
                        <NavItems />
                    </nav>
                )}

            </div>
        </header >
    )
}

export default Header

const NavItems = () => {
    const { closeMenu, scrollToSection, homeRef, skillsRef, projectsRef, contactMeRef } = useContext(MenuContext)

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
            <li><Toggle /></li>
        </ul>
    )
}

const MenuIcon = () => {
    const { showMenu, toggleMenu } = useContext(MenuContext)

    const menuIcon = showMenu ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="fill-current text-lightSecondaryText dark:text-darkSecondaryText"
            onClick={toggleMenu}
        >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="28"
            height="28"
            viewBox="0 0 64 64"
            className="fill-current text-lightSecondaryText dark:text-darkSecondaryText"
            onClick={toggleMenu}
        >
            <path d="M7 29v5l50 1v-7L7 29zM7 11v6h50v-6H7zM7 46v7l50-1v-5L7 46z"></path>
        </svg>
    )

    return (
        <div className="md:hidden cursor-pointer">
            {menuIcon}
        </div>
    )
}