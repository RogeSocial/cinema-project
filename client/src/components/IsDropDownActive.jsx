import {PickADateList} from "./PickADateList.jsx";

export const IsDropDownActive = ({btn, marginLeft1, open, openDatePicker/*, calculateCurrentDate*/, setDateString, setDateValue}) => (
    <div onClick={openDatePicker} style={{marginLeft: marginLeft1 + "px"}} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'}`}>
        {console.log("marginLeft1 " + marginLeft1)}
        <PickADateList btn={btn}
                       setOpen={openDatePicker}
                       /*calculateCurrentDate={calculateCurrentDate}*/
                       setDateString={setDateString}
                       setDateValue={setDateValue} />
    </div>
);