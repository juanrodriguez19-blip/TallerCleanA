import express                          from "express";
import songRoutes                      from "./infrastructure/routes/songRoutes.js";
import artistRoutes                    from "./infrastructure/routes/artistRoutes.js";
import { songController,artistController }            from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use("/api", songRoutes(songController));
app.use("/api", artistRoutes(artistController));

export default app;
