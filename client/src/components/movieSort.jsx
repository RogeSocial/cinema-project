import {movieArray} from "./MovieData.jsx";
const [movies, setMovies] = [movieArray];
export const sortAlpha = () => {
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
export const reverseAlpha = () => {
    return movies.sort((a,b)=>{
        if (a.title > b.title) {
            return -1;

        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    })
}
