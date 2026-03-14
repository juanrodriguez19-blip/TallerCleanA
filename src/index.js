import app from "./app.js";
import dot from "dotenv";
import { connectMongo } from "./infrastructure/database/mongo.js"; 
dot.config()


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
await connectMongo();
