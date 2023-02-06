import {Link} from "react-router-dom";

export default function () {
    return <div className={"footer-content"}>
        <h3>Quick menu</h3>
        <ul>
            <li className="footer-link"><Link to={"/"}>Home</Link></li>
            <li className="footer-link"><Link to={"/movies"}>Movies</Link></li>
            <li className="footer-link"><Link to={"/tickets"}>Tickets</Link></li>
            <li className="footer-link"><Link to={"/user/account"}>Account</Link></li>
        </ul>
    </div>
}