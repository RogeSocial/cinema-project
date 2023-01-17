import React from "react";


export default function() {
    return <footer>
        <div>
            <h1 className={"codinema"}>Codinema</h1>
            <p>I am a paragraph, Click here to add some extra text and stuff like that</p>
        </div>
        <div>
            <h1>Contact</h1>
            500 Terry francis street<br/>
            San Fransisco CA 94158<br/>
            info@mysite.se<br/>
            tel: 123-456 789
        </div>
        <div>
            <h1>Quick menu</h1>
            <ul>
                <li><a href={"/movies"}>Movies</a></li>
                <li><a href={"/account"}>Account</a></li>
                <li><a href={"/home"}>Home</a></li>
            </ul>
        </div>
        <div>
            <h1>Socials</h1>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
            </ul>
        </div>
    </footer>

}