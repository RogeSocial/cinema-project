import { daysInWeek } from "./Constants.js";

export function convertsMinutesIntoHoursAndMinutes(min) {
  let hours = Math.trunc(min / 60);
  let minutes = min % 60;
  return hours + "h " + minutes + "m";
}

export function showsMovieLengthOnThisPage(movie, page) {
  if (window.location.pathname === page) {
    return convertsMinutesIntoHoursAndMinutes(movie.length);
  } else {
    return null;
  }
}

export function dateSelector(movie) {
  return (
    <select name="dates" id="dates" className="date-picker">
      {movie.date.map((option, index) => {
        return <option key={index}> {option} </option>;
      })}
    </select>
  );
}

export function timeSelector(movie) {
  return (
    <select name="times" id="times" className="date-picker">
      {movie.time.map((option, index) => {
        return <option key={index}> {option} </option>;
      })}
    </select>
  );
}

export function returnDayName(inIndex) {
  return daysInWeek[inIndex];
}

export function selectOneFilterItem(event) {
  let className = document
  .getElementById(event.target.id.toString())
  .getAttribute("class");
let elements = document.getElementsByClassName(className); //HTML list with indexes
for (let i = 0; i < elements.length; ++i) {
  if (event.target.id === elements[i].id) {
    document
      .getElementById(event.target.id)
      .setAttribute("style", "background-color: rgb(178, 29, 29)");
  } else {
    document
      .getElementById(elements[i].id)
      .setAttribute("style", "background-color: transparent");
  }
}
}
