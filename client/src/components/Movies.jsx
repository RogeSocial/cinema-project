import React, { useState } from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";

export default function () {
  const [movies, setMovies] = useState(movieArray);
  //variable to hold the value that the user is searching for
  const [searchString, setSearchString] = useState(null);

  //sets searchString to the value entered by the user in the search field
  const handlesSearch = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <section className="movies">
      <div className="non-image-items">
        <div className="movie-search-field">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search.."
            onChange={handlesSearch}
          ></input>
        </div>
        <h2>Top Movies</h2>
        <button className="btn" id="movie-sort-btn">
          Sort
        </button>
        <br />
      </div>
      <MovieList
        movies={
          searchString === null || searchString === ""
            ? movies
            : movies.filter((movie) =>
                returnMoviesThatContainThisString(movie, searchString)
              )
        }
      />
    </section>
  );
}

function returnMoviesThatContainThisString(movie, searchString) {
  //prototype algoritm
  let title = movie.title.toLowerCase();
  let string = searchString.toLowerCase();

  //if any part of the title includes the string that was searched
  if (title.includes(string)) {
    return true;
  } else {
    return false;
  }
}
