import { Schema, model } from "mongoose";

const songSchema = new Schema({
  sku:   { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

export default model("Song", songSchema);