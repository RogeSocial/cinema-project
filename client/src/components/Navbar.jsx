import {Link} from "react-router-dom";
import React, {useContext} from "react";
import globalContext from "../GlobalContext.jsx";
import {unSortMovies} from "./movieSort.js";

export default function () {

    return <nav>
        <Link to="movies" id='navbar'>Movies</Link>
        <Link to="tickets" id='navbar'>Tickets</Link>
        <Link to="user/account" id='navbar'>Account</Link>
    </nav>
}