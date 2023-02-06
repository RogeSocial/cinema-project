import {Link, Route} from "react-router-dom";
import React from "react";
import loggedIn from "./LoggedIn.js";
import AccountPage from "../pages/AccountPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

export default function () {
    return <nav>
        <Link to="movies" id='navbar'>Movies</Link>
        <Link to="tickets" id='navbar'>Tickets</Link>

        {loggedIn.loggedIn ?
            <Link to="account" id='navbar'> Account </Link>
            : <Link to="account" id='navbar'> Account </Link>}

    </nav>
}