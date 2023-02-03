import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import { reverseAlphabet, sortAlphabet } from "./movieSort.js";

export default function ({
  setFilteredMovies,
  setFilterParam,
  setFilterChosen,
  setFilterName,
}) {
  return (
    <>
      <h4 className="filter-category">Letter</h4>
      <div className="letter-filters">
        <AlphabeticButton handleClick={sortAlphabetically} />
        <ReverseAlphabeticButton handleClick={sortZetabetically} />
      </div>
    </>
  );

  function sortAlphabetically() {
    setFilteredMovies([...sortAlphabet()]);
    setFilterChosen(true);
    setFilterName("A-Z");
    setFilterParam({ filter: "A-Z" });
  }

  function sortZetabetically() {
    setFilteredMovies([...reverseAlphabet()]);
    setFilterChosen(true);
    setFilterName("Z-A");
    setFilterParam({ filter: "Z-A" });
  }
}
