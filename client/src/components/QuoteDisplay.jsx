import QuoteMirror from "../images/QuoteMirror.png";
import Quotes from "./Quotes.jsx";
import horrorImage from '../images/bakgrund.jpg'

export default function () {
  return (
    <div className="display-container">
      <img className="mirror" src={QuoteMirror} alt="an old decorative mirror" />
        <img className="mirror mirrorBackground" src={horrorImage} alt="an old decorative mirror" />
      <Quotes/>
    </div>
  );
}
