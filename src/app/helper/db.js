import  mongoose from "mongoose";


// export const connectDb = async (request)=>{
//   // Connect to MongoDB
//   try {
//   const {connection} = await mongoose.connect(process.env.MONGO_DB_URL ,{dbName: "work-manager"})
//     console.log("Db connection established .............,");
    
//   } catch (error) {
//   console.log(error , "Error connecting to MongoDB");
//   }

// }


 export const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log(mongoose.connections[0].readyState)
      console.log('Already connected to MongoDB');
      return;
    }
    await mongoose.connect(process.env.MONGO_DB_URL ,{dbName: "work-manager"} ,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Database connection failed');
  }
};

connectDB();  
