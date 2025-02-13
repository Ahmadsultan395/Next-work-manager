import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
      <div className='flex justify-between items-center w-full px-10 py-10'> 
      <div className='w-full md:w-1/2'>
        <Image src={'/hero/hero.svg'} alt='hero' width={500} height={300}/>
      </div>
      <div className='w-full md:w-1/2'>
        <h1 className='text-3xl font-semibold text-white '>Welcome to Work Manager</h1>
        <p className='text-lg text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quidem ducimus, aspernatur quam error illo ipsam, omnis laboriosam iure nisi dolor ullam eveniet voluptates repellendus accusamus consequuntur odit modi architecto.</p>
        <Link href='/addTask'>
        <button className='bg-white text-cyan-600 rounded-lg py-2 px-4 w-auto mt-2 font-bold'>Get Started</button>
        </Link>
      </div>
      </div>
  )
}

export default Hero