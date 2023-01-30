import "../styles/home.css";
import MovieList from "../components/MovieList.jsx";
import { Link } from "react-router-dom";
import { movieArray as allMovies } from "../components/movie-data.js";
import QuoteDisplay from "../components/QuoteDisplay";
import AccountButtons from "../components/AccountButtons";
import BackgroundImageTransition from "../components/BackgroundImageTransition";

export default function () {
  const movies = allMovies;

  return (
    <div>
      <section>
        <div className="background-image">
          <QuoteDisplay />
          <AccountButtons />
          <BackgroundImageTransition/>
        </div>
      </section>
      <section className="top-movies">
        <h1 className="title">OUR TOP MOVIES</h1>
        <div id="top-movies">
          <MovieList
            movies={movies.filter((movie) => {
              if (movie.id === 1 || movie.id === 2 || movie.id === 3) {
                return true;
              } else {
                return false;
              }
            })}
          />
        </div>
        <div>
          <Link to="movies">
            <button className="button">MORE MOVIES</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
