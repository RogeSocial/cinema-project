import {PickADate} from "./PickADate.jsx";
import {setDateString} from "../pages/CalendarPage.jsx";

export const PickADateList = ({btn, setOpen, calculateCurrentDate}) => (
    <ul onClick={() => {
        setOpen(!open)
    }}>
        {calculateCurrentDate().map((item, index) =>
            <div className="calender-list" key={index}>
                <PickADate btn={btn} item={item} />
            </div>
        )}
    </ul>
);