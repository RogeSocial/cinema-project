import "../CSS/calender.css"
import {useEffect, useRef, useState} from "react";
import {movieArray} from "./MovieData.jsx";

let dates = [];
const daysForward = 21;
let dateString = null;
let dateInNumbers = [{date:null, month:null, weekDay:null}];

let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function() {
    {dates=[]}
    const [open, setOpen] = useState(false);

    let calenderRef = useRef();

    useEffect(() => {
        let handler = (e) =>{
            if(!calenderRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
        });

    return <section className="calender">
            <h2>Calender</h2>
            <p>Here you will find a calender</p>

            <div ref={calenderRef}>
            <div className="calender-dropdown" onClick={()=>{setOpen(!open)}}>Pick a Date</div>
                <div>{dateString}</div>
                <div className={`calender-dropdown-trigger ${open? 'active' : 'inactive'}`}>
                    {calculateCurrentDate()}
                    <ul onClick={()=>{setOpen(!open)}}>
                    {dates.map((item) =>
                        <div className="calender-list" key={dates.id}>
                            <div onClick={function (e){setDate(item.day, item.month, returnDayName(item.dayName))}}>
                                {item.day} / {item.month} - {returnDayName(item.dayName)}
                            </div>
                        </div>
                    )}
                    </ul>
                </div>
            </div>
        <MoviesOnDate/>
            </section>
}

function setDate(inDate, inMonth, inWeekDay) {
    dateInNumbers.date = inDate;
    dateInNumbers.month = inMonth;
    dateInNumbers.weekDay = inWeekDay;
    dateString = dateInNumbers.date + " / " + dateInNumbers.month + "-" + dateInNumbers.weekDay;
    console.log("day:" + dateInNumbers.date + " month:" + dateInNumbers.month + " weekDay:" + dateInNumbers.weekDay);
}

//compare the selected date and matches with the "database"(movieData)" and returns the one who are matched
function MoviesOnDate(){
    console.log("dateInnumbers.date " + dateInNumbers.date);
    let tmpArray = [];
    for(let i = 0; i < movieArray.length; i++){
        for(let j = 0; j < movieArray[i].date.length; j++) {
            if (movieArray[i].date[j] === dateInNumbers.date) {
                console.log("its a match " + movieArray[i].id);
                tmpArray.push(movieArray[i]);
            }
        }
    }
    console.log("tmpArray length: " + tmpArray.length);
    return(
        <>
        {tmpArray.map((item) =>
            <div className="movie-list" key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt="a picture of a movie"/>
            </div>
        )}
        </>
    );
}

//Calculates the dates and puts it in the array "dates"
function calculateCurrentDate(){
    for(let i = 0; i < daysForward; i++){
        let today = new Date();
        let dateLimit = new Date(new Date().setDate(today.getDate() + i));
        let object = {};
        object.day = dateLimit.getDate();
        object.month = dateLimit.getMonth() + 1;
        object.year = dateLimit.getFullYear();
        object.dayName = dateLimit.getDay();
        object.id = i;
        dates.push(object);
    }
}

//returns the name of the date, like "Monday", etc
function returnDayName(inIndex){
    return daysInWeek[inIndex];
}

//Sorting the array by date (numbers)
function sortByDate(inArray){
    for(let i=0; i<inArray.length - 1; i++){
        if(inArray[i].date > inArray[i+1].date){
            swap(movieArray, i, i+1);
        }
    }
}

//swap the two indexes
function swap(inArray, index1, index2){
    let tmp = inArray[index1];
    inArray[index1] = inArray[index2];
    inArray[index2] = tmp;
}

//sorting the array by letter(alphabetically)
function sortByLetter(inArray) {
    for (let i = 0; i < inArray.length - 1; i++) {
        if (inArray[i].title > inArray[i + 1].title) {
            swap(movieArray, i, i + 1);
        }
    }
}

