import MovieCard from "./MovieCard";

export default function ({ movies, startDate, endDate }) {
  return (
    <>
      {movies.map((movie, index) => (
        <MovieCard
          movie={movie}
          startDate={startDate}
          endDate={endDate}
          key={index}
        />
      ))}
    </>
  );
}
