import { useMenu } from "@/contexts/useMenu";
import type { SectionRef } from "@/contexts/MenuContext";
import { headerContent } from "@/data/header";
import MenuIcon from "./MenuIcon";
import NavItems from "./NavItems";

function Header() {
    const { showMenu, homeRef, scrollToSection } = useMenu();

    function handleScrollToSection(ref: SectionRef) {
        scrollToSection(ref);
    }

    return (
        <header className="fixed left-0 right-0 top-0 z-10 w-full border-b border-border/60 bg-background/95 px-8 py-6 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/75">
            <div className="flex justify-between items-center max-w-container min-w-[40px] mx-auto">
                <button
                    type="button"
                    className="font-mono text-sm text-muted-foreground transition-colors hover:text-blue-500 dark:text-muted-foreground dark:hover:text-[#4b6b95]"
                    onClick={() => handleScrollToSection(homeRef)}
                    aria-label={headerContent.homeActionLabel}
                >
                    &lt;
                    <span className='text-foreground'>{headerContent.brand} </span>
                    &#47;&gt;
                </button>

                <nav aria-label={headerContent.navigationLabel} className="md:flex md:items-center hidden">
                    <NavItems />
                </nav>

                <MenuIcon />

                {showMenu && (
                    <nav aria-label={headerContent.mobileNavigationLabel} className="absolute left-0 right-0 top-16 border-b bg-background px-8 py-4 shadow-md md:hidden">
                        <NavItems />
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
