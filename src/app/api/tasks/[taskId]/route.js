import messageResponse from "@/app/helper/messageResponse";
import { Tasks } from "@/app/model/task";
import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/db";

// get single tasks
export async function  GET(request , {params}){
  await connectDB();
const {taskId} = params;

const task = await Tasks.findById(taskId);

return NextResponse.json(task);
}


//update task by id
export async function PUT(request ,{params}) {
  await connectDB();
  const {taskId} = await params;
console.log(taskId);
  const {title , content, status} = await request.json();

  try {
    const task = await Tasks.findById(taskId);
    console.log(task , 'task from db');
    if (!task) {
      return messageResponse('Task not found', 404, false);
    }

    task.title = title;
    task.content = content;
    task.status = status;

    const updateTask = await task.save();

    return messageResponse('Task updated successfully', 201, true);
  } catch (error) {
    console.log(error);
    console.log(error)
    return messageResponse('Task updated failed', 404, false);
  }
}

//delete task by id

export async function  DELETE(request , {params}){
  await connectDB();
  const {taskId} = params;
  
  try {
  await Tasks.findByIdAndDelete(taskId);
  return messageResponse('Task deleted successfully', 201, true);  
  } catch (error) {
    return messageResponse('Task deleted failed', 404, false);
  }
  }