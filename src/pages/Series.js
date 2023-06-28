import { Header } from "../components/layout/Header/Header"
import { Footer } from "../components/layout/Footer/Footer"
import { AllMoviesAndSeries } from "../components/Movies/AllMoviesAndSeries"
import { getPopularTvSeries } from "../api/api"
import { useEffect, useState } from "react"

export function Series() {

    const [popularSeries, setPopularSeries] = useState([])
    const [seriesLength, setSeriesLength] = useState(0)
    const [seriesPage, setSeriesPage] = useState(1)

    const getAllPopularSeries = async () => {
        const response = await getPopularTvSeries()
        const series = response.results
        
        setPopularSeries([...popularSeries, ...series])
        setSeriesLength(seriesLength + series.length)
    }

    const nextMoviePage = () => {
        setSeriesPage(seriesPage + 1)
    }

    useEffect(() => {
        getAllPopularSeries()
        // eslint-disable-next-line
    }, [seriesPage])

    return (
        <>
            <Header />
            <AllMoviesAndSeries data={popularSeries} dataLength={seriesLength} nextMoviePage={nextMoviePage}/>
            <Footer />
        </>
    )
}