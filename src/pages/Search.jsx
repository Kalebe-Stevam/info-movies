import { useState, useEffect } from "react"
import { useSearchParams  } from "react-router-dom"

import MoviesCard from "../components/MoviesCard"

import "./Search.css"

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY 

const Search = () => {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    
    const query = searchParams.get("q")

    const getSearchMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
        console.log(data)
    }

    useEffect(()=> {
        const urlSearch = searchUrl+"?"+apiKey+"&query="+query
        getSearchMovies(urlSearch)
    },[query])

    return (
        <div>
            <h3>Resultados para: </h3><h3 className="query">{query}</h3>
            {movies.length === 0 && <p>Carregando... <br/>Caso esteja demorando recarregue a página</p>}
            <div className="container-movies">
            {movies.length > 0 && movies.map((movie)=>{ return <MoviesCard movie={movie}/>})}
            </div>
        </div>
    )
}

export default Search