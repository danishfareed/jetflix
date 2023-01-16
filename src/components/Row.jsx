import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({rowID, title, fetchURL}) => {
  const ref = React.useRef(null);

    
  const {data: getMoviesList, isSuccess: isMoviesListSuccess } = useQuery(
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

   const slideLeft = ()=>{
    ref.current.scrollLeft -= 500;
   }

   const slideRight = ()=>{
    ref.current.scrollLeft += 500;

   }

  return (
    <>
    <h2 className='text-white font-bold md:text-2xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        <div ref={ref} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' id={'slider' +rowID}>
            {isMoviesListSuccess && getMoviesList?.map((item, id) => 
                <Movie key={id} item={item} />
            )}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block' size={40} />
    </div>
    </>
  )
}

export default Row