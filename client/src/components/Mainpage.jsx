import React, { useState } from "react";
import '../CSS/home.css'
import Movies from "./Movies";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import Quotes from "./Quotes.jsx";


export default function () {
  const [movies] = useState([
    {
      title: "IT",
      id: 1,
      text: "After recent cases of disappearing local kids in the town of Derry, Maine, IT follows a group of kids dubbed 'The Losers Club' in the summer of 1989 and their discovery and scary encounters of a shape-shifting demonic entity, known to return every 27 years and preys on your own personal fears.",
      image:
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/06194231/it-capitulo-dos-1.jpg"
    },
    {
      title: "IT",
      id: 2,
      text: "After recent cases of disappearing local kids in the town of Derry, Maine, IT follows a group of kids dubbed 'The Losers Club' in the summer of 1989 and their discovery and scary encounters of a shape-shifting demonic entity, known to return every 27 years and preys on your own personal fears.",
      image:
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/06194231/it-capitulo-dos-1.jpg"
    },
    {
      title: "IT",
      id: 3,
      text: "After recent cases of disappearing local kids in the town of Derry, Maine, IT follows a group of kids dubbed 'The Losers Club' in the summer of 1989 and their discovery and scary encounters of a shape-shifting demonic entity, known to return every 27 years and preys on your own personal fears.",
      image:
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/06194231/it-capitulo-dos-1.jpg"
    },
]);
  return (
    <div>
      <section>
        <div className="background-image">
          <h2 className={"transparent-background"}><Quotes /></h2>
          <div className="center-btn">
            <Link to="user/login" ><button className="btn">LOGIN</button></Link>
            <Link to="user/register" className="btn"><button className="btn">SIGNUP</button></Link>
          </div>
         </div> 
      </section>
      <section className="section-top-movies">
        <h1 className="title">OUR TOP MOVIES</h1>
        <div className="top-movies">
          <MovieList movies={movies} />
        </div>
        <div className="center-btn">
          <button className="more-movies">MORE MOVIES</button>
        </div>
      </section>
    </div>
  );
}
