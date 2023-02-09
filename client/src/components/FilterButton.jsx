export default function ({ handleClick, buttonText }) {
  return (
    <button className="button" id="movie-sort-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}