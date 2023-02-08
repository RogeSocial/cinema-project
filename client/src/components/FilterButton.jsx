export default function ({ handleClick, filterName }) {
  return (
    <button className="fa-solid fa-filter button"  onClick={handleClick}>
      {filterName}
    </button>
  );
}
