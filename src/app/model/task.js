import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String, 
    required:true
  },
  status:{
    type:String,
    enum:['pending', 'in progress', 'completed', 'cancelled'],
    default:'pending'
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  addTime:{
    type:Date,
    default:Date.now
  }
})

 const Tasks = mongoose.models.Task || mongoose.model('Task', taskSchema);
 export {Tasks};