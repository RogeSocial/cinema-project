import { useContext } from "react";
import { useParams } from 'react-router-dom';
import GlobalContext from "../GlobalContext.jsx";
import MovieInfo from "../components/MovieInfo.jsx";
import ChooseShow from "../components/ChooseShow.jsx";
import '../styles/movie-details.css'
import '../styles/home.css'

export default function MovieDetailsPage() {
    const { movies } = useContext(GlobalContext)

    const movieId = useParams().id

    let index;

    for (let i = 0; i < movies.length; i++) {
        if (movieId === movies[i].id.toString()) {
            index = i;
        }
    }

    return <div style={{ background: `url(${movies[index].background.toString()})`, backgroundSize: 'cover' }}
        className="movie-details-page">
        <div className={"content-frame"}>
            <MovieInfo currentMovie={movies[index]} />
            <ChooseShow currentMovie={movies[index]} />
        </div>
    </div>
}

