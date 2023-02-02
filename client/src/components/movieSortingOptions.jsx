import { useSearchParams } from "react-router-dom";
import ResetFilterButton from "./ResetFilterButton.jsx";
import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import FilterButton from "./FilterButton.jsx";
import {
  reverseAlphabet,
  sortAlphabet,
  sortByMostRecent,
  sortByLeastRecent,
} from "./movieSort.js";
import NewestButton from "./NewestButton.jsx";
import OldestButton from "./OldestButton.jsx";
import ConfirmFilterButton from "./ConfirmFilterButton.jsx";
import { useState } from "react";

export default function ({ setFilteredMovies }) {
  const [filterParam, setFilterParam] = useSearchParams();
  const activeFilter = filterParam.get("filter") === "active";
  const [toggleMenu, setToggleMenu] = useState(false);
  const [filterChosen, setFilterChosen] = useState(false);
  const [filterComponent, setFilterComponent] = useState("Filter");

  if (!toggleMenu) {
    return (<>
    <div className="top-components-row">
    <FilterButton filterName={filterComponent} handleClick={showSortingOptions} />
    </div>
    </>)
  }

  if (toggleMenu) {
    return <HandleSorting />;
  }

  function HandleSorting() {
    return (
      <div className={"sorting-options"}>
        <div className="top-filter-row">
          <ResetFilterButton handleClick={removeFilter} />
          <h4 className="movie-filter-h4">FILTER</h4>
          <ConfirmFilterButton handleClick={confirmFilter} />
        </div>
        <h4 className="movie-filter-h4">Letter</h4>
        <div className="letter-filter-row">
          <AlphabeticButton handleClick={sortAlphabetically} />
          <ReverseAlphabeticButton handleClick={sortZetabetically} />
        </div>
        <h4 className="movie-filter-h4">Release Date</h4>
        <div className="date-filter-row">
          <NewestButton handleClick={sortNewest} />
          <OldestButton handleClick={sortOldest} />
        </div>
      </div>
    );
  }

  function removeFilter() {
    setFilterParam({});
    window.location.reload();
  }
  function confirmFilter() {
    setFilterChosen(false);
    setToggleMenu(false);
  }

  function sortAlphabetically() {
    setFilteredMovies([...sortAlphabet()]);
    setFilterParam({ filter: "A-Z" });
    setFilterChosen(true);
    setFilterComponent("A-Z")
  }

  function sortZetabetically() {
    setFilteredMovies([...reverseAlphabet()]);
    setFilterParam({ filter: "Z-A" });
    setFilterChosen(true);
    setFilterComponent("Z-A")
  }

  function showSortingOptions() {
    setToggleMenu(true);
  }

  function sortNewest() {
    setFilteredMovies([...sortByMostRecent()]);
    setFilterParam({ filter: "Newest" });
    setFilterChosen(true);
    setFilterComponent("Newest")
  }

  function sortOldest() {
    setFilteredMovies([...sortByLeastRecent()]);
    setFilterParam({ filter: "Oldest" });
    setFilterChosen(true);
    setFilterComponent("Oldest")
  }
}
