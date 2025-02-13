import { Tasks } from "@/app/model/task";
import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/db";
import jwt from 'jsonwebtoken';

// Get all tasks
export async function GET(request) {
  try {
    await connectDB();  
    const tasks = await Tasks.find({}).select("-password");
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error('Error during GET request:', error);  // Log the full error
    return NextResponse.json({ message: "Failed to fetch tasks", error: error.message }, { status: 500 });
  }
}

// Create a new task
export async function POST(request) {
  await connectDB();  

  const { title, content,  status } = await request.json();

  //fetch current user id 
  const authToken = request.cookies.get('authToken')?.value;
  const data = jwt.verify(authToken, process.env.JWT_SECRET);

  try {
    const task = new Tasks({ title, content, userId:data._id, status });
    await task.save();
    
    // Return success response using NextResponse
    return NextResponse.json({ message: 'Task created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error during POST request:', error);  // Log the full error
    return NextResponse.json({ message: 'Task creation failed', error: error.message }, { status: 500 });
  }
}
