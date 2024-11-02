import { PropsWithChildren } from "react";
import { MenuContextProvider } from "@/contexts/MenuContext";

function AppProvider({ children }: PropsWithChildren) {
    return (
        <MenuContextProvider>
            {children}
        </MenuContextProvider>
    );
}

export default AppProvider;