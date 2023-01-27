import React, {useState} from 'react';



function MovieSearch() {
    const [searchString, setSearchString] = useState(null);

    const handlesSearch = (event) => {
        setSearchString(event.target.value);
    };
    return (
        <div className="movie-search-field">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                placeholder="Search.."
                onChange={handlesSearch}
            ></input>
        </div>
    );
}

export default MovieSearch;