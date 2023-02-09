import CalenderCard from "./CalenderCard";

export default function ({ movies, startDate, endDate, endString, dateOrder }) {
  return (<>
      {movies.map((movie, index) => (
        <CalenderCard
          movie={movie}
          startDate={startDate}
          endDate={endDate}
          endString={endString}
          dateOrder={dateOrder}
          key={index}
        />
      ))}
    </>);
}
