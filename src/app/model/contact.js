import mongoose from 'mongoose';


const contactSchema = new  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  }
})

const ContactModel = mongoose.models.contact || mongoose.model('contact', contactSchema);

export {ContactModel}