import React, {useEffect, useState} from 'react';

function Quotes(props) {

    let quotes = [
        "Here's Johnny!",
        "I see dead people.",
        "They're here!",
        "Do you like scary movies?",
        "I'm your number one fan.",
        "We all go a little mad sometimes.",
        "It's alive! It's alive!",
        "They're not gonna catch themselves.",
        "I'm your boogie man.",
    ]

    let quoteData = [
        "The Shining (1980)",
        "The Sixth Sense (1999)",
        "Poltergeist (1982)",
        "Scream (1996)",
        "Fatal Attraction (1987)",
        "Psycho (1960)",
        "Frankenstein (1931)",
        "Evil Dead II (1987)",
        "A Nightmare on Elm Street (1984)",
    ]

    let number = Math.floor(Math.random() * quotes.length);
    console.log(quotes[number]);


    const [divContent, setDivContent] = useState('Initial Content');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDivContent('content');
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div>{[quotes[number]]}, {quoteData[number]}</div>
    );
}

export default Quotes;