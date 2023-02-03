import { useSearchParams } from "react-router-dom";

import OpenFilterButton from "./OpenFilterButton.jsx";
import {
  reverseAlphabet,
  sortAlphabet,
  sortByMostRecent,
  sortByLeastRecent,
} from "./movieSort.js";

import { useState } from "react";
import FilterOptions from "./FilterOptions.jsx";

export default function ({ setFilteredMovies }) {
  const [filterParam, setFilterParam] = useSearchParams();
  const activeFilter = filterParam.get("filter") === "active";
  const [toggleMenu, setToggleMenu] = useState(false);
  const [filterChosen, setFilterChosen] = useState(false);
  const [filterComponent, setFilterComponent] = useState("Filter");

  if (!toggleMenu) {
    return (<>
        <OpenFilterButton
          filterName={filterComponent}
          handleClick={showSortingOptions}/>
      </>);
  } else {
    return <HandleSorting />;
  }

  function HandleSorting() {
    return (
      <FilterOptions 
        removeFilter={removeFilter}
        confirmFilter={confirmFilter}
        sortAlphabetically={sortAlphabetically}
        sortZetabetically={sortZetabetically}
        sortNewest={sortNewest}
        sortOldest={sortOldest}
      />
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
    setFilterComponent("A-Z");
  }

  function sortZetabetically() {
    setFilteredMovies([...reverseAlphabet()]);
    setFilterParam({ filter: "Z-A" });
    setFilterChosen(true);
    setFilterComponent("Z-A");
  }

  function showSortingOptions() {
    setToggleMenu(true);
  }

  function sortNewest() {
    setFilteredMovies([...sortByMostRecent()]);
    setFilterParam({ filter: "Newest" });
    setFilterChosen(true);
    setFilterComponent("Newest");
  }

  function sortOldest() {
    setFilteredMovies([...sortByLeastRecent()]);
    setFilterParam({ filter: "Oldest" });
    setFilterChosen(true);
    setFilterComponent("Oldest");
  }
}
