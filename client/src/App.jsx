import {Outlet} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    ScrollToTop()
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;