import {Outlet} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Suspense} from "react";
import {GlobalProvider} from "./GlobalContext.jsx";

function App() {
    ScrollToTop()
    return (
        <GlobalProvider>
            <Header/>
            <Suspense fallback={<div>...Loading</div>}>
            <Outlet/>
                </Suspense>
            <Footer/>
        </GlobalProvider>
    );
}

export default App;