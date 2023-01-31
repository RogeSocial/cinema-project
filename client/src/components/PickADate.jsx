import {returnDayName} from "./Utilities.jsx";

export const PickADate = ({item, returnDateString}) => (
    <div onClick={function (e) {
        returnDateString(item.day, item.month, returnDayName(item.dayName))
    }}>
        {item.day} / {item.month} - {returnDayName(item.dayName)}
    </div>
);