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
                <input type="password" placeholder="password"></input>
                <div className="button-container">
                    <div id="button" onClick={popup}>LOGIN</div>
                    <Link to ="/register"><div id="button">REGISTER</div></Link>
                </div>

                <div className={popupStyle}>
                    <h3>Login failed</h3>
                    <p>Email and/or password is incorrect</p>
                </div>

            </div>
        </section>
    )
}