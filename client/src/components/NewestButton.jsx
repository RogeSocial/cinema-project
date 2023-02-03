export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }

  return (
    <div className="filter-option-item" onClick={handleClick}>
      Newest
    </div>
  );
}
