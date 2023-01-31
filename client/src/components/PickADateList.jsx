import {PickADate} from "./PickADate.jsx";
import {returnDateString} from "../pages/CalendarPage.jsx";

export const PickADateList = ({openDatePicker, calculateCurrentDate}) => (
    <ul onClick={() => {
        openDatePicker(!open)
    }}>
        {calculateCurrentDate().map((item) =>
            <div className="calender-list" key={item.id}>
                <PickADate item={item} returnDateString={returnDateString}/>
            </div>
        )}
    </ul>
);