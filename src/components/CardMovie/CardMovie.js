export function CardMovie({ movie }) {

    const formatVoteAverage = (movie) => {
        let { vote_average } = movie

        let currentAverage = vote_average
                                .toString()
                                .replace(".", "")

        return currentAverage.concat("%")
    } 
    
    return (
        <div className="flex flex-col justify-center items-center w-4/6 lg:w-1/6 h-autorounded-lg ">
            <a href="/">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-full h-auto rounded-lg"/>
            </a>
            <span className="relative bottom-5 w-10 h-10 bg-stone-900 text-white p-5 rounded-full flex items-center justify-center font-semibold border-[#255C99] border-4">
                {formatVoteAverage(movie)}
            </span>
        </div>
    )
}