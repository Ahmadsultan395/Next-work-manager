import { Tasks } from "@/app/model/task";
import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/db";

export async function GET(request , {params}){
  await connectDB();
  const {userId} = params;
   
  try {
    const tasks = await Tasks.find({
      userId: userId
    }); 
    return NextResponse.json(tasks , {
      message: 'Task found successfully',
      status: 200,
    }); 
  } catch (error) {
    return NextResponse.json({ message: 'Task not found', error: error.message }, { status: 500 });
  }

}