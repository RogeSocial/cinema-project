import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <Link to="movies">
        <button className="button">MORE MOVIES</button>
      </Link>
    </>
  );
}
