import React from "react";
import '../styles/account.css'

export default function () {
    return (
        <section>
        <div className="cover">
            <input type="text" placeholder="full name"></input>
            <input type="email" placeholder="email"></input>
            <input type="number" placeholder="phone number"></input>
            <input type="password" placeholder="password"></input>
            <input type="password" placeholder="confirm password"></input>
        </div>
    </section>
    )
}