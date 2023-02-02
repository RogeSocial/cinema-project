export default function ({ handleClick, filterName }) {
  if (!{ handleClick }) {
    return null;
  }
  return (
    <button className="button" id="movie-sort-btn" onClick={handleClick}>
      {filterName}
    </button>
  );
}
