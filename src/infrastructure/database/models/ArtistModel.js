import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  nickname: { type: String, required: true },
  age:  { type: Number, required: true },
});

export default model("Artist", artistSchema);
