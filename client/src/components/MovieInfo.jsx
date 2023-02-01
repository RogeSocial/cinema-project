import React from "react";

export default function({currentMovie}) {
    const movie = currentMovie;
    return <>
        <h2>{movie.title}</h2>
        <iframe id={"trailer"} src={`https://www.youtube.com/embed/${movie.trailer}`} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <ul id={"detail-list"}>
                <li className='movie-text'>{movie.text}</li>
                <li className='movie-info'>Stars: {movie.stars}</li>
                <li className="movie-info">Length: {movie.length}</li>
                <li className="movie-info">Release date: {movie.release}</li>
            </ul>
        </>
}