export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }
  return (
    <div id="reverse-alphabetic-button" className="filter-option-item" onClick={handleClick}>
      Z-A
    </div>
  );
}
