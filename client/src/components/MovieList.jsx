import MovieCard from "./MovieCard";

export default function ({movies}) {
    return (<>
        {movies.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
    </>);
}
