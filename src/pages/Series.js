import { Header } from "../components/layout/Header/Header"
import { Spinner } from "../components/Spinner/Spinner"
import { AllMoviesAndSeries } from "../components/Movies/AllMoviesAndSeries"
import { getPopularTvSeries } from "../api/api"
import { useEffect, useState } from "react"

export function Series() {

    const [popularSeries, setPopularSeries] = useState([])
    const [seriesLength, setSeriesLength] = useState(0)
    const [seriesPage, setSeriesPage] = useState(1)
    const [load, setLoad] = useState(false)

    const getAllPopularSeries = async () => {
        const response = await getPopularTvSeries(seriesPage)
        const series = response.results
        
        setPopularSeries([...popularSeries, ...series])
        setSeriesLength(seriesLength + series.length)
    }

    useEffect(() => {
        getAllPopularSeries()
        // eslint-disable-next-line
    }, [seriesPage])
    
    document.body.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLoad(true)
            setTimeout(() => {
                setLoad(false)
                setSeriesPage(seriesPage + 1)
            }, 1500)
            
        }
    }

    return (
        <>
            <Header />
            <AllMoviesAndSeries data={popularSeries} dataLength={seriesLength} />
            <Spinner status={load}/>
        </>
    )
}