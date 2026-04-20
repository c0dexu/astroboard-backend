import type { SolarSystemBodyDimension } from "../models/physical-data.model.js";
import type { SolarSystemBodyRaw } from "../models/solar-system-raw.model.js";
import type { SolarSystemBody } from "../models/solar-system.model.js";
import { parseDiscoveryDate } from "../utils/utils.js";

export function mapSolarSystemBodyRawToPlanet(
  raw: SolarSystemBodyRaw,
): SolarSystemBody {
  const dimensionsRawArray = raw.dimension.split("×").map((x) => x.trim());
  let dimension: SolarSystemBodyDimension | undefined = undefined;
  if (dimensionsRawArray.length > 0) {
    const sizes = dimensionsRawArray.map(Number);
    dimension = {
      width: sizes[0],
      height: sizes[1],
      breadth: sizes[2],
    };
  }
  return {
    sourceId: raw.id,
    isPlanet: raw.isPlanet,
    discoveredBy: raw.discoveredBy,
    discoveryDate: parseDiscoveryDate(raw.discoveryDate),
    physicalData: {
      mass: raw.mass
        ? {
            value: raw.mass.massValue,
            exponent: raw.mass.massExponent,
          }
        : undefined,
      volume: raw.vol
        ? {
            value: raw.vol.volValue,
            exponent: raw.vol.volExponent,
          }
        : undefined,
      density: raw.density,
      gravity: parseFloat(raw.gravity.toString()),
      flattening: parseFloat(raw.flattening.toString()),
      avgTemp: parseFloat(raw.avgTemp.toString()),
      axialTilt: parseFloat(raw.axialTilt.toString()),
      meanRadius: raw.meanRadius,
      equaRadius: raw.equaRadius,
      dimension: dimension,
    },
    orbitalData: {
      orbitalPeriod: raw.sideralOrbit,
      eccentricity: raw.eccentricity,
      semimajorAxis: raw.semimajorAxis,
      inclination: raw.inclination,
      perihelion: raw.perihelion,
      aphelion: raw.aphelion,
      argPeriapsis: parseFloat(raw.argPeriapsis.toString()),
      longAscNode: parseFloat(raw.longAscNode.toString()),
    },
  };
}
