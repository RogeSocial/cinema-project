import {dateSelector, timeSelector} from "./Utilities.jsx";
import {Link} from "react-router-dom";
import React from "react";

export default function ({currentMovie}) {
    const movie = currentMovie;

    return <form className={"date-form"}>
        <h3>Purchase tickets</h3>
        <ul>
            <li>Available dates:</li>
            {dateSelector(movie.dates)}
            <li>The chosen time</li>
            {timeSelector(movie.time)}
        </ul>

        <Link to="/reserve">
            <button type={"submit"} className={"ticket-submit button"}>Purchase tickets</button>
        </Link>

    </form>
}