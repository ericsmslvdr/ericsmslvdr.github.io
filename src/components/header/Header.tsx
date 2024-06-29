import { useContext } from "react";
import MenuContext from "../../contexts/MenuContext";

const Header = () => {
    const { showMenu } = useContext(MenuContext);

    return (
        <header className='fixed z-10 top-0 left-0 right-0 bg-dark w-full py-6 px-8 shadow-lg' >
            <div className="flex justify-between items-center max-w-container min-w-[40px] mx-auto">
                <a href="#home" className="text-gray hover:text-link">
                    &lt;
                    <span className='text-gray'>ericsmslvdr </span>
                    &#47;&gt;
                </a >

                <nav className="md:flex md:items-center hidden">
                    <NavItems />
                </nav>

                <MenuIcon />

                {showMenu && (
                    <nav className="md:hidden absolute top-20 left-0 right-0 bg-dark py-4 px-8 shadow-lg">
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
        <ul className='flex items-end gap-4 text-gray flex-col md:flex-row'>
            <li className='hover:text-link' onClick={() => handleScrollToSection(homeRef)}>Home</li>
            <li className='hover:text-link' onClick={() => handleScrollToSection(skillsRef)}>Skills</li>
            <li className='hover:text-link' onClick={() => handleScrollToSection(projectsRef)}>Projects</li>
            <li className='hover:text-link' onClick={() => handleScrollToSection(contactMeRef)}>Contact Me</li>
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
            style={{ fill: "#a8adb2" }}
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
            style={{ fill: "#a8adb2" }}
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