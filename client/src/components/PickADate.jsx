import {returnDayName} from "./Utilities.jsx";

export const PickADate = ({item, setDateString}) => (
    <div onClick={function (e) {
        setDateString(item)
    }}>
        {item.getDate()} / {item.getMonth() + 1} - {returnDayName(item.getDay())}
    </div>
);