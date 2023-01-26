import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList.jsx";
import { movieArray } from "../components/MovieData.jsx";
import { useSearchParams } from "react-router-dom";
import { reverseAlpha, sortAlpha } from "../components/movieSort.jsx";
import MovieSearch  from "../components/movieSearch.jsx";
import {filterMoviesBasedOnSearch, ifSearchIsInvalid} from "../components/searchFilter.jsx";


export default function () {
  const [searchString, setSearchString] = useState(null);

  const [movies, setMovies] = useState(movieArray);
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveFilter = searchParams.get('filter') === 'active';
  const [alpha, setAlpha] = useState(0)
  const [reverse, setReverse] = useState(0);
  const removeFilter = () => {
    setSearchParams({})
    window.location.reload();
  }

  useEffect(() => {
    if (showActiveFilter) {
      if (alpha <= 2) {
        setAlpha(alpha + 1)
        setMovies(sortAlpha)
        setAlpha(0)
      }
    }
  }, [alpha]);

  useEffect(() => {
    if (showActiveFilter) {
      if (reverse <= 2) {
        setReverse(reverse + 1)
        setMovies(reverseAlpha)
        setReverse(0)
      }
    }

  }, [reverse]);

  //variable to hold the value that the user is searching for

  //sets searchString to the value entered by the user in the search field


  return (
    <section className="movies">
      <div className="non-image-items">
        <MovieSearch/>
        <h2>Top Movies</h2>

        {showActiveFilter ? (
          <div className={"sort"}>
            <button className="btn" id="movie-sort-btn"
              onClick={() => removeFilter()}>Reset filter</button>
            <button className="btn" id="movie-sort-btn"
              onClick={() => setAlpha(alpha + 1)}> A-Z</button>
            <button className="btn" id="movie-sort-btn"
              onClick={() => setReverse(reverse + 1)}> Z-A</button>

          </div>

        ) : (

          <button className="btn" id="movie-sort-btn"
            onClick={() => setSearchParams({ filter: 'active' })}>
            Sort
          </button>

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


