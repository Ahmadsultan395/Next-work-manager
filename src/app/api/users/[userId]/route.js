import { NextResponse } from "next/server";

export function DELETE(request , {params}) {
  const {userId} = params;
  console.log(userId);

  return NextResponse.json({
    status: 200,
    message: 'User deleted successfully!'
  })
}