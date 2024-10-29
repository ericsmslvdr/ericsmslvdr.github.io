import Home from "./home/page"
import AppProvider from "./provider"

const App = () => {

    return (
        <AppProvider>
            <Home />
        </AppProvider>
    )
}

export default App
