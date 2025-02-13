import { User } from "@/app/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectDB } from "@/app/helper/db";

export async function POST(request) {
  await connectDB();
  try {
  const {email, password } = await request.json();
  console.log(email, password)
  const user = await User.findOne({email : email});
  console.log(user)

  //if user not found
  if(user === null) {
   return NextResponse.json({
    message:'User not found',
    success:false,
  } , {status:404});
  }
  
  //compare password
  const isPasswordMatch = bcrypt.compareSync(password , user.password)

  if(!isPasswordMatch) {
    return NextResponse.json({
      message:'Invalid password',
      success:false,
    } , {
      status:401
    });
  }

  // generate token
  const token = jwt.sign({
    _id : user.id, 
    name : user.name
  } , process.env.JWT_SECRET);

  const response = NextResponse.json({
  message:'User Login succesfuly',
  status:200,
  user:user,
});


//send cookie
response.cookies.set("authToken" , token, {
  httpOnly: true,
 expiresIn: "1d"
})

return response;

} catch (error) {
  console.error("Error during login:", error);
  return NextResponse.json({
    message:'server error',
    success:false,
    error: error.message || error,
},{
  status:500
})
}

}
