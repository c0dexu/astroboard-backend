import type { SolarSystemBodyRaw } from "../models/solar-system-raw.model.js";
import type { SolarSystemBody } from "../models/solar-system.model.js";
import { parseDiscoveryDate } from "../utils/utils.js";

export function mapSolarSystemBodyRawToPlanet(
  raw: SolarSystemBodyRaw,
): SolarSystemBody {
  return {
    sourceId: raw.id,
    isPlanet: raw.isPlanet,
    discoveredBy: raw.discoveredBy,
    discoveryDate: parseDiscoveryDate(raw.discoveryDate),
    physicalData: {
      mass: {
        value: raw.mass.massValue,
        exponent: raw.mass.massExponent,
      },
      volume: {
        value: raw.mass.massValue,
        exponent: raw.mass.massExponent,
      },
      density: raw.density,
      gravity: raw.gravity,
      flattening: raw.flattening,
      avgTemp: raw.avgTemp,
      axialTilt: raw.axialTilt,
      meanRadius: raw.meanRadius,
      equaRadius: raw.equaRadius,
    },
    orbitalData: {
      orbitalPeriod: raw.sideralOrbit,
      eccentricity: raw.eccentricity,
      semimajorAxis: raw.semimajorAxis,
      inclination: raw.inclination,
      perihelion: raw.perihelion,
      aphelion: raw.aphelion,
      argPeriapsis: raw.argPeriapsis,
      longAscNode: raw.longAscNode,
    },
  };
}
