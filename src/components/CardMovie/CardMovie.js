export function CardMovie({ movie, style }) {

    const formatVoteAverage = (movie) => {
        let { vote_average } = movie

        let currentAverage = vote_average
                                .toString()
                                .replace(".", "")

        if (currentAverage.length === 1){
            return currentAverage.concat("0%")
        }

        return currentAverage.concat("%")
    } 
    
    return (
        <div className={`flex flex-col justify-center items-center h-autorounded-lg ${style}`}>
            <a href="/">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-full h-auto rounded-lg"/>
            </a>
            <span className="relative bottom-5 w-10 h-10 bg-stone-900 text-white p-5 rounded-full flex items-center justify-center font-semibold text-sm border-[#255C99] border-4">
                {formatVoteAverage(movie)}
            </span>
        </div>
    )
}