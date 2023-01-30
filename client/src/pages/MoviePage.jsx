import {useEffect, useState} from "react";
import MovieList from "../components/MovieList";
import {movieArray as allMovies} from "../components/movie-data.js";
import {useSearchParams} from "react-router-dom";
import {reverseAlphabet, sortAlphabet} from "../components/movieSort.jsx";
import MovieSearchField from "../components/MovieSearchField";
import ResetFilterButton from "../components/ResetFilterButton";
import AlphabeticButton from "../components/AlphabeticButton";
import ReverseAlphabeticButton from "../components/ReverseAlphabeticButton";
import MovieSortButton from "../components/MovieSortButton";

export default function () {
    //handles the searching for movies
    const [filteredMovies, setFilteredMovies] = useState(allMovies);
    const [searchString, setSearchString] = useState(null);
    const addUserSearchString = (event) => {
        setSearchString(event.target.value);
    };

    //handles the sorting of movies
    const [filterParam, setFilterParam] = useSearchParams();
    const isFilterActive = filterParam.get("filter") === "active";


    useEffect(() => {
        if (isValidSearch(searchString)) filterMoviesBySearch()
        else setFilteredMovies(allMovies)
    }, [searchString])

    return (
        <section className="movies">
            <div className="movie-search-and-sorting-area">
                <h2>Movies</h2>
                <MovieSearchField handleSearch={addUserSearchString}/>
                {!isFilterActive ? (
                    <MovieSortButton handleClick={showSortingOptions}/>
                ) : (
                     <div className={"sorting-options"}>
                         <ResetFilterButton handleClick={removeFilter}/>
                         <AlphabeticButton handleClick={sortAlphabetically}/>
                         <ReverseAlphabeticButton handleClick={sortZetabetically}/>
                     </div>
                 )}
            </div>
            <MovieList movies={filteredMovies}/>
        </section>
    );

    function showSortingOptions() {
        setFilterParam({filter: "active"});
    }

    function removeFilter() {
        setFilterParam({});
        window.location.reload();
    }

    function sortAlphabetically() {
        setFilteredMovies([...sortAlphabet()])
    }

    function sortZetabetically() {
        setFilteredMovies([...reverseAlphabet()])
    }

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
