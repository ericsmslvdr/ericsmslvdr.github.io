import { createContext, useContext, useState } from "react";

const MenuContext = createContext({
    showMenu: false,
    toggleMenu: () => { },
});

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    return (
        <MenuContext.Provider value={{ showMenu, toggleMenu }}>
            <header className='fixed z-10 top-0 left-0 right-0 bg-dark w-full py-6 px-8 shadow-lg border border-green-300' >
                <div className="flex justify-between items-center max-w-container min-w-[40px] mx-auto border border-red-500">
                    <a href="#home" className="text-gray hover:text-link border border-orange-400">
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
        </MenuContext.Provider>
    )
}

export default Header

const NavItems = () => {
    const { toggleMenu } = useContext(MenuContext)

    return (
        <ul className='flex items-end gap-4 text-gray flex-col md:flex-row'>
            <li><a href="#home" className='hover:text-link' aria-label="Navigate to Home section" onClick={toggleMenu}>Home</a></li>
            <li><a href="#skills" className='hover:text-link' aria-label="Navigate to Skills section" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className='hover:text-link' aria-label="Navigate to Projects section" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contacts" className='hover:text-link' aria-label="Navigate to Contact Me section" onClick={toggleMenu}>Contact Me</a></li>
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
            width="40"
            height="40"
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
            width="40"
            height="40"
            viewBox="0 0 64 64"
            style={{ fill: "#a8adb2" }}
            onClick={toggleMenu}
        >
            <path d="M7 29v5l50 1v-7L7 29zM7 11v6h50v-6H7zM7 46v7l50-1v-5L7 46z"></path>
        </svg>
    )

    return (
        <div className="md:hidden border border-blue-300">
            {menuIcon}
        </div>
    )
}