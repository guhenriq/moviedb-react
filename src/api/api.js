const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

export async function getPopularMovies(page) {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
    const json = await response.json()
    return json
}

export async function getPopularTvSeries() {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`)
    const json = await response.json()
    return json
}

export async function getTopRatedMovies() {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
    const json = await response.json()
    return json
}


