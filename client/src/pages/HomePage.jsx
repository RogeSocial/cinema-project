import "../styles/home.css";
import QuoteDisplay from "../components/QuoteDisplay";
import AccountButtons from "../components/AccountButtons";
import BackgroundImageTransition from "../components/BackgroundImageTransition";
import TopMoviesArea from "../components/TopMoviesArea";

export default function () {
  return (
    <div>
      <section>
        <div className="background-image">
          <QuoteDisplay />
          <AccountButtons />
          <BackgroundImageTransition />
        </div>
      </section>
      <section className="top-movies">
        <TopMoviesArea />
      </section>
    </div>
  );
}
