import MovieCard from "./MovieCard";

export default function ({ movies }) {
  return (<>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />))}
    </>);
}
