import "../styles/tickets.css"
import "../styles/movies.css"
import "../styles/home.css"

import {useEffect, useRef, useState} from "react";
import {movieArray} from "../components/movie-data.js";
import MovieList from "../components/MovieList.jsx";
import {CalenderBox} from "../components/CalenderBox.jsx";
import {DisplaySelectedDate} from "../components/DisplaySelectedDate.jsx";

export default function () {
    const [openDatePickerStart, setOpenDatePickerStart] = useState(false);
    const [openDatePickerEnd, setOpenDatePickerEnd] = useState(false);
    const [startDateString, setStartDateString] = useState("");
    const [endDateString, setEndDateString] = useState("");
    console.log(startDateString + " " + endDateString)
    const [startDateValue, setStartDateValue] = useState(new Date());
    const [endDateValue, setEndDateValue] = useState(new Date());
    let movieDates =[];

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
            <MovieList movies={moviesOnDate()}/>
        </div>
    </section>

    function openDatePicker(inSet, inVar) {
        inSet(!inVar);
    }

//compare the selected date and matches with the "database"(movieData)" and returns the one(s) who are matched
    function moviesOnDate() {
        let tmpDateArray = [];
        movieDates = [];

        //activate the 2nd button(end date), if there is something in the startDateString
        if (startDateString === "") {
            buttons[1].isDisabled = true;
            return tmpDateArray;
        } else {
            buttons[1].isDisabled = false;
        }

        //if the array has two dates, one is start, one is end, then do this part
        if (startDateString !== "" && endDateString !== "") {
            let startDate = new Date(startDateValue);
            let endDate = new Date(endDateValue);
            let differenceInDays = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

            for (let i = 0; i < differenceInDays + 1; i++) {
                let tmpDay = new Date(startDate);
                tmpDay.setDate(tmpDay.getDate() + i);
                tmpDateArray.push(tmpDay);
            }
        }
        //if compareDateArray has only one
        else {
            tmpDateArray.push(startDateValue);
        }

        let tmpArray = [];
        for (let i = 0; i < movieArray.length; i++) {
            for (let j = 0; j < movieArray[i].date.length; j++) {
                for (let k = 0; k < tmpDateArray.length; k++) {
                    if ((movieArray[i].date[j] === tmpDateArray[k].getDate())) {
                        tmpArray.push(movieArray[i]);
                        let tmp = tmpDateArray[k].getDate();
                        movieDates.push(tmp);
                    }
                }
            }
        }
        console.log("movieDates: " + movieDates);
        //just get the whole array
        return tmpArray;

        //remove duplicates
/*        let returnArray = [...new Set(tmpArray)];
        return returnArray;*/
    }
}

function isInArray(inArray, inMovie){
    for(let i=0; inArray.length; inArray++){
        if(inArray[i] === inMovie){
            return true;
        }
    }
    return false;
}













