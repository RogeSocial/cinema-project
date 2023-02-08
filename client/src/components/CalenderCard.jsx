import {
  calculateDifferenceInDays,
  returnDayName,
  showsMovieLength,
} from "./Utilities";
import { Link } from "react-router-dom";

export default function ({ movie, startDate, endDate }) {
  return (
    <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
      <div className="calendar-card">
        <img src={movie.image} alt={"poster"} />
        <aside className="calendar-card-label">
        <h3> {movie.title} </h3>
        <h4>{showsMovieLength(movie)}</h4>
          <p>{matching(movie)}</p>
        </aside>
      </div>
    </Link>
  );

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
