import { useEffect, useState } from "react"
import { getPopularMovies } from "../api/api"
// import { CardMovie } from "../components/CardMovie/CardMovie"
import { Header } from "../components/layout/Header/Header"
import { Footer } from "../components/layout/Footer/Footer"
import { AllMoviesAndSeries } from "../components/Movies/AllMoviesAndSeries"

export function Filmes() {

    const [popularMovies, setPopularMovies] = useState([])
    const [moviesLength, setmoviesLength] = useState(0)
    const [moviesPage, setMoviesPage] = useState(1)

    const getAllPopularMovies = async () => {
        const response = await getPopularMovies(moviesPage)
        const movies = response.results

        setPopularMovies([...popularMovies, ...movies])
        setmoviesLength(moviesLength + movies.length)
    }

    const nextMoviePage = () => {
        setMoviesPage(moviesPage + 1)
    }

    useEffect(() => {
        getAllPopularMovies()
        // eslint-disable-next-line
    }, [moviesPage])

    return (
        <>
            <Header />
            <AllMoviesAndSeries data={popularMovies} dataLength={moviesLength} nextMoviePage={nextMoviePage}/>
            <Footer />
        </>
    )
}