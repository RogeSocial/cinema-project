import { showsMovieLengthOnThisPage } from "./Utilities";
import { Link } from "react-router-dom";

export default function ({ movie }) {
  return (
    <Link to={`/movies/${movie.id}/${movie.param}`} key={movie.id}>
      <div className="movie-card">
        <h3> {movie.title} </h3>
        <img src={movie.image} alt={movie.alt} />
        <h4>{showsMovieLengthOnThisPage(movie, "/tickets")}</h4>
        {movie.releaseDate.year +
          "/" +
          movie.releaseDate.month +
          "/" +
          movie.releaseDate.day}
      </div>
    </Link>
  );
}
