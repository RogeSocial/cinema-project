import {PickADateButton} from "./PickADateButton.jsx";
import {IsDropDownActive} from "./IsDropDownActive.jsx";

export const CalenderBox = ({ref, open, openDatePicker, calculateCurrentDate}) => (
    <div id="calender-box" ref={ref}>
        <PickADateButton handleClick={openDatePicker}/>
        <IsDropDownActive open={open} openDatePicker={openDatePicker} calculateCurrentDate={calculateCurrentDate}/>
    </div>
);