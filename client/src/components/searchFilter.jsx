export function ifSearchIsInvalid(search) {
    if (search === null || search === "") {
        return true;
    } else {
        return false;
    }
}

export function filterMoviesBasedOnSearch(movie, searchString) {

    let title = movie.title.toLowerCase();
    let string = searchString.toLowerCase();

    //if any part of the title includes the string that was searched
    if (title.includes(string)) {
        return true;
    } else {
        return false;
    }
}