import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/db"
import { User } from "@/app/model/user";
import bcrypt from 'bcryptjs';


// Get all users from the database
export async function GET(request) {
  await connectDB();
  const user = await User.find({}).select("-password");
  return NextResponse.json(user);
}


// Create a new user in the database
export async function POST  (request) {
  await connectDB();
  const {name, email, password, about, profileUrl} = await request.json();
  const user = new User({name , email, password, about, profileUrl});
  
 try {
// hash password
user.password = bcrypt.hashSync(user.password , parseInt(process.env.BCRYPT_URL ));
  const createdUser = await user.save();
  return NextResponse.json({
    message: "user created successfully",
    user: createdUser,
  }, {
    status: 201,
  });
 } catch (error) {
  console.log(error);
  return NextResponse.json({
    message: "user creation failed",
    error: error.message,
  }, {
    status: 400,
  });
 }
}

