import Home from "./home/Home"
import AppProvider from "./provider"

const App = () => {

    return (
        <AppProvider>
            <Home />
        </AppProvider>
    )
}

export default App
