import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'
import icon from "../images/apple-touch-icon.png";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const { auth, createAccount} = useContext(GlobalContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e) => {
        e.preventDefault()
        createAccount(email, password)
    }
    return (
        <section className="account">
                <form onSubmit={submit} className="cover createAccountCover">
                    <img className="loginImg accountImg" src={icon} alt="" />
                    <label htmlFor="fullname">Fullname:</label>
                    <input type="text" placeholder="full name"></input>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="email"></input>
                    <label htmlFor="phone number">Phone number:</label>
                    <input onKeyPress={(e) => !/[0-9 + "+"]/.test(e.key) && e.preventDefault()} placeholder="phone number"></input>
                    <label htmlFor="password">Password:</label>
                    <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="password" minLength="8"></input>
                    <label htmlFor="confirm password">Confirm password: </label>
                    <input type="password" placeholder="confirm password" minLength="8"></input>
                    <br/>
                    <div className="button-group">
                    <button type={"submit"} className="button">REGISTER</button>
                    <Link to="/login"><button className="button-text">Already have an account? Sign in.</button></Link>
                    </div>
                </form>
        </section>
    )
}