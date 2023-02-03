import {returnDayName} from "./Utilities.jsx";
import {setDates} from "../pages/CalendarPage.jsx";

export const PickADate = ({item, btn/*, setDateString*/}) => (
    <div onClick={function (e) {
        /*{console.log("btn.text: " + btn.buttonID)}*/
        setDates(item, btn)
    }}>
        {item.getDate()} / {item.getMonth() + 1} - {returnDayName(item.getDay())}
    </div>
);