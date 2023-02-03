import ResetFilterButton from "./ResetFilterButton";
import ConfirmFilterButton from "./ConfirmFilterButton";
export default function ({ setFilterChosen, setToggleMenu, setFilterParam }) {
  return (
    <div className="top-filter-row">
      <ResetFilterButton handleClick={removeFilter} />
      <h3 id="filter-menu-title">FILTER</h3>
      <ConfirmFilterButton handleClick={confirmFilter} />
    </div>
  );

  function removeFilter() {
    setFilterParam({});
    window.location.reload();
  }

  function confirmFilter() {
    setFilterChosen(false);
    setToggleMenu(false);
  }
}
