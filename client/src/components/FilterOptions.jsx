
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilterMenuControls from "./FilterMenuControls.jsx";
import LetterFilters from "./LetterFilters.jsx";
import DateFilters from "./DateFilters.jsx";

export default function ({ setFilteredMovies, setToggleMenu, setFilterButtonName }) {
  const [filterSlug, setFilterSlug] = useSearchParams();
  const [isFilterChosen, setIsFilterChosen] = useState(false);

  const props = {
    setFilteredMovies: setFilteredMovies,
    setToggleMenu: setToggleMenu,
    setFilterButtonName: setFilterButtonName,
    setFilterSlug: setFilterSlug,
    setIsFilterChosen: setIsFilterChosen,
  };

  return (<>
      <div className={"filter-options"}>
        <FilterMenuControls {...props} />
        <LetterFilters {...props} />
        <DateFilters {...props} />
      </div>
    </>);
}