export default function() {
return ( <div className="seatsContainer">
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

)}