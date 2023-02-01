import {returnDayName} from "./Utilities.jsx";

export const PickADate = ({item, setDateString}) => (
    <div onClick={function (e) {
        setDateString(item.getDate(), item.getMonth(), returnDayName(item.getDay()))
    }}>
        {item.getDate()} / {item.getMonth() + 1} - {returnDayName(item.getDay())}
    </div>
);