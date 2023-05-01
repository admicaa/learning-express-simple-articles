import mongoose from "mongoose";

const ArticlesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    category: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Articles", ArticlesSchema);
