import { showsMovieLengthOnThisPage } from "./Utilities";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ({ movie, startDate, endDate, endString, dateOrder }) {
  const [count, setCount] = useState(0);
  return (
    <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
      <div className="movie-card">
        {showCalendarLabel(movie, "/tickets")}
        <h3> {movie.title} </h3>
        <img src={movie.image} alt={"poster"} />
        <h4>{showsMovieLengthOnThisPage(movie, "/tickets")}</h4>
      </div>
    </Link>
  );

  function showCalendarLabel(movie, page) {
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
    let day;
    let dates;

    for (let i = 0; i < movie.date.length; ++i) {
      dates = movie.date;
      dates.sort((a, b) => a - b);
      if (endString !== "") {
        //end date was activated
        if (dates[i] >= startDate.getDate() && dates[i] <= endDate.getDate()) {
          let difference = parseInt(dates[i] - startDate.getDate());
          return (
            translateDay(startDate.getDay() + difference, day) +
            " (" +
            dates[i] +
            "/" +
            (startDate.getMonth() + 1) +
            ")"
          );
        }
      } else {
        if (movie.date[i] === startDate.getDate()) {
          return (
            translateDay(startDate.getDay(), day) +
            " (" +
            startDate.getDate() +
            "/" +
            (startDate.getMonth() + 1) +
            ")"
          );
        }
      }
    }
  }
}
function translateDay(date, day) {
  console.log(date);
  if (date >= 7) {
    date = date - 7;
  }
  switch (date) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
}
