import { daysForwardInCalender, daysInWeek } from "./Constants.js";

export function convertsMinutesIntoHoursAndMinutes(min) {
  let hours = Math.trunc(min / 60);
  let minutes = min % 60;
  return hours + "h " + minutes + "m";
}

export function showsMovieLength(movie) {
  return convertsMinutesIntoHoursAndMinutes(movie.length);
}

export function showsMovieLengthOnThisPage(movie, page) {
  if (window.location.pathname === page) {
    return convertsMinutesIntoHoursAndMinutes(movie.length);  }
  else {    return null;  }}

export function dateSelector(movie) {
    const dateArray = movie.split(",");
  return (
    <select name="dates" id="dates" className="date-picker">
      {dateArray.map((option, index) => {
        return <option key={index}> {option} </option>;
      })}
    </select>
  );
}

export function timeSelector(movie) {
    const timeArray = movie.split(",");
  return (
    <select name="times" id="times" className="date-picker">
      {timeArray.map((option, index) => {
        return <option key={index}> {option} </option>;
      })}
    </select>
  );
}

export function returnDayName(inIndex) {
  return daysInWeek[inIndex];
}

export function changeBackgroundColor(targetElement, color) {
  document
    .getElementById(targetElement.id)
    .setAttribute("style", "background-color: " + color);
}

export function highlightFilterOption(target) {
  let className = document
    .getElementById(target.id.toString())
    .getAttribute("class");
  let elements = document.getElementsByClassName(className);

  for (let i = 0; i < elements.length; ++i) {
    let element = elements[i];
    if (target.id === element.id) {
      changeBackgroundColor(target, "rgb(2,2,2)");
    } else {
      changeBackgroundColor(element, "rgb(6, 57, 84)");
    }
  }
}

//calculate days forward for the calendar
export function calculateCurrentDate() {
  let tmpArray = [];
  for (let i = 0; i < daysForwardInCalender; i++) {
    let addedDay = new Date();
    addedDay.setDate(addedDay.getDate() + i);
    tmpArray.push(addedDay);
  }
  return tmpArray;
}

export function calculateDifferenceInDays(inStartDate, inEndDate) {
  let diff = Math.round(
    (inEndDate.getTime() - inStartDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diff <= 0) {
    return 0;
  } else {
    return diff;
  }
}
