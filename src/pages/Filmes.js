import { useEffect, useState } from "react"
import { getPopularMovies } from "../api/api"
import { Header } from "../components/layout/Header/Header"
import { Spinner } from "../components/Spinner/Spinner"
import { AllMoviesAndSeries } from "../components/Movies/AllMoviesAndSeries"

export function Filmes() {

    const [popularMovies, setPopularMovies] = useState([])
    const [moviesLength, setmoviesLength] = useState(0)
    const [moviesPage, setMoviesPage] = useState(1)
    const [load, setLoad] = useState(false)

    const getAllPopularMovies = async () => {
        const response = await getPopularMovies(moviesPage)
        const movies = response.results

        setPopularMovies([...popularMovies, ...movies])
        setmoviesLength(moviesLength + movies.length)
    }

    useEffect(() => {
        getAllPopularMovies()
        // eslint-disable-next-line
    }, [moviesPage])

    document.body.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLoad(true)
            setTimeout(() => {
                setLoad(false)
                setMoviesPage(moviesPage + 1)
            }, 1500)
            
        }
    }

    return (
        <>
            <Header />
            <AllMoviesAndSeries data={popularMovies} dataLength={moviesLength} />
            <Spinner status={load}/>
        </>
    )
}