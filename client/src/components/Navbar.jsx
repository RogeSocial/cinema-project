import {Link, Route} from "react-router-dom";
import React, {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";



export default function () {
    const {auth} = useContext(GlobalContext)
    return <nav>
        <Link to="movies" id='navbar'>Movies</Link>
        <Link to="tickets" id='navbar'>Tickets</Link>

        {auth.loggedIn ?
            <Link to="user/account" id='navbar'> Account </Link>
            : <Link to="login" id='navbar'> Account </Link>}

    </nav>
}