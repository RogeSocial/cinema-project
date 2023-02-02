import {PickADateList} from "./PickADateList.jsx";

export const IsDropDownActive = ({btn, open, openDatePicker, calculateCurrentDate}) => (
        <div onClick={openDatePicker} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'}`}>
            <PickADateList btn={btn} setOpen={openDatePicker} calculateCurrentDate={calculateCurrentDate}/>
        </div>
);