import React from 'react'
import { UserAuth } from '../context/AuthContext';


const Account = () => {
    const {user} = UserAuth();

  return (
    <>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>welcome {user?.email}</h1>
              </div>
              </div>
    </>
  )
}

export default Account;