import type { OrbitalData } from "./orbital-data.model.js";
import type { PhysicalData } from "./physical-data.model.js";

export class SolarSystemBody {
  sourceId!: string;
  isPlanet!: boolean;
  discoveredBy!: string;
  discoveryDate!: Date | null;
  physicalData!: PhysicalData;
  orbitalData!: OrbitalData;
}
