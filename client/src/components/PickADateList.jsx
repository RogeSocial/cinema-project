import {PickADate} from "./PickADate.jsx";
import {calculateCurrentDate} from "./Utilities.jsx";

export const PickADateList = ({setOpen, setDateString, setDateValue}) => (
    <ul onClick={() => {
        setOpen(!open)
    }}>
        {calculateCurrentDate().map((item, index) =>
            <div className="calender-list" key={index}>
                <PickADate item={item}
                           setDateString={setDateString}
                           setDateValue={setDateValue} />
            </div>
        )}
    </ul>
);