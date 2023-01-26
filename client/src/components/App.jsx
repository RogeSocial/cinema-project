import Header from "./Header.jsx";


import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";
import ScrollToTop from "./scrollToTop.jsx";

function App() {
    return (
        <>
            <ScrollToTop/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;


