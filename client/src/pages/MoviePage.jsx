import { useContext, useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MovieSearchField from "../components/MovieSearchField";
import MovieFilterMenu from "../components/MovieFilterMenu.jsx";
import globalContext from "../GlobalContext.jsx";

export default function () {
  const { movies } = useContext(globalContext);

  //handles the searching for movies
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchString, setSearchString] = useState(null);
  const addUserSearchString = (event) => {
    setSearchString(event.target.value);
  };

  //handles the sorting of movies
  useEffect(() => {
    if (isValidSearch(searchString)) filterMoviesBySearch();
    else setFilteredMovies(movies);
  }, [searchString]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <section className="movies">
      <div className="movie-search-and-filter-area">
        <h2>Movies</h2>
        <MovieSearchField handleSearch={addUserSearchString} />
        <MovieFilterMenu setFilteredMovies={setFilteredMovies} />
      </div>
      <MovieList movies={filteredMovies} />
    </section>
  );
}

function filterMoviesBySearch() {
  setFilteredMovies([
    ...movies.filter((movie) => compareTitleWithSearch(movie, searchString)),
  ]);
}

function isValidSearch(search) {
  return !(search === null || search === "");
}

function compareTitleWithSearch(movie, searchString) {
  let title = movie.title.toLowerCase();
  let string = searchString.toLowerCase();
  return title.includes(string);
}
