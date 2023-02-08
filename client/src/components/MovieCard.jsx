import {calculateDifferenceInDays, returnDayName, showsMovieLengthOnThisPage} from "./Utilities";
import {Link} from "react-router-dom";

export default function ({movie, startDate, endDate}) {
    return (
        <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
            <div className="movie-card">
                <div style={{color: "white"}}>Showing on dates</div>
                {calenderDay(movie, "/tickets")}
                {/*{showCalendarCard(movie, "/tickets")}*/}
                <h3> {movie.title} </h3>
                <img src={movie.image} alt={"poster"}/>
                <h4>{showsMovieLengthOnThisPage(movie, "/tickets")}</h4>
            </div>
        </Link>
    );

    function calenderDay(movie, page) {
        if (window.location.pathname === page) {
            return (
                <div className="calendar-card-frame">
                    <p>{matching(movie)}</p>
                </div>
            );
        } else {
            return null;
        }
    }

    function matching(movie) {
        let dateArray = movie.dates.split(", ");
        let array = [];
        /*console.log("word: " + word);*/
        let differenceInDays = calculateDifferenceInDays(startDate, endDate);
        console.log("differenceInDays: " + differenceInDays);
        for (let i = 0; i < dateArray.length; i++) {
            for (let j = 0; j < differenceInDays + 1; j++) {
                let tmpDay = new Date(startDate);
                tmpDay.setDate(tmpDay.getDate() + j);
                if (parseInt(dateArray[i]) === tmpDay.getDate()) {
                    /*console.log("PUSHING");*/
                    array.push(tmpDay);
                    console.log("array: " + array);

                }
            }
        }

        let string = "";
        for (let i = 0; i < array.length; i++) {
            string += array[i].getDate() + " / ";
            string += (array[i].getMonth() + 1)  + " - ";
            string += returnDayName(array[i].getDay());
        }
        return string;
    }

    function showCalendarCard(movie, page) {
        if (window.location.pathname === page) {
            return (
                <div className="calendar-card-frame">
                    <p>{matchMovieDates(movie) + " --- " + movie.date}</p>
                </div>
            );
        } else {
            return null;
        }
    }

    function matchMovieDates(movie) {
        let day;

        for (let i = 0; i < movie.date.length; ++i) {
            if (movie.date[i] === startDate.getDate()) {

                return (
                    translateDay(startDate.getDay(), day) +
                    " (" +
                    startDate.getDate() +
                    "/" +
                    (startDate.getMonth() + 1) +
                    ")"
                );
            }
            if (
                movie.date[i] >= startDate.getDate() &&
                movie.date[i] <= endDate.getDate()
            ) {
                let difference = parseInt(movie.date[i] - startDate.getDate());
                return (
                    translateDay(startDate.getDay() + difference, day) +
                    " (" +
                    movie.date[i] +
                    "/" +
                    (startDate.getMonth() + 1) +
                    ")"
                );
            }
        }
    }
}

function translateDay(date, day) {
    if (date > 7) {
        date = date - 7;
    }
    console.log(date);
    switch (date) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    return day;
}
