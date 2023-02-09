import {PickADateButton} from "./PickADateButton.jsx";
import {IsDropDownActive} from "./IsDropDownActive.jsx";

export const CalenderBox = ({btn, calRef, open, openDatePicker, setDateString, setDateValue}) => (
    <div id="calender-box" ref={calRef}>
        <PickADateButton btn={btn} handleClick={openDatePicker}/>
        <IsDropDownActive open={open}
                          openDatePicker={openDatePicker}
                          setDateString={setDateString}
                          setDateValue={setDateValue}/>
    </div>
);