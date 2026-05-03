import express from "express";
import { router } from "./routes/index.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/error-handler.js";
import { rateLimit } from "./middleware/rate-limiter.js";

export const app = express();
app.disable("etag");

app.use(express.json());
app.use(rateLimit);

app.use("/api", router);

app.use(notFound);
app.use(errorHandler);
