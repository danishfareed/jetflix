import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main/>
    <Row title='🔥 Popular Movies' fetchURL={requests.requestPopularMovies}/>
    <Row title='🔥 Popular Series' fetchURL={requests.requestPopularSeries}/>
    <Row title='🤩 Top Rated Movies' fetchURL={requests.requestTopRatedMovies}/>
    <Row title='🤩 Top Rated Series' fetchURL={requests.requestTopRatedSeries}/>
    </>

  )
}

export default Home