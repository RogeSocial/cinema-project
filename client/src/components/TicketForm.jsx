import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../CSS/ticket-form.css'
import { movieArray } from './MovieData';

export default function TicketForm() {
    const movieId = useParams().id
    const movie = movieArray.find(m=>m.id == movieId)
    return (
        <div className={"ticket-form-page"}>
            <div className={"ticket-form-box form-row"}>

                <div className={"movie-details"}>
                    <h1>{movie.title}</h1>
                    <p>{movie.text}</p>
                </div>
                <form className={"ticket-form"}>
                    <h3>Purchase tickets</h3>

                    <ul className='ticket-list'>
                        <li>The chosen date </li>
                        <li>The chosen time </li>
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

                    <Link to="/reserve"><button type={"submit"} className={"ticket-submit btn"}>Purchase tickets</button></Link>
                </form>

        </div>
    </div>

);
}