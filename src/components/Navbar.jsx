import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        <h1 className='text-cyan-600 text-4xl font-bold cursor-pointer'>JETFLIX</h1>
        <div><button className='text-cyan-50 px-6 py-2'>Signin</button>
        <button className='bg-cyan-200 px-6 py-2'>Signup</button></div>
    </div>
  )
}

export default Navbar