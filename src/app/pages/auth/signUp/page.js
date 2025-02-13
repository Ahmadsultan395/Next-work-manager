"use client"

import { SignUpUserApi } from '@/app/services/userService';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const profileUrl = 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg';

  const[loading , setLoading] = useState(false)

  // form hook for validation 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
    setValue
  } = useForm();
  
  //setting profile url to form
  useEffect(() => {
    setValue('profileUrl', profileUrl);
  }, [])

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await SignUpUserApi(data);
      console.log(response.message, 'user registered successfully');
      toast.success(response.message); // Show success toast
      reset();
    } catch (error) {
      console.error("Error in sign-up:", error);
  
      let errorMessage = 'An error occurred, please try again later.';

      if (error.response) {
        errorMessage = error.response.data?.message || 'Unknown error from server';
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className='my-5 grid grid-cols-12'>

      <div className='bg-[url("/login/formBg2.jpg")] col-span-6 col-start-4 rounded-lg p-5 place-items-center border-2 border-gray-200 shadow-lg shadow-gray-300'> 
        <Image src={'/login/signUp.svg'} alt='add task' width={300} height={100} />
        <h1 className='text-3xl font-semibold text-violet-800 my-5'>Lets Here Sign Up</h1>

        <form action="" onSubmit={handleSubmit(onSubmit)}
         className='flex flex-col w-full'>

          {/* title */}
        <label htmlFor="name" className='text-xl font-semibold text-gray-800 mt-5'>Name</label>
        <input {...register('name', { required:"Name is required",
          minLength:{value:3 , message:'Name must be at least 3 characters'}
         })}
        type="text" name="name" id="name" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter Name'/>
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        {/* email */}
        <label htmlFor="email" className='text-xl font-semibold text-gray-800 mt-5'>Email</label>
        <input type='email' {...register('email', { required:"Email is required",})}
        name="email" id="email" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter Email'></input>
        {errors.email && <p className='text-red-500 '>{errors.email.message}</p>}

      {/* password */}
      <label htmlFor="password" className='text-xl font-semibold text-gray-800 mt-5'>Password</label>
        <input type='password' {...register('password', { required:"Password is required",})}
        name="password" id="password" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter Password'></input>
        {errors.password && <p className='text-red-500 '>{errors.password.message}</p>}

        {/* about */}
        <label htmlFor="about" className='text-xl font-semibold text-gray-800 mt-5'>About</label>
        <textarea rows={5}
         {...register('about', { required:"About is required",})}
        name="about" id="about" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter Bio'></textarea>
        {errors.about && <p className='text-red-500 '>{errors.about.message}</p>}

        {/* to to button */}
        <button type="submit" className= {`bg-cyan-400 disabled:bg-gray-400 text-white rounded-lg p-2 w-full my-5 ${loading ? 'cursor-not-allowed' : ''}`}
        disabled={loading}
        >Sign Up</button>


        {/* reset button / */}
        <button type="reset" className='bg-red-600 text-white rounded-lg p-2 w-full'
        onClick={()=> reset()}
        >Clear</button> 

        
        <div>
          <p className='text-center text-gray-800 text-xl my-5 font-bold'>OR</p>
          <p className='text-center text-gray-800 text-xl -mt-2'>
            Already have an account? <a href='/auth/login' className='text-blue-600'>Login</a></p>
        </div>
      </form>

      </div>
      <ToastContainer />
    </div>
  )

}

export default SignUp