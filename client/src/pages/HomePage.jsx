import "../styles/home.css";
import QuoteDisplay from "../components/QuoteDisplay";
import AccountButtons from "../components/AccountButtons";
import BackgroundImageTransition from "../components/BackgroundImageTransition";
import TopMovieArea from "../components/TopMovieArea";

export default function () {
  return (<>
      <section className="background-image">
        <QuoteDisplay />
        <AccountButtons />
        <BackgroundImageTransition />
      </section>
      <section className="top-movies">
        <TopMovieArea />
      </section>
    </>);
}
