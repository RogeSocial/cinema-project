export default function ({ removeFilter }) {
    if (!{ removeFilter }) {
        return null;
      }
  return (
    <button className="button" id="movie-sort-btn" onClick={removeFilter}>
      Reset filter
    </button>
  );
}
