import React, { useState } from "react";

export default function() {

    const [seats, setSeats] = useState([
        {nr: 1, selected: false, available: true},
        {nr: 2, selected: false, available: true},
        {nr: 3, selected: false, available: true},
        {nr: 4, selected: false, available: true}]);
        
        const handleClick = (event) => {
            
            let element = event.target;
            if (!element.selected) {
                element.classList.add("selected")
                element.selected = true;
            } else if (element.selected) {
                element.classList.remove('selected')
                element.selected = false;
            }
                console.log(element.selected)
        }

    return(
    <section>
              

                 {seats.map((seat) => (
        <div className="seat-list" key={seat.id}>
  <div className="seat" id={seat.id} onClick={handleClick}></div>
        </div>
      ))}

    </section>)
}