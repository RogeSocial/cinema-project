export default function ({ handleClick }) {
  return (
    <button
      id="oldest-button"
      className="filter-option-button"
      onClick={handleClick}>
      Oldest
    </button>
  );
}
