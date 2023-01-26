import React from 'react';
import MovieList from "./MovieList.jsx";
import {movieArray} from "./MovieData.jsx";
import {Link} from "react-router-dom";

function TopMovies() {
    return (
        <section className="section-top-movies">
            <h1 className="title">OUR TOP MOVIES</h1>
            <div id="top-movies">
                <MovieList movies={movieArray.filter((movie) => {
                    if (movie.id === 1 || movie.id === 2 || movie.id === 3) {
                        return true;
                    } else {
                        return false;
                    }

                })} />
            </div>
            <div className="center-btn">

                <Link to="movies"><button className="btn">MORE MOVIES</button></Link>

            </div>

        </section>
    );
}

export default TopMovies;
