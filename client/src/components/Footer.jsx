import React from "react";


export default function() {
    return <>
    <div className={'line-container'}>
        <hr/>
    </div>
        <footer>
            <div>
                <h1 className={"codinema"}>Codinema</h1>
                I am a paragraph, Click here to add some extra text and stuff like that. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                    <li><a href={"http://www.facebook.com"} target={'blank'}>Facebook</a></li>
                    <li><a href={"http://www.instagram.com"} target={'blank'}>Instagram</a></li>
                    <li><a href={"http://www.twitter.com"} target={'blank'}>Twitter</a></li>
                    <li><a href={"http://www.youtube.com"} target={'blank'}>Youtube</a></li>
                </ul>
            </div>

    </footer>
    </>
}