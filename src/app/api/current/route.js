import { User } from '@/app/model/user';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import {connectDB} from "@/app/helper/db";

export async function GET(request) {
  await connectDB();
  const authToken = request.cookies.get('authToken')?.value;
  if (!authToken) {
    return NextResponse.json({
      message: 'No token Found',
      success: false,
    }, {
      status: 401,
    });
  }
   try {
    await connectDB();
    // verify token and get user data  using jsonwebtoken
    const data = jwt.verify(authToken, process.env.JWT_SECRET);
  const user = await User.findById(data._id).select("-password");

  if (!user) {
    return NextResponse.json({
      message: 'User not found',
      success: false,
    }, {
      status: 401,
    });
  }

  return NextResponse.json(user);
   } catch (error) {
    return NextResponse.json({
      message: 'Server error',
      success: false,
    }, {
      status: 500,
    });
   }
}