import { useEffect, useState } from "react"
import { Header } from "../components/layout/Header/Header"
import { getPopularMovies } from "../api/api"

export function Home() {

    const [popularMovies, setPopularMovies] = useState([])

    const getAllPopularMovies = async () => {
        const movies = await getPopularMovies()
        setPopularMovies(movies)    
    }

    useEffect(() => {
        getAllPopularMovies()
    }, [])

    console.log(popularMovies)

    return (
        <Header />
    )
}