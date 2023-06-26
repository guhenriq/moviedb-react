import { useEffect, useState } from "react"
import { Header } from "../components/layout/Header/Header"
import { CardMovie } from "../components/CardMovie/CardMovie"
import { getPopularMovies, getPopularTvSeries, getTopRatedMovies } from "../api/api"

export function Home() {

    const [topFivePopularMovies, setTopFivePopularMovies] = useState([])
    const [topFivepopularTvSeries, setTopFivepopularTvSeries] = useState([])
    const [topFiveRatedMovies, setTopFiveRatedMovies] = useState([])

    const getTopFivePopularMovies = async () => {
        const movies = await getPopularMovies()
        const results = movies.results
        const topFive = results.slice(0, 5)
        
        setTopFivePopularMovies(topFive)    
    }

    const getTopFivePopularTvSeries = async () => {
        const tvSeries = await getPopularTvSeries()
        const results = tvSeries.results
        const topFive = results.slice(0, 5)
        
        setTopFivepopularTvSeries(topFive)    
    }

    const getTopFiveRatedMovies = async () => {
        const ratedMovies = await getTopRatedMovies()
        const results = ratedMovies.results
        const topFive = results.slice(0, 5)

        setTopFiveRatedMovies(topFive)
    }

    useEffect(() => {
        getTopFivePopularMovies()
        getTopFivePopularTvSeries()
        getTopFiveRatedMovies()
    }, [])

    return (
        <>
            <Header />
            <div className="w-full flex flex-col justify-center items-center mt-40">
                <p className="text-white text-center mt-16 text-2xl font-semibold">Filmes Populares</p>
                <div className="flex flex-col justify-center lg:flex items-center lg:flex-row lg:justify-center gap-4 w-full mt-12">
                    {topFivePopularMovies.map((movie, index) => {
                        return <CardMovie key={index} movie={movie}/>
                    })}
                </div>
                <p className="text-white text-center mt-16 text-2xl font-semibold">Filmes Mais Votados</p>
                <div className="flex flex-col justify-center lg:flex items-center lg:flex-row lg:justify-center gap-4 w-full mt-12">
                    {topFiveRatedMovies.map((serie, index) => {
                        return <CardMovie key={index} movie={serie}/>
                    })}
                </div>
                <p className="text-white text-center mt-16 text-2xl font-semibold">Series Populares</p>
                <div className="flex flex-col justify-center lg:flex items-center lg:flex-row lg:justify-center gap-4 w-full mt-12">
                    {topFivepopularTvSeries.map((serie, index) => {
                        return <CardMovie key={index} movie={serie}/>
                    })}
                </div>
            </div>
        </>
    )
}