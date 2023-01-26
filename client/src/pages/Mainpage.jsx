import React, { useState } from "react";
import '../styles/home.css';
import { movieArray } from "../components/MovieData.jsx";
import Hero from "../components/hero.jsx";
import TopMovies from "../components/topMovies.jsx";


export default function () {
  const [movies, setMovies] = useState(movieArray);

  return (
    <div>
      <Hero/>
      <TopMovies/>
    </div>
  );
}