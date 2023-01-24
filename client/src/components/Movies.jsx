import React, {useEffect, useRef, useState} from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";
import { useSearchParams} from "react-router-dom";

import {reverseAlpha, sortAlpha} from "./movieSort.jsx";
export default function () {
  const [movies, setMovies] = useState(movieArray);
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveFilter = searchParams.get('filter') === 'active';
const [alpha, alphaSetCount] = useState(0)
const [reverse, setReverse] = useState(0)
const previous = useRef(0);
  const removeFilter = () => {
    setSearchParams({})
    window.location.reload();
  }
    useEffect(() => {
      if (showActiveFilter) {
     setMovies(sortAlpha(movies));
        previous.current = alpha;
      }
    }, [alpha]);

 useEffect(() => {
    if (showActiveFilter) {
      setMovies(reverseAlpha(movies));
        previous.current = reverse;
    }
  }, [reverse]);



  //variable to hold the value that the user is searching for
  const [searchString, setSearchString] = useState(null);
  //sets searchString to the value entered by the user in the search field
  const handlesSearch = (event) => {
    setSearchString(event.target.value);
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

        {showActiveFilter ? (
                <div className={"sort"}>
                <button className="btn" id="movie-sort-btn"
                        onClick={() => removeFilter()} value="Reload Page">Reset filter</button>
                <button className="btn" id="movie-sort-btn"
                        onClick={() => alphaSetCount(alpha +2)}> A-Z</button>
                  <button className="btn" id="movie-sort-btn"
                          onClick={() => setReverse(reverse +2)}> Z-A</button>

                </div>

        ): (

            <button className="btn" id="movie-sort-btn"
                    onClick={() => setSearchParams({filter: 'active'})}>
              Sort
            </button>

        )}
        <br />
      </div>
      <MovieList
        movies={
          searchString === null || searchString === ""
            ? movies
            : movies.filter((movie) =>
                returnsMovieTitlesThatIncludesTheSearch(movie, searchString)
              )
        }
      />
    </section>
  );
}

function returnsMovieTitlesThatIncludesTheSearch(movie, searchString) {
  //prototype algoritm
  let title = movie.title.toLowerCase();
  let string = searchString.toLowerCase();

  //if any part of the title includes the string that was searched
  if (title.includes(string)) {
    return true;
  } else {
    return false;
  }
}
