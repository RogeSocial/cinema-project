import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <Link to={`${movie.id}/${movie.param}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </>
  );
}
