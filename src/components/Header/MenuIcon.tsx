import { useMenu } from "@/contexts/MenuContext";

function MenuIcon() {
    const { showMenu, toggleMenu } = useMenu();

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

export default MenuIcon;