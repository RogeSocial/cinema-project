import React from 'react'
import {Link, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Codinema</h1> */
            <Link to="/">Home</Link>
            <Link to="Movies">Movies</Link>
            <Link to="Tickets">Tickets</Link>
            <Outlet/>
        </header>

    )
}

export default Header
