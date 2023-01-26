import React, { useState } from "react";
import '../styles/home.css'
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import Quotes from "./Quotes.jsx";
import { movieArray } from "./MovieData";

export default function () {
  const [movies, setMovies] = useState(movieArray);

  return (
    <div>
      <section>
        <div className="background-image">
          <h2 className={"transparent-background"}><Quotes /></h2>
          <div>
            <Link to="user/logins" ><button className="button">LOGIN</button></Link>
            <Link to="user/registers"><button className="button">SIGNUP</button></Link>
          </div>
          <div className="darken-lower-part"></div>
        </div>
      </section>
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
        <div>
          <Link to="movies"><button className="button">MORE MOVIES</button></Link>
        </div>
      </section>
    </div>
  );
}