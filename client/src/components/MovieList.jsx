import { useState } from "react";
import { Link } from "react-router-dom";

export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="movie-list" key={movie.id}>
          <h3> {movie.title} </h3>
          <Link to={`${movie.id}/${movie.param}`}>
            <img src={movie.image} alt="a picture of a movie" />
          </Link>
        </div>
      ))}
    </>
  );
}

export function hoursAndMinutes(inMinutes){
  let hours = Math.trunc(inMinutes / 60);
  let minutes = inMinutes % 60;
  return (hours + "h " + minutes + "m");
}