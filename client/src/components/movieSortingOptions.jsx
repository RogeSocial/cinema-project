import { useSearchParams } from "react-router-dom";
import ResetFilterButton from "./ResetFilterButton.jsx";
import AlphabeticButton from "./AlphabeticButton.jsx";
import ReverseAlphabeticButton from "./ReverseAlphabeticButton.jsx";
import MovieSortButton from "./MovieSortButton.jsx";
import { reverseAlphabet, sortAlphabet, sortByMostRecent} from "./movieSort.js";
import RecentButton from "./RecentButton.jsx";

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
        <ResetFilterButton handleClick={removeFilter} />
        <AlphabeticButton handleClick={sortAlphabetically} />
        <ReverseAlphabeticButton handleClick={sortZetabetically} />
        <RecentButton handleClick={sortMostRecent}/>
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

  function sortZetabetically() {
    setFilteredMovies([...reverseAlphabet()]);
  }

  function showSortingOptions() {
    setFilterParam({ filter: "active" });
  }

  function sortMostRecent() {
    setFilteredMovies([...sortByMostRecent()]);
  }
}

export default MovieSortingOptions;
