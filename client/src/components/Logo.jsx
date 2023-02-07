import {Link} from "react-router-dom";
import React, {useContext} from "react";
import globalContext from "../GlobalContext.jsx";
import {unSortMovies} from "./movieSort.js";

export default function () {
    const {movies} = useContext(globalContext)
    return <Link to={'/'} onClick={() => unSortMovies(movies)}><h1>Codinema</h1></Link>
}