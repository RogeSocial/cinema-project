import "../CSS/calender.css"
import {useEffect, useRef, useState} from "react";
let dates = [];
const daysForward = 21;
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

    return <section>
        <h2>Calender</h2>
        <p>Here you will find a calender</p>

        <div ref={calenderRef}>
            <div className="calender-dropdown" onClick={()=>{setOpen(!open)}}>Pick a Date</div>
                <div className={`calender-dropdown-trigger ${open? 'active' : 'inactive'}`}>
                    {calculateCurrentDate()}
                    <ul>
                    {dates.map((item) =>
                        <li className={"calender-list"} key={dates.id}><a href="#">{item.day} / {item.month} - {returnDayName(item.dayName)}</a></li>
                    )}
                    </ul>
                </div>
            </div>
        </section>
}

//Sorting the array by date (numbers)
function sortByDate(inArray){
    for(let i=0; i<inArray.length - 1; i++){
        if(inArray[i].date > inArray[i+1].date){
            swap(movies, i, i+1);
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
            swap(movies, i, i + 1);
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