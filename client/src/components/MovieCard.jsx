import { Link } from "react-router-dom";

export default function ({ movie }) {
  return (
    <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
      <div className="movie-card">
        <h3> {movie.title} </h3>
        <img src={movie.image} alt={"poster"} />
      </div>
    </Link>
  );
}
