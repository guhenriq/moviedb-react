import { CardMovie } from "../CardMovie/CardMovie"

export function TopFiveRatedMovies({ movies }) {
    return (
        <>
            <p className="text-white text-center mt-16 text-2xl font-semibold">Filmes Mais Votados</p>
            <div className="flex flex-col justify-center lg:flex items-center lg:flex-row lg:justify-center gap-4 w-full mt-12">
                {movies.map((movie, index) => {
                    return <CardMovie style={`w-4/6 lg:w-1/6`} key={index} movie={movie}/>
                })}
            </div>
        </>
    )
}