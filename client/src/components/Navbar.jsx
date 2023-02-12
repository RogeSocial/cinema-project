import {Link} from "react-router-dom";
import React, {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";



export default function () {
    const {auth} = useContext(GlobalContext)

    const firstName = auth.fullName?.split(" ").splice(0, 1)

    return <nav>
        <Link to="movies" id='navbar'>Movies</Link>
        <Link to="tickets" id='navbar'>Tickets</Link>

        {auth.loggedIn ?
            <Link to="user/account" id='navbar'> {firstName}</Link>
            : <Link to="login" id='navbar'> Account </Link>}

    </nav>
}