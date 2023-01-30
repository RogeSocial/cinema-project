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
                        <button>LOGIN</button>
                        <button>REGISTER</button>
                    </div>
                </div>
            </section>
        </div>
    )
}