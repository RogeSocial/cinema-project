import {
  calculateDifferenceInDays,
  returnDayName,
  showsMovieLengthOnThisPage,
} from "./Utilities";
import { Link } from "react-router-dom";

export default function ({ movie, startDate, endDate }) {
  return (
    <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
      <div className="movie-card">
        <h3> {movie.title} </h3>
        <img src={movie.image} alt={"poster"} />
        <h4>{showsMovieLengthOnThisPage(movie, "/tickets")}</h4>
        {calenderDay(movie, "/tickets")}
      </div>
    </Link>
  );

  function calenderDay(movie, page) {
    if (window.location.pathname === page) {
      return (
        <div className="calendar-card-label">
          <p>{matching(movie)}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  function matching(movie) {
    let dateArray = movie.dates.split(", ");
    let array = [];
    let differenceInDays = calculateDifferenceInDays(startDate, endDate);
    for (let i = 0; i < dateArray.length; i++) {
      for (let j = 0; j < differenceInDays + 1; j++) {
        let tmpDay = new Date(startDate);
        tmpDay.setDate(tmpDay.getDate() + j);
        if (parseInt(dateArray[i]) === tmpDay.getDate()) {
          array.push(tmpDay);
        }
      }
    }

    let string = "";
    for (let i = 0; i < array.length; i++) {
      string += array[i].getDate() + " / ";
      string += array[i].getMonth() + 1 + " - ";
      string += returnDayName(array[i].getDay());

    }

    return string;
  }
}
