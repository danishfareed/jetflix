import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const Row = ({title, fetchURL}) => {

//     const [moviesList, setMoviesList] = useState([]);

//     useEffect(() => {
//       axios.get(fetchURL).then((response)=>{
//         setMoviesList(response.data.results);
//       })
//     }, [fetchURL])
    
//   console.log(moviesList)
    
  const {data: getMoviesList, isLoading: isMoviesListLoading, isSuccess: isMoviesListSuccess } = useQuery(
    ['getMoviesList', fetchURL], 
    async () => {
      try{
          const { data } = await axios.get(fetchURL);
          return data?.results;
      }
      catch (error) { 
          console.log("Movies List Fetch error",error);
      }
    });

   
   
  return (
    <>
    <h2 className='text-white font-bold md:text-2xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
        <div id={'slider'}>
            {isMoviesListSuccess && getMoviesList?.map((item, index) => 
                <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}/>
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-70 hover:transition-all text-white'>
                        <p className='text-white white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
    </>
  )
}

export default Row