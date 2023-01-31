import { useState, useEffect } from "react";
import "../styles/reservePage.css";
import "../styles/home.css";

export default function () {
  const [seats, setSeats] = useState([]);
  const [message, setMessage] = useState("Select your seat");

  // Initialize the seats state variable
  useEffect(() => {
    const newSeats = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        const id = i * 8 + j + 1;
        const seat = j + 1;
        const row = i + 1;
        const occupied = id <= 13;
        const plusSeat = i === 3;

        newSeats.push({
          id,
          seat,
          row,
          occupied,
          selected: false,
          plusSeat,
        });
      }
    }
    setSeats(newSeats);
  }, []);

  return (
    <>
      <div className="seatsWrap">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${seatStatus(seat)}`}
            id={seat.id}
            onClick={handleSeatSelect}
          ></div>
        ))}
      </div>
      <div className="message"> {message} </div>
    </>
  );

  function seatStatus(seat) {
    if (seat.occupied) {
      return "occupied"
    } else if (seat.selected) {
      return "selected"
    } else if (seat.plusSeat) {
      return "plusSeat"
    } else return "available"
  }

  function handleSeatSelect(event) {
    const element = event.target;
    const updatedSeats = [...seats];
    const selectedSeat = updatedSeats.find(
      seat => seat.id === parseInt(element.id)
    );

    if (!selectedSeat.occupied) {
      selectedSeat.selected = !selectedSeat.selected;
      setSeats(updatedSeats);

      const selectedSeats = updatedSeats.filter(
        seat => seat.selected === true && seat.plusSeat === false
      );
      const selectedSeatsPlus = updatedSeats.filter(
        seat => seat.selected === true && seat.plusSeat === true
      );

      const selectedSeatsCount = selectedSeats.length;
      const selectedSeatsPlusCount = selectedSeatsPlus.length;
      const totalSeats = selectedSeatsCount + selectedSeatsPlusCount;
      const totalCost = selectedSeatsCount * 10 + selectedSeatsPlusCount * 12;

      setMessage(`You have selected ${totalSeats} seats ${totalCost}$`);
    }
  };
};