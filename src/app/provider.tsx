import type { PropsWithChildren } from "react";
import { MenuContextProvider } from "@/contexts/MenuContextProvider";

function AppProvider({ children }: PropsWithChildren) {
    return (
        <MenuContextProvider>
            {children}
        </MenuContextProvider>
    );
}

export default AppProvider;