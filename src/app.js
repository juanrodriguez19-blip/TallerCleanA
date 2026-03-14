import express        from "express";
import songRoutes  from "./infrastructure/routes/songRoutes.js";
import { songController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use("/api", songRoutes(songController));

export default app;
