import "../styles/tickets.css"
import "../styles/movies.css"
import "../styles/home.css"

import { useEffect, useRef, useState } from "react";
import { movieArray } from "../components/MovieData.jsx";
import MovieList from "../components/MovieList.jsx";


const daysForward = 21;
let dateString = null;
let dateInNumbers = [{date: null, month: null, weekDay: null}];
let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function () {
    const [open, setOpen] = useState(false);

    let calenderRef = useRef();

    {
        calculateCurrentDate();
    }

    //this part will handle clicking outside the dropdown menu, so it closes
    useEffect(() => {
        let handler = (e) => {
            if (!calenderRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    //shows the current selected date
    const SelectedDateComp = () => (
        <div id="selectedDate">
            {dateString}
        </div>
    );

    const SetDateComp = ({item}) => (
        <div onClick={function (e) {
            setDateString(item.day, item.month, returnDayName(item.dayName))
        }}>
            {item.day} / {item.month} - {returnDayName(item.dayName)}
        </div>
    );

    const UlListComp = () => (
        <ul onClick={() => {
            setOpen(!open)
        }}>
            {calculateCurrentDate().map((item) =>
                <div className="calender-list" key={item.id}>
                    {/*{setDateComp(item)}*/}
                    {/*<SetDateComp item = {item} />*/}
                    <SetDateComp item = {item} />
                </div>
            )}
        </ul>
    );

    const CalenderDropDownComp = () => (
        <div className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'}`}>
            <UlListComp/>
        </div>
    );

    const ButtonComp = () => (
        <button className="button" onClick={() => {
            setOpen(!open)
        }}>Pick a Date
        </button>
    );

    const TitleComp = () => (
        <h2 id="buyTicketsTitle">Buy Tickets</h2>
    );

    //for the button and the dropdown menu to choose date
    const CalenderBoxComp = () => (
        <div id="calender-box" ref={calenderRef}>
            <ButtonComp/>
            <CalenderDropDownComp/>
        </div>
    );

    return <section id="calenderSection" className="calender">
        <div className="wrap">
            <SelectedDateComp/>
            <hr/>
            <TitleComp/>
            <hr/>
            <CalenderBoxComp/>
        </div>
        <div id="top-movies">
            <MovieList movies={moviesOnDate()}/>
        </div>
    </section>
}

//compare the selected date and matches with the "database"(movieData)" and returns the one who are matched
function moviesOnDate() {
    let tmpArray = [];
    for (let i = 0; i < movieArray.length; i++) {
        for (let j = 0; j < movieArray[i].date.length; j++) {
            if (movieArray[i].date[j] === dateInNumbers.date) {
                tmpArray.push(movieArray[i]);
            }
        }
    }
    return tmpArray;
}

//will set the string "dateString", composed of the date like this: date / month - weekday
function setDateString(inDate, inMonth, inWeekDay) {
    dateInNumbers.date = inDate;
    dateInNumbers.month = inMonth;
    dateInNumbers.weekDay = inWeekDay;
    dateString = dateInNumbers.date + " / " + dateInNumbers.month + "-" + dateInNumbers.weekDay;
}

//calculates the current date and returns it in an array
function calculateCurrentDate() {
    let tmpArray = [];
    for (let i = 0; i < daysForward; i++) {
        let today = new Date();
        let dateLimit = new Date(new Date().setDate(today.getDate() + i));
        let object = {};
        object.day = dateLimit.getDate();
        object.month = dateLimit.getMonth() + 1;
        object.year = dateLimit.getFullYear();
        object.dayName = dateLimit.getDay();
        object.id = i;
        tmpArray.push(object);
    }
    return tmpArray;
}

function returnDayName(inIndex) {
    return daysInWeek[inIndex];
}