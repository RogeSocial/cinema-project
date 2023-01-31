

import {Outlet} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Suspense} from "react";

function App() {
    ScrollToTop()
    return (
        <>
            <Header/>
            <Suspense fallback={<div>...Loading</div>}>
            <Outlet/>
                </Suspense>
            <Footer/>
        </>
    );
}

export default App;