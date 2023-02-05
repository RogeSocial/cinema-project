import {PickADate} from "./PickADate.jsx";
import {calculateCurrentDate} from "../pages/CalendarPage.jsx";

export const PickADateList = ({btn, setOpen, /*calculateCurrentDate,*/ setDateString, setDateValue}) => (
    <ul onClick={() => {
        setOpen(!open)
    }}>
        {calculateCurrentDate().map((item, index) =>
            <div className="calender-list" key={index}>
                <PickADate btn={btn.buttonID}
                           item={item}
                           setDateString={setDateString}
                           setDateValue={setDateValue} />
            </div>
        )}
    </ul>
);


/*<div onClick={openDatePicker} style={marginLeft1 === 0 ? {marginLeft: `${marginLeft1}px`} : {marginLeft: '500px'} } className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'}`}>*/
