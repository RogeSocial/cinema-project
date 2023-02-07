import {showsMovieLengthOnThisPage} from "./Utilities";
import {Link} from "react-router-dom";

export default function ({ movie }) {
  return (
    <Link to={`/movies/${movie.id}/${movie['slug']}`} key={movie.id}>
      <div className="movie-card">
      {showCalendarCard(movie, "/tickets")}
        <h3> {movie.title} </h3>
        <img src={movie.image} alt={"poster"} />
        <h4>{showsMovieLengthOnThisPage(movie, "/tickets")}</h4>
      </div>
    </Link>
  );


 function showCalendarCard(movie, page) {
    if (window.location.pathname === page) {
      return <div className="calendar-card-frame"><p>{movie.date}</p></div>;
    } else {
      return null;
    }
  }
}
