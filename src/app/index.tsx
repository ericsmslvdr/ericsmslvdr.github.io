import Home from "./home/page";
import AppProvider from "./provider";

function App() {
    return (
        <AppProvider>
            <Home />
        </AppProvider>
    );
}

export default App;
