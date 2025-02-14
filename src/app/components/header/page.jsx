"use client"
import Link from 'next/link'
import React from 'react'
import userContext from '@/app/context/userContext'
import { useContext } from 'react'
import { LogOutApi } from '@/app/services/logOutServices'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { IoCloseOutline } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";


const CustomHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter()
  const context = useContext(userContext)

    const handleLogOut = async () => {
     try {
      const response = await LogOutApi();
      toast.success(response?.data?.message);
      router.push('/auth/login'); 
      context.setIsUser(null);
     } catch (error) {
       toast.error(error?.response?.data?.message);
     }
    }
  return (
   <>
    <nav className='relative flex items-center justify-between px-10 py-5 bg-cyan-500 text-white box-border w-full'>
      <h1 className='text-xl sm:text-2xl font-semibold'><Link href='/'>Work Manager</Link></h1>
      <ul className={`flex flex-col lg:flex-row justify-center items-center 
        gap-5 text-xl bg-cyan-500  absolute lg:static w-full lg:w-auto left-0
         top-16 py-10 lg:py-0 ${isOpen ? 'max-h-screen opacity-100' : ' max-h-0 opacity-0 lg:opacity-100'}
         transition-all duration-500 ease-in-out`}>
       {context?.isUser && (
        <>
         <li><Link href='/'>Home</Link></li>
        <li><Link href='/addTask'>Add Task</Link></li>
        <li><Link href='/showTask'>Show tasks</Link></li>
        <li className='flex lg:hidden'><button onClick={handleLogOut}>Logout</button></li>
        </>
       )}
      </ul> 

      <ul className='flex justify-center items-center gap-2 lg:gap-5 text-xl'>
       {context.isUser && context?.isUser?.name  ? (
         <>
         <li className='flex items-center gap-3 font-bold text-lg sm:text-xl'>
          <img src="/user/prologo.jpg" alt="user-profile" className='w-7 h-7 sm:w-10 sm:h-10 rounded-full' />
          <Link href='/profile/users' className=''>{context?.isUser?.name}</Link></li>
         <li className='hidden lg:flex'><button onClick={handleLogOut}>Logout</button></li>
        </>
       
       ) :  (
        <>
         <li><Link href='/auth/login'>Login</Link></li>
         <li><Link href='/auth/signUp'>Sign Up</Link></li>
        </>
       )}

{context.isUser && context?.isUser?.name  ? (
       <li className='flex lg:hidden text-3xl' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseOutline /> : <RiMenuFoldFill />}
          </li> ) : null}
      </ul>

    </nav>
      <ToastContainer/>
   </>
  )
}

export default CustomHeader