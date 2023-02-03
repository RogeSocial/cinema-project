import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilterMenuControls from "./FilterMenuControls.jsx";
import LetterFilters from "./LetterFilters.jsx";
import DateFilters from "./DateFilters.jsx";

export default function ({ setFilteredMovies, setToggleMenu, setFilterName }) {
  const [filterParam, setFilterParam] = useSearchParams();
  const [filterChosen, setFilterChosen] = useState(false);

  //handles menu and filter choices
  const props1 = {
    setFilterChosen: setFilterChosen,
    setToggleMenu: setToggleMenu,
    setFilterParam: setFilterParam,
  };

  //handles the filtering of movies
  const props2 = {
    setFilteredMovies: setFilteredMovies,
    setFilterName: setFilterName,
  };

  return (<>
      <div className={"filter-options"}>
        <FilterMenuControls {...props1} />
        <LetterFilters {...props1} and {...props2} />
        <DateFilters {...props1} and {...props2} />
      </div>
    </>);
}
