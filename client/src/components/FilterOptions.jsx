import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilterMenuButtons from "./FilterMenuButtons.jsx";
import LetterFilters from "./LetterFilters.jsx";
import DateFilters from "./DateFilters.jsx";

export default function ({ setFilteredMovies, setToggleMenu, setFilterName }) {
  const [filterParam, setFilterParam] = useSearchParams();
  const [filterChosen, setFilterChosen] = useState(false);

  const propsPackage1 = {
    setFilterChosen: setFilterChosen,
    setToggleMenu: setToggleMenu,
    setFilterParam: setFilterParam,
  };

  const propsPackage2 = {
    setFilteredMovies: setFilteredMovies,
    setFilterName: setFilterName,
    setFilterChosen: setFilterChosen,
    setToggleMenu: setToggleMenu,
    setFilterParam: setFilterParam,
  };

  return (<>
      <div className={"filter-options"}>
        <FilterMenuButtons {...propsPackage1} />
        <LetterFilters {...propsPackage2} />
        <DateFilters {...propsPackage2} />
      </div>
    </>);
}
