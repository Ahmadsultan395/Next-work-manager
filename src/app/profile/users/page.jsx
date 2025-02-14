"use client"
import userContext from '@/app/context/userContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";


const Users = () => {
  const context = useContext(userContext)
  return (
    <div className=' mt-28 py-10 px-10 rounded-lg w-full flex flex-col items-center '>
      <div className='max-w-4xl w-full bg-gray-100 flex flex-col items-center rounded-3xl px-10 pt-4 pb-8 shadow-xl shadow-cyan-500/30'>
      
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start w-full'>
      <div className='flex  items-center'>
            <FaUserFriends className='text-4xl text-cyan-500 text-center' /> <span className='pl-2 text-cyan-500'>Connent</span>
          </div>
        <div className='rounded-full overflow-hidden bg-white shadow-lg shadow-gray-300 w-40 h-40  sm:w-52 sm:h-52 text-center mt-0 sm:-mt-28 flex justify-center items-center'>
          <img src={'/user/profile3.png'} alt='add task' className='m-auto object-cover w-full h-full' />
        </div>
        <div className='flex items-center'>
            <BiSolidMessageRounded className='text-4xl text-cyan-500 text-center' /> <span className='pl-2 text-cyan-500'>Message</span>
          </div>
      </div>
        <div className='mt-5 text-center'>
          <h1 className='text-4xl font-semibold text-gray-600 mt-5 mb-1'>{context?.isUser?.name}</h1>
          <p className='text-gray-500 text-md mb-6'> Punjab, Pakistan</p>
          <p className='text-gray-600 text-lg '> {context?.isUser?.about}</p>
          <button className='bg-cyan-500 text-white rounded-lg px-8 py-3 mt-5 text-center'>Edit Profile</button>
            </div>
      </div>
    </div>
  )
}

export default Users