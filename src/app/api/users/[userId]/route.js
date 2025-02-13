import { NextResponse } from "next/server";
import { User } from "@/app/model/user";
import mongoose from "mongoose";
import { connectDB } from "@/app/helper/db";

// DELETE: Delete a user by ID
export async function DELETE(request, { params }) {
  await connectDB();
  const { userId } = params; 
  try {
    // Check if the user exists in the database
    const userExisted = await User.findById(userId);
    if (!userExisted) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Attempt to delete the user from the database
    const result = await User.deleteOne({
      _id: new mongoose.Types.ObjectId(userId),  // Ensure `ObjectId` is created properly
    });

    // Check if any documents were deleted
    if (result.deletedCount === 0) {
      console.log("No user was deleted.");
      return NextResponse.json({ message: "User not deleted or not found" }, { status: 404 });
    }

    console.log("User deleted successfully.");
    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });

  } catch (error) {
    console.log("Error deleting user:", error);
    return NextResponse.json({ message: "User deletion failed" }, { status: 500 });
  }
}


// get specific user by id
export async function GET(request,{params}){
  await connectDB();
  const {userId} = params;

  try {
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user, {success: true, message :'get single user'})
  } catch (error) {
    return NextResponse.json({success: false, message :'get single user failed'})
  }
}


//update user by id
export async function PUT(request,{params}){
  await connectDB();
  const {userId} = params;

   const {name , email, password, about, profileUrl, address} = await request.json();
 
   try {
    const user = await User.findById(userId);

    user.name = name;
    user.email = email;
    user.password = password;
    user.about = about;
    user.profileUrl = profileUrl;
    user.address = address;

    const updateUser = await user.save();
    return NextResponse.json(updateUser , {success: true , message:"user updated successfully"});
   } catch (error) {
    return NextResponse.json(error, {success:false , message :'user updated failed'})
   }
}