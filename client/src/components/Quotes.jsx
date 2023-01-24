import '../CSS/home.css';
import '../CSS/quotes.css';
import React, { useState, useEffect } from 'react';

//The elements of both arrays must be kept in the right order
// because the index of each horrorQuote corresponds to the index of each quoteData
const horrorQuote = [
    "\"Here's Johnny!\"",
    "\"I see dead people\"",
    "\"They're here!",
    "\"Do you like scary movies?\"",
    "\"We all go a little mad sometimes\"",
    "\"It's alive! It's alive!\"",
    "\"They're not gonna catch themselves\"",
    "\"I'm your boogie man\"",
    "\"Whatever you do, don’t fall asleep\"",
    "\"I want to play a game\"",
    "\"The power of Christ compels you!\"",
    "\"Tell her to stay away from the light\"",
    "\"Be afraid. Be very afraid\"",
    "\"I'm having an old friend for dinner\""
];

const quoteData = [
    "– The Shining, 1980",
    "– The Sixth Sense, 1999",
    "– Poltergeist, 1982",
    "– Scream, 1996",
    "– Psycho, 1960",
    "– Frankenstein, 1931",
    "– Evil Dead II, 1987",
    "– A Nightmare on Elm Street, 1984",
    "– A Nightmare on Elm Street, 1984",
    "– Saw, 2004",
    "– The Exorcist, 1973",
    "– Poltergeist, 1982",
    "– The Fly, 1986",
    "– The Silence of the Lambs, 1991"
];

export default function () {

    const [index, setIndex] = useState(Math.floor(Math.random() * horrorQuote.length));
    const animationRef = React.createRef();

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.addEventListener("animationiteration", handleIteration);
        }
        return () => {
            if (animationRef.current) {
                animationRef.current.removeEventListener("animationiteration", handleIteration);
            }
        }
    }, [animationRef]);

    const handleIteration = (event) => {
        setIndex(Math.floor(Math.random() * horrorQuote.length));
    }

    let movieQuote = horrorQuote[index];
    let byline = quoteData[index];

    return (
        <div className={"quotebox"}>
            <div ref={animationRef} className={"quote fading"}>{movieQuote}</div>
            <div className={"byline fading"}>{byline}</div>
        </div>
    )
}