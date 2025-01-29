import { NextResponse } from "next/server";

export function GET(request, {params}) {
  return NextResponse.json({
    message: `Deleted user with ID: ${params.userId} and post: ${params.postId}`
  })
}