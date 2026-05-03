import axios from "axios";
import type { SolarSystemBodyRaw } from "../models/solar-system-raw.model.js";
import { env } from "../config/env.js";
import { mapSolarSystemBodyRawToPlanet } from "../mappers/solar-system.mapper.js";
import type { SolarSystemBody } from "../models/solar-system.model.js";

export class SolarSystemService {
  constructor() {}

  async fetchAllBodies(): Promise<SolarSystemBody[]> {
    const externalApi = `${env.SOLAR_SYSTEM_API}/rest/bodies`;
    const response = await axios.get(externalApi, {
      headers: {
        Authorization: `Bearer ${env.SOLAR_SYSTEM_API_KEY}`,
      },
    });
    const raw: SolarSystemBodyRaw[] = response.data.bodies;
    const result = raw.map((x) => mapSolarSystemBodyRawToPlanet(x));
    return result;
  }
}
