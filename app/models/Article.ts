import mongoose, { Schema, Document, Model } from "mongoose";

export interface IArticle extends Document {
  id: string;
  slug: string;
  destinationId: string;
  destinationName: string;
  title: string;
  category: string;
  excerpt: string;
  fullContent: string;
  heroImage: string;
  location: string;
  rating: number;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

const ArticleSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  destinationId: { type: String, required: true },
  destinationName: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  excerpt: { type: String, required: true },
  fullContent: { type: String, required: true },
  heroImage: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, default: 5.0 },
  publishedAt: { type: String, required: true },
  readTime: { type: String, required: true },
  author: {
    name: String,
    role: String,
    avatar: String,
  },
  tags: [{ type: String }],
});

export const ArticleModel: Model<IArticle> =
  mongoose.models.Article || mongoose.model<IArticle>("Article", ArticleSchema);
