import {PickADateButton} from "./PickADateButton.jsx";
import {IsDropDownActive} from "./IsDropDownActive.jsx";

export const CalenderBox = ({calRef, open, openDatePicker, calculateCurrentDate}) => (
    <div id="calender-box" ref={calRef}>
        <PickADateButton handleClick={openDatePicker}/>
        <IsDropDownActive open={open} openDatePicker={openDatePicker} calculateCurrentDate={calculateCurrentDate}/>
    </div>
);