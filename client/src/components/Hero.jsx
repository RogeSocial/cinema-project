import QuoteDisplay from "../components/QuoteDisplay";
import AccountButtons from "../components/AccountButtons";

export default function () {
  return (<>
      <section className="hero-background">
        <QuoteDisplay />
        <AccountButtons />
        <div className="hero-transition"></div>
      </section>
    </>);
}