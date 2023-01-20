import React from 'react';
import '../CSS/ticket-form.css'
import ticketImage from '../images/ticket.jpg';

export default function TicketForm(props) {

    return (
        <div className={"ticket-form-page"}>
            <div className={"ticket-form-box form-row"}>

                <div className={"movie-details"}>
                    <h1>Name of the movie (props.movieName) {props.moviename}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, magna vel dictum porta,
                        risus massa commodo dui, id vestibulum risus ipsum eu risus.</p>
                </div>
                <form className={"ticket-form"}>
                    <h3>Purchase tickets</h3>

                    <ul className='ticket-list'>
                        <li>The chosen date {props.date}</li>
                        <li>The chosen time {props.time}</li>
                        <li>Movie theatre adress</li>
                        <li>Ticket price</li>
                    </ul>

                    <h3>Your contact information</h3>
                    <ul className='ticket-list'>
                        <li>Phone: user account number</li>
                        <li>E-mail: user account e-mail</li>
                    </ul>

                    <div className='ticket-picker-in-form'>
                        Insert ticket-picker here
                    </div>

                    <button type={"submit"} className={"ticket-submit btn"}>Purchase tickets</button>
                </form>

        </div>
    </div>

);
}