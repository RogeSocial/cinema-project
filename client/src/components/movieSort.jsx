import { movieArray } from "./movie-data.js";
const [movies, _] = [movieArray];
export  function sortAlphabet()  {
    return movies.sort((a, b) => {
        if (a.title < b.title) {
            return -1;

        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })
}
export const reverseAlphabet = () => {
    return movies.sort((a, b) => {
        if (a.title > b.title) {
            return -1;

        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    })
}
