import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { movieArray as allMovies } from "./movie-data";

export default function () {
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  useEffect(() => {
    filterByTitle(["Hellraiser", "It", "Rings"]);
  }, [allMovies]);

  return (<>
      <div id="top-movie-cards">
        <MovieList movies={filteredMovies} />
      </div>
    </>);

  function filterByTitle(choices) {
    setFilteredMovies([
      ...allMovies.filter((movie) => {
        return (
          movie.title === choices[0] ||
          movie.title === choices[1] ||
          movie.title === choices[2]
        );
      }),
    ]);
  }
}
