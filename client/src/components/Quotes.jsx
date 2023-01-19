import React, {Component} from 'react';
import '../CSS/home.css';
import '../CSS/quotes.css';

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

export default class Quotes extends Component {
    constructor() {
        super();

        this.animationRef = React.createRef();

        //This is the index (random number) that will be fetched from the two arrays.
        this.state = {
            index: Math.floor(Math.random() * horrorQuote.length),
        };
    }

    //This function is called whenever an animation iterates in the quote div, it changes the quote index
    handleIteration = (event) => {
        this.setState({ index: Math.floor(Math.random() * horrorQuote.length) });
    }

    //componentDidMount will be called when the component is mounted
    componentDidMount() {
        this.animationRef.current.addEventListener("animationiteration", this.handleIteration);
    }

    componentWillUnmount() {
        this.animationRef.current.removeEventListener("animationiteration", this.handleIteration);
    }

    render() {
    let movieQuote = horrorQuote[this.state.index];
        let byline = quoteData[this.state.index];

        return (
            <div className={"quotebox"}>
                <div ref={this.animationRef} className={"quote fading"}>{movieQuote}</div>
                <div className={"byline fading"}>{byline}</div>
            </div>
        )
    }
}