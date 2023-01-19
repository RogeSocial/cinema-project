import React from 'react';
import '../CSS/ticket-form.css'

export default function TicketForm(props) {
    return (
        <div className={"ticket-form-box"}>
            <form>
                <p>Movie data details here (movie name and short summary)</p>
                <p>telephone number, email-adress, number of tickets</p>
            </form>
        </div>
    );
}