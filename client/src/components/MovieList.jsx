export default function ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
      
        <div className="movie-list" key={movie.id}>
          <h3> {movie.title} </h3>
          <img src={movie.image} alt="a picture of a movie" />
          <div className={"movieLength"}>{hoursAndMinutes(movie.length)}</div>
        </div>
        
      ))}
    </>
  );
}

export function hoursAndMinutes(inMinutes){
  let hours = Math.trunc(inMinutes / 60);
  let minutes = inMinutes % 60;
  return (hours + "h " + minutes + "m");
}