export default function ({ handleClick }) {
  if (!{ handleClick }) {
    return null;
  }
  return (
    <button className="button sorting-button" onClick={handleClick}>
      Clear
    </button>
  );
}
