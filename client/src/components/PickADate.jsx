import {returnDayName} from "./Utilities.jsx";
import {setDateString} from "../pages/CalendarPage.jsx";

export const PickADate = ({btn, item/*, setDateString*/}) => (
    <div onClick={function (e) {
        /*{console.log("isDropDOwnActive btn.text: " + btn)}*/
        setDateString(item, btn)
    }}>
        {item.getDate()} / {item.getMonth() + 1} - {returnDayName(item.getDay())}
    </div>
);