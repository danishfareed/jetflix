import React, { useState } from 'react';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

const Movie = ({item, index, urlType}) => {
    const [like, setlike] = useState(false);
    const [saved, setSaved] = useState(false)
    const {user}= UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async ()=>{
      if(user?.email){
        setlike(!like);
        setSaved(true);
        await updateDoc(movieID,{
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
      }else{
        alert('Please login to save a movie');
      }
    }

    const cardTitle = (item?.title) ? item?.title : item?.name;
  return (
    <>
    
    <div key={index} className='w-[160px] sm:w-[120px] md:w-[150px] lg:w-[200px] inline-block cursor-pointer relative p-2'>
    <p onClick={saveShow} 
            className='absolute top-4 left-4 text-gray-300'>
              {like? <FaHeart />: <FaRegHeart/>}
              </p>
    
        <img className='w-full h-[260px] block object-cover' src={`https://image.tmdb.org/t/p/w400/${item?.poster_path}`} alt={cardTitle}/>
        
        <Link to={`/${urlType}/${slugify(cardTitle)}/${item?.id}`}><div className='p-4 	absolute top-0 left-0 w-[100%] h-full hover:bg-black/40 opacity-0 hover:opacity-70 hover:transition-all text-white'>
            {/* <p className='mx-4 break-all text-white white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{cardTitle}</p> */}
            
        </div></Link>
    </div>
    
    </>
  )
}

export default Movie