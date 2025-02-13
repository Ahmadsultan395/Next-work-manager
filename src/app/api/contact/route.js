import messageResponse from "@/app/helper/messageResponse";
import { ContactModel } from "@/app/model/contact";
import {connectDB} from "@/app/helper/db";


export async function POST(request){
  const {name , email , about} = await request.json();

  try {
    await connectDB();
    const contact = new ContactModel({name , email , about});
    await contact.save();
    return messageResponse( "submitted successfully" , 200 , true);
  } catch (error) {
    return messageResponse("something went wrong" , 500 , false);
  }
}