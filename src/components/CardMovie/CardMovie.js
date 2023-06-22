export function CardMovie({ movie }) {
    return (
        <div className="w-4/6 lg:w-1/6 h-autorounded-lg">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-full h-auto rounded-lg hover:opacity-75 hover:transition-opacity hover:cursor-pointer"/>
        </div>
    )
}