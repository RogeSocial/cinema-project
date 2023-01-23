import React, { useState } from "react";
import '../CSS/home.css'
import Movies from "./Movies";
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
          <div className="center-btn">
            <Link to="user/login" ><button className="btn">LOGIN</button></Link>
            <Link to="user/register"><button className="btn">SIGN UP</button></Link>
          </div>
          <div className="darken-lower-part"></div>
         </div> 
      </section>
      <section className="section-top-movies">
        <h1 className="title">OUR TOP MOVIES</h1>
        <div className="top-movies">
          <MovieList movies={movieArray.filter( (movie) => {
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
    </div>
  );
}