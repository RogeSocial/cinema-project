export default function ({ handleClick }) {
  return (
    <button
      id="newest-button"
      className="filter-option-button"
      onClick={handleClick}>
      Newest
    </button>
  );
}
