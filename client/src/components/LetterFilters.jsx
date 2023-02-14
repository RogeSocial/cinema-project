import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import { reverseAlphabet, sortAlphabet } from "./movieSort.js";
import { highlightFilterOption } from "./Utilities.jsx";
import { useContext } from "react";
import globalContext from "../GlobalContext.jsx";

export default function ({
  setFilteredMovies,
  setFilterSlug,
  setIsFilterChosen,
  setFilterButtonName,
}) {
  const { movies } = useContext(globalContext);

  return (<>
      <h4 className="filter-category">Letter</h4>
      <div className="letter-filters">
        <AlphabeticButton handleClick={sortAlphabetically} />
        <ReverseAlphabeticButton handleClick={sortZetabetically} />
      </div>
    </>);

  function sortAlphabetically(event) {
    setFilteredMovies([...sortAlphabet(movies)]);
    setIsFilterChosen(true);
    setFilterButtonName("A-Z");
    setFilterSlug({ filter: "A-Z" });
    highlightFilterOption(event.target);
  }

  function sortZetabetically(event) {
    setFilteredMovies([...reverseAlphabet(movies)]);
    setIsFilterChosen(true);
    setFilterButtonName("Z-A");
    setFilterSlug({ filter: "Z-A" });
    highlightFilterOption(event.target);
  }
}