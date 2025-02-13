"use client"

import { LoginApi } from '@/app/services/userService';
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userContext from '@/app/context/userContext';


const Login = () => {
  const context = useContext(userContext)
  const router = useRouter()
  const[loading , setLoading] = useState(false)
  

  // form hook for validation 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = async  (data) => {
    if(data.email.trim() === "" ||  data.password.trim() === ""){
      toast.info("Enter valid email and password");
    }
    
    setLoading(true)
   try {
    const response = await LoginApi(data)
    context.setIsUser(response.user);
    toast.success( response?.message)
    router.push("/profile/users")
    // window.location.href = "/profile";
    reset();
   } catch (error) {
    const errorMessage = error.response?.data?.message || error.message; 
    toast.error(errorMessage);
   } finally{
    setLoading(false)
  }
  }

  return (
    <div className='my-5 grid grid-cols-12'>

      <div className='bg-[url("/login/formBg2.jpg")] col-span-6 col-start-4 rounded-lg p-5 place-items-center border-2 border-gray-200 shadow-lg shadow-gray-300'> 
        <Image src={'/login/signIn.svg'} alt='add task' width={300} height={100}/>
        <h1 className='text-3xl font-semibold text-violet-800 my-5'>Lets Login Your Account</h1>

        <form action="" onSubmit={handleSubmit(onSubmit)}
         className='flex flex-col w-full'>

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


        {/* to to button */}
        <button type="submit" className= {`bg-cyan-400 disabled:bg-gray-400 text-white rounded-lg p-2 w-full my-5 ${loading ? 'cursor-not-allowed' : ''}`}
        disabled={loading}
        >Login</button>

        <div>
          <p className='text-center text-gray-800 text-xl my-5 font-bold'>OR</p>
          <p className='text-center text-gray-800 text-xl -mt-2'>
          I don't have an account? Register here to  <a href='/auth/signUp' className='text-blue-600'>Sign Up</a></p>
        </div>
      </form>

      </div>
      <ToastContainer />
    </div>
  )

}

export default Login