import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  id: string;
  destination: string;
  travelDate: string;
  guests: string;
  guestName: string;
  guestEmail?: string;
  status: string;
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  destination: { type: String, required: true },
  travelDate: { type: String, required: true },
  guests: { type: String, required: true },
  guestName: { type: String, required: true },
  guestEmail: { type: String, default: "" },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export const BookingModel: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
