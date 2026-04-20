import { Router } from "express";
import { fetchAllBodies } from "./solar-system.controller.js";

export const solarSystemRouter = Router();

solarSystemRouter.get("/", fetchAllBodies);
