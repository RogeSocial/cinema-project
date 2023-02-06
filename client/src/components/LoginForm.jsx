import React, {useState, useContext, useEffect} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";
import '../styles/account.css'
import icon from "../images/apple-touch-icon.png";
import GlobalContext from "../GlobalContext";

export default function () {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {submitLogin, auth} = useContext(GlobalContext)
const navigate = useNavigate();

    useEffect(() => {
            loginHandler()

    }, [auth]);




const submit = (e) => {
    e.preventDefault()
    submitLogin(email, password)
} 



    return <section className="account loginCover">
        <form onSubmit={submit} className="cover">
            <div className="login-wrap">
                <img className="loginImg accountImg" src={icon} alt="" />
                <label htmlFor="email">Email:</label>
                <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="password" minLength="8"></input>

                <div className="button-group">
                    <button className="button" type="submit" value="login">LOGIN</button>
                    <Link to="/user/register"><button className="button-text">Don't have an account? Register here.</button></Link>
                </div>
            </div>
        </form>
    </section>

function loginHandler() {
    if(auth.loggedIn){
        navigate("/")
    }
}
}