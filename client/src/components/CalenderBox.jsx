import {PickADateButton} from "./PickADateButton.jsx";
import {IsDropDownActive} from "./IsDropDownActive.jsx";

export const CalenderBox = ({btn, calRef, open, openDatePicker, calculateCurrentDate}) => (
    <div id="calender-box" ref={calRef}>
        {/*{checkButtons()}*/}

        <PickADateButton btn={btn} handleClick={openDatePicker}/>
        <IsDropDownActive btn={btn} open={open} openDatePicker={openDatePicker} calculateCurrentDate={calculateCurrentDate}/>
    </div>
);