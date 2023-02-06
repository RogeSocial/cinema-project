import { Link } from "react-router-dom";

export default function () {
  return (
    <Link to="user/register">
      <button className="button">REGISTER</button>
    </Link>
  );
}
