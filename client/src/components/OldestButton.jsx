export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }

  return (
    <div id="oldest-button" className="filter-option-item" onClick={handleClick}>
      Oldest
    </div>
  );
}
