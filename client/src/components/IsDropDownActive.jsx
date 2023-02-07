import {PickADateList} from "./PickADateList.jsx";

export const IsDropDownActive = ({btn, open, openDatePicker, setDateString, setDateValue}) => (
    <div onClick={openDatePicker} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'} `}>
        <PickADateList btn={btn}
                       setOpen={openDatePicker}
                       setDateString={setDateString}
                       setDateValue={setDateValue} />
    </div>
);