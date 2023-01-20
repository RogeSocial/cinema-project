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
    {
      id: 4,
      title: "The Shining",
      text: "The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson.",
      image:
        "https://i.guim.co.uk/img/media/68a5a828e8ebf46df1b62fcb3f09ab78dcfbc33f/12_0_3440_2064/master/3440.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bb24447c29573d2dcb7942acae72c56a",
    },
    {
      id: 5,
      title: "The Shining",
      text: "The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson.",
      image:
        "https://i.guim.co.uk/img/media/68a5a828e8ebf46df1b62fcb3f09ab78dcfbc33f/12_0_3440_2064/master/3440.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bb24447c29573d2dcb7942acae72c56a",
    },
    {
      id: 6,
      title: "The Shining",
      text: "The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson.",
      image:
        "https://i.guim.co.uk/img/media/68a5a828e8ebf46df1b62fcb3f09ab78dcfbc33f/12_0_3440_2064/master/3440.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bb24447c29573d2dcb7942acae72c56a",
    },
    {
      id: 7,
      title: "The Ring",
      text: "The Ring is a 2002 American supernatural horror film directed by Gore Verbinski from a screenplay by Ehren Kruger, starring Naomi Watts, Martin Henderson, David Dorfman, Brian Cox, and Daveigh Chase.",
      image:
        "https://horrorobsessive.com/wp-content/uploads/2021/06/ring-1280x720-1-e1624126343512.gif",
    },
    {
      id: 8,
      title: "The Ring",
      text: "The Ring is a 2002 American supernatural horror film directed by Gore Verbinski from a screenplay by Ehren Kruger, starring Naomi Watts, Martin Henderson, David Dorfman, Brian Cox, and Daveigh Chase.",
      image:
        "https://horrorobsessive.com/wp-content/uploads/2021/06/ring-1280x720-1-e1624126343512.gif",
    },
    {
      id: 9,
      title: "The Ring",
      text: "The Ring is a 2002 American supernatural horror film directed by Gore Verbinski from a screenplay by Ehren Kruger, starring Naomi Watts, Martin Henderson, David Dorfman, Brian Cox, and Daveigh Chase.",
      image:
        "https://horrorobsessive.com/wp-content/uploads/2021/06/ring-1280x720-1-e1624126343512.gif",
    },
  ]);

  return (
    <section className="movies">
    <div className="non-image-items">
    <div className="movie-search-field">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder="Search.."></input>
    </div>
      <h2>Top Movies</h2>
      <button className="btn">Sort</button>
      <br />
    </div>
      <MovieList movies={movies} />
    </section>
  );
}
