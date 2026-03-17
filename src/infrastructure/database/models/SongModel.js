import { Schema, model } from "mongoose";

const songSchema = new Schema({
  name:   { type: String, required: true, unique: true },
  second: { type: Number, required: true },
});

export default model("Song", songSchema);