import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import requests from '../Requests';

const Main = () => {
    const [bannerMovies, setBannerMovies] = useState([]);

    let bannerItem = [];

    /* api call for banner movie*/
  const {data: getMoviesData, isLoading: isMoviesLoading, isSuccess: isMoviesSuccess } = useQuery(
    ['getBannerMovie'], 
    async () => {
      try{
          const { data } = await axios.get(requests.requestPopularMovies);
          setBannerMovies(data?.results);
          return data?.results;
      }
      catch (error) { 
          console.log("Movies Fetch error",error.data.message);
      }
    },
    {cacheTime: 3900000,}
    );
        if(isMoviesSuccess){
            bannerItem = bannerMovies[Math.floor(Math.random()*bannerMovies?.length)];
        }         

    const renderBanner = ()=>{
      return(
        <>
    <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full' >
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${bannerItem?.backdrop_path}`}  alt={bannerItem?.title}/>
            <div className='absolute w-full top-[35%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{bannerItem?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-cyan-400 text-black border-cyan-400 py-2 px-5'>Play</button>
                    <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {bannerItem?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{bannerItem?.overview.substring(0, 200)} {bannerItem?.overview.length >= 200 && '...'}</p>
            </div>
        </div>
    </div>
    </>
      )
    }
    
  return (
    <>
    {
    isMoviesSuccess &&
    renderBanner()
    }
    </>
    
  )
}

export default Main