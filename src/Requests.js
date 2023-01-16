const key = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRatedMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    RequestLatestMovies: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestPopularSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRatedSeries:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    RequestLatestSeries: `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,
}

export default requests;