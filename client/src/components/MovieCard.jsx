import { showsMovieLengthOnThisPage } from "./Utilities";
import { Link } from "react-router-dom";

export default function ({ movie, startDate, endDate }) {
  return (
    <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
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
      return (
        <div className="calendar-card-frame">
          <p>{matchMovieDates(movie) + " --- " + movie.date}</p>
        </div>
      );
    } else {
      return null;
    }
  }
  function matchMovieDates(movie) {
    //if no end date has been chosen
    if (endDate === "" || endDate === startDate) {
      for (let i = 0; i < movie.date.length; ++i) {
        if (
          movie.date[i] === parseInt(startDate[0]) ||
          movie.date[i] === parseInt(startDate[0] + startDate[1])
        ) {
          return startDate;
        }
      }
    }
    //if both start date and end date were chosen
    else {
      for (let i = 0; i < movie.date.length; ++i) {
        if (
          movie.date[i] === parseInt(startDate[0]) ||
          movie.date[i] === parseInt(startDate[0] + startDate[1])
        ) {
          let string = startDate;
          console.log(string)
        }

      }
    
    }
  }
}
