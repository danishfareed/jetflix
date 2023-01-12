import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Signup = () => {
    const {user, signUp} = UserAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let emailError = '';
        let passwordError = '';
        if (!validateEmail(email)) {
            emailError = 'Invalid email address';
          }
          if (password.length < 8) {
            passwordError = 'Password must be at least 8 characters long';
          }
          if (emailError || passwordError) {
            setEmailError(emailError);
            setPasswordError(passwordError);
            return;
          }
        try{
            await signUp(email, password);
            navigate('/');
        } catch(error){
            setError(error.message);
            console.error(error);
        }
    }
    const bgImage = 'https://images.pexels.com/photos/6951509/pexels-photo-6951509.jpeg';
    const bgimage2 ='https://i.ibb.co/hHzC5bC/Netflix-background-860c8ece6b34fb4f43af02255ca8f225-xl.jpg'
    return (
        <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src={bgImage}
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Create an Account</h1>
              {error ? <p className='p-3 bg-cyan-400 my-2'>{error}</p> : null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                {emailError && <span className='p-3 bg-red-400 my-2'>{emailError}</span>}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                {passwordError && <span className='p-3 bg-red-400 my-2'>{passwordError}</span>}
                <button className='bg-cyan-600 py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>Already have an account?</span>{' '}
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      );
}

function validateEmail(email) {
    // Regular expression for email validation
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
export default Signup;