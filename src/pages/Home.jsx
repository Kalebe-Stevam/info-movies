import { useState, useEffect } from "react"
import MoviesCard from "../components/MoviesCard"

import "./Home.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {    
    const [topMovies, setTopMovies] = useState([])

    const getTopRetedMovies= async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
        console.log(data)
    }

    useEffect(()=>{
        const topRatedURL = moviesURL+"top_rated?"+apiKey
        getTopRetedMovies(topRatedURL)
    },[])

    return (
        <div>
            <h2 className="top">Top Movies</h2>
            <div className="movie-container">
                {topMovies.length === 0 && <h3>Loading...</h3>}
                {topMovies.length > 0 && topMovies.map((movie)=>{
                    return <MoviesCard key={movie.id} movie={movie} />
                })}
             
            </div>
        </div>
    )
}

export default Home