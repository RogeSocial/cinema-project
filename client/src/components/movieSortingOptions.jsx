import { useSearchParams } from "react-router-dom";
import ResetFilterButton from "./ResetFilterButton.jsx";
import AlphabeticButton from "./AlphabeticButton.jsx";
import AlphabeticButton2 from "./AlphabeticButton2.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import MovieSortButton from "./MovieSortButton.jsx";
import { reverseAlphabet, sortAlphabet } from "./movieSort.js";

function MovieSortingOptions({ setFilteredMovies }) {
  const [filterParam, setFilterParam] = useSearchParams();
  const isFilterActive = filterParam.get("filter") === "active";

  if (!isFilterActive) {
    return <MovieSortButton handleClick={showSortingOptions} />;
  } else {
    return <HandleSorting />;
  }

  function HandleSorting() {
    return (
      <div className={"sorting-options"}>
        <AlphabeticButton2 handleClick={sortAlphabetically2} />
        <ResetFilterButton handleClick={removeFilter} />
        <AlphabeticButton handleClick={sortAlphabetically} />
        <ReverseAlphabeticButton handleClick={sortZetabetically} />
      </div>
    );
  }

  function removeFilter() {
    setFilterParam({});
    window.location.reload();
  }

  function sortAlphabetically() {
    setFilteredMovies([...sortAlphabet()]);
  }

  function sortAlphabetically2() {
    setFilteredMovies([...sortAlphabet()]);
  }

  function sortZetabetically() {
    setFilteredMovies([...reverseAlphabet()]);
  }

  function showSortingOptions() {
    setFilterParam({ filter: "active" });
  }
}

export default MovieSortingOptions;
