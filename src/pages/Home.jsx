import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main/>
    <Row rowID='row1' title='🔥 Popular Movies' fetchURL={requests.requestPopularMovies} urlType='movie'/>
    <Row rowID='row2' title='🔥 Popular Series' fetchURL={requests.requestPopularSeries} urlType='tv'/>
    <Row rowID='row3' title='🤩 Top Rated Movies' fetchURL={requests.requestTopRatedMovies} urlType='movie'/>
    <Row rowID='row4' title='🤩 Top Rated Series' fetchURL={requests.requestTopRatedSeries} urlType='tv'/>
    </>

  )
}

export default Home