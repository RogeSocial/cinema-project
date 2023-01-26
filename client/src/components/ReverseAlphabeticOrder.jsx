export default function ({ plusReverse }) {
  if (!{ plusReverse }) {
    return null;
  }
  return (
    <button className="button" id="movie-sort-btn" onClick={plusReverse}>
      {" "}
      Z-A
    </button>
  );
}
