import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentId: String,
  userId: String,
  text: String,
  timestamp: String
});

const commentModel = mongoose.model("comment_samples", commentSchema);
export default commentModel;
