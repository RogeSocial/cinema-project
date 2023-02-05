import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilterMenuControls from "./FilterMenuControls.jsx";
import LetterFilters from "./LetterFilters.jsx";
import DateFilters from "./DateFilters.jsx";

export default function ({ setFilteredMovies, setToggleMenu, setFilterName }) {
  const [filterParam, setFilterParam] = useSearchParams();
  const [isFilterChosen, setIsFilterChosen] = useState(false);

  const props = {
    setIsFilterChosen: setIsFilterChosen,
    setToggleMenu: setToggleMenu,
    setFilterParam: setFilterParam,
    setFilteredMovies: setFilteredMovies,
    setFilterName: setFilterName,
  };

  return (<>
      <div className={"filter-options"}>
        <FilterMenuControls {...props} />
        <LetterFilters {...props} />
        <DateFilters {...props} />
      </div>
    </>);
}
