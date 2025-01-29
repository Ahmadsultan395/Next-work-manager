const { NextResponse } = require("next/server")

import { connectDb } from "@/app/helper/db"

connectDb();
export function GET(request) {
  const user = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      email: 'janesmith@example.com'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 35,
      email: 'alicejohnson@example.com'
    }
  ]

  return NextResponse.json(user)
}


export function POST(request) {}

export function PUT(request) {}

export function DELETE(request) {
  return NextResponse.json({ status: true, message:'delete api' } , { status: 201 , statusText: 'delete ok'})
}