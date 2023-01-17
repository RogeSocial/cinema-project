import React, { useState } from "react";
import MovieList from "./MovieList";

export default function () {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Bram Stoker's Dracula",
      text: "Bram Stoker's Dracula is a 1992 American Gothic horror film directed and produced by Francis Ford Coppola, based on the 1897 novel Dracula by Bram Stoker",
      image:
        "https://cinespia.org/wp-content/uploads/2022/09/Screen-Shot-2020-05-17-at-9.02.13-PM-1.png",
    },
    {
      id: 2,
      title: "Bram Stoker's Dracula",
      text: "Bram Stoker's Dracula is a 1992 American Gothic horror film directed and produced by Francis Ford Coppola, based on the 1897 novel Dracula by Bram Stoker",
      image:
        "https://cinespia.org/wp-content/uploads/2022/09/Screen-Shot-2020-05-17-at-9.02.13-PM-1.png",
    },
    {
      id: 3,
      title: "Bram Stoker's Dracula",
      text: "Bram Stoker's Dracula is a 1992 American Gothic horror film directed and produced by Francis Ford Coppola, based on the 1897 novel Dracula by Bram Stoker",
      image:
        "https://cinespia.org/wp-content/uploads/2022/09/Screen-Shot-2020-05-17-at-9.02.13-PM-1.png",
    },
  ]);
  return (
    <section className="movies">
      <input type="text" placeholder="Search.."></input>
      <h2>Top Movies</h2>
      <button>Sort</button>
      <MovieList movies={movies} />
    </section>
  );
}
