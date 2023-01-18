import React, { useState } from "react";
import MovieList from "./MovieList";

export default function () {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Bram Stoker's Dracula",
      text: "Bram Stoker's Dracula is a 1992 American Gothic horror film directed and produced by Francis Ford Coppola, based on the 1897 novel Dracula by Bram Stoker",
      image:
      "https://i.pinimg.com/originals/a2/b5/f7/a2b5f7baac617b3918457722da8a8767.jpg",
    },
    {
      id: 2,
      title: "Bram Stoker's Dracula",
      text: "Bram Stoker's Dracula is a 1992 American Gothic horror film directed and produced by Francis Ford Coppola, based on the 1897 novel Dracula by Bram Stoker",
      image:
      "https://i.pinimg.com/originals/a2/b5/f7/a2b5f7baac617b3918457722da8a8767.jpg",
    },
    {
      id: 3,
      title: "Bram Stoker's Dracula",
      text: "Bram Stoker's Dracula is a 1992 American Gothic horror film directed and produced by Francis Ford Coppola, based on the 1897 novel Dracula by Bram Stoker",
      image:
        "https://i.pinimg.com/originals/a2/b5/f7/a2b5f7baac617b3918457722da8a8767.jpg",
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
