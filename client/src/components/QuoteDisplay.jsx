import mirror3 from "../images/mirror3.png";
import Quotes from "./Quotes.jsx";

export default function () {
  return (
    <div className="mirror-container">
      <img className="mirror" src={mirror3} alt="" />
      <h2 id="backgroundQuote" className={"transparent-background"}>
        <Quotes />
      </h2>
    </div>
  );
}
