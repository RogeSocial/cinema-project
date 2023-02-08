export default function ({ handleClick, filterName }) {
  return (
    <button className="button filterButton"  onClick={handleClick}>
      {filterName}
    </button>
  );
}
