import {
    calculateDifferenceInDays,
    returnDayName,
    showsMovieLength,
} from "./Utilities";
import {Link} from "react-router-dom";

export default function ({movie, startDate, endDate}) {
    return (
        <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
            <div className="calendar-card">
                <img src={movie.image} alt={"poster"}/>
                <aside className="calendar-card-label">
                    {calenderCard(movie)}
                </aside>
            </div>
        </Link>
    );

    function calenderCard(movie) {
        return (
            <ul>
                <h3> {movie.title} </h3>
                <h4>{showsMovieLength(movie)}</h4>
                {matching(movie).map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        );
    }

    function matching(movie) {
        let dateArray = movie.dates.split(", ");
        let array = [];
        let differenceInDays = calculateDifferenceInDays(startDate, endDate);

        for (let i = 0; i < dateArray.length; i++) {
            for (let j = 0; j < differenceInDays + 1; j++) {
                let tmpDay = new Date(startDate);
                tmpDay.setDate(tmpDay.getDate() + j);
                if (parseInt(dateArray[i]) === tmpDay.getDate()) {
                    array.push(tmpDay);
                }
            }
        }

        let stringArray = [];
        for (let i = 0; i < array.length; i++) {
            let string = "";
            string += (array[i].getDate() + " / " + (array[i].getMonth() + 1) + " - " + returnDayName(array[i].getDay()));
            stringArray.push(string);
        }
        return stringArray;
    }
}
