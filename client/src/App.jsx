import {Outlet} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {GlobalProvider} from "./GlobalContext.jsx";

function App() {
    ScrollToTop()
    return (
        <GlobalProvider>
            <Header/>
            <Outlet/>
            <Footer/>
        </GlobalProvider>
    );
}

export default App;