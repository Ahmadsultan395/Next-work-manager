"use client"

import { AddTaskApi } from '@/app/services/taskService';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
  const[loading , setLoading] = useState(false)

  // form hook for validation 
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
    reset
  } = useForm();

  // useEffect(() => {
  //   setValue('userId', '67a5decadf5ea3faefcd6115')
  // }, [])
  
  const onSubmit = async  (data) => {
    setLoading(true)
   try {
    const response = await AddTaskApi(data)
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
    <div className='my-5 grid grid-cols-12 px-10'>

      <div className='bg-[url("/login/formBg2.jpg")] col-span-12  col-start-1 md:col-span-6 md:col-start-4 rounded-lg p-5 place-items-center border-2 border-gray-200 shadow-lg shadow-gray-300'> 
        <Image src={'/login/login.svg'} alt='add task' width={300} height={300}/>
        <h1 className='text-3xl font-semibold text-violet-800 my-5'>Lets Start Add Task</h1>

        <form action="" onSubmit={handleSubmit(onSubmit)}
         className='flex flex-col w-full'>

          {/* title */}
        <label htmlFor="title" className='text-xl font-semibold text-gray-800'>Title</label>
        <input {...register('title', { required:"Title is required",
          minLength:{value:3 , message:'Title must be at least 3 characters'}
         })}
        type="text" name="title" id="title" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter title'/>
        {errors.title && <p className='text-red-500 mb-5'>{errors.title.message}</p>}

        {/* content */}
        <label htmlFor="content" className='text-xl font-semibold text-gray-800'>Content</label>
        <textarea {...register('content', { required:"Content is required",
          minLength:{value:10 , message:'Content must be at least 10 characters'}
         })}
        name="content" id="content" className='border-none bg-gray-200 rounded-lg p-2 w-full  outline-none' placeholder='Enter content'></textarea>
        {errors.content && <p className='text-red-500 mb-5'>{errors.content.message}</p>}

        {/* status */}
        <label htmlFor="status" className='text-xl font-semibold text-gray-800'>Status</label>
        <select {...register('status', { required:"Status is required" })}
        defaultValue=""
         name="status" id="status" className='border-none bg-gray-200 rounded-lg p-2 w-full mb-5'>
          <option value="" disabled>--select option--</option>
          <option value="pending">Pending</option>
          <option value="in progress">In progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        {errors.status && <p className='text-red-500 mb-5'>{errors.status.message}</p>}

        {/* to to button */}
        <button type="submit" className= {`bg-cyan-400 disabled:bg-gray-400 text-white rounded-lg p-2 w-full mb-5 ${loading ? 'cursor-not-allowed' : ''}`}
        disabled={loading}
        >Add Task</button>


        {/* reset button / */}
        <button type="reset" className='bg-red-600 text-white rounded-lg p-2 w-full'
        onClick={()=> reset()}
        >Clear</button> 
      </form>

      </div>
      <ToastContainer />
    </div>
  )
}

export default AddTask