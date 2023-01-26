export function hoursAndMinutes(inMinutes) {
    let hours = Math.trunc(inMinutes / 60);
    let minutes = inMinutes % 60;
    return hours + "h " + minutes + "m";
  }

export function showsMovieLength(movie, param) {
    if (window.location.pathname === param) {
      return hoursAndMinutes(movie.length);
    } else {
      return null;
    }
  }