import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/login.css'

export default function () {
    return (
        <div>
            <section>
                <div className="cover">
                    <input type="text" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>

                    <div className="button-container">
                        <div id="button">LOGIN</div>
                        <div id="button">REGISTER</div>
                    </div>
                </div>
            </section>
        </div>
    )
}