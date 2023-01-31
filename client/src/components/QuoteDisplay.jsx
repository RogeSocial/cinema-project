import QuoteMirror from "../images/QuoteMirror.png";
import Quotes from "./Quotes.jsx";

export default function () {
  return (
    <div className="display-container">
      <img className="mirror" src={QuoteMirror} alt="an old decorative mirror" />
      <h2 id="quote-text-container" className={"quote-background"}>
        <Quotes/>
      </h2>
    </div>
  );
}
