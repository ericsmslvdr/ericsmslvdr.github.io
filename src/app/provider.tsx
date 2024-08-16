import { MenuContextProvider } from "../contexts/MenuContext"

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <MenuContextProvider>
            {children}
        </MenuContextProvider>
    )
}

export default AppProvider