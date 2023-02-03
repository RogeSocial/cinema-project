import "../styles/tickets.css"
import "../styles/movies.css"
import "../styles/home.css"

import {useEffect, useRef, useState} from "react";
import {movieArray} from "../components/movie-data.js";
import MovieList from "../components/MovieList.jsx";
import {CalenderBox} from "../components/CalenderBox.jsx";
import {DisplaySelectedDate} from "../components/DisplaySelectedDate.jsx";
import {daysForwardInCalender} from "../components/Constants.js";
import {returnDayName} from "../components/Utilities.jsx";

let dateString = null;
let dateString2 = null;
let dateInNumbers = [{date: null, month: null, weekDay: null}];
let compareDate;
let dateStringArray = [];
let compareDateArray = [];

export default function () {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
/*    const[buttons, setButtons] = useState([
        {text:"start date", buttonID: 1},
        {text:"end date", buttonID: 2 }
    ])*/

    const buttons = [
        {text:"start date", isDisabled: false, buttonID: 1},
        {text:"end date",  isDisabled: true, buttonID: 2 }
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
            <CalenderBox btn={buttons[0]} calRef={calenderRef} open={open} openDatePicker={openDatePicker} calculateCurrentDate={calculateCurrentDate} />
            <CalenderBox btn={buttons[1]} calRef={calenderRef} open={open2} openDatePicker={openDatePicker} calculateCurrentDate={calculateCurrentDate} />
            {/*<hr/>*/}
            <DisplaySelectedDate dateString={dateStringArray[0]}/>
            <DisplaySelectedDate dateString={dateStringArray[1]}/>
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
       /* console.log("compareDateArray " + compareDateArray.length );*/
        //if array gets bigger, reset it, need one two dates
        if(compareDateArray.length > 2){
            resetCompareArray();
            resetDateArray();
        }
        let tmpDateArray = [];

        //activate the 2nd button, end date, if there is something in the compareDateArray
        if(compareDateArray.length === 1){
            buttons[1].isDisabled = false;
        }
        //if the array has two dates, one is start, one is end, then do this part
        if(compareDateArray.length === 2) {
            let startDate = new Date(compareDateArray[0]);
            let endDate = new Date(compareDateArray[1]);
/*            console.log("startDate: " + startDate );
            console.log("endDate: " + endDate );
            console.log("compareDateArray.length: " + compareDateArray.length );*/
            /*let diffInTime = endDate.getTime() - startDate.getTime();*/
            let differenceInDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
            console.log("differenceInDays: " + differenceInDays );
           /* for (let i = compareDateArray[0]; i < compareDateArray[1] + 1; i++) {*/
            for (let i = 0; i < differenceInDays + 1; i++) {
                let tmpDay= new Date(startDate);
                tmpDay.setDate(tmpDay.getDate() + i);
                /*console.log("tmpDay: " + tmpDay);*/
                tmpDateArray.push(tmpDay);
            }
        }
        else{
            tmpDateArray = compareDateArray;
            /*console.log("ELSE FUNCTION!!")*/
        }



       /* console.log("tmpDateArray.length: " + tmpDateArray.length);*/
/*        for(let i = 0; i < tmpDateArray.length; i++){
            console.log("tmpDateArray" + tmpDateArray[i].getDate());
        }*/

        /*console.log("tmpDateArray.length: " + tmpDateArray.length);*/

        let tmpArray = [];
        for (let i = 0; i < movieArray.length; i++) {
            for (let j = 0; j < movieArray[i].date.length; j++) {
                for(let k = 0; k < tmpDateArray.length; k++) {
                    if (movieArray[i].date[j] === tmpDateArray[k].getDate()) {
                        /*console.log("in Movie Array!!");*/
                        tmpArray.push(movieArray[i]);
                    }
                }
            }
        }
        return tmpArray;
    }

    function calculateCurrentDate() {
        let tmpArray = [];
        for (let i = 0; i < daysForwardInCalender; i++) {
            let addedDay = new Date();
            addedDay.setDate(addedDay.getDate() + i);
            tmpArray.push(addedDay);
        }
        return tmpArray;
    }

/*    function checkButtons(){
        if(buttons[0].isDisabled && buttons[1].isDisabled){
            resetCompareArray();
            resetDateArray();
            console.log("checkButtonsIF");
        }
        /!*console.log("checkButtons");*!/
    }*/
}

export function setDates(inDate, inBtn) {
    /*console.log("inBtnId: " + inBtn.text)*/
    compareDateArray.push(inDate);
    /*console.log("compareDateArray" + inDate);*/
    /*compareDateArray[0] = inDate.getDate();*/
    /*compareDate = inDate.getDate();*/
    let tmpString = inDate.getDate() + " / " + (inDate.getMonth() + 1) + " - " + returnDayName(inDate.getDay());
    dateStringArray.push(tmpString);
    /*console.log("dateStringArray.length: " + dateStringArray.length);*/
    /*console.log("compareDateArray.length: " + compareDateArray.length);*/
    /*console.log("inBtn.text: " + inBtn.text);*/
/*    console.log(("date: " + inDate.getDate() + " month: " + (inDate.getMonth() + 1) + "day: " + returnDayName(inDate.getDay())))*/
    /*dateString = inDate.getDate() + " / " + (inDate.getMonth() + 1) + " - " + returnDayName(inDate.getDay());*/
}

export function resetDateArray(){
    dateStringArray = [];
}

export function resetCompareArray(){
    compareDateArray = [];
}