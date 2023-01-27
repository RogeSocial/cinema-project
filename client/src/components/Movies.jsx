import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";
import { useSearchParams } from "react-router-dom";
import { reverseAlpha, sortAlpha } from "./movieSort.jsx";
import MovieSearchField from "./MovieSearchField";
import ResetFilterButton from "./ResetFilterButton";
import AlphabeticButton from "./AlphabeticButton";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton";
import MovieSortButton from "./MovieSortButton";

export default function () {
  const [movies, setMovies] = useState(movieArray);
  const [searchString, setSearchString] = useState(null);
  const addUserSearchString = (event) => {
    setSearchString(event.target.value);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const activeSortingFilter = searchParams.get("filter") === "active";
  const [alpha, setAlpha] = useState(0);
  const [reverse, setReverse] = useState(0);
  const removeFilter = () => {
    setSearchParams({});
    window.location.reload();
  };

  useEffect(() => {
    if (activeSortingFilter) {
      if (alpha <= 2) {
        setAlpha(alpha + 1);
        setMovies(sortAlpha);
        setAlpha(0);
      }
    }
  }, [alpha]);

  useEffect(() => {
    if (activeSortingFilter) {
      if (reverse <= 2) {
        setReverse(reverse + 1);
        setMovies(reverseAlpha);
        setReverse(0);
      }
    }
  }, [reverse]);

  const showInAscendingOrder = () => {
    setAlpha(alpha + 1);
  };
  const showInDescendingOrder = () => {
    setReverse(reverse + 1);
  };
  const showSortingOptions = () => {
    setSearchParams({ filter: "active" });
  };

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
            ? movies
            : movies.filter((movie) =>
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

  //if any part of the title includes the string that was searched
  if (title.includes(string)) {
    return true;
  } else {
    return false;
  }
}
