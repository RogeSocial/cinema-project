export default function ({ activeFilter }) {
    if (!{ activeFilter }) {
      return null;
    }
    return (
        <button
            className="button"
            id="movie-sort-btn"
            onClick={activeFilter}
          >
            Sort
          </button>
    );
  }