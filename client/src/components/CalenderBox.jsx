import {PickADateButton} from "./PickADateButton.jsx";
import {IsDropDownActive} from "./IsDropDownActive.jsx";

export const CalenderBox = ({btn, marginLeft1 ,calRef, open, openDatePicker, setDateString, setDateValue, setTestMargin, testMargin}) => (
    <div id="calender-box" ref={calRef}>
       {/* {console.log("marginLeft1 " + marginLeft1)}*/}
        <PickADateButton btn={btn} handleClick={openDatePicker}/>
        <IsDropDownActive btn={btn}
                          marginLeft1={marginLeft1}
                          open={open}
                          openDatePicker={openDatePicker}
                          setDateString={setDateString}
                          setDateValue={setDateValue}
                          setTestMargin={setTestMargin}
                          testMargin={testMargin}/>
    </div>
);