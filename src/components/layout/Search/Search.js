export function Search() {
    return (
        <div className="w-full flex items-center h-20 bg-[#262626]">
            <div className="relative w-full flex justify-center gap-2">
                <input type="text" placeholder="Buscar filmes e séries" className="lg:w-4/12 h-10 rounded-md bg-[#474747] px-5" />
                <button type="submit" className="rounded-md bg-[#255C99] w-20 font-semibold hover:bg-sky-600 text-white" >Buscar</button>
            </div>
        </div>
    )
}