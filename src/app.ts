import express from "express";
import { router } from "./routes/index.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/error-handler.js";

export const app = express();
app.use(express.json());

app.use("/api", router);

app.use(notFound);
app.use(errorHandler);
