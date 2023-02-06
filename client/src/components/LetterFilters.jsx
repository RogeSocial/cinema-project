import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import { reverseAlphabet, sortAlphabet } from "./movieSort.js";
import { highlightFilterOption } from "./Utilities.jsx";

export default function ({
  setFilteredMovies,
  setFilterParam,
  setIsFilterChosen,
  setFilterName,
}) {
  return (<>
      <h4 className="filter-category">Letter</h4>
      <div className="letter-filters">
        <AlphabeticButton handleClick={sortAlphabetically} />
        <ReverseAlphabeticButton handleClick={sortZetabetically} />
      </div>
    </>);

  function sortAlphabetically(event) {
    setFilteredMovies([...sortAlphabet()]);
    setIsFilterChosen(true);
    setFilterName("A-Z");
    setFilterParam({ filter: "A-Z" });
    highlightFilterOption(event.target);
  }

  function sortZetabetically(event) {
    setFilteredMovies([...reverseAlphabet()]);
    setIsFilterChosen(true);
    setFilterName("Z-A");
    setFilterParam({ filter: "Z-A" });
    highlightFilterOption(event.target);
  }
}
