import React, { useState } from "react";
import '../CSS/home.css'
import MovieList from "./MovieList";


export default function () {
  const [movies] = useState([
    {
      id: 1,
      title: "IT",
      image:
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/06194231/it-capitulo-dos-1.jpg"
    },
    {
      id: 2,
      title: "IT",
      image:
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/06194231/it-capitulo-dos-1.jpg"
    },
    {
      id: 3,
      title: "IT",
      image:
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/06194231/it-capitulo-dos-1.jpg"
    },
  ]);
  return (
    <div>
      <section>
        <div className="background-image">
          <div className="transparent-background">
            <h2>"WHATEVER YOU DO, <br></br> DON'T FALL ASLEEP."</h2>
          </div>
          <div className="center-btn">
            <button className="btn">LOGIN</button>
            <button className="btn">SIGNUP</button>
          </div>
        </div>
      </section>
      <section className="section-top-movies">
        <h1 className="title">Our top movies</h1>
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
