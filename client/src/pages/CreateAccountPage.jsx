import React from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'

export default function () {
    return (
        <section>
        <form className="cover">
            <input type="text" placeholder="full name"></input>
            <input type="email" placeholder="email"></input>
            <input type="number" placeholder="phone number"></input>
            <input type="password" placeholder="password" minLength="8"></input>
            <input type="password" placeholder="confirm password" minLength="8"></input>
            <br></br>
            <button className="button">REGISTER</button>
            <Link to="/login"><button id="button">Already have an account? Sign in.</button></Link>
        </form>
    </section>
    )
}