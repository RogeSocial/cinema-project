import React from "react";

export default function({currentMovie}) {
    const movie = currentMovie;
    return <>
        <h1>{movie.title}</h1>
        <iframe id={"trailer"} src={`https://www.youtube.com/embed/${movie.trailer}`} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <ul id={"detail-list"}>
                <li className='movieText'>{movie.text}</li>
                <li className='movieInfo'>Stars: {movie.stars}</li>
                <li className="movieInfo">Length: {movie.length}</li>
                <li className="movieInfo">Release date: {movie.release}</li>
            </ul>
        </>
}