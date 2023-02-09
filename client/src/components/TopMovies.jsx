import MoreMoviesButton from "./MoreMoviesButton";
import TopMovieCards from "./TopMovieCards";

export default function () {
    return <section className="top-movies">
                <h2 id="top-movies-title">OUR TOP MOVIES</h2>
                <TopMovieCards />
                <MoreMoviesButton />
            </section>
}