import {returnDayName} from "./Utilities.jsx";

export const PickADate = ({item, setDateString, setDateValue}) => (
    <div onClick={function (e) {
        setDateString(item.getDate() + " / " + (item.getMonth() + 1) + " - " + returnDayName(item.getDay()));
        setDateValue(item);
    }}>
        {item.getDate()} / {item.getMonth() + 1} - {returnDayName(item.getDay())}
    </div>
);