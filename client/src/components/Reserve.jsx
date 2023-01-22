import React, { useState, useEffect } from 'react';
import '../CSS/reserve.css'

function Seats() {
    const [seats, setSeats] = useState([]);
    const [totalCost, setTotalCost] = useState();
    const [message, setMessage] = useState('Select your seat');

    // Initialize the seats state variable
    useEffect(() => {
        const newSeats = [];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                let occupied = false;
                if (i * 8 + j + 1 <= 13) {
                    occupied = true;
                }
                newSeats.push({ id: i * 8 + j + 1, seat: j + 1, row: i + 1, occupied: occupied, selected: false, available: true });
            }
        }
        setSeats(newSeats);
    }, []);

    const handleClick = (event) => {
        let element = event.target;
        let updatedSeats = [...seats];
        let selectedSeat = updatedSeats.find(seat => seat.id === parseInt(element.id));
        if(!selectedSeat.occupied){
            selectedSeat.selected = !selectedSeat.selected;
            setSeats(updatedSeats);
            let selectedSeats = updatedSeats.filter(seat => seat.selected === true);
            let selectedSeatsCount = selectedSeats.length;
            // Update the message displayed in the "message" div
            
            setMessage(`You have selected ${selectedSeatsCount} seats -  ${selectedSeatsCount * 10}$`);
            // Update the total cost
            if (selectedSeat.selected) {
                setTotalCost(totalCost + 10);
            } else {
                setTotalCost(totalCost - 10);
            }
        }
    }

    return (
        <section>
        <div className="screen"></div>
            <div className="seatsWrap">

                {seats.map((seat) => (
                    <div key={seat.id} className={`seat ${seat.occupied ? 'occupied' : seat.selected ? 'selected' : 'available'}`} id={seat.id} onClick={handleClick}></div>
                ))}
            </div>
          
            <br />
            <div className="message"> {message} </div>
            <br />        
            <button className="btn">Buy</button>
            
        </section>
    )}

    export default Seats;