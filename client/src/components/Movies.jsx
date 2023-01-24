import React, {useEffect, useRef, useState} from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";
import { useSearchParams} from "react-router-dom";

import {reverseAlpha, sortAlpha} from "./movieSort.jsx";
export default function () {
  const [movies, setMovies] = useState(movieArray);
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveFilter = searchParams.get('filter') === 'active';
    const previous = useRef(0);
  const [alpha, setAlpha] = useState(null)
const [reverse, setReverse] = useState(null);
  const removeFilter = () => {
    setSearchParams({})
    window.location.reload();
  }



  useEffect(() => {

      if (showActiveFilter ) {
          setMovies(sortAlpha())
      }
    }, [alpha]);

 useEffect(() => {
    if (showActiveFilter) {
            setMovies(reverseAlpha)

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

        { showActiveFilter ? (
                <div className={"sort"}>
                <button className="btn" id="movie-sort-btn"
                        onClick={() => removeFilter()}>Reset filter</button>
                <button className="btn" id="movie-sort-btn"
                        onClick={() => setAlpha(alpha +1)}> A-Z</button>
                  <button className="btn" id="movie-sort-btn"
                          onClick={() => setReverse(reverse + 1)}> Z-A</button>
                    {console.log(movies )}
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
