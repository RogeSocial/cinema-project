import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";
import { useSearchParams } from "react-router-dom";
import { reverseAlpha, sortAlpha } from "./movieSort.jsx";
import MovieSearch from "./MovieSearch";
import ResetFilter from "./ResetFilter";
import AlphabeticOrder from "./AlphabeticOrder";
import ReverseAlphabeticOrder from "./ReverseAlphabeticOrder";
import SortMovies from "./SortMovies";

export default function () {
  const [movies, setMovies] = useState(movieArray);
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveFilter = searchParams.get("filter") === "active";
  const [alpha, setAlpha] = useState(0);
  const [reverse, setReverse] = useState(0);
  const removeFilter = () => {
    setSearchParams({});
    window.location.reload();
  };

  useEffect(() => {
    if (showActiveFilter) {
      if (alpha <= 2) {
        setAlpha(alpha + 1);
        setMovies(sortAlpha);
        setAlpha(0);
      }
    }
  }, [alpha]);

  useEffect(() => {
    if (showActiveFilter) {
      if (reverse <= 2) {
        setReverse(reverse + 1);
        setMovies(reverseAlpha);
        setReverse(0);
      }
    }
  }, [reverse]);
  const [searchString, setSearchString] = useState(null);
  const handlesSearch = (event) => {
    setSearchString(event.target.value);
  };
  const plusAlpha = () => {
    setAlpha(alpha + 1);
  };
  const plusReverse = () => {
    setReverse(reverse + 1);
  };
  const activeFilter = () => {
    setSearchParams({ filter: "active" });
  };

  return (
    <section className="movies">
      <div className="search-filter">
        <MovieSearch handlesSearch={handlesSearch} />
        <h2>Movies</h2>
        {!showActiveFilter ? (
          <SortMovies activeFilter={activeFilter} />
        ) : (
          <div className={"sort"}>
            <ResetFilter removeFilter={removeFilter} />
            <AlphabeticOrder plusAlpha={plusAlpha} />
            <ReverseAlphabeticOrder plusReverse={plusReverse} />
          </div>
        )}
        <br />
      </div>
      <MovieList
        movies={
          ifSearchIsInvalid(searchString)
            ? //then show all
              movies
            : //else
              movies.filter((movie) =>
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
