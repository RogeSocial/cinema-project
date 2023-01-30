import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import { movieArray as allMovies } from "./movie-data";

export default function () {
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  useEffect(() => {
    isTopMovie();
  }, [allMovies]);

  return (
    <>
      <h1 className="title">OUR TOP MOVIES</h1>
      <div id="top-movies">
        <MovieList movies={filteredMovies} />
      </div>
      <div>
        <Link to="movies">
          <button className="button">MORE MOVIES</button>
        </Link>
      </div>
    </>
  );

  function isTopMovie() {
    setFilteredMovies([
      ...allMovies.filter((movie) => {
        if (movie.id === 1 || movie.id === 2 || movie.id === 3) {
          return true;
        } else {
          return false;
        }
      }),
    ]);
  }
}
