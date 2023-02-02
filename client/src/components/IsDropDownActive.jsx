import {PickADateList} from "./PickADateList.jsx";

export const IsDropDownActive = ({btn, open, openDatePicker, calculateCurrentDate}) => (
        <div onClick={openDatePicker} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'}`}>
            {/*{console.log("isDropDOwnActive btn.text: " + btn.text)}*/}
            <PickADateList btn={btn} setOpen={openDatePicker} calculateCurrentDate={calculateCurrentDate}/>
        </div>
);