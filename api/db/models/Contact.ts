import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: "new" },
  createdAt: { type: Date, default: Date.now },
});

export const ContactModel: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
