import { useMenu } from "@/contexts/MenuContext";
import MenuIcon from "./MenuIcon";
import NavItems from "./NavItems";

function Header() {
    const { showMenu, homeRef, scrollToSection } = useMenu();

    function handleScrollToSection(ref: React.RefObject<HTMLDivElement>) {
        scrollToSection(ref);
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
    );
}

export default Header;
