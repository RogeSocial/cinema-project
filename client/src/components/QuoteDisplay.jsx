import QuoteMirror from "../images/QuoteMirror.png";
import Quotes from "./Quotes.jsx";

export default function () {
  return (
    <div className="display-container">
      <img className="mirror" src={QuoteMirror} alt="an old decorative mirror" />
      <Quotes/>
    </div>
  );
}
