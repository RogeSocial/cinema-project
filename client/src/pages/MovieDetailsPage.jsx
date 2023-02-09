import {useContext} from "react";
import {useParams} from 'react-router-dom';
import GlobalContext from "../GlobalContext.jsx";
import MovieInfo from "../components/MovieInfo.jsx";
import ChooseShow from "../components/ChooseShow.jsx";
import '../styles/movie-details.css'
import '../styles/home.css'

export default function MovieDetailsPage() {
    const {movies} = useContext(GlobalContext)
    const movieId = useParams().id - 1
    const movie = movies[movieId]

    if (movie) {
        return <div style={{background: `url(${movie.background.toString()})`, backgroundSize: 'cover'}}
                    className="movie-details-page">
            <div className={"content-frame"}>
                <MovieInfo currentMovie={movie}/>
                <ChooseShow currentMovie={movie}/>
            </div>
        </div>
    }
}