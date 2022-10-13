import { useParams, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import "./Movie.css"

import { BsCashCoin, BsGraphUp } from "react-icons/bs"
import { BiTimeFive } from "react-icons/bi"

const apiKey = import.meta.env.VITE_API_KEY
const apiURL = import.meta.env.VITE_API
const imgURL = import.meta.env.VITE_IMG

const Movie = () => {
    const [movie, setMovie] = useState([])
    const { id } = useParams()

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
        console.log(data)
    }

    useEffect(() => {
        const movieUrl = apiURL + id + "?" + apiKey
        getMovie(movieUrl)
    }, [])

    

    return (
        <div className="container">
            <img src={`${imgURL}${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
                <div className="info">
                    <BsCashCoin />Orçamento:
                    <p>{movie.budget}</p>
                </div>
                <div className="info">
                    <BsGraphUp />Receita:
                    <p>{movie.revenue}</p>
                </div>
                <div className="info">
                    <BiTimeFive />Duração:
                    <p>{movie.runtime} minutos</p>
                </div>
                <div className="info Description">
                    Descrição:
                    <p>{movie.overview}</p>
                </div>
            </div>
    )
}

export default Movie