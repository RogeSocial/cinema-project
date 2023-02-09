import {useParams} from 'react-router-dom';
import MovieInfo from "../components/MovieInfo.jsx";
import ChooseShow from "../components/ChooseShow.jsx";
import '../styles/movie-details.css'
import '../styles/home.css'
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function MovieDetailsPage() {
    const {movies} = useContext(GlobalContext)
    const movieId = useParams().id
    const movie = movies[movieId - 1]

    let found = movies.find(element => element > movieId);

    console.log(found);

    return <div style={{background: `url(${movie.background.toString()})`, backgroundSize: 'cover'}}
                className="movie-details-page">
        <div className={"content-frame"}>
            <MovieInfo currentMovie={movie}/>
            <ChooseShow currentMovie={movie}/>
        </div>
    </div>
}