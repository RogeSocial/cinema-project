export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }
  return (
    <div id="alphabetic-button" className="filter-option-item" onClick={handleClick}>
      A-Z
    </div>
  );
}
