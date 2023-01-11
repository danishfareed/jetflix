import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const logout = async()=>{
    await logOut();
    navigate('/');
  }

  return (
    <>
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-cyan-600 text-4xl font-bold cursor-pointer'>JETFLIX</h1>
      </Link>
      {user?.email ? <div>
          <Link to='/account'><button className='text-cyan-50 px-6 py-2'>Account</button></Link>
          <button onClick={logout} className='bg-cyan-300 px-6 py-2'>Logout</button>
        </div> : <div>
          <Link to='/login'><button className='text-cyan-50 px-6 py-2'>Signin</button></Link>
          <Link to='/signup'><button className='bg-cyan-300 px-6 py-2'>Signup</button></Link>
        </div>}
        
    </div>
    </>
  )
}

export default Navbar