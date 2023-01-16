import React from 'react'
import SavedShows from '../components/SavedShows';
import { UserAuth } from '../context/AuthContext';


const Account = () => {
    const {user} = UserAuth();

  return (
    <>
        <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://i.ibb.co/hHzC5bC/Netflix-background-860c8ece6b34fb4f43af02255ca8f225-xl.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='font-poppins text-2xl font-bold md:text-5xl text-white'>Saved Shows</h1>
        </div>
            {/* <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>welcome {user?.email}</h1>
              </div> */}
        </div>
        <SavedShows/>
    </>
  )
}

export default Account;