import React from "react";
import {Link} from "react-router-dom";
import {dateSelector, timeSelector} from "./Utilities.jsx";

export default function ({currentMovie}) {
    const movie = currentMovie;

    return <form className={"date-form"}>
        <h3>Available shows</h3>
        <ul>
            <li>Date:</li>
            {dateSelector(movie.dates)}
            <li>Time:</li>
            {timeSelector(movie.time)}
        </ul>

        <Link to="/reserve">
            <button type={"submit"} className={"ticket-submit button"}>Choose seats</button>
        </Link>
    </form>
}