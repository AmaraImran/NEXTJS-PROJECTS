import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  vibe: String,
  image: String,
  bestSeason: String,
});

export default mongoose.models.Destination ||
  mongoose.model("Destination", DestinationSchema);