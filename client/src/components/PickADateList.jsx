import {PickADate} from "./PickADate.jsx";
import {calculateCurrentDate} from "./Utilities.jsx";

export const PickADateList = ({setDateString, setDateValue}) => (
    <ul>
        {calculateCurrentDate().map((item, index) =>
            <div className="calender-list" key={index}>
                <PickADate item={item}
                           setDateString={setDateString}
                           setDateValue={setDateValue}/>
            </div>
        )}
    </ul>
);