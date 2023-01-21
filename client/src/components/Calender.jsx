import "../CSS/calender.css"
import "../CSS/movies.css"
import {useEffect, useRef, useState} from "react";
import {movieArray} from "./MovieData.jsx";
import movieList from "./MovieList.jsx";
import MovieList from "./MovieList.jsx";

let dates = [];
const daysForward = 21;
let dateString = null;
let movies = [
    {
        title: "Dmovie",
        date: 2,
        info: "this is about movie 1"
    },
    {
        title: "Cmovie",
        date: 4,
        info: "this is about movie 2"
    },
    {
        title: "Amovie",
        date: 5,
        info: "this is about movie 3"
    },
    {
        title: "Emovie",
        date: 1,
        info: "this is about movie 4"
    },
    {
        title: "Bmovie",
        date: 3,
        info: "this is about movie 5"
    }
]

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
                            <div onClick={function (e){getDate(item.day, item.month, returnDayName(item.dayName))}}>
                                {item.day} / {item.month} - {returnDayName(item.dayName)}
                            </div>
                        </div>
                    )}
                    </ul>
                </div>
            </div>
            {/*<MovieList movieList={}/>*/}
            {moviesOnDate()}
            </section>
}

function getDate(day, month, dayName) {
    let a=day;
    let b=month;
    let c=dayName;
    {dateString = a + " / " + b + "-" + c }
    console.log("day:" + a + " month:" + b + " dayname:" + c);
}

function moviesOnDate(){
    return (
        <>
        {movieArray.map((item) =>
            <div className="movie-list" key={item.id}>
                <h3>{item.title}</h3>
                {console.log("hej")}
                <img src={item.image} alt="a picture of a movie"/>
            </div>
        )}
        </>
    );
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
        dates.push(object);
    }
}

//returns the name of the date, like "Monday", etc
function returnDayName(inIndex){
    return daysInWeek[inIndex];
}

{/*keep for now, might use somehow later
                    {sortByDate(movies)}
                    {movies.map((item, index) =>
                        <li key={movies.id}><a href="#">date: {item.date}</a></li>
                    )}

                    keep for now, might use somehow later
                    {sortByLetter(movies)}
                    {movies.map((item, index) =>
                        <li><a href="#">title: {item.title}</a></li>
                    )}*/}