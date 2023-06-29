import { CardMovie } from "../CardMovie/CardMovie"

export function AllMoviesAndSeries({ data, dataLength }) {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-60">
            <div className="w-11/12 flex">
                <p className="text-2xl text-white">Resultados Exibidos: {dataLength}</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-normal gap-5 w-11/12 mt-10">
                {data.map((movie, index) => {
                    return <CardMovie key={index} movie={movie} style={`w-2/6 lg:w-44`}/>
                })}
            </div>
        </div>
    )
}