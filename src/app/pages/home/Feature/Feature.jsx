import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import Image from 'next/image';

const featurelist = [
  {
    title: 'Add Task',
    icon: <IoMdCheckmarkCircleOutline className='text-white'/>,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    title: 'Show Tasks',
    icon: <FaListCheck className='text-white'/>,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    title: 'Show Tasks',
    icon: <MdOutlineDateRange className='text-white'/>,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
  {
    title: 'Show Tasks',
    icon: <MdOutlineDateRange className='text-white'/>,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!'
  },
]


const Feature = () => {
  return (
    <div className='p-10 flex justify-center w-screen'>
        <div  className='grid grid-cols-4 gap-5 p-10'>
      {featurelist.map((items, index)=>(
          <div key={index} className='bg-cyan-500 rounded-lg p-5 place-items-center'>
            <span className='text-3xl'>{items.icon}</span>
          <h1 className='text-2xl font-semibold text-white mt-5 mb-3'>{items.title}</h1>
          <p className='text-lg text-white'>{items.description}</p>
          </div>
        ))}
        </div>
      
    </div>
  )
}

export default Feature