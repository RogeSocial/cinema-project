import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import { reverseAlphabet, sortAlphabet } from "./movieSort.js";
import { changeColorOfElement } from "./Utilities.jsx";

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

  function sortAlphabetically(event) {
    setFilteredMovies([...sortAlphabet()]);
    setFilterChosen(true);
    setFilterName("A-Z");
    setFilterParam({ filter: "A-Z" });
    changeColorOfElement(event, "rgb(178, 29, 29)");
    console.log(document.getElementById(event.target.id.toString()).getAttribute("class"));
  }

  function sortZetabetically(event) {
    setFilteredMovies([...reverseAlphabet()]);
    setFilterChosen(true);
    setFilterName("Z-A");
    setFilterParam({ filter: "Z-A" });
    changeColorOfElement(event, "rgb(178, 29, 29)");
  }
}
