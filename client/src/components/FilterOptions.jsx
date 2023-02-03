import ResetFilterButton from "./ResetFilterButton.jsx";
import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import NewestButton from "./NewestButton.jsx";
import OldestButton from "./OldestButton.jsx";
import ConfirmFilterButton from "./ConfirmFilterButton.jsx";

export default function ({
  removeFilter,
  confirmFilter,
  sortAlphabetically,
  sortZetabetically,
  sortNewest,
  sortOldest,
}) {
  return (
    <>
      <div className={"filter-options"}>
        <div className="top-filter-row">
          <ResetFilterButton handleClick={removeFilter} />
          <h3 id="movie-filter-title">FILTER</h3>
          <ConfirmFilterButton handleClick={confirmFilter} />
        </div>
        <h4 className="movie-filter-h4">Letter</h4>
        <div className="letter-filter-row">
          <AlphabeticButton handleClick={sortAlphabetically} />
          <ReverseAlphabeticButton handleClick={sortZetabetically} />
        </div>
        <h4 className="movie-filter-h4">Release Date</h4>
        <div className="date-filter-row">
          <NewestButton handleClick={sortNewest} />
          <OldestButton handleClick={sortOldest} />
        </div>
      </div>
    </>
  );
}
