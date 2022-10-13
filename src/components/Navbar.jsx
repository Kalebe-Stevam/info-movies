import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { GiFilmProjector } from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai"
import { BsList } from "react-icons/bs"

import "./Navbar.css"


const Navbar = () => {
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!searchValue)

            navigate(`search?q=${searchValue}`) // redirect
        console.log(searchValue)
        setSearchValue("")
    }

    return (
        <nav>
            <div className="left">
                <Link to="/">
                    <GiFilmProjector />
                    <h2>InfoMovies</h2>
                </Link>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Busque por um filme" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
                    <button className="btn-search" type="submit"><AiOutlineSearch /></button>
                </form>
                <Link><BsList className="list" /></Link>
            </div>
        </nav>
    )
}
export default Navbar