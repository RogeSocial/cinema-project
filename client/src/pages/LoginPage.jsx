import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import '../styles/account.css'
import icon from "../images/apple-touch-icon.png";
import GlobalContext from "../GlobalContext.jsx";

export default function () {

    const { deleteAccount, auth, submitLogin, logout } = useContext(GlobalContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submit(e){
        e.preventDefault()
        submitLogin(email, password)
    }



    const [popupStyle, showPopup] = useState("hide-popup");

    const popup = () => {
        if(!auth.loggedIn){
        showPopup("login-popup")
        setTimeout(() => showPopup("hide-popup"), 30000)
    }
    }


    return (<section className="account loginCover">

            { auth.loggedIn ?
                <div className = "cover">
                    <button onClick={ logout}>Logout</button>
                    <button onClick={() => deleteAccount(email)}>Delete account</button>

                </div> :


                    <form onSubmit={submit} className="cover">
                        <div className="login-wrap">
                            <img className="loginImg accountImg" src={icon} alt=""/>
                            <label htmlFor="email">Email:</label>
                            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                                   placeholder="email"></input>
                            <label htmlFor="password">Password:</label>
                            <input type="password" value={password}
                                   onChange={(event) => setPassword(event.target.value)} placeholder="password"
                                   minLength="8"></input>

                            <div className="button-group">
                                <button className="button" type={"submit"} value={"Login"} onClick={popup}>LOGIN</button>
                                <Link to="/register">
                                    <button className="button-text">Don't have an account? Register here.</button>
                                </Link>
                            </div>
                            <div className={popupStyle}>
                                <h3>Login failed</h3>
                                <p>Email and/or password is incorrect</p>
                            </div>


                        </div>
                    </form>


        }
</section>
    )
}