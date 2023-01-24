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

    self.addEventListener('fetch', event => {
        event.respondWith(
          (async function() {
            const preloadResponse = await event.preloadResponse;
            if (preloadResponse) {
              return preloadResponse;
            }
            return fetch(event.request);
          })()
        );
      });

    return (
        <div style={{background: `url(${movie.background})`, backgroundSize: 'cover'}} className="ticket-form-page">
            <div className={"ticket-form-box form-row"}>


                <div className={"movie-details"}>
                    <h1>{movie.title}</h1>
                    <iframe src={`https://www.youtube.com/embed/${movie.trailer}`} width="1020" height="600" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <p className='movieText'>{movie.text}</p>
                    <p className='movieInfo'>Stars: {movie.stars}</p>
                    <p className="movieInfo">Length: {movie.length}m</p>
                    <p className="movieInfo">Release date: {movie.release}</p>
                    <form className={"ticket-form"}>
                    <h3>Purchase tickets</h3>

                    <ul className='ticket-list'>
                        <li>Available dates:  </li>
                        { dateSelector()}
                        <li>The chosen time </li>
                    </ul>
                    
                    <button  type={"submit"} className={"ticket-submit btn "}>Chose seats</button>
                </form>
                </div>

                

        </div>
    </div>

);
}