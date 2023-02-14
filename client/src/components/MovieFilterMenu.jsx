import { useState, useEffect, useRef } from "react";
import FilterButton from "./FilterButton.jsx";
import FilterOptions from "./FilterOptions.jsx";
import { changeBackgroundColor } from "./Utilities.jsx";

export default function ({ setFilteredMovies }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [filterButtonName, setFilterButtonName] = useState(null);
  if (filterButtonName === null) {setFilterButtonName("Filter")};
  const menuRef = useRef();

  useEffect(() => {
    closeWhenClickOutside(menuRef);
  }, []);

  useEffect(() => {
    saveFilterOptionHighlight();
  }, [toggleMenu]);

  if (!toggleMenu) return (<>
        <FilterButton
          buttonText={filterButtonName}
          handleClick={showFilterOptions}/>
      </>);
  else return (
      <div ref={menuRef}>
        <FilterOptions
          setFilteredMovies={setFilteredMovies}
          setToggleMenu={setToggleMenu}
          setFilterButtonName={setFilterButtonName}/>
      </div>);

  function showFilterOptions() {
    setToggleMenu(true);
  }

  function saveFilterOptionHighlight() {
    //saves the highlighted filter option when menu is closed
    let elements = document.getElementsByClassName("filter-option-button");
    for (let i = 0; i < elements.length; ++i) {
      let element = elements[i];
      if (filterButtonName === element.innerText) {
        changeBackgroundColor(element, "rgb(178, 29, 29)");
      }
    }
  }

  function closeWhenClickOutside(reference) {
    //closes the menu if clicking outside the menu area
    document.addEventListener("mousedown", (event) => {
      if (reference.current && !reference.current.contains(event.target)) {
        setToggleMenu(false);
      }
    });
  }
}