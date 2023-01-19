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
      title: "Hellraiser",
      text: "Hellraiser is a 1987 British supernatural horror film[6] written and directed by Clive Barker, and produced by Christopher Figg, based on Barker's 1986 novella The Hellbound Heart.",
      image:
        "https://e0.pxfuel.com/wallpapers/341/650/desktop-wallpaper-pinhead-pinhead-thumbnail.jpg",
    },
    {
      id: 3,
      title: "Jacob's Ladder",
      text: "Jacob's Ladder is a 1990 American psychological horror film[4] directed by Adrian Lyne, produced by Alan Marshall and written by Bruce Joel Rubin.",
      image: "http://wallpaperset.com/w/full/a/9/a/375399.jpg",
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
      title: "The Mist",
      text: "The Mist (also known as Stephen King's The Mist) is a 2007 American science-fiction horror film based on the 1980 novella The Mist by Stephen King. The film was written and directed by Frank Darabont.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMOJI5WGX4QxVYalQkhZCqv4RfNPPclbPsQ&usqp=CAU",
    },
    {
      id: 6,
      title: "Land of the Dead",
      text: "Land of the Dead (also known as George A. Romero's Land of the Dead) is a 2005 post-apocalyptic horror film written and directed by George A. Romero; the fourth of Romero's six Living Dead movies, it is preceded by Night of the Living Dead, Dawn of the Dead and Day of the Dead, and succeeded by Diary of the Dead and Survival of the Dead.",
      image:
        "https://thumbs.dreamstime.com/b/scary-tree-shadow-red-background-halloween-dark-creepy-forest-59589126.jpg",
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
      title: "Scream",
      text: "Scream is a 1996 American slasher film[5] directed by Wes Craven and written by Kevin Williamson. The film stars Neve Campbell, David Arquette, Courteney Cox, Matthew Lillard, Rose McGowan, Skeet Ulrich, Jamie Kennedy, and Drew Barrymore.",
      image:
        "https://4kwallpapers.com/images/wallpapers/scream-2022-movies-horror-movies-thriller-black-background-1284x2778-6756.jpg",
    },
    {
      id: 9,
      title: "Ouija: Origin of Evil",
      text: "Ouija: Origin of Evil is a 2016 American supernatural horror film directed and edited by Mike Flanagan and written by Flanagan and Jeff Howard. The film is a prequel to the 2014 film Ouija and stars Elizabeth Reaser, Annalise Basso, and Henry Thomas.",
      image: "https://images3.alphacoders.com/808/thumb-1920-808740.jpg",
    },
  ]);
  const handlesSearch = (event) => {
  
    {
      movies.filter((movie) =>
        event.target.value.toLowerCase() === movie.title.toLowerCase()
          ? console.log(movies.indexOf(movie))
          : null
      );
 /*      movies.unshift(movies.splice(movies.indexOf(movie), 1)[0]) */
    }
  };

  return (
    <section className="movies">
      <div className="non-image-items">
        <div className="movie-search-field">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search.."
            onChange={handlesSearch}
          ></input>
        </div>
        <h2>Top Movies</h2>
        <button>Sort</button>
        <br />
      </div>
      <MovieList movies={movies} />
    </section>
  );
}
