import Link from 'next/link'
import React from 'react'
import userContext from '@/app/context/userContext'
import { useContext } from 'react'
import { LogOutApi } from '@/app/services/logOutServices'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

const CustomHeader = () => {
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
    <nav className='flex justify-between px-10 py-5 bg-cyan-500 text-white'>
      <h1 className='text-2xl font-semibold'><Link href='/'>Work Manager</Link></h1>
      <ul className='flex justify-center  items-center gap-5 text-xl'>
       {context?.isUser && (
        <>
         <li><Link href='/'>Home</Link></li>
        <li><Link href='/addTask'>Add Task</Link></li>
        <li><Link href='/showTask'>Show tasks</Link></li>
        </>
       )}
      </ul> 

      <ul className='flex justify-center items-center gap-5 text-xl'>
       {context.isUser && context?.isUser?.name  ? (
         <>
         <li className='flex items-center gap-3 font-bold'>
          <img src="/user/prologo.jpg" alt="user-profile" className='w-10 h-10 rounded-full' />
          <Link href='/profile/users'>{context?.isUser?.name}</Link></li>
         <li><button onClick={handleLogOut}>Logout</button></li>
        </>
       
       ) :  (
        <>
         <li><Link href='/auth/login'>Login</Link></li>
         <li><Link href='/auth/signUp'>Sign Up</Link></li>
        </>
       )}
      </ul>

    </nav>
      <ToastContainer/>
   </>
  )
}

export default CustomHeader