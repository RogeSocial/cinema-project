import "../CSS/calender.css"
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

export default function() {
    {dates=[]}
    return <section>
            <h2>Calender</h2>
            <p>Here you will find a calender</p>
            <div className="dropdown">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"></input>
                <label htmlFor="my-dropdown" data-toggle="dropdown">Pick a day </label>
                <ul>
                    {calculateCurrentDate()}
                    {console.log("dates.length: " + dates.length)}
                    {dates.map((item, index) =>
                        <li key={dates.id}><a href="#">{item.day} - {item.month} - {item.year}</a></li>
                        )}

                    {/*{sortByDate(movies)}
                    {movies.map((item, index) =>
                        <li key={movies.id}><a href="#">date: {item.date}</a></li>
                    )}*/}

                    {/*{sortByLetter(movies)}
                    {movies.map((item, index) =>
                        <li><a href="#">title: {item.title}</a></li>
                    )}*/}
                </ul>
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

function calculateCurrentDate(){
    for(let i = 0; i < daysForward; i++){
        let today = new Date();
        let dateLimit = new Date(new Date().setDate(today.getDate() + i));
        let object = {};
        object.day = dateLimit.getDate();
        object.month = dateLimit.getMonth() + 1;
        object.year = dateLimit.getFullYear();
        /*let day = dateLimit.getDate();
        let month = dateLimit.getMonth() + 1;
        let year = dateLimit.getFullYear();*/
        //let currentDate = `${day}-${month}-${year}`;
        dates.push(object);
    }
    for(let i = 0; i < dates.length; i++){
        console.log("date day: " + dates[i].day);
    }
}