import { showsMovieLength } from "./Utilities";

export default function ({ movie }) {
  return (
    <div className="movie-card">
      <h3> {movie.title} </h3>
      <img src={movie.image} alt={movie.alt} />
      <h4>{showsMovieLength(movie, "/tickets")}</h4>
    </div>
  );
}
