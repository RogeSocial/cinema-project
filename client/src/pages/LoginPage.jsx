import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'

export default function () {
    
    const [popupStyle, showPopup] = useState("hide");
    
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 30000)
    }
    
    return (
        <section>
            <div className="cover">
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password" minLength="8"></input>
                <div className="button-container">
                    <button className="button" onClick={popup}>LOGIN</button>
                    <Link to ="/register"><button className="button">REGISTER</button></Link>
                </div>

                <div className={popupStyle}>
                    <h3>Login failed</h3>
                    <p>Email and/or password is incorrect</p>
                </div>

            </div>
        </section>
    )
}