import "../styles/tickets.css"
import "../styles/movies.css"
import "../styles/home.css"

import {useContext, useEffect, useRef, useState} from "react";
import CalendarList from "../components/CalenderList";
import {CalenderBox} from "../components/CalenderBox.jsx";
import {DisplaySelectedDate} from "../components/DisplaySelectedDate.jsx";
import globalContext from "../GlobalContext.jsx";
import {calculateDifferenceInDays} from "../components/Utilities.jsx";

export default function () {
    const [openDatePickerStart, setOpenDatePickerStart] = useState(false);
    const [openDatePickerEnd, setOpenDatePickerEnd] = useState(false);
    const [startDateString, setStartDateString] = useState("");
    const [endDateString, setEndDateString] = useState("");
    const [startDateValue, setStartDateValue] = useState(new Date());
    const [endDateValue, setEndDateValue] = useState(new Date());

    const {movies} = useContext(globalContext);

    const buttons = [
        {text: "start date", isDisabled: false, buttonID: 1},
        {text: "end date", isDisabled: true, buttonID: 2}
    ]

    let calenderRef = useRef();
    let calenderRef2 = useRef();

    //this part will handle clicking outside the dropdown menu, so it closes
    useEffect(() => {
        let onClickOutside = (e) => {
            if (!calenderRef.current.contains(e.target) && !calenderRef2.current.contains(e.target)) {
                setOpenDatePickerStart(false);
                setOpenDatePickerEnd(false);
            }
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => {
            document.removeEventListener("mousedown", onClickOutside);
        }
    });

    return <section className="calender">
        <div className="wrap">
            <h2>Buy Tickets</h2>
            <CalenderBox btn={buttons[0]}
                         calRef={calenderRef}
                         open={openDatePickerStart}
                         openDatePicker={() => openDatePicker(setOpenDatePickerStart, openDatePickerStart)}
                         setDateString={setStartDateString}
                         setDateValue={setStartDateValue}/>
            <CalenderBox btn={buttons[1]}
                         calRef={calenderRef2}
                         open={openDatePickerEnd}
                         openDatePicker={() => openDatePicker(setOpenDatePickerEnd, openDatePickerEnd)}
                         setDateString={setEndDateString}
                         setDateValue={setEndDateValue}/>
            <DisplaySelectedDate dateString={startDateString}/>
            <DisplaySelectedDate dateString={endDateString}/>
        </div>
        <div className="movieTickets">
            <CalendarList movies={moviesOnDate()} startDate={startDateValue} endDate={endDateValue}/>
        </div>
    </section>

    function openDatePicker(inSet, inVar) {
        inSet(!inVar);
    }

//compare the selected date and matches with the "database"(movieData)" and returns the one(s) who are matched
    function moviesOnDate() {

        let tmpDateArray = [];

        //activate the 2nd button(end date), if there is something in the startDateString
        if (startDateString === "") {
            buttons[1].isDisabled = true;
            return tmpDateArray;
        } else {
            buttons[1].isDisabled = false;
        }

        //if the array has two dates, one is start, one is end, then do this part
        if (startDateString !== "" && endDateString !== "") {

            let differenceInDays = calculateDifferenceInDays(new Date(startDateValue), new Date(endDateValue));

            for (let i = 0; i < differenceInDays + 1; i++) {
                let tmpDay = new Date(startDateValue);
                tmpDay.setDate(tmpDay.getDate() + i);
                tmpDateArray.push(tmpDay);
            }
        }
        //if compareDateArray has only one
        else {
            tmpDateArray.push(startDateValue);
        }

        //maps the moviearray with the selected dates, and pushes the hits into a new array, "tmpArray"
        let tmpArray = []
        for (let i = 0; i < movies.length; i++) {
            let word = movies[i].dates.split(", ");
            for (let j = 0; j < word.length; j++) {
                for (let k = 0; k < tmpDateArray.length; k++) {
                    if ((parseInt(word[j]) === tmpDateArray[k].getDate())) {
                        tmpArray.push(movies[i]);
                    }
                }
            }

        }

        //remove duplicates
        let returnArray = [...new Set(tmpArray)];
        return returnArray;
    }
}













