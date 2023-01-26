import React from 'react';
import Quotes from "./Quotes.jsx";
import {Link} from "react-router-dom";

function Hero() {
    return (
        <section>
            <div className="background-image">
                <h2 className={"transparent-background"}><Quotes /></h2>
                <div className="center-btn">
                    <Link to="user/logins" ><button className="btn">LOGIN</button></Link>
                    <Link to="user/registers"><button className="btn">SIGNUP</button></Link>
                </div>
                <div className="darken-lower-part"></div>
            </div>
        </section>
    );
}

export default Hero;