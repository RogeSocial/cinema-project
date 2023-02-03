export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }

  return (
    <div id="newest-button" className="filter-option-item" onClick={handleClick}>
      Newest
    </div>
  );
}
