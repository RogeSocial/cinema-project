import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/movie-details.css'
import { movieArray } from '../components/movie-data.js';
import '../styles/home.css'
import MovieInformation from "../components/MovieInformation.jsx";
import ChooseShow from "../components/ChooseShow.jsx";

export default function MovieDetails() {
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
        <div style={{ background: `url(${movie.background})`, backgroundSize: 'cover' }} className="movie-details-page">
            <div className={"content-frame"}>
                <MovieInformation currentMovie={movie} />
                <ChooseShow currentMovie={movie} />
            </div>
        </div>
    );
}