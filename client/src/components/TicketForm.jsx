import React from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/ticket-form.css'
import { movieArray } from './MovieData';

export default function TicketForm() {
    const movieId = useParams().id
    const movie = movieArray.find(m=>m.id == movieId)


    function dateSelector() {
        return (
            <select name="dates" id="dates" className='date-picker'>
                {movie.date.map((option, index) => {
                    return <option key= {index} > {option} </option>
                })}
            </select>
        )
    }

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
                        <li>Available dates:  </li>
                        { dateSelector()}
                        <li>The chosen time </li>
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

                    <button type={"submit"} className={"ticket-submit btn"}>Chose seats</button>
                </form>

        </div>
    </div>

);
}