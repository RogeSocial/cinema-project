

export function sortAlphabet(movieX) {

  return movieX.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

export function reverseAlphabet(movieX) {

  return movieX.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    return 0;
  });
}

export function sortByMostRecent(movieX) {


  return movieX.sort(
    (a, b) => b['release_date'] - a['release_date']
  );
}
export function sortByLeastRecent(movieX) {


  return movieX.sort(
    (a, b) => a['release_date'] - b['release_date']
  );
}
