import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'
import icon from "../images/apple-touch-icon.png";

export default function () {
    
    const [popupStyle, showPopup] = useState("hide-popup");
    
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide-popup"), 30000)
    }
    
    return (
        <section className="account loginCover">
            <form className="cover">
            <div className="login-wrap">
            <img className="loginImg accountImg" src={icon} alt="" />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="password" minLength="8"></input>
               
                <div className="button-group">
                <button className="button" onClick={popup}>LOGIN</button>
                <Link to ="/register"><button className="button-text">Don't have an account? Register here.</button></Link>
                </div>
                <div className={popupStyle}>
                    <h3>Login failed</h3>
                    <p>Email and/or password is incorrect</p>
                </div>

              
                </div>
            </form>
        </section>
    )
}