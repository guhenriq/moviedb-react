import { useEffect, useState } from "react"
import { Header } from "../components/layout/Header/Header"
import { Footer } from "../components/layout/Footer/Footer"
import { getPopularMovies, getPopularTvSeries, getTopRatedMovies } from "../api/api"
import { TopFivePopularMovies } from "../components/Movies/TopFivePopularMovies"
import { TopFiveRatedMovies } from "../components/Movies/TopFiveRatedMovies"
import { TopFivePopularSeries } from "../components/Movies/TopFivePopularSeries"

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
                <TopFivePopularMovies movies={topFivePopularMovies}/>
                <TopFiveRatedMovies movies={topFiveRatedMovies}/>
                <TopFivePopularSeries series={topFivepopularTvSeries}/>
            </div>
            <Footer />
        </>
    )
}