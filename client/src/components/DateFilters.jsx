import NewestButton from "./NewestButton.jsx";
import OldestButton from "./OldestButton.jsx";
import { sortByMostRecent, sortByLeastRecent } from "./movieSort.js";
import { changeColorOfElement } from "./Utilities.jsx";

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

  function sortNewest(event) {
    setFilteredMovies([...sortByMostRecent()]);
    setFilterChosen(true);
    setFilterName("Newest");
    setFilterParam({ filter: "Newest" });
    changeColorOfElement(event, "rgb(178, 29, 29)");
  }

  function sortOldest(event) {
    setFilteredMovies([...sortByLeastRecent()]);
    setFilterChosen(true);
    setFilterName("Oldest");
    setFilterParam({ filter: "Oldest" });
    changeColorOfElement(event, "rgb(178, 29, 29)");
  }
}
