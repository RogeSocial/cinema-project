import QuoteDisplay from "../components/QuoteDisplay";
import AccountButtons from "../components/AccountButtons";
import GlobalContext from "../GlobalContext.jsx";
import {useContext} from "react";

export default function () {
    const {auth} = useContext(GlobalContext)
  return (<>
      <section className="hero-background">
        <QuoteDisplay />
          {!auth.loggedIn ?
        <AccountButtons />
          : null}
        <div className="hero-transition"></div>
      </section>
    </>);
}