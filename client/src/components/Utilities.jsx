import { movieArray } from "./MovieData";
import { useParams } from "react-router-dom";

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

export function dateSelector() {
  const movie = movieArray.find(m => m.id == movieId)
  const movieId = useParams().id
    return (
        <select name="dates" id="dates" className='date-picker'>
            {movie.date.map((option, index) => {
                return <option key={index} > {option} </option>
            })}
        </select>
    )
}

export function timeSelector() {
  const movie = movieArray.find(m => m.id == movieId)
  const movieId = useParams().id
    return (
        <select name="times" id="times" className='date-picker'>
            {movie.time.map((option, index) => {
                return <option key={index} > {option} </option>
            })}
        </select>
    )
}