"use client"

import { contactServiceApi } from '@/app/services/contactService';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const[loading , setLoading] = useState(false)
  
    // form hook for validation 
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
    
    const onSubmit = async  (data) => { 
      setLoading(true)
     try {
      const response = await contactServiceApi(data)
      console.log(response.data.message, 'api register succesfuly')
      toast.success( response.data.message)
      reset();
     } catch (error) {
      const errorMessage = error.response?.data?.message || error.message; 
      toast.error(errorMessage);
     } finally{
      setLoading(false)
    }
    }
  
  return (
    <div className='bg-gray-100 px-10'>
      <form action=""  onSubmit={handleSubmit(onSubmit)}
      className='gid-col-span-6 col-start-4 rounded-lg p-5 place-items-center'>
        <h1 className='text-3xl font-semibold text-gray-800 my-5'>Contact Us</h1>

        {/* name */}
      <label htmlFor="name" className='text-xl font-semibold text-gray-800 mt-5'>Name</label>
        <input type='text' {...register('name', { required:"Name is required",})}
        name="name" id="name" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter Name'></input>
        {errors.name && <p className='text-red-500 '>{errors.name.message}</p>}

        {/* email */}
        <label htmlFor="email" className='text-xl font-semibold text-gray-800 mt-5'>Email</label>
        <input type='email' {...register('email', { required:"Email is required",})}
        name="email" id="email" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter Email'></input>
        {errors.email && <p className='text-red-500 '>{errors.email.message}</p>}

      
        {/* about */}
        <label htmlFor="about" className='text-xl font-semibold text-gray-800 mt-5'>About</label>
        <textarea rows={5}
         {...register('about', { required:"About is required",})}
        name="about" id="about" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter Bio'></textarea>
        {errors.about && <p className='text-red-500 '>{errors.about.message}</p>}

        {/* to to button */}
        <button type="submit" className= {`bg-cyan-400 disabled:bg-gray-400 text-white rounded-lg p-2 w-full my-5 ${loading ? 'cursor-not-allowed' : ''}`}
        disabled={loading}
        >Contact Us</button>

      </form>
      <ToastContainer />
    </div>
  )
}

export default Contact