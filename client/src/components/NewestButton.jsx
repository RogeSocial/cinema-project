export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }

  return (
    <div className="filter-nav-item" onClick={handleClick}>
      Newest
    </div>
  );
}
