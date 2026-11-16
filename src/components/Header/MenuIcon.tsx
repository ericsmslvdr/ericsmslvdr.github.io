import { useMenu } from "@/contexts/useMenu";

function MenuIcon() {
    const { showMenu, toggleMenu } = useMenu();

    return (
        <button
            type="button"
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={showMenu}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current text-lightSecondaryText dark:text-darkSecondaryText"
                aria-hidden="true"
            >
                {showMenu ? (
                    <path d="M 4.707 3.293 L 3.293 4.707 L 10.586 12 L 3.293 19.293 L 4.707 20.707 L 12 13.414 L 19.293 20.707 L 20.707 19.293 L 13.414 12 L 20.707 4.707 L 19.293 3.293 L 12 10.586 Z" />
                ) : (
                    <path d="M7 11h50v6H7zm0 18h50v6H7zm0 18h50v6H7z" transform="scale(.375)" />
                )}
            </svg>
        </button>
    );
}

export default MenuIcon;
