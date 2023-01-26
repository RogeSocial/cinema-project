import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return <footer>
        <hr id={"footer-line"} />
        <div className={"footer-content"}>
            <h2 className={"codinema"}>Codinema</h2>
            <p>Codinema is the ultimate cinema for horror movie fans. Our state-of-the-art theater boasts
                high-definition projectors, surround sound, and comfortable seating, immersing you in a truly terrifying
                experience.</p>
        </div>
        <div className={"footer-content"}>
            <h3>Contact</h3>
            <adress>Codinema<br />Nightmare avenue 666<br />211 20 Malmö <br />
                <p id={"mail-and-phone"}><a href={'mailto:info@codinematheatre.se'}>info@codinematheatre.se</a><br />
                    tel: 123-456 789</p>
            </adress>
        </div>
        <div className={"footer-content"}>
            <h3>Quick menu</h3>
            <ul>
                <li className="footer-link"><Link to={"/"}>Home</Link></li>
                <li className="footer-link"><Link to={"/movies"}>Movies</Link></li>
                <li className="footer-link"><Link to={"/tickets"}>Tickets</Link></li>
                <li className="footer-link"><Link to={"/reservations"}>Reservations</Link></li>
                <li className="footer-link"><Link to={"/account"}>Account</Link></li>
            </ul>
        </div>
        <div className={"footer-content"}>
            <h3>Socials</h3>
            <ul>
                <li className="footer-link"><a href={"http://www.facebook.com"} target={"_blank"}>Facebook</a></li>
                <li className="footer-link"><a href={"http://www.instagram.com/"} target={"_blank"}>Instagram</a></li>
                <li className="footer-link"><a href={"http://twitter.com/codinematheatre"} target={"_blank"}>Twitter</a></li>
                <li className="footer-link"><a href={"http://www.youtube.com/"} target={"_blank"}>Youtube</a></li>
            </ul>
        </div>
    </footer>
}