import type { Request, Response } from "express";
import type { SolarSystemBody } from "../../models/solar-system.model.js";
import { env } from "../../config/env.js";
import type { SolarSystemBodyRaw } from "../../models/solar-system-raw.model.js";
import axios from "axios";
import { mapSolarSystemBodyRawToPlanet } from "../../mappers/solar-system.mapper.js";

export async function fetchAllBodies(
  req: Request,
  res: Response,
): Promise<void> {
  const externalApi = `${env.SOLAR_SYSTEM_API}/rest/bodies`;
  const response = await axios.get(externalApi, {
    headers: {
      Authorization: `Bearer ${env.SOLAR_SYSTEM_API_KEY}`,
    },
  });
  const raw: SolarSystemBodyRaw[] = response.data.bodies;
  const result = raw.map((x) => mapSolarSystemBodyRawToPlanet(x));
  res.status(200).json(result);
}
