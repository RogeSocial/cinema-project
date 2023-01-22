import React, { useState } from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";

export default function () {
  const [movies, setMovies] = useState(movieArray);
  //variable to hold the value that the user is searching for
  const [searchValue, setSearchValue] = useState(null);

  //sets searchValue to the value entered by the user in the search field
  const handlesSearch = (event) => {
    setSearchValue(event.target.value);
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
          searchValue === null || searchValue === ""
            ? movies
            : movies.filter((movie) =>
                matchesSearchWithMovieResult(movie, searchValue)
              )
        }
      />
    </section>
  );
}

function matchesSearchWithMovieResult(movie, searchValue) {
  //prototype algoritm
  let movieTitle = movie.title.toLowerCase();
  let searchedTitle = searchValue.toLowerCase();
  if (
    movieTitle[0] === searchedTitle[0] &&
    movieTitle[searchValue.length / 2] ===
      searchedTitle[searchValue.length / 2] &&
    movieTitle[searchValue.length - 1] === searchedTitle[searchValue.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}
