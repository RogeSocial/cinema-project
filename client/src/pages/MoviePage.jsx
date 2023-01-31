import {useEffect, useState} from "react";
import MovieList from "../components/MovieList";
import {movieArray as allMovies} from "../components/movie-data.js";
import MovieSearchField from "../components/MovieSearchField";
import MovieSortingOptions from "../components/MovieSortingOptions.jsx";

export default function () {
    //handles the searching for movies
    const [filteredMovies, setFilteredMovies] = useState(allMovies);
    const [searchString, setSearchString] = useState(null);

    const addUserSearchString = (event) => {
        setSearchString(event.target.value);
    };

    //handles the sorting of movies
    useEffect(() => {
        if (isValidSearch(searchString)) filterMoviesBySearch()
        else setFilteredMovies(allMovies)
    }, [searchString])

    return (
        <section className="movies">
            <div className="movie-search-and-sorting-area">
                <h2>Movies</h2>
                <MovieSearchField handleSearch={addUserSearchString}/>
                <MovieSortingOptions setFilteredMovies={setFilteredMovies}/>
            </div>
            <MovieList movies={filteredMovies}/>
        </section>
    );

    function filterMoviesBySearch() {
        setFilteredMovies([
            ...allMovies.filter(
                (movie) => compareTitleWithSearch(movie, searchString)
            )
        ])
    }
}

function isValidSearch(search) {
    return !(search === null || search === "");
}

function compareTitleWithSearch(movie, searchString) {
    let title = movie.title.toLowerCase();
    let string = searchString.toLowerCase();
    return title.includes(string);
}
