import mongoose, { Schema, Document, Model } from "mongoose";

export interface IComment extends Document {
  id: string;
  articleId: string;
  destinationId?: string;
  userId?: string;
  author: string;
  avatar?: string;
  date: string;
  text: string;
  likes: number;
  createdAt: Date;
}

const CommentSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  articleId: { type: String, required: true, index: true },
  destinationId: { type: String, default: "general" },
  userId: { type: String, default: "guest-user" },
  author: { type: String, required: true },
  avatar: { type: String },
  date: { type: String, required: true },
  text: { type: String, required: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const CommentModel: Model<IComment> =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);
