import {Link} from "react-router-dom";
import {useState} from "react";

export default function ({movie}) {
    const [movieTitleOpacity, setMovieTitleOpacity] = useState(1);
    const [movieImgDarken, setMovieImgDarken] = useState(true)
    return (
        <Link to={`/movies/${movie.id}/${movie["slug"]}`} key={movie.id}>
            <div onMouseEnter={() => {
                setMovieTitleOpacity(0);
                setMovieImgDarken(false);
            }}
                 onMouseLeave={() => {
                     setMovieTitleOpacity(1);
                     setMovieImgDarken(true);
                 }}
                 className="movie-card">
                <h3 style={{ opacity: movieTitleOpacity, transition: 'opacity 1s' }} className='movie-title'> {movie.title} </h3>
                <div className={`movieImageContainer ${movieImgDarken ? 'darken' : ''}`}>
                    <img src={movie.image} alt={"poster"}/>
                </div>
            </div>
        </Link>
    );
}
