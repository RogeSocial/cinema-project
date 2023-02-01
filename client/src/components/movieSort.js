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
  return movies.sort(
    (a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()
  );
}
