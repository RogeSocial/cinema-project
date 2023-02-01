import React from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'

export default function () {
    return (
        <section>
        <form className="cover">
            <label htmlFor="fullname">Fullname:</label>
            <input type="text" placeholder="full name"></input>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="email"></input>
            <label htmlFor="phone number">Phone number:</label>
            <input onKeyPress={(e) => !/[0-9 + "+"]/.test(e.key) && e.preventDefault()} placeholder="phone number"></input>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password" minLength="8"></input>
            <label htmlFor="confirm password">Confirm password: </label>
            <input type="password" placeholder="confirm password" minLength="8"></input>
            <br></br>
            <button className="button">REGISTER</button>
            <Link to="/login"><button id="button">Already have an account? Sign in.</button></Link>
        </form>
    </section>
    )
}