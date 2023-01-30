import React, {useContext, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import ResetFilterButton from "./ResetFilterButton.jsx";
import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import MovieSortButton from "./MovieSortButton.jsx";
import {reverseAlphabet, sortAlphabet} from "./movieSort.jsx";
import {movieArray as allMovies} from "./movie-data.js";


function MovieSortingOptions({setFilteredMovies}) {
    const [filterParam, setFilterParam] = useSearchParams();
    const isFilterActive = filterParam.get("filter") === "active";


    if(!isFilterActive){
        return <MovieSortButton handleClick={showSortingOptions}/>

    } else { return <HandleSorting/>

};

    function HandleSorting() {
        return <div className={"sorting-options"}>
            <ResetFilterButton handleClick={removeFilter}/>
            <AlphabeticButton handleClick={sortAlphabetically}/>
            <ReverseAlphabeticButton handleClick={sortZetabetically}/>
        </div>
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
    function showSortingOptions() {
        setFilterParam({filter: "active"});
    }


}

export default MovieSortingOptions;