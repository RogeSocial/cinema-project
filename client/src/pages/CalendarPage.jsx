import "../styles/tickets.css"
import "../styles/movies.css"
import "../styles/home.css"

import {useEffect, useRef, useState} from "react";
import {movieArray} from "../components/movie-data.js";
import MovieList from "../components/MovieList.jsx";
import {CalenderBox} from "../components/CalenderBox.jsx";
import {DisplaySelectedDate} from "../components/DisplaySelectedDate.jsx";
import {daysForwardInCalender} from "../components/Constants.js";

export default function () {
/*    let dateStringArray = [];
    let compareDateArray = [];*/
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [startDateString, setStartDateString] = useState("Movies Today");
    const [endDateString, setEndDateString] = useState("");
    /*const [testArray, setTestArray] = useState([]);*/
    const [startDateValue, setStartDateValue] = useState(new Date());
    const [endDateValue, setEndDateValue] = useState(new Date());


    const buttons = [
        {text: "start date", isDisabled: false, buttonID: 1},
        {text: "end date", isDisabled: true, buttonID: 2}
    ]

    let calenderRef = useRef();
    //this part will handle clicking outside the dropdown menu, so it closes
    /*    useEffect(() => {
            let onClickOutside = (e) => {
                if (!calenderRef.current.contains(e.target)) {
                    setOpen(false);
                    setOpen2(false);
                }
            };
            document.addEventListener("mousedown", onClickOutside);
            return () => {
                document.removeEventListener("mousedown", onClickOutside);
            }
        });*/
    return <section className="calender">
        <div className="wrap">
            <h2>Buy Tickets</h2>
            {/*<hr/>*/}
            <CalenderBox btn={buttons[0]}
                         marginLeft1={"0"}
                         calRef={calenderRef}
                         open={open}
                         openDatePicker={openDatePicker}
                         setDateString={setStartDateString}
                         setDateValue={setStartDateValue}
                /*calculateCurrentDate={calculateCurrentDate}*//>
            <CalenderBox btn={buttons[1]}
                         marginLeft1={"300"}
                         calRef={calenderRef}
                         open={open2}
                         openDatePicker={openDatePicker}
                         setDateString={setEndDateString}
                         setDateValue={setEndDateValue}
                /*calculateCurrentDate={calculateCurrentDate}*//>

            {/*<hr/>*/}
            {/*<DisplaySelectedDate dateString={dateStringArray[0]}/>
            <DisplaySelectedDate dateString={dateStringArray[1]}/>*/}
            <DisplaySelectedDate dateString={startDateString}/>
            <DisplaySelectedDate dateString={endDateString}/>
        </div>
        <div className="movieTickets">
            <MovieList movies={moviesOnDate()}/>
        </div>
    </section>

    function openDatePicker() {
        setOpen(!open);
    }

//compare the selected date and matches with the "database"(movieData)" and returns the one who are matched
    function moviesOnDate() {
        let tmpDateArray = [];

/*        if (compareDateArray.length > 2) {
 /!*           resetDateArray();
            resetCompareArray();*!/
        }*/

        //activate the 2nd button(end date), if there is something in the startDateString
        if (startDateString !== "") {
            buttons[1].isDisabled = false;
        }
        //if the array has two dates, one is start, one is end, then do this part
 /*       if (compareDateArray.length === 2) {
            let startDate = new Date(compareDateArray[0]);
            let endDate = new Date(compareDateArray[1]);
            /!*            console.log("startDate: " + startDate );
                        console.log("endDate: " + endDate );
                        console.log("compareDateArray.length: " + compareDateArray.length );*!/
            /!*let diffInTime = endDate.getTime() - startDate.getTime();*!/
            let differenceInDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
            console.log("differenceInDays: " + differenceInDays);
            /!* for (let i = compareDateArray[0]; i < compareDateArray[1] + 1; i++) {*!/
            for (let i = 0; i < differenceInDays + 1; i++) {
                let tmpDay = new Date(startDate);
                tmpDay.setDate(tmpDay.getDate() + i);
                /!*console.log("tmpDay: " + tmpDay);*!/
                tmpDateArray.push(tmpDay);
            }
        }
        //if compareDateArray has only one
        else {
            /!*console.log("compareDateArray" + compareDateArray.length);*!/
            tmpDateArray.push(startDateValue);
        }*/
        /* console.log("tmpDateArray.length: " + tmpDateArray.length);*/
        /*        for(let i = 0; i < tmpDateArray.length; i++){
                    console.log("tmpDateArray" + tmpDateArray[i].getDate());
                }*/
        tmpDateArray.push(startDateValue);
/*        console.log("startDateValue: " + startDateValue);
        console.log("tmpDateArray.length: " + tmpDateArray.length);*/

        let tmpArray = [];
       /* console.log("tmpDateArray.length" + tmpDateArray.length);*/
        for (let i = 0; i < movieArray.length; i++) {
            for (let j = 0; j < movieArray[i].date.length; j++) {
                for (let k = 0; k < tmpDateArray.length; k++) {
                    if (movieArray[i].date[j] === tmpDateArray[k].getDate()) {
                        console.log("in Movie Array!!");
                        tmpArray.push(movieArray[i]);
                    }
                }
            }
        }
        return tmpArray;
    }

    /*    function calculateCurrentDate() {
            let tmpArray = [];
            for (let i = 0; i < daysForwardInCalender; i++) {
                let addedDay = new Date();
                addedDay.setDate(addedDay.getDate() + i);
                tmpArray.push(addedDay);
            }
            return tmpArray;
        }*/


    /*    function checkButtons(){
            if(buttons[0].isDisabled && buttons[1].isDisabled){
                resetCompareArray();
                resetDateArray();
                console.log("checkButtonsIF");
            }
            /!*console.log("checkButtons");*!/
        }*/
/*    function setButton(inID) {
        /!*console.log("buttonID: " + inID);*!/
    }*/

/*    function setDateStringBanana(inDate) {
        /!*console.log("inString: " + inString);*!/
        compareDateArray.push(inDate);
        /!*console.log("compareDateArray" + compareDateArray.length);*!/
        /!*compareDateArray[0] = inDate.getDate();*!/
        /!*compareDate = inDate.getDate();*!/
        /!*let tmpString = inDate.getDate() + " / " + (inDate.getMonth() + 1) + " - " + returnDayName(inDate.getDay());*!/
        /!*dateStringArray.push(tmpString);*!/
        /!*inString(tmpString);*!/
    }*/

}

//calculate days forward for the calendar
export function calculateCurrentDate() {
    let tmpArray = [];
    for (let i = 0; i < daysForwardInCalender; i++) {
        let addedDay = new Date();
        addedDay.setDate(addedDay.getDate() + i);
        tmpArray.push(addedDay);
    }
    return tmpArray;
}

/*export function setDateStringBanana(inDate) {
    /!*console.log("inString: " + inString);*!/
    compareDateArray.push(inDate);
    /!*console.log("compareDateArray" + inDate);*!/
    /!*compareDateArray[0] = inDate.getDate();*!/
    /!*compareDate = inDate.getDate();*!/
    let tmpString = inDate.getDate() + " / " + (inDate.getMonth() + 1) + " - " + returnDayName(inDate.getDay());
    /!*dateStringArray.push(tmpString);*!/
    /!*inString(tmpString);*!/
}*/

/*
export function resetDateArray() {
    dateStringArray = [];
}

export function resetCompareArray() {
    compareDateArray = [];
}*/
