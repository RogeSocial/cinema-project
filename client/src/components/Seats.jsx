import React, { useState, useEffect } from 'react';

function Seats() {
    const [seats, setSeats] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [message, setMessage] = useState('');
    // Initialize the seats state variable
    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                seats.push({ id: i * 8 + j + 1, seat: j + 1, row: i + 1, selected: false, available: true });
            }
        }
        setSeats(seats);
    }, []);

    const handleClick = (event) => {
        let element = event.target;
        let updatedSeats = [...seats];
        let selectedSeat = updatedSeats.find(seat => seat.id === parseInt(element.id));
        selectedSeat.selected = !selectedSeat.selected;
        setSeats(updatedSeats);
        let selectedSeats = updatedSeats.filter(seat => seat.selected === true);
        let selectedSeatsCount = selectedSeats.length;
        // Update the message displayed in the "message" div
        setMessage(`${selectedSeatsCount} - ${selectedSeatsCount * 10}$`);
        // Update the total cost
        if (selectedSeat.selected) {
            setTotalCost(totalCost + 10);
        } else {
            setTotalCost(totalCost - 10);
        }
    }

    return (
        <section>
            <div className="seatsWrap">
                {seats.map((seat) => (
                    <div key={seat.id} className={`seat ${seat.selected ? 'selected' : ''}`} id={seat.id} onClick={handleClick}></div>
                ))}
            </div>
            <div className="message">{message}</div>
        </section>
    )}

    export default Seats;