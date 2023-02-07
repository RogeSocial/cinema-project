import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'
import icon from "../images/apple-touch-icon.png";
import { handleRegister } from "../components/AccountComponents";
import GlobalContext from "../GlobalContext.jsx";


export default function () {
    const { createAccount } = useContext(GlobalContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e) => {
        e.preventDefault()
        createAccount(email, password)
    }
    return <section className="account">
        <form onSubmit={submit} id="formData" action="/login" className="cover createAccountCover">
            <img className="loginImg accountImg" src={icon} alt="" />
            <label htmlFor="fullname">Fullname:</label>
            <input type="text" id="name" name="name" placeholder="full name" required="required"></input>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="email"
            required="required" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
            <label htmlFor="phone number">Phone number:</label>
            <input onKeyPress={(e) => !/[0-9 + "+"]/.test(e.key) && e.preventDefault()} required="required" placeholder="phone number" id="tel" name="tel"></input>
            <label htmlFor="password">Password:</label>
            <input type="password" required="required" placeholder="password" name="password" minLength="8" id={"password"}
             value={password} onChange={(event)=>setPassword(event.target.value)}></input>
            <label htmlFor="confirm password">Confirm password: </label>
            <input type="password" required="required" placeholder="confirm password" minLength="8" id={"confirmPassword"} name="confirmPassword"></input>
            <br />
            <div className="button-group">
                <button type="submit"className="button" onClick={handleRegister}>REGISTER</button>
                <Link to="/login"><button className="button-text">Already have an account? Sign in.</button></Link>
            </div>
        </form>
    </section>
}