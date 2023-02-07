import {Link} from "react-router-dom";
import React, {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {

    const {auth} = useContext(GlobalContext)

    return <div className={"footer-content"}>
        <h3>Quick menu</h3>
        <ul>
            <li className="footer-link"><Link to={"/"}>Home</Link></li>
            <li className="footer-link"><Link to={"/movies"}>Movies</Link></li>
            <li className="footer-link"><Link to={"/tickets"}>Tickets</Link></li>

            {auth.loggedIn ?
                <li className="footer-link"><Link to={"/user/account"}>Account</Link></li>
                : <li className="footer-link"><Link to={"login"}>Account</Link></li>}

        </ul>
    </div>
}