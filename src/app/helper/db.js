import  mongoose from "mongoose";

export const connectDb = async (request)=>{
  // Connect to MongoDB
  try {
  const {connection} = await mongoose.connect(process.env.MONGO_DB_URL ,{dbName: "work-manager"})
    console.log("Db connection established .............," , connection.host);
    console.log(connection)
  } catch (error) {
  console.log(error , "Error connecting to MongoDB");
  }

}