import NewestButton from "./NewestButton.jsx";
import OldestButton from "./OldestButton.jsx";
import { sortByMostRecent, sortByLeastRecent } from "./movieSort.js";

export default function ({
  setFilteredMovies,
  setFilterParam,
  setFilterChosen,
  setFilterName,
}) {
  return (
    <>
      <h4 className="filter-category">Release Date</h4>
      <div className="date-filters">
        <NewestButton handleClick={sortNewest} />
        <OldestButton handleClick={sortOldest} />
      </div>
    </>
  );

  function sortNewest() {
    setFilteredMovies([...sortByMostRecent()]);
    setFilterChosen(true);
    setFilterName("Newest");
    setFilterParam({ filter: "Newest" });
  }

  function sortOldest() {
    setFilteredMovies([...sortByLeastRecent()]);
    setFilterChosen(true);
    setFilterName("Oldest");
    setFilterParam({ filter: "Oldest" });
  }
}
