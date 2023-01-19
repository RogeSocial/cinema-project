import React from 'react';
import '../CSS/ticket-form.css'
import ticketImage from '../images/ticket.jpg';

export default function TicketForm(props) {



    console.log(`The props are currently ${props}`);

    return (
        <div className={"ticket-form-page"}>
            <div className={"ticket-form-box"}>
                <div className={"movie-details"}>
                    <h1>Name of the movie (props.movieName) {props.moviename}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, magna vel dictum porta,
                        risus massa commodo dui, id vestibulum risus ipsum eu risus.</p>


                </div>
                <div className={"form-row"}>
                    <form>

                        <ul>
                            <li>The chosen date {props.date}</li>
                            <li>The chosen time {props.time}</li>
                            <li>Movie theatre adress</li>
                        </ul>

                        <label htmlFor={"phone"}>Phone:</label>
                        <input type={"tel"} id={"phone"} className={"form-item"}/>

                        <label htmlFor={"email"}>E-mail:</label>
                        <input type={"email"} id={"email"} className={"form-item"}/>

                        <label htmlFor={"number"} className={"ticket-number"}>Number of tickets:</label>
                        <input type={"number"} className={"form-item"} min={"1"} max={"10"}/>

                        <button>Choose seats</button>

                        <button type={"submit"} className={"ticket-submit"}>Purchase tickets</button>
                    </form>
                    <div className={'image-box'}><img src={ticketImage} className={"ticket-image"} /></div>
                </div>
            </div>

        </div>

    );

}