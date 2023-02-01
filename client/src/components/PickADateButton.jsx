import {resetDateArray} from "../pages/CalendarPage.jsx";
export const PickADateButton = ({handleClick}) => (
    resetDateArray(),
    <button className="button" onClick={handleClick}>
        {/*{buttons.text}*/}
        Pick a Date
    </button>
);