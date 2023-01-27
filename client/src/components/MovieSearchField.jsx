export default function ({ handleSearch }) {
  if (!{ handleSearch }) {
    return null;
  }
  return (
    <div className="movie-search-field">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search.." onChange={handleSearch}></input>
    </div>
  );
}
