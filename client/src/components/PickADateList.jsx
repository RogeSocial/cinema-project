import {PickADate} from "./PickADate.jsx";
import {setDateString} from "../pages/CalendarPage.jsx";

export const PickADateList = ({setOpen, calculateCurrentDate}) => (
    <ul onClick={() => {
        setOpen(!open)
    }}>
        {calculateCurrentDate().map((item, index) =>
            <div className="calender-list" key={index}>
                <PickADate item={item} setDateString={setDateString}/>
            </div>
        )}
    </ul>
);