import {returnDayName} from "./Utilities.jsx";

export const PickADate = ({item, btn, setDateString, setDateValue}) => (
    <div onClick={function (e) {
        /*{console.log("btn.text: " + btn.buttonID)}*/
        /*setDateStringBanana(item)*/
        /*setDateString(item.getDate() / item.getMonth() + 1 - returnDayName(item.getDay()))*/
        setDateString(item.getDate() + " / " + (item.getMonth() + 1) + " - " + returnDayName(item.getDay()));
        setDateValue(item);
    }}>
        {/*{setDateValue(item)}*/}
        {item.getDate()} / {item.getMonth() + 1} - {returnDayName(item.getDay())}

        {/*{setDateString(item.getDate() / item.getMonth() + 1 - returnDayName(item.getDay()))}*/}
    </div>
);