import {PickADateList} from "./PickADateList.jsx";

export const IsDropDownActive = ({open, openDatePicker, calculateCurrentDate}) => (
        <div onClick={openDatePicker} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'}`}>
            <PickADateList setOpen={openDatePicker} calculateCurrentDate={calculateCurrentDate}/>
        </div>
);