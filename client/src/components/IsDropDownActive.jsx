import {PickADateList} from "./PickADateList.jsx";

export const IsDropDownActive = ({open, openDatePicker, setDateString, setDateValue}) => (
    <div onClick={openDatePicker} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'} `}>
        <PickADateList setDateString={setDateString}
                       setDateValue={setDateValue}/>
    </div>);