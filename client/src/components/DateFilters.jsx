import NewestButton from "./NewestButton.jsx";
import OldestButton from "./OldestButton.jsx";
import { sortByMostRecent, sortByLeastRecent } from "./movieSort.js";
import { highlightFilterOption } from "./Utilities.jsx";
import {useContext} from "react";
import globalContext from "../GlobalContext.jsx";

export default function ({
  setFilteredMovies,
  setFilterParam,
  setIsFilterChosen,
  setFilterName,
}) {

  const {movies} = useContext(globalContext)
  return (<>
      <h4 className="filter-category">Release Date</h4>
      <div className="date-filters">
        <NewestButton handleClick={sortNewest} />
        <OldestButton handleClick={sortOldest} />
      </div>
    </>);

  function sortNewest(event) {
    setFilteredMovies([...sortByMostRecent(movies)]);
    setIsFilterChosen(true);
    setFilterName("Newest");
    setFilterParam({ filter: "Newest" });
    highlightFilterOption(event.target);
  }

  function sortOldest(event) {
    setFilteredMovies([...sortByLeastRecent(movies)]);
    setIsFilterChosen(true);
    setFilterName("Oldest");
    setFilterParam({ filter: "Oldest" });
    highlightFilterOption(event.target);
  }
}
