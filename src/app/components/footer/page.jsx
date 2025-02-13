import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center px-10 py-10 bg-cyan-500 w-full'>
      <div className='flex justify-between mb-5 text-white'>
      <div className='w-1/2'>
      <h1 className='text-2xl font-semibold'>Work Manager</h1>
      <p className='text-[1.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, officia deleniti ipsum doloribus in cum voluptates itaque sit, ad dolorem quasi hic error vitae dolorum, id dicta eius minus molestias.</p>
      </div>

      <div>
        <ul className='flex  flex-col justify-center items-center gap-3 text-xl'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/addTask'>Add Task</Link></li>
          <li><Link href='/showTask'>Show tasks</Link></li>
        </ul>
      </div>
      </div>

      <div className=' flex flex-col  justify-center items-center w-full text-white'>
        <div className='w-full mb-5 bg-gray-200 h-0.5 '/>
        <p>Copyright © 2023 Work Manager</p>
      </div>
    </footer>
  )
}

export default Footer