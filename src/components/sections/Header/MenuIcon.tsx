import { useMenu } from "@/contexts/useMenu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { headerContent } from "@/data/header";

function MenuIcon() {
    const { showMenu, toggleMenu } = useMenu();

    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={showMenu ? headerContent.menuCloseLabel : headerContent.menuOpenLabel}
            aria-expanded={showMenu}
        >
            {showMenu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
    );
}

export default MenuIcon;
