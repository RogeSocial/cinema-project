import { useState, useEffect, useRef } from "react";
import FilterButton from "./FilterButton.jsx";
import FilterOptions from "./FilterOptions.jsx";
import { changeBackgroundColor } from "./Utilities.jsx";


export default function ({ setFilteredMovies }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [filterName, setFilterName] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);

    function onMouseDown(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }
  }, []);

  if (filterName === null) {
    setFilterName("Filter");
  }
  useEffect(() => {
    saveFilterOptionHighlight();
  }, [toggleMenu]);

  if (!toggleMenu)
    return (<>
      <FilterButton filterName={filterName} handleClick={showFilterOptions} />
    </>);
  else
    return (
        <div ref={menuRef}>
          <FilterOptions
              setFilteredMovies={setFilteredMovies}
              setToggleMenu={setToggleMenu}
              setFilterName={setFilterName} />
        </div>
    );

  function showFilterOptions() {
    setToggleMenu(true);
  }

  function saveFilterOptionHighlight() {
    let elements = document.getElementsByClassName("filter-option-button");
    for (let i = 0; i < elements.length; ++i) {
      let element = elements[i];
      if (filterName === element.innerText) {
        changeBackgroundColor(element, "rgb(178, 29, 29)");
      }
    }
  }
}
