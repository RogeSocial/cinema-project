import { Link } from "react-router-dom";
import { useState } from "react";

export default function ({ movie }) {
  const [movieTitleOpacity, setMovieTitleOpacity] = useState(1);
  const [movieImgDarken, setMovieImgDarken] = useState(true);
  return (
    <Link to={`/movies/${movie.id}/${movie.slug}`} key={movie.id}>
      <div 
      className="movie-card"
      onMouseEnter={zoomInLightenAndRemoveTitle}
      onMouseLeave={zoomOutDarkenAndRestoreTitle}>
        <h3 
        className="movie-title"
        style={{opacity: movieTitleOpacity, 
        transition: "opacity 1s"}}>
        {movie.title}{""}
        </h3>
        <div
        className={`movieImageContainer 
        ${movieImgDarken ? "darken" : ""}`}>
        <img src={movie.image} alt={"poster"} />
        </div>
      </div>
    </Link>
  );
  function zoomInLightenAndRemoveTitle() {
    setMovieTitleOpacity(0);
    setMovieImgDarken(false);
  }
  function zoomOutDarkenAndRestoreTitle() {
    setMovieTitleOpacity(1);
    setMovieImgDarken(true);
  }
}
