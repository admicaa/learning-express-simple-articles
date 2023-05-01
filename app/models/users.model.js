import mongoose from "mongoose";

const UsersSchema = mongoose.Schema(
  {
    username: {
      unique: true,
      type: String,
      required: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", UsersSchema);
