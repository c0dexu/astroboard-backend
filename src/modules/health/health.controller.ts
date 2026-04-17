import type { Request, Response } from "express";

export function getHealth(req: Request, res: Response) {
  res.status(200).json({
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
}
