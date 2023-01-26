export default function ({ handlesSearch }) {
  if (!{ handlesSearch }) {
    return null;
  }
  return (
    <div className="movie-search-field">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search.."
        onChange={handlesSearch}
      ></input>
    </div>
  );
}
