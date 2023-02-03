export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }
  return (
    <button id="aligned-button-text" className="button button-filter-version" onClick={handleClick}>
      Clear
    </button>
  );
}
