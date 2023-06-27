import { CardMovie } from "../CardMovie/CardMovie"

export function TopFivePopularSeries({ series }) {
    return (
        <>
            <p className="text-white text-center mt-16 text-2xl font-semibold">Series Populares</p>
            <div className="flex flex-col justify-center lg:flex items-center lg:flex-row lg:justify-center gap-4 w-full mt-12">
                {series.map((serie, index) => {
                    return <CardMovie style={`w-4/6 lg:w-1/6`} key={index} movie={serie}/>
                })}
            </div>
        </>
    )
}