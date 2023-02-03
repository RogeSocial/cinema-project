import {PickADate} from "./PickADate.jsx";

export const PickADateList = ({btn, setOpen, calculateCurrentDate}) => (

    <ul onClick={() => {
        setOpen(!open)
    }}>
        {console.log("btn.text PickADateList: " + btn.buttonID)}
        {calculateCurrentDate().map((item, index) =>
            <div className="calender-list" key={index}>
                <PickADate item={item} btn={btn}  />
            </div>
        )}
    </ul>
);