import { useState, useEffect } from "react";
import FilterButton from "./FilterButton.jsx";
import FilterOptions from "./FilterOptions.jsx";

export default function ({ setFilteredMovies }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [filterName, setFilterName] = useState(null);
  if (filterName === null) {
    setFilterName("Filter");
  }
  useEffect(() => {
  saveFilterChoice();
  }, [toggleMenu]);

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

  function saveFilterChoice() {
    let elements = document.getElementsByClassName("filter-option-item"); //HTML list with indexes
    for (let i = 0; i < elements.length; ++i) {
      if (filterName === elements[i].innerText) {
        document
          .getElementById(elements[i].id)
          .setAttribute("style", "background-color: rgb(178, 29, 29)");
      }
  }
  }
}
