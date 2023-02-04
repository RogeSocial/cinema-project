import ClearFilterButton from "./ClearFilterButton";
import ConfirmFilterButton from "./ConfirmFilterButton";
export default function ({ setIsFilterChosen, setToggleMenu, setFilterParam }) {
  return (
    <div className="filter-menu-controls">
      <ClearFilterButton handleClick={removeFilter} />
      <h3 id="filter-menu-title">FILTER</h3>
      <ConfirmFilterButton handleClick={confirmFilter} />
    </div>
  );

  function removeFilter() {
    setFilterParam({});
    window.location.reload();
  }

  function confirmFilter() {
    setIsFilterChosen(false);
    setToggleMenu(false);
  }
}
