import React from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'
import icon from "../images/apple-touch-icon.png";

export default function () {
    return (
        <section className="account">
                <form className="cover createAccountCover">
                    <img className="loginImg accountImg" src={icon} alt="" />
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
                    <br/>
                    <div className="button-group">
                    <button className="button">REGISTER</button>
                    <Link to="/login"><button className="button-text">Already have an account? Sign in.</button></Link>
                    </div>
                </form>
        </section>
    )
}