import type { Request, Response, NextFunction } from "express";
import { env } from "../config/env.js";

interface RateLimitInterface {
  remaining: number;
  ttl: number | null;
}

const rateLimitCache = new Map<string, RateLimitInterface>();

export function rateLimit(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip;
  console.log(`ip = ${ip}`);
  if (!ip) {
    return next();
  }

  if (ip) {
    const rateLimitPerIp = rateLimitCache.get(ip);
    console.log(rateLimitPerIp);
    if (!rateLimitPerIp) {
      rateLimitCache.set(ip, {
        remaining: Number(env.RATE_LIMIT_MAX),
        ttl: null,
      });
    }

    if (rateLimitPerIp && rateLimitPerIp.remaining > 0) {
      rateLimitPerIp.remaining--;
      return next();
    }

    if (
      rateLimitPerIp &&
      rateLimitPerIp.remaining <= 0 &&
      !rateLimitPerIp.ttl
    ) {
      rateLimitPerIp.ttl = new Date().getTime();
      return res.sendStatus(429);
    }

    if (rateLimitPerIp && rateLimitPerIp.remaining <= 0 && rateLimitPerIp.ttl) {
      const timeDiff = new Date().getTime() - rateLimitPerIp.ttl;
      console.log("DIFF", timeDiff);
      if (timeDiff > Number(env.RATE_LIMIT_TIME_WAIT_SEC) * 1000) {
        rateLimitCache.delete(ip);
      } else {
        return res.sendStatus(429);
      }
    }
    return next();
  }
}
