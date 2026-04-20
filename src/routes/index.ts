import { Router } from "express";
import { healthRouter } from "../modules/health/health.routes.js";
import { solarSystemRouter } from "../modules/solar-system/solar-system.routes.js";

export const router = Router();

router.use("/health", healthRouter);
router.use("/bodies", solarSystemRouter);
