import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";
import { useSearchParams } from "react-router-dom";
import { reverseAlphabet, sortAlphabet } from "./movieSort.jsx";
import MovieSearchField from "./MovieSearchField";
import ResetFilterButton from "./ResetFilterButton";
import AlphabeticButton from "./AlphabeticButton";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton";
import MovieSortButton from "./MovieSortButton";

export default function () {
  //handles the searching for movies
  const [allMovies, setAllMovies] = useState(movieArray);
  const [searchString, setSearchString] = useState(null);
  const addUserSearchString = (event) => {
    setSearchString(event.target.value);
  };
  //handles the sorting of movies
  const [filterParam, setFilterParam] = useSearchParams();
  const activeSortingFilter = filterParam.get("filter") === "active";
  const [alphabeticalOrder, setAlphabeticalOrder] = useState(0);
  const [zetabeticalOrder, setZetabeticalOrder] = useState(0);
  const showInAscendingOrder = () => {
    setAlphabeticalOrder(alphabeticalOrder + 1);
  };
  const showInDescendingOrder = () => {
    setZetabeticalOrder(zetabeticalOrder + 1);
  };
  const showSortingOptions = () => {
    setFilterParam({ filter: "active" });
  };
  const removeFilter = () => {
    setFilterParam({});
    window.location.reload();
  };

  useEffect(() => {
    if (activeSortingFilter) {
      if (alphabeticalOrder <= 2) {
        setAlphabeticalOrder(alphabeticalOrder + 1);
        setAllMovies(sortAlphabet);
        setAlphabeticalOrder(0);
      }
    }
  }, [alphabeticalOrder]);

  useEffect(() => {
    if (activeSortingFilter) {
      if (zetabeticalOrder <= 2) {
        setZetabeticalOrder(zetabeticalOrder + 1);
        setAllMovies(reverseAlphabet);
        setZetabeticalOrder(0);
      }
    }
  }, [zetabeticalOrder]);

  return (
    <section className="movies">
      <div className="movie-search-and-sorting-area">
        <MovieSearchField handleSearch={addUserSearchString} />
        <h2>Movies</h2>
        {!activeSortingFilter ? (
          <MovieSortButton handleClick={showSortingOptions} />
        ) : (
          <div className={"sorting-options"}>
            <ResetFilterButton handleClick={removeFilter} />
            <AlphabeticButton handleClick={showInAscendingOrder} />
            <ReverseAlphabeticButton handleClick={showInDescendingOrder} />
          </div>
        )}
      </div>
      <MovieList
        movies={
          ifSearchIsInvalid(searchString)
            ? allMovies
            : allMovies.filter((movie) =>
                filterMoviesBasedOnSearch(movie, searchString)
              )
        }
      />
    </section>
  );
}

function ifSearchIsInvalid(search) {
  if (search === null || search === "") {
    return true;
  } else {
    return false;
  }
}

function filterMoviesBasedOnSearch(movie, searchString) {
  let title = movie.title.toLowerCase();
  let string = searchString.toLowerCase();

  if (title.includes(string)) {
    return true;
  } else {
    return false;
  }
}
