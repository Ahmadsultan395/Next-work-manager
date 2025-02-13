import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    profileUrl: String,
    // address: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

// Prevent overwriting the model if it already exists in mongoose.models
const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export { User };
