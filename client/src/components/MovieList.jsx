import { useState } from "react";
import { Link } from "react-router-dom";

export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <Link to={`${movie.id}/${movie.param}`}>
        <div className="movie-card" key={movie.id}>
          <h3> {movie.title} </h3>
            <img src={movie.image} alt="a picture of a movie" />
        </div>
        </Link>
      ))}
    </>
  );
}

export function hoursAndMinutes(inMinutes){
  let hours = Math.trunc(inMinutes / 60);
  let minutes = inMinutes % 60;
  return (hours + "h " + minutes + "m");
}