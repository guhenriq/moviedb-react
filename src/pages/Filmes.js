import { useEffect, useState } from "react"
import { getPopularMovies } from "../api/api"
import { CardMovie } from "../components/CardMovie/CardMovie"
import { Header } from "../components/layout/Header/Header"
import { Footer } from "../components/layout/Footer/Footer"
import { MdOutlineExpandMore } from "react-icons/md"

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
            <div className="flex flex-col justify-center items-center w-full mt-60">
                <div className="w-11/12 flex">
                    <p className="text-2xl text-white">Resultados Exibidos: {moviesLength}</p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-normal gap-5 w-11/12 mt-10">
                    {popularMovies.map((movie, index) => {
                        return <CardMovie key={index} movie={movie} style={`w-2/6 lg:w-44`}/>
                    })}
                </div>
                <div className="mt-8 flex w-full justify-center">
                    <button type="button" onClick={() => nextMoviePage()}><MdOutlineExpandMore className="text-4xl text-white hover:text-slate-500"/></button>
                </div>
            </div>
            <Footer />
        </>
    )
}