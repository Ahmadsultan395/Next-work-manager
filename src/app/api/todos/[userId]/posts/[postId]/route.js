import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/db";

export async function GET(request, {params}) {
  await connectDB();
  return NextResponse.json({
    message: `Deleted user with ID: ${params.userId} and post: ${params.postId}`
  })
}