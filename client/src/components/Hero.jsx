import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import QuoteDisplay from "../components/QuoteDisplay";
import AccountButtons from "../components/AccountButtons";

export default function () {
    const {auth} = useContext(GlobalContext)
    return (<>
        <section className="hero-background">
            <QuoteDisplay />
            {!auth.loggedIn ? <AccountButtons /> : null}
            <div className="hero-transition"></div>
        </section>
    </>);
}