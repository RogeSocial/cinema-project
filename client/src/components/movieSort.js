import { movieArray } from "./movie-data.js";
const [movies] = [movieArray];
export function sortAlphabet() {
  return movies.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}
export function reverseAlphabet() {
  return movies.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    return 0;
  });
}

export function sortByMostRecent() {
  let dateTypes = ["year", "month", "day"];
  for (let i = 0; i < dateTypes.length; ++i) {
    return movies.sort((a, b) => {
      if (a.releaseDate[dateTypes[i]] < b.releaseDate[dateTypes[i]]) {
        return -1;
      }
      if (a.releaseDate[dateTypes[i]] > b.releaseDate[dateTypes[i]]) {
        return 1;
      } else if (a.releaseDate[dateTypes[i]] === b.releaseDate[dateTypes[i]]) {
        return 0;
      }
    });
  }
}
