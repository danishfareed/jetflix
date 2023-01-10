const key = '348d8eff9d6769d3f097a43db20f2509';

const requests = {
    requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRatedMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    RequestLatestMovies: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestPopularSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRatedSeries:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    RequestLatestSeries: `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,
}

export default requests;