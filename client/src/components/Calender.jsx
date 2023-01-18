import "../CSS/calender.css"

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

    return <section>
            <h2>Calender</h2>
            <p>Here you will find a calender</p>
            <div className="dropdown">
                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"></input>
                <label htmlFor="my-dropdown" data-toggle="dropdown">Pick a day</label>
                <ul>
                    {sortByDate(movies)}
                    {movies.map((item, index) =>
                        <li key={movies.id}><a href="#">date: {item.date}</a></li>
                    )}

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
    for(let i=0; i<inArray.length - 1; i++){
        if(inArray[i].title > inArray[i+1].title){
            swap(movies, i, i+1);
        }
    }
}