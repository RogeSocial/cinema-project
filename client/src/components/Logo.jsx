import {Link} from "react-router-dom";
import '../styles/header.css'
import React, {useContext} from "react";
import globalContext from "../GlobalContext.jsx";
import {unSortMovies} from "./movieSort.js";

export default function () {
    const {movies} = useContext(globalContext)
    return <Link onClick={() => unSortMovies(movies)} to={'/'}>
        <div className="waviy">
            <span style={{'--i':1}}>C</span>
            <span style={{'--i':2}}>o</span>
            <span style={{'--i':3}}>d</span>
            <span style={{'--i':4}}>i</span>
            <span style={{'--i':5}}>n</span>
            <span style={{'--i':6}}>e</span>
            <span style={{'--i':7}}>m</span>
            <span style={{'--i':8}}>a</span>
        </div>
    </Link>
}