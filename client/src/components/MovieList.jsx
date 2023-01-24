import { Link } from "react-router-dom";

export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <Link to={`${movie.id}/${movie.param}`} key={movie.id}>
          <div className="movie-card">
            <h3> {movie.title} </h3>
            <img src={movie.image} alt="a picture of a movie" />
            <h4>{showsMovieLength(movie)}</h4>
          </div>
        </Link>
      ))}
    </>
  );
}

export function hoursAndMinutes(inMinutes) {
  let hours = Math.trunc(inMinutes / 60);
  let minutes = inMinutes % 60;
  return hours + "h " + minutes + "m";
}

function showsMovieLength(movie) {
  if (window.location.pathname === "/calender") {
    return hoursAndMinutes(movie.length);
  } else {
    return null;
  }
}
