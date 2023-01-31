import mirror3 from "../images/mirror3.png";
import Quotes from "./Quotes.jsx";

export default function () {
  return (
    <div className="mirror-container">
      <img className="mirror" src={mirror3} alt="a picture of an old mirror" />
      <h3 id="backgroundQuote" className={"transparent-background"}>
        <Quotes />
      </h3>
    </div>
  );
}
