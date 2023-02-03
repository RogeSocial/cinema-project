import React from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'
import icon from "../images/apple-touch-icon.png";
import { handleRegister } from "../components/AccountComponents";

export default function () {
    return (
        <section className="account">
            <form id="formData" action="/register" className="cover createAccountCover">
                <img className="loginImg accountImg" src={icon} alt="" />
                <label htmlFor="fullname">Fullname:</label>
                <input type="text" id="name" name="name" placeholder="full name"></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="email"></input>
                <label htmlFor="phone number">Phone number:</label>
                <input onKeyPress={(e) => !/[0-9 + "+"]/.test(e.key) && e.preventDefault()} placeholder="phone number" id="tel" name="tel"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="password" name="password" minLength="8" id={"password"}></input>
                <label htmlFor="confirm password">Confirm password: </label>
                <input type="password" placeholder="confirm password" minLength="8" id={"confirmPassword"} name="confirmPassword"></input>
                <br />
                <div className="button-group">
                    <button type="button" className="button" onClick={handleRegister}>REGISTER</button>
                    <Link to="/login"><button className="button-text">Already have an account? Sign in.</button></Link>
                </div>
            </form>
        </section>
    )
}