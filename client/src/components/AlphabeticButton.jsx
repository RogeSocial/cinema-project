export default function ({ handleClick }) {
  return (
    <button
      id="alphabetic-button"
      className="filter-option-button"
      onClick={handleClick}>
      A-Z
    </button>
  );
}
