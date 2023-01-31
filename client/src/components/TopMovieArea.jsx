import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import { movieArray as allMovies } from "./movie-data";
import MoreMoviesButton from "./MoreMoviesButton";

export default function () {
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  useEffect(() => {
    filterByTitle("Hellraiser", "It", "Rings");
  }, [allMovies]);

  return (
    <>
      <h2 id="top-movie-title">OUR TOP MOVIES</h2>
      <div id="top-movie-cards">
        <MovieList movies={filteredMovies} />
      </div>
      <MoreMoviesButton/>
    </>
  );

  function filterByTitle(title1, title2, title3) {
    setFilteredMovies([
      ...allMovies.filter((movie) => {
        return (
          movie.title === title1 ||
          movie.title === title2 ||
          movie.title === title3
        );
      }),
    ]);
  }
}
