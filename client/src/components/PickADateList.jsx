import {PickADate} from "./PickADate.jsx";
import {setDateString} from "../pages/CalendarPage.jsx";

export const PickADateList = ({btn, setOpen, calculateCurrentDate}) => (

    <ul onClick={() => {
        setOpen(!open)
    }}>
        {/*{console.log("isDropDOwnActive btn.text: " + btn.text)}*/}
        {calculateCurrentDate().map((item, index) =>
            <div className="calender-list" key={index}>
                <PickADate btn={btn.buttonID} item={item} />
            </div>
        )}
    </ul>
);

