import { useState } from "react";
import FilterButton from "./FilterButton.jsx";
import FilterOptions from "./FilterOptions.jsx";

export default function ({ setFilteredMovies }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [filterName, setFilterName] = useState(null);
  if (filterName === null) {
    setFilterName("Filter");
  }

  if (!toggleMenu)
    return (<>
        <FilterButton filterName={filterName} 
        handleClick={showFilterOptions} />
      </>);
  else
    return (
      <FilterOptions
        setFilteredMovies={setFilteredMovies}
        setToggleMenu={setToggleMenu}
        setFilterName={setFilterName} />
        );

  function showFilterOptions() {
    setToggleMenu(true);
  }
}
