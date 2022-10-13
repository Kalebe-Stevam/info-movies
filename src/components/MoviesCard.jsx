import { Link } from "react-router-dom"

import Movie from "../pages/Movie"

import "./MoviesCard.css"

const imgURL = import.meta.env.VITE_IMG

const MoviesCard = ({movie, showlink=true}) => {

    return (
        <div className="all-movie">
            <img src={`${imgURL}${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <Link to={"/movie/"+movie.id}>Detalhes</Link>
        </div>
    )
}

export default MoviesCard