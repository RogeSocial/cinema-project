import {Link} from "react-router-dom";
import React from "react";
import '../styles/header.css'

export default function () {
    return <Link to={'/'}>
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