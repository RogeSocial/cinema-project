import React, { useState, useEffect } from 'react';
import '../styles/reserve.css'
import '../styles/home.css'

function Seats() {
    const [seats, setSeats] = useState([]);
    const [message, setMessage] = useState('Select your seat');
    const [occupiedSeats, setOccupiedSeats] = useState(0)

    // Initialize the seats state variable
    useEffect(() => {
        let newSeats = [];
        let occupied = 0;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                let isOccupied = false;
                if (i * 8 + j + 1 <= 13) {
                    isOccupied = true;
                    occupied++
                }
                let plusSeat = false;
                if (i === 3) {
                    plusSeat = true;
                }

                newSeats.push({ id: i * 8 + j + 1, seat: j + 1, row: i + 1, occupied: isOccupied, selected: false, available: true, plusSeat: plusSeat });
            }
        }
        setOccupiedSeats(48 - occupied);
        setSeats(newSeats);
    }, []);

    const handleClick = (event) => {
        let element = event.target;
        let updatedSeats = [...seats];
        let selectedSeat = updatedSeats.find(seat => seat.id === parseInt(element.id));

        if (!selectedSeat.occupied) {
            selectedSeat.selected = !selectedSeat.selected;
            setSeats(updatedSeats);

            let selectedSeats = updatedSeats.filter(seat => seat.selected === true && seat.plusSeat === false);
            let selectedSeatsCount = selectedSeats.length;

            let selectedSeatsPlus = updatedSeats.filter(seat => seat.selected === true && seat.plusSeat === true);
            let selectedSeatsPlusCount = selectedSeatsPlus.length;

            setMessage(`You have selected ${selectedSeatsCount + selectedSeatsPlusCount} seats ${(selectedSeatsCount * 10) + (selectedSeatsPlusCount * 12)}$`);
        }
    }

    return (
        <section className='reserveSection'>

            <div className="seatsStatus"> Seats left: <span>{occupiedSeats}</span> </div>
        
            <div className="seatsContainer">
            <div className="showCaseSeat">
                <h3>Available</h3>
                <div className="seat occupied grey"></div>
                </div>
                <div className="showCaseSeat">
                <h3>Selected</h3>               
                <div className="seat selected"></div>
                </div>
                <div className="showCaseSeat">
                <h3>Plusseat</h3>
                <div className="seat occupied plusSeat"></div>
                </div>
                <div className="showCaseSeat">
                <h3>Occupied</h3>
                <div className="seat occupied"></div>
                </div>
            </div>

            <div className="screen"></div>
            <div className="seatsWrap">
                {seats.map((seat) => (
                    <div key={seat.id} className={`seat ${seat.occupied ? 'occupied' : seat.selected ? 'selected' : seat.plusSeat ? 'plusSeat' : 'available'}`} id={seat.id} onClick={handleClick}></div>
                ))}
            </div>

            <br />
            <div className="message"> {message} </div>
            <br />
            <button className="button">Buy</button>

        </section>
    )
}

export default Seats;