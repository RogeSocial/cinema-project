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
