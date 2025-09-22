import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  placeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place", // The name of the model I'm referencing
  },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
