import {Link} from "react-router-dom";
import React from "react";

export default function () {
    return <nav>
        <Link to="movies" id='navbar'>Movies</Link>
        <Link to="tickets" id='navbar'>Tickets</Link>
        <Link to="user/account" id='navbar'>Account</Link>
    </nav>
}