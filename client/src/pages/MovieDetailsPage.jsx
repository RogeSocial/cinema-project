import { useParams } from 'react-router-dom';
import MovieInfo from "../components/MovieInfo.jsx";
import ChooseShow from "../components/ChooseShow.jsx";
import { movieArray } from '../components/movie-data.js';
import '../styles/movie-details.css'
import '../styles/home.css'

export default function MovieDetailsPage() {
    const movieId = useParams().id
    const movie = movieArray.find(movie => movie.id == movieId)

    return (
        <div style={{ background: `url(${movie.background})`, backgroundSize: 'cover' }} className="movie-details-page">
            <div className={"content-frame"}>
                <MovieInfo currentMovie={movie} />
                <ChooseShow currentMovie={movie} />
            </div>
        </div>
    );
}