export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="movie-list" key={movie.id}>
          <h3> {movie.title} </h3>
          <img src={movie.image} alt="a picture of a movie" />
        </div>
      ))}
    </>
  );
}