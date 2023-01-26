import React, { useState } from "react";
import '../styles/home.css';
import { movieArray } from "./MovieData";
import Hero from "./hero.jsx";
import TopMovies from "./topMovies.jsx";


export default function () {
  const [movies, setMovies] = useState(movieArray);

  return (
    <div>
      <Hero/>
      <TopMovies/>
    </div>
  );
}