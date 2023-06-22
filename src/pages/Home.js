import { useEffect, useState } from "react"
import { Header } from "../components/layout/Header/Header"
import { CardMovie } from "../components/CardMovie/CardMovie"
import { getPopularMovies } from "../api/api"

export function Home() {

    const [topFivepopularMovies, setTopFivePopularMovies] = useState([])

    const getTopFivePopularMovies = async () => {
        const movies = await getPopularMovies()
        const results = movies.results
        const topFive = results.slice(0, 5)
        
        setTopFivePopularMovies(topFive)    
    }

    useEffect(() => {
        getTopFivePopularMovies()
    }, [])

    return (
        <>
            <Header />
            <div className="w-full flex flex-col justify-center items-center mt-40">
                <p className="text-white text-center mt-16 text-2xl font-semibold">Filmes Populares</p>
                <div className="flex flex-col justify-center lg:flex items-center lg:flex-row lg:justify-center gap-4 w-full mt-12">
                    {topFivepopularMovies.map((movie, index) => {
                        return <CardMovie key={index} movie={movie}/>
                    })}
                </div>
            </div>
        </>
    )
}