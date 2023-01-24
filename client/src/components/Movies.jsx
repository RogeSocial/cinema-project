import React, {useEffect, useState} from "react";
import MovieList from "./MovieList";
import { movieArray } from "./MovieData";
import { useSearchParams} from "react-router-dom";
export default function () {
  const [movies, setMovies] = useState(movieArray);
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveFilter = searchParams.get('filter') === 'active';
  const newMovieArr = [...movieArray];
 const [newMovies, setNewMovies] = useState(newMovieArr)

  {/*seEffect(() => {
    return () => {
      effect
    };
  }, [input]);*/}

const sortAlpha = () => {
  return movies.sort((a,b)=>{
    if (a.title < b.title) {
      return -1;

    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  })
}
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
                        onClick={() => setSearchParams({})}>Reset filter</button>
                <button onClick={() => setMovies(sortAlpha)}> A-Z</button>
                  {console.log(newMovies)}
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
