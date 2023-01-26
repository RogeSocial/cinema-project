import { Link } from "react-router-dom";
import { showsMovieLength } from "./Utilities";

export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <Link to={`${movie.id}/${movie.param}`} key={movie.id}>
          <div className="movie-card">
            <h3> {movie.title} </h3>
            <img src={movie.image} alt={movie.alt} />
            <h4>{showsMovieLength(movie, "/tickets")}</h4>
          </div>
        </Link>
      ))}
    </>
  );
}

