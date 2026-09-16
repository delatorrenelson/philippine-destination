import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDestination extends Document {
  id: string;
  name: string;
  region: string;
  islandGroup: string;
  description: string;
  heroImage: string;
  bestTimeToVisit: string;
  highlights: string[];
  topAttractions: Array<{
    name: string;
    type: string;
    description: string;
  }>;
}

const DestinationSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  region: { type: String, required: true },
  islandGroup: { type: String, required: true },
  description: { type: String, required: true },
  heroImage: { type: String, required: true },
  bestTimeToVisit: { type: String },
  highlights: [{ type: String }],
  topAttractions: [
    {
      name: String,
      type: String,
      description: String,
    },
  ],
});

export const DestinationModel: Model<IDestination> =
  mongoose.models.Destination ||
  mongoose.model<IDestination>("Destination", DestinationSchema);
