import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/db";

export async function POST(request) {
  await connectDB();
 try { 
const  response = NextResponse.json({
  message: "You have been logged out successfully",
  status: 200,
})  
  response.cookies.set("authToken", "", {
   expiresIn: "0"
  });

   return response;

 } catch (error) {
  return NextResponse.json({
    message: "server error",
    success: false,
  });
 }
}