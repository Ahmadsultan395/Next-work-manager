"use client"
import userContext from '@/app/context/userContext'
import { DeleteTaskApi, ShowUserTasksApi } from '@/app/services/taskService'
import { FaSkullCrossbones } from "react-icons/fa";
import React, { useContext,  useEffect,  useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'

const ShowTask = () => {
  const [loading , setLoading] = useState(false)
  const context = useContext(userContext)
  const [userTasks , setUserTasks] = useState([])  


  const fetchUserTasks = async (userId) => {
    setLoading(true)
    try {
    if (!userId) return;
    const response = await ShowUserTasksApi(userId)
    setUserTasks(response.data)
    }
    catch (error) {
      console.log(error)
    }finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchUserTasks(context?.isUser?._id)
  } ,[context.isUser ])

  const deleteTask = async (taskId) => {
  try {
    const response = await DeleteTaskApi(taskId)
  toast.success(response?.data?.message)

  // remove the deleted task from the userTasks array
  setUserTasks(prev => prev.filter(task => task._id !== taskId))
  console.log(response, 'response in delete task')
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
  }

  const handleSweet = (taskId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(taskId)
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if (result.isDenied) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    })
  }

  return (
    <div className='w-full'>
      <h1 className='text-4xl font-semibold text-gray-800 mt-10 mb-3 text-center'>Show Task</h1>
      {loading && <p className='text-center text-gray-800 text-3xl my-5'>Loading...</p>}
      <div className='grid col-12 w-full p-10' >
        {userTasks.map((task) => (
          <div key={task._id}
           className={ `relative p-7  my-2 rounded-lg w-full 
            ${task.status === 'pending' ? 'bg-orange-100 ' :
       task.status === 'cancelled' ? 'bg-red-200 ' :
       task.status === 'completed' ? 'bg-green-200 ' :
       task.status === 'in progress' ? 'bg-blue-200' :
       'bg-gray-400 border-4 border-gray-400'}`}>
        <FaSkullCrossbones className=' bg-slate-500 rounded-full text-white text-2xl p-1 cursor-pointer absolute top-3 right-3' onClick={()=> handleSweet(task._id)} />
            <h2 className='text-xl font-semibold text-gray-800 mb-1'>{task.title}</h2>
            <p className='text-gray-800 mb-1'>{task.content}</p>
            <div className='flex justify-between'>
            <p className='text-gray-800 mb-1'>Status: {task.status}</p>
            <p className='text-gray-800 text-[1.1rem] font-bold'>Author:
               <span className='text-cyan-500 text-xl ml-2 font-semibold '>{context?.isUser?.name}</span>
            </p>  
            </div>
          </div>
        ))}
      </div>
     
      <ToastContainer />
    </div>
  )
}

export default ShowTask