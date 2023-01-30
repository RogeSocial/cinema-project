import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/ticket-form.css'
import { movieArray } from '../components/movie-data.js';
import '../styles/home.css'
import { timeSelector } from '../components/Utilities';
import { dateSelector } from '../components/Utilities';

export default function TicketForm() {
    const movieId = useParams().id
    const movie = movieArray.find(m => m.id == movieId)

    self.addEventListener('fetch', event => {
        event.respondWith(
            (async function () {
                const preloadResponse = await event.preloadResponse;
                if (preloadResponse) {
                    return preloadResponse;
                }
                return fetch(event.request);
            })()
        );
    });

    return (
        <div style={{ background: `url(${movie.background})`, backgroundSize: 'cover', }} className="ticket-form-page">
                <div className={"movie-details ticket-form-box"}>
                    <h1>{movie.title}</h1>
                    <iframe id={"trailer"} src={`https://www.youtube.com/embed/${movie.trailer}`} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <ul id={"detail-list"}>
                        <li className='movieText'>{movie.text}</li>
                        <li className='movieInfo'>Stars: {movie.stars}</li>
                        <li className="movieInfo">Length: {movie.length}m</li>
                        <li className="movieInfo">Release date: {movie.release}</li>
                    </ul>
                    <form className={"ticket-form"}>
                        <h3>Purchase tickets</h3>
                        <ul>
                            <li>Available dates:  </li>
                            {dateSelector(movie)}
                            <li>The chosen time </li>
                            {timeSelector(movie)}
                        </ul>
                        <Link to="/reserve"><button type={"submit"} className={"ticket-submit button"}>Purchase tickets</button></Link>
                    </form>
                </div>
        </div>

    );
}