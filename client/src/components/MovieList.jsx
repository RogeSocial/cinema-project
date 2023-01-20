import { Link } from "react-router-dom";

export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
      
        <div className="movie-list" key={movie.id}>
          <h3> {movie.title} </h3>
          <Link to="ticket-form"><img src={movie.image} alt="a picture of a movie" /></Link>
        </div>
        
      ))}
    </>
  );
}
