export default function ({ handleClick, filterName }) {
  return (
    <button className="button" id="movie-sort-btn" onClick={handleClick}>
      {filterName}
    </button>
  );
}
