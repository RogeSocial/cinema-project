import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return <>
    <div className={'line-container'}>
        <hr/>
    </div>
        <footer>
            <div>
                <h1 className={"codinema"}>Codinema</h1>
                Codinema is the ultimate cinema for horror movie fans. Our state-of-the-art theater boasts high-definition projectors, surround sound, and comfortable seating, immersing you in a truly terrifying experience.
            </div>
            <div>
                <h1>Contact</h1>
                Codinema<br/>
                Nightmare avenue 666<br/>
                211 20 Malmö
                <p>info@codinematheatre.se<br/>
                tel: 123-456 789</p>
            </div>
            <div>
                <h1>Quick menu</h1>
                <ul>
                    <li className="footer-link"><Link to={"/"}>Home</Link></li>
                    <li className="footer-link"><Link to={"/movies"}>Movies</Link></li>
                    <li className="footer-link"><Link to={"/tickets"}>Tickets</Link></li>
                    <li className="footer-link"><Link to={"/reservations"}>Reservations</Link></li>
                    <li className="footer-link"><Link to={"/account"}>Account</Link></li>
                </ul>
            </div>
            <div>
                <h1>Socials</h1>
                <ul>
                    <li className="footer-link"><a href={"http://www.facebook.com"} target={"_blank"}>Facebook</a></li>
                    <li className="footer-link"><a href={"http://www.instagram.com/"} target={"_blank"}>Instagram</a></li>
                    <li className="footer-link"><a href={"http://twitter.com/codinematheatre"} target={"_blank"}>Twitter</a></li>
                    <li className="footer-link"><a href={"http://www.youtube.com/"} target={"_blank"}>Youtube</a></li>
                </ul>
            </div>
    </footer>
    </>
}