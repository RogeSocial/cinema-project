import {useState, useEffect, useContext} from "react";
import MovieList from "./MovieList";
import { movieArray as allMovies } from "./movie-data";
import globalContext from "../GlobalContext.jsx";

export default function () {
  const {movies} = useContext(globalContext)
  const [filteredTopMovies, setFilteredTopMovies] = useState(movies);
  useEffect(() => {
    filterByTitle(["Hellraiser", "It", "Rings"]);
  }, [movies]);

  return (<>
      <div id="top-movie-cards">
        <MovieList movies={filteredTopMovies} />
      </div>
    </>);

  function filterByTitle(choices) {
    setFilteredTopMovies([
      ...movies.filter((movie) => {
        return (
          movie.title === choices[0] ||
          movie.title === choices[1] ||
          movie.title === choices[2]
        );
      }),
    ]);
  }
}
