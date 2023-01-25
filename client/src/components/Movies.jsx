import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";
import { useSearchParams} from "react-router-dom";

import {reverseAlpha, sortAlpha} from "./movieSort.jsx";
export default function () {
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
      if (showActiveFilter ) {
          if(alpha <= 2){
              setAlpha(alpha + 1)
          setMovies(sortAlpha)
              setAlpha(0)
      }
      }
    }, [alpha]);

 useEffect(() => {
    if (showActiveFilter) {
        if(reverse <= 2){
            setReverse(reverse +1)
        setMovies(reverseAlpha)
            setReverse(0)
    }
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
