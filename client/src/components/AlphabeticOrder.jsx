export default function ({ plusAlpha }) {
  if (!{ plusAlpha }) {
    return null;
  }
  return (
    <button className="button" id="movie-sort-btn" onClick={plusAlpha}>
      {" "}
      A-Z
    </button>
  );
}
