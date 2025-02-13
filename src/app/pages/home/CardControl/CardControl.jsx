import Link from 'next/link'
import React from 'react'

const CardControl = () => {
  return (
    <div className='flex justify-center w-screen '>
      <div className='flex flex-col items-center justify-center w-full p-10  rounded-lg'>
      <h1 className='text-white text-2xl font-bold mb-2'>Take Control of Your Tasks</h1>
      <p className='text-white text-lg mb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!
      </p>
      <Link href='/addTask'>
      <button className='bg-white text-cyan-600 rounded-lg py-2 px-4 w-auto mt-2 font-bold'>Get Started</button>
      </Link>
      </div>
    </div>
  )
}

export default CardControl